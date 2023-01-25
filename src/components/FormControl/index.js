import {
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
  createTheme,
  ThemeProvider,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import React from "react";
import { Icon } from "../../assets/icons";

export const FormControlLabel = ({ ...props }) => {
  const themeCheckbox = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.MuiFormControlLabel-label": {
              color: "#75787B",
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
    },
  });
  return (
    <ThemeProvider theme={themeCheckbox}>
      <MuiFormControlLabel {...props} />
    </ThemeProvider>
  );
};
export const InputIcon = ({ inputLabel, sx, ...props }) => {
  const themeInputIcon = createTheme({
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            margin: "0px !important",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={themeInputIcon}>
      <FormControl sx={sx} variant="outlined">
        <InputLabel htmlFor={props?.id}>{inputLabel}</InputLabel>
        <OutlinedInput {...props} />
      </FormControl>
    </ThemeProvider>
  );
};
