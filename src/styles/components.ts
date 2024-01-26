import { Box, Button, Container, styled, Typography } from "@mui/material";
import { theme } from "@/styles/theme";
import { Link } from "react-router-dom";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  overflow: "hidden",
}));

export const SiteContainer = styled(Container)(() => ({
  maxWidth: "1200px",
  padding: "0 20px",
}));

export const HeaderContainer = styled(SiteContainer)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "30px 0",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

export const MiddleButton = styled(Button)(({ theme }) => ({
  borderRadius: "16px",
  fontSize: "21px",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "none",
  color: theme.palette.background.default,
  padding: "10px 41px",
  [theme.breakpoints.down("sm")]: {
    padding: "7px 20px",
    fontSize: "14px",
    fontWeight: 400,
  },
}));

export const BigButton = styled(Button)(({ theme }) => ({
  width: "100%",
  maxWidth: "476px",
  borderRadius: "16px",
  fontSize: "29px",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "none",
  color: theme.palette.background.default,
  padding: "19px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0",
    fontSize: "24px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "8px 0",
    fontSize: "18px",
  },
}));

export const SmallButton = styled(Button)(({ theme }) => ({
  borderRadius: "7px",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "none",
  color: theme.palette.background.default,
  padding: "10px 41px",
}));

export const ExitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.background.default,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  borderRadius: "11px",
  padding: "11px 0",
  width: "100%",
  textTransform: "none",
}));

export const ClientFormLayout = styled(Box)(() => ({
  marginBottom: "51px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "21px",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontFamily: ["Roboto Slab", "serif"].join(","),
  fontSize: "26px",
  textAlign: "center",
  width: "100%",
  marginTop: "100px",
}));

export const FormLayout = styled(Box)(({ theme }) => ({
  width: "74%",
  margin: "0 auto",
  padding: "80px 90px 122px 90px",
  borderRadius: "60px",
  border: "2px solid #F2F2F2",
  background: theme.palette.background.default,
  boxShadow: "12px 9px 77px 0px rgba(53, 53, 53, 0.05)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "150px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "60px 70px 80px 70px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 50px 60px 50px",
  },
  [theme.breakpoints.down("xs")]: {
    borderRadius: "28px",
    padding: "35px 25px 40px 25px",
  },
}));

export const ButtonLink = styled(Link)(() => ({
  width: "100%",
  textAlign: "center",
}));
