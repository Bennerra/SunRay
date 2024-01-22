import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1600,
    },
  },
  typography: {
    fontFamily: ["Roboto Slab", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "#eda338",
      dark: "#e78800",
      contrastText: "#1e1e1e",
    },
    secondary: {
      main: "#353535",
      light: "#a6a6a6",
      dark: "#4e4e4e",
    },
    background: {
      default: "#fff",
      paper: "#f6f6f6",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});
