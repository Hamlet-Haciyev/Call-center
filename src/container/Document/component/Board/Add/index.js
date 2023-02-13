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
import { Icon } from "../../../../../assets/icons";
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
        },
      },
    },
  },
});
const Add = () => {
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
              padding={"15.5px 21px"}
              lineHeight={"21px"}
            >
              Yeni sənəd əlavə et
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
                    <Box
                      display={"flex"}
                      justifyContent="space-between"
                      marginBottom="30px"
                    >
                      <Box
                        display="flex"
                        justifyContent={"center"}
                        flexDirection="column"
                        alignItems="center"
                        border={"2px dashed #ffa300"}
                        borderRadius="8px"
                        backgroundColor="rgba(255, 163, 0, 0.1)"
                        width={"642px"}
                        padding="10px 0"
                      >
                        <Icon name="cloud" />
                        <Typography
                          component={"span"}
                          fontFamily={"Regular"}
                          width="270px"
                          color="#ffc765"
                          padding="10px"
                          textAlign={"center"}
                          fontSize="14px"
                          fontStyle={"italic"}
                        >
                          Drag and drop file( .pdf/ .docx/ .xlsx) or import file
                          from your computer
                        </Typography>
                        <Box width={"100px"}>
                          <Button
                            startIcon={<Icon name="upload" />}
                            text={"Browser"}
                            radius="8px"
                            padding={"3px 10px"}
                            style={{
                              fontSize: "13px",
                              display: "flex",
                            }}
                            component={"label"}
                          >
                            <input
                              style={{ display: "none" }}
                              type={"file"}
                              id="file"
                              name="file"
                              onChange={(e) => {
                                setFieldValue("file", e.target.files[0]);
                              }}
                            />
                          </Button>
                        </Box>
                      </Box>
                      <Box>file</Box>
                    </Box>
                    <Box sx={{ mb: "20px", maxWidth: "642px" }}>
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
                      <Box sx={{ width: "140px", margin: "10px 0px" }}>
                        <Button
                          text={"Əlavə et"}
                          variant={"outlined"}
                          type="submit"
                        />
                      </Box>
                      <Box sx={{ width: "140px", margin: "10px 0px" }}>
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

export default Add;
