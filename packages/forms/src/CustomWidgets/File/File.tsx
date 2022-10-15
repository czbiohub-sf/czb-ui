import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Typography, Box, styled } from "@mui/material";
import { Button, Icon, TagFilter } from "czifui";
import { Stack } from "@mui/material";
import { dataURItoBlob, WidgetProps } from "@rjsf/utils";

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
    reader.onload = (event) => {
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
        name: name,
        size: blob.size,
        type: blob.type,
      };
    });
}

// TODO: Find type of props for file widget
export const File = ({
  multiple,
  id,
  readonly,
  disabled,
  onChange,
  value,
  autofocus = false,
  options,
}: WidgetProps) => {
  const extractedFilesInfo = useMemo(
    () =>
      Array.isArray(value) ? extractFileInfo(value) : extractFileInfo([value]),
    [value]
  );
  const [filesInfo, setFilesInfo] =
    useState<FileInfoType[]>(extractedFilesInfo);

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
    },
    [multiple, onChange]
  );

  return (
    <div>
      {/* TODO: Is this accessible? */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box>
          <Button
            sdsType="secondary"
            sdsStyle="square"
            sx={{ my: 4 }}
            component="label"
            htmlFor={id}
          >
            {/* TODO: Upload icon isn't there for some reason */}
            <Icon sdsIcon="grid" sdsSize="l" sdsType="button" />
            Upload
            <input
              hidden
              // TODO: Accept prop
              id={id}
              type="file"
              multiple={multiple}
              onChange={handleChange}
            />
          </Button>
        </Box>
        <Box>
          {filesInfo.map((file: FileInfoType, i: number) => (
            <TagFilter
              label={file.name}
              onDelete={(e) => console.log(e)}
              key={i}
            />
          ))}
        </Box>
      </Stack>
    </div>
  );
};
