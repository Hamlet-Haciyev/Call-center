import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { TextField } from "../../../../components";
import { FormControlLabel } from "../../../../components/FormControl";
import { Icon } from "../../../../assets/icons";
const Information = () => {
  return (
    <Box
      sx={{
        width: "770px",
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
        mb={"20px"}
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
          requiredCall: false,
          rememberDate: null,
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
            <Box display={"flex"} mb={"20px"}>
              <Box flexBasis={"50%"} mr={"40px"}>
                <TextField
                  id="identificationserienumber"
                  name="identificationserienumber"
                  label="Ş/V-nin seriyası"
                  variant="outlined"
                  value={values.identificationserienumber}
                  onChange={handleChange}
                  error={
                    touched.identificationserienumber &&
                    Boolean(errors.identificationserienumber)
                  }
                  helperText={
                    touched.identificationserienumber &&
                    errors.identificationserienumber
                  }
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
            <Box display={"flex"} mb={"20px"}>
              <Box flexBasis={"50%"} mr={"40px"}>
                <TextField
                  id="salary"
                  name="salary"
                  label="Əmək haqqı"
                  variant="outlined"
                  value={values.salary}
                  onChange={handleChange}
                  error={touched.salary && Boolean(errors.salary)}
                  helperText={touched.salary && errors.salary}
                  fullWidth
                />
              </Box>
              <Box flexBasis={"50%"}>
                <TextField
                  id="identificationphincode"
                  name="identificationphincode"
                  label="Ş/V-nin Pin kodu"
                  variant="outlined"
                  value={values.identificationphincode}
                  onChange={handleChange}
                  error={
                    touched.identificationphincode &&
                    Boolean(errors.identificationphincode)
                  }
                  helperText={
                    touched.identificationphincode &&
                    errors.identificationphincode
                  }
                  fullWidth
                />
              </Box>
            </Box>
            <Box display={"flex"} mb={"10px"}>
              <TextField
                multiline
                id="message"
                name="message"
                label="Qeydlər..."
                variant="outlined"
                value={values.message}
                onChange={handleChange}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                fullWidth
              />
            </Box>
            <Box mb={"10px"}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="requiredCall"
                    name="requiredCall"
                    value={values.requiredCall}
                    onChange={handleChange}
                  />
                }
                label="Zəngin vacibliyi"
              />
            </Box>
            <Box display={"flex"}>
              <Box flexBasis={"50%"} mr="40px">
                <TextField
                  id="rememberDate"
                  name="rememberDate"
                  label="Xatirlatma tarixi"
                  placeholder="dd / mm / yyyy"
                  value={values.rememberDate}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
              <Box flexBasis={"50%"}>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="rememberDate">
                    Xatirlatma tarixi
                  </InputLabel>
                  <OutlinedInput
                    id="rememberDate"
                    name="rememberDate"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <Icon name="document" />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </Box>
            <Box m={"20px 0"}>
              <Typography
                fontFamily={"Proxima Nova"}
                fontSize={"17px"}
                color={"#75787B"}
                component="h4"
              >
                Əlavə məlumatlar
              </Typography>
            </Box>
            <Box mb={"20px"}>
              <Typography
                fontFamily={"Proxima Nova"}
                fontSize={"17px"}
                color={"#75787B"}
                component="h4"
              >
                Maraqlandığı xidmətlər
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant={"outlined"}
                type="submit"
                style={{
                  fontFamily: "Proxima Nova",
                  fontSize: "16px",
                  backgroundColor: "#FFB500",
                  padding: "5px 30px",
                  border: "none",
                  color: "#fff",
                  textTransform: "capitalize",
                  borderRadius: "38px",
                  width: "140px",
                }}
              >
                Daxil Et
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Information;
