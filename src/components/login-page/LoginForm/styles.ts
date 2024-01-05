import { Box, RadioGroup, styled, TextField, Typography } from "@mui/material";

export const FormLoginLayout = styled(Box)(() => ({
  width: "74%",
  margin: "0 auto",
  padding: "80px 90px 122px 90px",
  borderRadius: "60px",
  border: "2px solid #F2F2F2",
  background: "#fff",
  boxShadow: "12px 9px 77px 0px rgba(53, 53, 53, 0.05)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "150px",
}));

export const FormTitle = styled(Typography)(() => ({
  fontSize: "37px",
  fontWeight: 500,
  marginBottom: "46px",
}));

export const RadioLayout = styled(RadioGroup)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  marginBottom: "62px",
}));

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
