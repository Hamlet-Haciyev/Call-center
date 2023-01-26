import { createTheme } from "@mui/material/styles";

export const themeTextField = createTheme({
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
          borderRadius: "8px",
          color: "#75787B",
          "& fieldset": {
            // borderWidth: "2px",
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
    MuiInputBase:{
      styleOverrides:{
        root:{
          ".MuiInputBase-inputMultiline":{
            height:"120px !important"
          }
        }
      }
    }
  },
});
