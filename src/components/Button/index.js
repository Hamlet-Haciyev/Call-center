import React from "react";
import { Button as MuiButton, createTheme, ThemeProvider } from "@mui/material";

const Button = ({ text, radius = "12px", ...props }) => {
  const themeButton = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Regular",
            fontSize: "16px",
            backgroundColor: "#FFB500",
            color: "#fff",
            textTransform: "capitalize",
            borderRadius: radius,
            width: "100%",
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
