import { Button, Container, styled } from "@mui/material";

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
