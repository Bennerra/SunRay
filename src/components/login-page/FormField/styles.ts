import { styled, TextField } from "@mui/material";

export const FormLoginField = styled(TextField)`
  width: 100%;
  margin-bottom: 18px;
  & .MuiInputBase-root {
    border-radius: 19px;
  }
  &:hover fieldset {
    border-radius: 19px;
    border: 2px solid #a6a6a6;
  }
  &:focus-within fieldset,
  &:focus-visible fieldset {
    border-radius: 19px;
    border: 2px solid #a6a6a6;
  }
`;
