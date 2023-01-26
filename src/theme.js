import { createTheme } from "@mui/material/styles";
export const themeSetting = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          boxShadow: " 0px 0px 16px 1px rgba(0, 0, 0, 0.05) !important",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "58px !important",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "42px !important",
          paddingRight: "42px !important",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          "& span": {
            fontFamily: "Semibold",
            fontSize: "1.02rem",
          },
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
