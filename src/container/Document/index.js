import React from "react";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import DocumentBoard from "./component/documentBoard";
import DescriptionDocument from "./component/descriptionAboutDocument";
import PDFViewer from "./component/pdfViewer";
const Document = () => {
  const breakPointsTheme = createTheme({
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
    <ThemeProvider theme={breakPointsTheme}>
      <Box sx={{ backgroundColor: "#f5f5f5", p: "36px 42px 36px 42px" }}>
        <Grid container spacing={3}>
          <Grid item mobile={12} tablet={12} desktop={12}>
            <DocumentBoard />
          </Grid>
          <Grid item mobile={12} tablet={6} desktop={8}>
            <PDFViewer />
          </Grid>
          <Grid item mobile={12} tablet={6} desktop={4}>
            <DescriptionDocument />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Document;
