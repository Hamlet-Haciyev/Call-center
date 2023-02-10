import React from "react";
import { createTheme, Input, ThemeProvider } from "@mui/material";
const SearchInput = ({ ...props }) => {
  const InputTheme = createTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            border: "1px solid #B1B3B3",
            borderRadius: "16px",
            padding: "1px 20px 2px",

            "&::before": {
              borderBottom: "none",
            },
            "&::after": {
              borderBottom: "none",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "none",
            },
            "& input": {
              fontFamily: "Regular",
              color: "#75787B",
              fontSize: "15px",
              padding: "0px 5px 0px",
            },
            "& input::placeHolder": {
              fontSize: "12px",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={InputTheme}>
      <Input {...props} />
    </ThemeProvider>
  );
};

export default SearchInput;
