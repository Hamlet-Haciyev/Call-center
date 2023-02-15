import React, { useState } from "react";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import Board from "./component/Board";
import Description from "./component/Description";
import PDFViewer from "./component/PDFViewer";
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
const Document = () => {
  const [selectedFile, setSelectedFile] = useState(false);
  return (
    <ThemeProvider theme={breakPointsTheme}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          p: "36px 42px 36px 42px",
          minHeight: `${"calc(100vh - 60px)"}`,
        }}
      >
        <Grid container spacing={3}>
          <Grid item mobile={12} tablet={12} desktop={12}>
            <Board setSelectedFile={setSelectedFile} />
          </Grid>
          {selectedFile ? (
            <>
              <Grid item mobile={12} tablet={6} desktop={8}>
                <PDFViewer />
              </Grid>
              <Grid item mobile={12} tablet={6} desktop={4}>
                <Description />
              </Grid>
            </>
          ) : null}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Document;
