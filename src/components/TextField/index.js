import React from "react";
import { TextField as MuiTextField, ThemeProvider } from "@mui/material";
import { themeTextField } from "./theme";
const TextField = ({ ...props }) => {
  return (
    <ThemeProvider theme={themeTextField}>
      <MuiTextField {...props} />
    </ThemeProvider>
  );
};

export default TextField;
