import React from "react";
import {
  Grid,
  Box,
  ThemeProvider,
  createTheme,
  Typography,
} from "@mui/material";
import { Button } from "../../components";
import { Icon } from "../../assets/icons";
import NotFoundImg from "../../assets/images/404NotFound.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const NotFoundTheme = createTheme({
    breakpoints: {
      values: {
        desktop: 1280,
        laptop: 1200,
        tablet: 640,
        mobile: 0,
      },
    },
  });
  return (
    <ThemeProvider theme={NotFoundTheme}>
      <Grid
        container
        height="100vh"
        alignItems="center"
        maxWidth={"1226px"}
        margin="0 auto"
      >
        <Grid item desktop={6} tablet={12}>
          <Box>
            <Typography
              fontFamily={"Regular"}
              fontWeight={"600"}
              color={"#FFA300"}
              component={"h2"}
              fontSize={"40px"}
              lineHeight={"49px"}
              marginBottom={"15px"}
            >
              Ooops...
            </Typography>
            <Typography
              fontFamily={"Regular"}
              color={"#75787B"}
              component={"h2"}
              fontSize={"24px"}
              lineHeight={"29px"}
              marginBottom={"30px"}
              width={"400px"}
            >
              Xəta var. Səhifə tapılmadı. Öncəki səhifəyə geri qayıdın.
            </Typography>
            <Box width={"160px"}>
              <Button
                text={"Geri qayıt"}
                padding={"5px 25px"}
                radius={"20px"}
                style={{ textTransform: "initial" }}
                onClick={() => navigate(-1)}
                startIcon={<Icon name={"returnBack"} />}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item desktop={6} tablet={12}>
          <img src={NotFoundImg} style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default NotFound;
