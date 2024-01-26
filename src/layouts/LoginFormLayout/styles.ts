import { styled, Typography } from "@mui/material";
import { theme } from "@/styles/theme";

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
