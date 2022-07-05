import { Box, Typography } from "@mui/material";
import MaterialInputBase, { InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const TextBox = styled(MaterialInputBase, {
  shouldForwardProp: (prop) => prop !== "error",
})<InputBaseProps>(({ error, theme }) => ({
  border: "1px solid",
  borderColor: error ? theme.palette.error.main : theme.palette.line.main,
  padding: "5px",
  "&.Mui-focused": {
    borderColor: theme.palette.primary.main,
  },
})) as typeof MaterialInputBase;

// Would extending InputBaseProps be right here?
// I would think extending TextBox's props would
// be correct but I'm not sure how to extend the const
interface TextInputProps extends InputBaseProps {
  errorDesc?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { error, errorDesc } = props;

  return (
    <Box>
      <TextBox {...props} />
      {error && <Typography color="error">{errorDesc}</Typography>}
    </Box>
  );
};
