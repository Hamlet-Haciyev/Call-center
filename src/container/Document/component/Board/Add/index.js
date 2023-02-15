import React, { useState } from "react";
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
import moment from "moment";
const BreakPointsTheme = createTheme({
  breakpoints: {
    values: {
      laptop: 1200,
      tablet: 640,
      mobile: 0,
      desktop: 1280,
    },
  },
});
const Add = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [deleteFile, setDeleteFile] = useState(false);
  return (
    <ThemeProvider theme={BreakPointsTheme}>
      <Box
        sx={{
          padding: "36px 41px 36px 41px",
          backgroundColor: "#f5f5f5",
          minHeight: "calc(100vh - 60px)",
        }}
      >
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
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ values, errors, touched, handleChange, setFieldValue }) => (
                <Form>
                  <Grid container columnSpacing={4} rowSpacing={5}>
                    <Grid item desktop={7} tablet={12}>
                      <Box
                        display="flex"
                        justifyContent={"center"}
                        flexDirection="column"
                        alignItems="center"
                        border={"2px dashed #ffa300"}
                        borderRadius="8px"
                        backgroundColor="rgba(255, 163, 0, 0.1)"
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
                                setDeleteFile(false);
                                setFieldValue("file", e.target.files[0]);
                              }}
                            />
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item desktop={5} tablet={12}>
                      {values.file ? (
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "15px",
                              borderRadius: "8px",
                              border: "0.5px solid #D0D0CE",
                              backgroundColor: "#FBFBFB",
                              padding: "10px 23px",
                            }}
                          >
                            <Box display={"flex"} alignItems={"center"}>
                              <Icon name={"addedFile"} />
                              <Typography
                                component={"span"}
                                color="#B1B3B3"
                                fontFamily={"Regular"}
                                marginLeft="5px"
                              >
                                {values.file.name}
                              </Typography>
                            </Box>
                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                setDeleteFile(true);
                                setFieldValue("file", null);
                              }}
                            >
                              <Icon name={"deleteFile"} />
                            </Box>
                          </Box>
                          <Box>
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
                                  {moment().format("DD.MM.yyyy")}
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
                                  {values.file.size > 1000
                                    ? (values.file.size / 1000).toFixed(1) +
                                      "MB"
                                    : values.file.size + "KB"}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      ) : null}
                      {deleteFile ? (
                        <Typography
                          component={"p"}
                          color="#FF0000"
                          fontFamily={"Regular"}
                        >
                          Öncəki sənəd silindi. Yenisini daxil edin.
                        </Typography>
                      ) : null}
                    </Grid>
                    <Grid item desktop={7} tablet={12}>
                      <Box>
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
                    </Grid>
                    <Grid item desktop={12} tablet={8} mobile={6}>
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ width: "140px" }}>
                          <Button
                            text={"Əlavə et"}
                            variant={"outlined"}
                            type="submit"
                          />
                        </Box>
                        <Box sx={{ width: "140px" }}>
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
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Add;
