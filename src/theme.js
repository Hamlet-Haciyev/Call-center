import { createTheme } from "@mui/material/styles";
export const themeSetting = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius:"8px !important",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "40px !important",
          paddingRight: "40px !important",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3949ab",
    },
    secondary: {
      main: "#11cb5f",
    },
    yellow: {
      main: "#ffa300",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
