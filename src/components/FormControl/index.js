import {
  FormControlLabel as MuiFormControlLabel,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";

export const FormControlLabel = ({ ...props }) => {
  const themeCheckbox = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.MuiFormControlLabel-label": {
              color: "#75787B",
              fontFamily:"Regular",
              fontSize:"17px",
            },
          },
        },
      },
      // Checkbox prefix(button) customize
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&.Mui-checked svg": {
              fill: "#ffa300",
            },
            svg: {
              fill: "#B1B3B3",
            },
          },
        },
      },
      MuiFormControlLabel:{
        styleOverrides:{
          root:{
            marginRight:"50px"
          }
        }
      }
    },
  });
  return (
    <ThemeProvider theme={themeCheckbox}>
      <MuiFormControlLabel {...props} />
    </ThemeProvider>
  );
};