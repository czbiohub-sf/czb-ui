import { useState } from "React";
import { Typography, Box, styled } from "@mui/material";
import { Button, Icon, TagFilter } from "czifui";
import { Stack } from "@mui/material";

// TODO: Find type of props for file widget
export const File = (props: any) => {
  const [fileNames, setFileNames] = useState();

  // TODO: Find types for file change event
  const onFileChange = (e: any) => {
    // FileList from the event is an object so make it
    // an array so we can iterate through it
    const uploadedFilesInfo = Array.from(e.target.files);

    // Put only file names in the state
    setFileNames(uploadedFilesInfo.map((file) => file.name));
  };

  return (
    <div>
      {/* TODO: Is this accessible? */}
      <Typography component="label" htmlFor={props.id}>
        {props.label}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box>
          <Button
            sdsType="secondary"
            sdsStyle="square"
            sx={{ my: 4 }}
            component="label"
            htmlFor={props.id}
          >
            {/* TODO: Upload icon isn't there for some reason */}
            <Icon sdsIcon="grid" sdsSize="l" sdsType="button" />
            Upload
            <input
              hidden
              id={props.id}
              accept="image/*"
              multiple
              type="file"
              onChange={onFileChange}
            />
          </Button>
        </Box>
        <Box>
          {fileNames &&
            fileNames.map((fileName: string, i: number) => (
              <TagFilter
                label={fileName}
                onDelete={(e) => console.log(e)}
                key={i}
              />
            ))}
        </Box>
      </Stack>
    </div>
  );
};
