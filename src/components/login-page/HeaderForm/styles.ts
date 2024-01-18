import { Box, styled } from "@mui/material";

export const HeaderLayout = styled(Box)(({ theme }) => ({
  width: "100%",
  background: theme.palette.background.default,
  boxShadow: "0px 4px 101px 0px rgba(53, 53, 53, 0.06)",
  marginBottom: "93px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "60px",
    boxShadow: "0px 4px 32px 0px rgba(53, 53, 53, 0.04)",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "28px",
  },
}));
