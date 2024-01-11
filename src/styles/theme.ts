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
  },
});
