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
          padding: "19px 21px 19px 21px",
          backgroundColor: "#f5f5f5",
          minHeight: `${"calc(100vh - 100px)"}`,
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
            borderRadius={"12px"}
            backgroundColor="#FFFFFF"
            overflow="hidden"
          >
            <Typography
              component={"h4"}
              fontFamily={"Regular"}
              color={"#75787B"}
              backgroundColor="#FBFBFB"
              padding={"15.5px 21px"}
              lineHeight={"21px"}
            >
              Düzəliş et
            </Typography>
            <Box sx={{ padding: "19px 21px" }}>
              <Formik
                initialValues={{
                  file: null,
                  description: "",
                }}
                onSubmit={(values) => {
                  console.log(values.file);
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ values, errors, touched, handleChange, setFieldValue }) => (
                  <Form>
                    <Box sx={{ mb: "30px" }}>
                      <Box maxWidth={"449px"} mb="20px">
                        <Button
                          text={"file_name.pdf"}
                          style={{
                            color: "#FFA300",
                            backgroundColor: "#FBFBFB",
                            border: "0.5px solid #D0D0CE",
                            justifyContent: "start",
                            textTransform: "lowercase",
                            paddingLeft: "20px",
                            fontSize: "14px",
                          }}
                          radius="8px"
                          component={"label"}
                        >
                          <input
                            style={{ display: "none" }}
                            type={"file"}
                            id="file"
                            name={"file"}
                            onChange={(e) => {
                              setFieldValue("file", e.target.files[0]);
                            }}
                          />
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "300px",
                        }}
                      >
                        <Box>
                          <Typography
                            component={"h5"}
                            color="#5F5F5F"
                            fontFamily={"Regular"}
                          >
                            Tarix
                          </Typography>
                          <Typography
                            component={"span"}
                            color="#63666A"
                            fontFamily={"Regular"}
                          >
                            12.02.2022
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={"h5"}
                            color="#5F5F5F"
                            fontFamily={"Regular"}
                          >
                            Həcmi
                          </Typography>
                          <Typography
                            component={"span"}
                            color="#63666A"
                            fontFamily={"Regular"}
                          >
                            192 KB
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ mb: "10px", maxWidth: "600px" }}>
                      <Typography
                        component={"h4"}
                        fontFamily={"Regular"}
                        mb={"10px"}
                        color={"#75787B"}
                      >
                        Sənəd haqqında açıqlama
                      </Typography>
                      <TextField
                        multiline
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        heightTextArea="150px"
                        style={{ width: "100%" }}
                      />
                    </Box>
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
                          style={{
                            border: "1px solid #B1B3B3",
                            backgroundColor: "#fff",
                            color: "#75787B",
                            marginLeft: "10px",
                          }}
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
