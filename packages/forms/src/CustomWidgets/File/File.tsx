import { Typography, Box, styled } from "@mui/material";
import { Button, Icon } from "czifui";

const Input = styled("input")({
  display: "none",
});

// TODO: Find type of props for file widget
export const File = (props: any) => {
  console.log(props);

  return (
    <div>
      <Typography>{props.label}</Typography>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
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
    </div>
  );
};
