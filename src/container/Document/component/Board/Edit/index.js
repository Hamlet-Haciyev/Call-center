import React from "react";
import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { Button, TextField } from "../../../../../components";
import { useNavigate, useParams } from "react-router-dom";
const BreakPointsTheme = createTheme({
  breakpoints: {
    values: {
      laptop: 1200,
      tablet: 640,
      mobile: 0,
      desktop: 1280,
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: "20px 21px 20px 21px",
          backgroundColor: "#f5f5f5",
        },
      },
    },
  },
});
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <ThemeProvider theme={BreakPointsTheme}>
      <Grid container>
        <Grid item mobile={12} desktop={12}>
          <Box
            sx={{
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
            }}
          >
            <Typography
              component={"h4"}
              fontFamily={"Regular"}
              color={"#75787B"}
              backgroundColor="#FBFBFB"
              padding={"15px 20px"}
              lineHeight={"21px"}
            >
              Düzəliş et
            </Typography>
            <Box sx={{ padding: "15px 20px" }}>
              <Formik
                initialValues={{
                  file: "",
                  // description: "",
                }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ values, errors, touched, handleChange, setFieldValue }) => (
                  <Form>
                    <label
                      htmlFor="file"
                      style={{
                        display: "flex",
                        borderRadius: "8px",
                        border: "0.5px solid #D0D0CE",
                        backgroundColor: "#FBFBFB",
                        padding: "10px 15px",
                        color: "#FFA300",
                        width: "400px",
                      }}
                    >
                      {/* {values.file} */}
                      <input
                        style={{ display: "none" }}
                        id="file"
                        name="file"
                        type="file"
                        value={values.file}
                        onChange={handleChange}
                      />
                    </label>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ width: "140px", marginTop: "20px" }}>
                        <Button
                          text={"Yadda saxla"}
                          variant={"outlined"}
                          type="submit"
                        />
                      </Box>
                      <Box sx={{ width: "140px", marginTop: "20px" }}>
                        <Button
                          text={"Ləğv et"}
                          variant={"outlined"}
                          onClick={() => {
                            navigate("/document");
                          }}
                        />
                      </Box>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Edit;
