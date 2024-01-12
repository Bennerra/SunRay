import { Box, styled, Typography } from "@mui/material";
import { theme } from "@/styles/theme";

export const FormLoginLayout = styled(Box)(({ theme }) => ({
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

export const FormTitle = styled(Typography)(() => ({
  fontSize: "37px",
  fontWeight: 500,
  marginBottom: "46px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    marginBottom: "31px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "21px",
    marginBottom: "25px",
  },
}));
