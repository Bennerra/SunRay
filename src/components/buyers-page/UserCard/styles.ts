import { Box, styled, Typography } from "@mui/material";

export const UserCardLayout = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: "14px",
  border: "1px solid #ddd",
  padding: "30px 44px 42px 44px",
  width: "100%",
  maxWidth: "627px",
}));

export const UserName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  marginBottom: "7px",
}));

export const UserButtonList = styled(Box)(() => ({
  display: "flex",
  gap: "29px",
}));
