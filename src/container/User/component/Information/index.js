import React from "react";
import { Box, Button, Checkbox, MenuItem, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { TextField } from "../../../../components";
import { FormControlLabel } from "../../../../components/FormControl";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
const Information = () => {
  const statusCall = [
    {
      value: "zənget",
      label: "Zəng et",
    },
    {
      value: "emailyaz",
      label: "Email yaz",
    },
  ];
  const filials = [
    {
      value: "text1",
      label: "Text 1",
    },
    {
      value: "text2",
      label: "Text 2",
    },
  ];
  const medias = [
    {
      value: "text1",
      label: "Text 1",
    },
    {
      value: "text2",
      label: "Text 2",
    },
  ];
  const serviceCharacters = [
    {
      value: "text1",
      label: "Text 1",
    },
    {
      value: "text2",
      label: "Text 2",
    },
  ];
  const serviceFields = [
    {
      value: "text1",
      label: "Text 1",
    },
    {
      value: "text2",
      label: "Text 2",
    },
  ];
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
        fontFamily="Regular"
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
          statusCall: "",
          rememberDate: null,
          birthday: null,
          callDate: "",
          filial: "",
          serviceField: "",
          serviceCharacter: "",
          media: "",
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched, values, handleChange, setFieldValue }) => (
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
            {values.requiredCall ? (
              <>
                <Box display={"flex"} mb={"20px"}>
                  <Box flexBasis={"50%"} mr="40px">
                    Xatirlatma vaxti
                  </Box>
                  <Box flexBasis={"50%"}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        id="rememberDate"
                        name="rememberDate"
                        label="Xatirlatma tarixi"
                        inputFormat="DD / MM / YYYY"
                        value={values.rememberDate}
                        onChange={(value) =>
                          setFieldValue("rememberDate", value, true)
                        }
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <Box display={"flex"}>
                  <Box flexBasis={"50%"} mr="40px">
                    <TextField
                      id="statusCall"
                      name="statusCall"
                      select
                      label="Status"
                      fullWidth
                      value={values.statusCall}
                      onChange={handleChange}
                    >
                      {statusCall.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                </Box>
              </>
            ) : null}

            <Box m={"20px 0"}>
              <Typography
                fontFamily={"Regular"}
                fontSize={"17px"}
                color={"#75787B"}
                component="h4"
                mb={"15px"}
              >
                Əlavə məlumatlar
              </Typography>
              <Box display={"flex"} mb={"20px"}>
                <Box flexBasis={"50%"} mr={"40px"}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      id="birthday"
                      name="birthday"
                      label="Təvəllüd"
                      inputFormat="DD / MM / YYYY"
                      value={values.birthday}
                      onChange={(value) =>
                        setFieldValue("birthday", value, true)
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <Box flexBasis={"50%"}>
                  <TextField
                    id="callDate"
                    name="callDate"
                    label="Zəng tarixi"
                    variant="outlined"
                    value={values.callDate}
                    onChange={handleChange}
                    error={touched.callDate && Boolean(errors.callDate)}
                    helperText={touched.callDate && errors.callDate}
                    fullWidth
                  />
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box flexBasis={"50%"} mr="40px">
                  <TextField
                    select
                    id="filial"
                    name="filial"
                    label="Filial"
                    value={values.filial}
                    onChange={handleChange}
                    fullWidth
                  >
                    {filials.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box flexBasis={"50%"}></Box>
              </Box>
            </Box>
            <Box mb={"20px"}>
              <Typography
                fontFamily={"Regular"}
                fontSize={"17px"}
                color={"#75787B"}
                component="h4"
                mb={"15px"}
              >
                Maraqlandığı xidmətlər
              </Typography>
              <Box display={"flex"} mb={"20px"}>
                <Box flexBasis={"50%"} mr={"40px"}>
                  <TextField
                    select
                    id="serviceField"
                    name="serviceField"
                    label="Xidmət  sahəsi"
                    value={values.serviceField}
                    onChange={handleChange}
                    fullWidth
                  >
                    {serviceFields.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box flexBasis={"50%"}>
                  <TextField
                    select
                    id="serviceCharacter"
                    name="serviceCharacter"
                    label="Xidmət  xarakteri"
                    value={values.serviceCharacter}
                    onChange={handleChange}
                    fullWidth
                  >
                    {serviceCharacters.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box flexBasis={"50%"} mr="40px">
                  <TextField
                    select
                    id="media"
                    name="media"
                    label="Media"
                    value={values.media}
                    onChange={handleChange}
                    fullWidth
                  >
                    {medias.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box flexBasis={"50%"}></Box>
              </Box>
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
