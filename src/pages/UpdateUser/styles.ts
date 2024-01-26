import { Box, styled } from "@mui/material";

export const UpdateUserLayout = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",
}));

export const UserTitle = styled("h1")(({ theme }) => ({
  textAlign: "center",
  fontSize: "32px",
  fontWeight: 600,
  color: theme.palette.primary.contrastText,
  marginBottom: "42px",
}));
