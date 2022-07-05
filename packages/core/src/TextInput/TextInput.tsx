import { Box, Typography, InputLabel } from "@mui/material";
import MaterialInputBase, { InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";

// We use shouldForwardProp to not pass the additonal props
// added for this component (at the interface extend) to the
// text box
const excludeProps = ["errorDesc", "label"];

const TextBox = styled(MaterialInputBase, {
  shouldForwardProp: (prop) => !excludeProps.includes(prop.toString()),
})<InputBaseProps>(({ error, theme }) => ({
  border: "1px solid",
  borderColor: error ? theme.palette.error.main : theme.palette.line.main,
  padding: "5px",
  "&.Mui-focused": {
    borderColor: theme.palette.primary.main,
  },
  width: "100%",
})) as typeof MaterialInputBase;

// Would extending InputBaseProps be right here?
// I would think extending TextBox's props would
// be correct but I'm not sure how to extend the const
interface TextInputProps extends InputBaseProps {
  errorDesc?: string;
  label?: string;
}

// Create an unique ID so the input is linked to
// the label and helper text
// https://mui.com/material-ui/react-text-field/#accessibility
const uniqueId = uuidv4();

export const TextInput = (props: TextInputProps) => {
  const { error, errorDesc, label } = props;

  return (
    <Box>
      <InputLabel htmlFor={uniqueId}>{label}</InputLabel>
      <TextBox id={uniqueId} {...props} />
      {error && (
        <Typography id={uniqueId} color="error">
          {errorDesc}
        </Typography>
      )}
    </Box>
  );
};
