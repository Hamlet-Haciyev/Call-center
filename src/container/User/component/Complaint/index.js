import { Button, Grid, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { TextField } from "../../../../components";

const Complaint = () => {
  const banks = [
    { value: "Text 1", label: "text 1" },
    { value: "Text 2", label: "text 2" },
    { value: "Text 3", label: "text 3" },
  ];
  const initiallValues = {
    specialistName: "",
    specialistSurName: "",
    specialistFatherName: "",
    callType: "",
    topic: "",
    bank: "",
    message: "",
  };
  return (
    <Formik
      initialValues={initiallValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, touched, errors, handleChange }) => (
        <Form>
          <Grid container rowSpacing={3}>
            <Grid item width={"100%"}>
              <TextField
                id="specialistName"
                name="specialistName"
                label="Filial mütəxəssisinin adı"
                variant="outlined"
                value={values.specialistName}
                onChange={handleChange}
                error={touched.specialistName && Boolean(errors.specialistName)}
                helperText={touched.specialistName && errors.specialistName}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="specialistSurName"
                name="specialistSurName"
                label="Filial mütəxəssisinin soyadı"
                variant="outlined"
                value={values.specialistSurName}
                onChange={handleChange}
                error={
                  touched.specialistSurName && Boolean(errors.specialistSurName)
                }
                helperText={
                  touched.specialistSurName && errors.specialistSurName
                }
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="specialistFatherName"
                name="specialistFatherName"
                label="Filial mütəxəssisinin ata adı"
                variant="outlined"
                value={values.specialistFatherName}
                onChange={handleChange}
                error={
                  touched.specialistFatherName &&
                  Boolean(errors.specialistFatherName)
                }
                helperText={
                  touched.specialistFatherName && errors.specialistFatherName
                }
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="callType"
                name="callType"
                label="Zəngin növü"
                variant="outlined"
                value={values.callType}
                onChange={handleChange}
                error={touched.callType && Boolean(errors.callType)}
                helperText={touched.callType && errors.callType}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="topic"
                name="topic"
                label="Şikayətin mövzusu"
                variant="outlined"
                value={values.topic}
                onChange={handleChange}
                error={touched.topic && Boolean(errors.topic)}
                helperText={touched.topic && errors.topic}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                select
                id="bank"
                name="bank"
                label="Bank"
                fullWidth
                value={values.bank}
                onChange={handleChange}
              >
                {banks.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                multiline
                id="message"
                name="message"
                label="Şikayət"
                variant="outlined"
                value={values.message}
                onChange={handleChange}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            variant={"outlined"}
            type="submit"
            style={{
              fontFamily: "Regular",
              fontSize: "16px",
              backgroundColor: "#FFB500",
              padding: "5px 30px",
              border: "none",
              color: "#fff",
              textTransform: "capitalize",
              borderRadius: "38px",
              width: "100%",
              marginTop: "15px",
            }}
          >
            Göndər
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Complaint;
