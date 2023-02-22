import React from "react";
import { TextField as MuiTextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const TextField = ({
  heightTextArea = "70px",
  borderRadius = "8px",
  ...props
}) => {
  const themeTextField = createTheme({
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            "&:hover .MuiFormLabel-root": {
              color: "#ffa300",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontFamily: "Regular",
            left: "5px",
            top: "-4px",
            color: "#75787B",
            fontSize: "14px",
            "&.Mui-focused": {
              color: "#ffa300",
              fontSize: "16px",
            },
            "&.MuiFormLabel-filled": {
              top: "-6px",
              fontSize: "15px",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-input": {
              padding: "9px 14px !important",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#ffa300 !important",
            },
            borderRadius: borderRadius,
            color: "#75787B",
            "& fieldset": {
              borderColor: "#B1B3B3",
            },
            "&:hover fieldset": {
              borderColor: "#FFA300 !important",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFA300 !important",
            },
            "& legend": {
              marginLeft: "5px",
            },
            "& .MuiInputLabel-shrink": {
              marginLeft: "5px ",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            ".MuiInputBase-inputMultiline": {
              height: heightTextArea + " !important",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={themeTextField}>
      <MuiTextField {...props} />
    </ThemeProvider>
  );
};

export default TextField;
