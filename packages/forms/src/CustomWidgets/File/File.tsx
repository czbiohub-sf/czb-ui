import { useState } from "React";
import { Typography, Box, styled } from "@mui/material";
import { Button, Icon, TagFilter } from "czifui";

const Input = styled("input")({
  display: "none",
});

// TODO: Find type of props for file widget
export const File = (props: any) => {
  const [fileNames, setFileNames] = useState();

  // TODO: Find types for file change event
  const onFileChange = (e: any) => {
    const uploadedFilesInfo = Array.from(e.target.files);

    // Put only file names in the state
    setFileNames(uploadedFilesInfo.map((file) => file.name));
  };

  return (
    <div>
      <Typography>{props.label}</Typography>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={onFileChange}
        />
        <Button
          sdsType="secondary"
          sdsStyle="square"
          sx={{ my: 4 }}
          component="span"
        >
          <Box mr={2}>
            {/* TODO: Upload icon isn't there for some reason */}
            <Icon sdsIcon="grid" sdsSize="l" sdsType="button" />
          </Box>
          Upload
        </Button>
      </label>
      {fileNames &&
        fileNames.map((fileName: string) => (
          <TagFilter label={fileName} onDelete={(e) => console.log(e)} />
        ))}
    </div>
  );
};
