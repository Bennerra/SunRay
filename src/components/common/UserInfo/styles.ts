import { Box, styled, Typography } from "@mui/material";

export const UserInfoLayout = styled(Box)(() => ({
  marginBottom: "32px",
  maxWidth: "600px",
}));

export const UserText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
}));

export const UserTextPoint = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 400,
}));

export const UserPointsList = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
}));

export const UserPointsAddressList = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "3px 0",
}));

export const UserAddressTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  marginTop: "27px",
  marginBottom: "12px",
}));
