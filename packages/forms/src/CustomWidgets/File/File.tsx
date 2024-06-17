import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import { Button, Icon, TagFilter } from "@czi-sds/components";
import { Stack } from "@mui/material";
import { dataURItoBlob, WidgetProps } from "@rjsf/utils";

// Most of the code is from the default FileWidget widget
// https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/core/src/components/widgets/FileWidget.tsx
// TODO: Put these functions in another file

function addNameToDataURL(dataURL: string, name: string) {
  if (dataURL === null) {
    return null;
  }
  return dataURL.replace(";base64", `;name=${encodeURIComponent(name)};base64`);
}

type FileInfoType = {
  dataURL?: string | null;
  name: string;
  size: number;
  type: string;
};

function processFile(file: File): Promise<FileInfoType> {
  const { name, size, type } = file;
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.onerror = reject;
    // TODO: Find event type
    reader.onload = (event: any) => {
      if (typeof event.target?.result === "string") {
        resolve({
          dataURL: addNameToDataURL(event.target.result, name),
          name,
          size,
          type,
        });
      } else {
        resolve({
          dataURL: null,
          name,
          size,
          type,
        });
      }
    };
    reader.readAsDataURL(file);
  });
}

function processFiles(files: FileList) {
  return Promise.all(Array.from(files).map(processFile));
}

function extractFileInfo(dataURLs: string[]) {
  return dataURLs
    .filter((dataURL) => typeof dataURL !== "undefined")
    .map((dataURL) => {
      const { blob, name } = dataURItoBlob(dataURL);
      return {
        // Decode URI because the name is encoded when it is added to the data URL.
        // If the user comes back to the step afterwards, the form data state will
        // fill the form with an encoded URI
        name: decodeURI(name),
        size: blob.size,
        type: blob.type,
      };
    });
}

export const File = ({
  multiple,
  id,
  readonly,
  disabled,
  onChange,
  value,
  autofocus = false,
  options,
  title,
  label,
}: WidgetProps) => {
  const extractedFilesInfo = useMemo(
    () =>
      Array.isArray(value) ? extractFileInfo(value) : extractFileInfo([value]),
    [value]
  );
  const [filesInfo, setFilesInfo] =
    useState<FileInfoType[]>(extractedFilesInfo);

  // Create a ref to allow us to reset the file input.
  // Resetting is needed every time a file is uploaded
  // as we cannot manually change the value of the file input.
  // As we are tracking the actual file in a separate state,
  // the HTML file input will become de-synced.
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }
      processFiles(event.target.files).then((filesInfoEvent) => {
        setFilesInfo(filesInfoEvent);
        const newValue = filesInfoEvent.map((fileInfo) => fileInfo.dataURL);
        if (multiple) {
          onChange(newValue);
        } else {
          onChange(newValue[0]);
        }
      });
      if (inputRef.current) {
        inputRef.current.value = "";
      } else {
        throw "File input ref does not exist";
      }
    },
    [multiple, onChange]
  );

  const handleDelete = (index: number) => {
    // Initialize copiedValueState as undefined, so if the widget doesn't
    // allow multiple file uploads, deleting the only file will just make
    // it undefined (like how it was initially).
    let copiedValueState: Array<string> | undefined = undefined;

    // If multiple is set, delete the file corresponding
    // to the index of the <TagFilter />
    if (multiple) {
      copiedValueState = Array.from(value);
      copiedValueState.splice(index, 1);
    }

    // filesInfo will always be an array so no need for any
    // multiple files checks
    const copiedFilesInfoState = Array.from(filesInfo);
    copiedFilesInfoState.splice(index, 1);

    onChange(copiedValueState);
    setFilesInfo(copiedFilesInfoState);
  };

  return (
    <div>
      <Typography component="label" htmlFor={id}>
        {title ?? label}
      </Typography>
      {/* TODO: Is this accessible? */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box>
          <Button
            sdsType="secondary"
            sdsStyle="square"
            startIcon={<Icon sdsIcon="Upload" sdsSize="l" sdsType="button" />}
            sx={{ my: 4 }}
            component="label"
          >
            Upload
            <input
              hidden
              id={id}
              name={id}
              type="file"
              disabled={readonly || disabled}
              onChange={handleChange}
              defaultValue=""
              autoFocus={autofocus}
              multiple={multiple}
              accept={options.accept ? String(options.accept) : undefined}
              ref={inputRef}
            />
          </Button>
        </Box>
        <Box>
          {filesInfo.map((file: FileInfoType, i: number) => (
            <TagFilter
              label={file.name}
              onDelete={() => handleDelete(i)}
              key={i}
            />
          ))}
        </Box>
      </Stack>
    </div>
  );
};
