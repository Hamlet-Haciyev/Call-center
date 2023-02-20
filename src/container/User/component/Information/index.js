import React from "react";
import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { TextField, Button } from "../../../../components";
import { FormControlLabel } from "../../../../components/FormControl";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
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
        background: "#fff",
        borderRadius: "12px",
        padding: "27px 25px",
        maxWidth: "827px",
      }}
    >
      <Typography
        fontFamily="Regular"
        component={"h2"}
        color="#75787B"
        mb={"18px"}
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
          gender: "",
          serviceField: "",
          serviceCharacter: "",
          media: "",
          interestType: "",
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched, values, handleChange, setFieldValue }) => (
          <Form>
            <Grid container rowSpacing={2} justifyContent={"space-between"}>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
                <TextField
                  id="phonenumber"
                  name="phonenumber"
                  label="Number"
                  placeholder="(+__) __ ___ __ __"
                  variant="outlined"
                  value={values.phonenumber}
                  onChange={handleChange}
                  error={touched.phonenumber && Boolean(errors.phonenumber)}
                  helperText={touched.phonenumber && errors.phonenumber}
                  fullWidth
                />
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={12} width={"100%"}>
                <TextField
                  multiline
                  id="message"
                  name="message"
                  label="Qeydlər..."
                  variant="outlined"
                  value={values.message}
                  onChange={handleChange}
                  heightTextArea="130px"
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                  fullWidth
                />
              </Grid>
              <Grid item sm={12} md={12} width={"100%"}>
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
              </Grid>
              {values.requiredCall ? (
                <>
                  <Grid item sm={12} md={6} width={"335px"}>
                    Xatirlatma vaxti
                  </Grid>
                  <Grid item sm={12} md={6} width={"335px"}>
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
                  </Grid>
                  <Grid item sm={12} md={6} width={"335px"}>
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
                  </Grid>
                </>
              ) : null}
              <Grid item sm={12} md={12} width={"100%"}>
                <Typography
                  fontFamily={"Regular"}
                  fontSize={"17px"}
                  color={"#75787B"}
                  component="h4"
                >
                  Əlavə məlumatlar
                </Typography>
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    id="birthday"
                    name="birthday"
                    label="Təvəllüd"
                    inputFormat="DD / MM / YYYY"
                    value={values.birthday}
                    onChange={(value) => setFieldValue("birthday", value, true)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="gender"
                    name="gender"
                    row={true}
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio style={{ borderColor: "#ffa300" }} />}
                      label="Qadın"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Kişi"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item sm={12} md={12} width={"100%"}>
                <Typography
                  fontFamily={"Regular"}
                  fontSize={"17px"}
                  color={"#75787B"}
                  component="h4"
                >
                  Maraqlandığı xidmətlər
                </Typography>
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
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
              </Grid>
              <Grid item sm={12} md={6} width={"335px"}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="interestType"
                    name="interestType"
                    row={true}
                    value={values.interestType}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="info"
                      control={<Radio style={{ borderColor: "#ffa300" }} />}
                      label="Info"
                    />
                    <FormControlLabel
                      value="problem"
                      control={<Radio />}
                      label="Problem"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item sm={12} md={6} width={"100%"} textAlign={"end"}>
                <Button
                  variant={"outlined"}
                  type="submit"
                  style={{
                    width: "150px",
                  }}
                  text={"Daxil Et"}
                  radius={"38px"}
                />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Information;
