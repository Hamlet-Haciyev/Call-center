import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";

const Information = () => {
  return (
    <Box
      sx={{
        width: "730px",
        borderRadius: "12px",
        background: "#fff",
        padding: "22px 28px",
        mr: "25px",
      }}
    >
      <Typography
        fontFamily="Proxima Nova"
        fontWeight={"400"}
        component={"h2"}
        color="#75787B"
        mb={"10px"}
      >
        Məlumatlar
      </Typography>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          fathername: "",
          phonenumber: "",
          identificationserienumber: "",
          companyname: "",
          salary: "",
          identificationphincode: "",
          message: "",
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <Box display={"flex"} mb={"20px"}>
              <Box flexBasis={"50%"} mr={"40px"}>
                <TextField
                  id="firstname"
                  name="firstname"
                  label="Adı"
                  variant="outlined"
                  value={values.firstname}
                  onChange={handleChange}
                  error={touched.firstname && Boolean(errors.firstname)}
                  helperText={touched.firstname && errors.firstname}
                  fullWidth
                />
              </Box>
              <Box flexBasis={"50%"}>
                <TextField
                  id="lastname"
                  name="lastname"
                  label="Soyadı"
                  variant="outlined"
                  value={values.lastname}
                  onChange={handleChange}
                  error={touched.lastname && Boolean(errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                  fullWidth
                />
              </Box>
            </Box>
            <Box display={"flex"} mb="20px">
              <Box flexBasis={"50%"} mr={"40px"}>
                <TextField
                  id="fathername"
                  name="fathername"
                  label="Ata adı"
                  variant="outlined"
                  value={values.fathername}
                  onChange={handleChange}
                  error={touched.fathername && Boolean(errors.fathername)}
                  helperText={touched.fathername && errors.fathername}
                  fullWidth
                />
              </Box>
              <Box flexBasis={"50%"}>
                <TextField
                  id="phonenumber"
                  name="phonenumber"
                  label="(+__) __ ___ __ __"
                  variant="outlined"
                  value={values.phonenumber}
                  onChange={handleChange}
                  error={touched.phonenumber && Boolean(errors.phonenumber)}
                  helperText={touched.phonenumber && errors.phonenumber}
                  fullWidth
                />
              </Box>
            </Box>
            <Box display={"flex"}>
              <Box flexBasis={"50%"} mr={"40px"}>
                <TextField
                  id="identificationserienumber"
                  name="identificationserienumber"
                  label="Ş/V-nin seriyası"
                  variant="outlined"
                  value={values.identificationserienumber}
                  onChange={handleChange}
                  error={touched.identificationserienumber && Boolean(errors.identificationserienumber)}
                  helperText={touched.identificationserienumber && errors.identificationserienumber}
                  fullWidth
                />
              </Box>
              <Box flexBasis={"50%"}>
                <TextField
                  id="companyname"
                  name="companyname"
                  label="İşlədiyi müəssisə"
                  variant="outlined"
                  value={values.companyname}
                  onChange={handleChange}
                  error={touched.companyname && Boolean(errors.companyname)}
                  helperText={touched.companyname && errors.companyname}
                  fullWidth
                />
              </Box>
            </Box>
            <Box m={"20px 0"}>Əlavə məlumatlar</Box>
            <Box mb={"20px"}>Maraqlandigi xidmetler</Box>
            <Button variant={"outlined"} type="submit">
              Daxil Et
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Information;
