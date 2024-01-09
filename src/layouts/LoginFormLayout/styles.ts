import { Box, styled, Typography } from "@mui/material";

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
