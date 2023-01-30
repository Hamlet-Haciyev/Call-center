import React from "react";
import { Button as MuiButton, createTheme, ThemeProvider } from "@mui/material";

const Button = ({ text, ...props }) => {
  const themeButton = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Regular",
            fontSize: "16px",
            backgroundColor: "#FFB500",
            padding: "5px 30px",
            color: "#fff",
            textTransform: "capitalize",
            borderRadius: "38px",
            width: "100%",
            marginTop: "15px",
            border: "none",
            "&:hover": {
              backgroundColor: "#FFA300",
              border: "none",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={themeButton}>
      <MuiButton {...props}>{text}</MuiButton>
    </ThemeProvider>
  );
};

export default Button;
