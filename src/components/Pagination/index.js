import React from "react";
import {
  createTheme,
  Pagination as MuiPagination,
  ThemeProvider,
} from "@mui/material";
const Pagination = ({ ...props }) => {
  const PaginationTheme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            "& .Mui-selected": {
              backgroundColor: "#FFA300 !important",
              color: "#fff",
              border: "1px solid #FFA300",
            },
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            margin: "0",
            color: "#75787B",
            "&:hover": {
              backgroundColor: "#FFFBF3",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={PaginationTheme}>
      <MuiPagination {...props} />
    </ThemeProvider>
  );
};

export default Pagination;
