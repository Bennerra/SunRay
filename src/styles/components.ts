import { Box, Button, Container, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  overflow: "hidden",
}));

export const SiteContainer = styled(Container)(() => ({
  maxWidth: "1200px",
}));

export const HeaderContainer = styled(SiteContainer)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "30px 0",
}));

export const SmallButton = styled(Button)(() => ({
  borderRadius: "16px",
  fontSize: "21px",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "none",
  color: "#fff",
  padding: "10px 41px",
}));

export const BigButton = styled(Button)(() => ({
  width: "100%",
  maxWidth: "476px",
  borderRadius: "16px",
  fontSize: "29px",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "none",
  color: "#fff",
  padding: "19px 0px",
}));

export const ClientFormLayout = styled(Box)(() => ({
  marginBottom: "51px",
}));
