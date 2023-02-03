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
            fontSize: "1.05rem",
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
    fontFamily: "Regular",
    fontSize: 14,
    h1: {
      fontFamily: "Regular",
      fontSize: 40,
    },
    h2: {
      fontFamily: "Regular",
      fontSize: 32,
    },
    h3: {
      fontFamily: "Regular",
      fontSize: 24,
    },
    h4: {
      fontFamily: "Regular",
      fontSize: 20,
    },
    h5: {
      fontFamily: "Regular",
      fontSize: 16,
    },
    h6: {
      fontFamily: "Regular",
      fontSize: 14,
    },
  },
});
