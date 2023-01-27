import React from "react";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import Information from "./component/Information";
import SelectAction from "./component/SelectAction";
const User = () => {
  const breakPoints = createTheme({
    breakpoints: {
      values: {
        laptop: 1200,
        tablet: 640,
        mobile: 0,
        desktop: 1280,
      },
    },
  });
  return (
    <ThemeProvider theme={breakPoints}>
      <Box sx={{ backgroundColor: "#f5f5f5", p: "36px 42px 36px 42px" }}>
        <Grid container spacing={3}>
          <Grid item mobile={12} tablet={8} desktop={8}>
            <Information />
          </Grid>
          <Grid item mobile={12} tablet={4} desktop={4}>
            <SelectAction />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default User;
