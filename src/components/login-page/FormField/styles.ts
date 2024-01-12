import { styled, TextField } from "@mui/material";

export const FormLoginField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "18px",
  ["& .MuiInputBase-root"]: {
    borderRadius: "19px",
  },
  ["&:hover fieldset"]: {
    borderRadius: "19px",
    border: `2px solid ${theme.palette.secondary.light}`,
  },
  ["&:focus-within fieldset &:focus-visible fieldset "]: {
    borderRadius: "19px",
    border: `2px solid ${theme.palette.secondary.light}`,
  },
}));
