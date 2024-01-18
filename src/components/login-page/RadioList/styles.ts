import {
  FormControlLabel,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import { theme } from "@/styles/theme";

export const RadioLayout = styled(RadioGroup)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  marginBottom: "62px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "40px",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "26px",
  },
}));

export const RadioLabel = styled(FormControlLabel)(({ theme }) => ({
  ["& .MuiTypography-root"]: {
    color: theme.palette.secondary.main,
    fontSize: "23px",
    lineHeight: "1",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "0.1",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  ["& .MuiSvgIcon-root"]: {
    [theme.breakpoints.down("xs")]: {
      width: "0.8em",
    },
  },
}));

export const TextError = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: 1.66,
  marginTop: "5px",
}));
