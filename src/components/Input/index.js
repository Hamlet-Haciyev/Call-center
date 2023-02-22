import React from "react";
import { createTheme, Input, ThemeProvider } from "@mui/material";
const SearchInput = ({ color, height, width, backgroundColor, ...props }) => {
  const InputTheme = createTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            border: "1px solid #B1B3B3",
            borderRadius: "16px",
            padding: "1px 20px 2px",
            backgroundColor,
            "& svg": {
              height: "17px",
              width: "17px",
            },
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
              height,
              width,
            },
            "& input::placeHolder": {
              fontSize: "14px",
              color: color,
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
