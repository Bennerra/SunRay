import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Slab", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "#eda338",
      dark: "#e78800",
    },
    secondary: {
      main: "#353535",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "#353535",
          fontSize: "23px",
        },
      },
    },
  },
});
