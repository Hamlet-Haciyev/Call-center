import React from "react";
import {
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
  Box,
} from "@mui/material";
import { Formik, Form } from "formik";
import login from "../../assets/images/login.png";
import { Button, TextField } from "../../components";
import { useNavigate } from "react-router-dom";
const LoginTheme = createTheme({
  breakpoints: {
    values: {
      desktop: 1280,
      laptop: 1200,
      tablet: 640,
      mobile: 0,
    },
  },
});
const Login = ({ setUser }) => {
  const user = {
    username: "hamlet.haciyev",
    password: "123456",
  };
  const navigate = useNavigate();

  if (localStorage.getItem("user")) {
    navigate("/user");
  }

  const handleLogin = async (values) => {
    try {
      if (
        values.username == user.username &&
        values.password == user.password
      ) {
        setUser({ username: values.username, password: values.password });
        localStorage.setItem("user", JSON.stringify(values, null, 2));
        navigate("/user");
      } else {
        alert("Username or password incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={LoginTheme}>
      <Grid
        container
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid
          item
          desktop={6}
          tablet={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Box sx={{ marginBottom: "25px" }}>
              <Typography
                component={"h2"}
                fontFamily={"Regular"}
                color="#FFA300"
                fontSize="32px"
                fontWeight={"600"}
                lineHeight={"39px"}
                marginBottom="10px"
              >
                Expressbank callcenter
              </Typography>
              <Typography
                component={"h4"}
                fontFamily={"Regular"}
                color="#75787B"
                fontSize="16px"
                lineHeight={"19px"}
              >
                ??stifad????i ad?? v?? kodu il?? daxil olun.
              </Typography>
            </Box>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(values) => {
                handleLogin(values);
              }}
            >
              {({ values, errors, touched, setFieldValue, handleChange }) => (
                <Form>
                  <Box marginBottom={"20px"}>
                    <TextField
                      label="Istifad????i ad??"
                      id="username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box marginBottom={"30px"}>
                    <TextField
                      type="password"
                      label="Kod"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box width={"123px"}>
                    <Button
                      type="submit"
                      text={"Daxil ol"}
                      radius={"12px"}
                      style={{ textTransform: "initial" }}
                      padding="5px 20px"
                    />
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
        <Grid
          item
          desktop={6}
          tablet={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={login} style={{ maxWidth: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
