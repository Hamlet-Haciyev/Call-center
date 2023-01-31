import React from "react";
import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { Button, TextField } from "../../../../../components";

const ThreeDSecure = () => {
  return (
    <Formik
      initialValues={{
        paymentType: "3dsecure",
        firstName: "",
        lastName: "",
        fatherName: "",
        phoneNumber: "",
        cardNumber: "",
        message: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        setFieldValue,
        isSubmitting,
      }) => (
        <Form>
          <Grid container rowSpacing={2.5}>
            <Grid item width={"100%"}>
              <TextField
                id="firstName"
                name="firstName"
                label="Adı"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="lastName"
                name="lastName"
                label="Soyadı"
                variant="outlined"
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="fatherName"
                name="fatherName"
                label="Ata adı"
                variant="outlined"
                value={values.fatherName}
                onChange={handleChange}
                error={touched.fatherName && Boolean(errors.fatherName)}
                helperText={touched.fatherName && errors.fatherName}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Number"
                placeholder="(+__) __ ___ __ __"
                variant="outlined"
                value={values.phoneNumber}
                onChange={handleChange}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="cardNumber"
                name="cardNumber"
                label="Plastik kartın nömrəsi"
                variant="outlined"
                value={values.cardNumber}
                onChange={handleChange}
                error={touched.cardNumber && Boolean(errors.cardNumber)}
                helperText={touched.cardNumber && errors.cardNumber}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                multiline
                id="message"
                name="message"
                label="Hadisənin qısa şərhi"
                variant="outlined"
                value={values.message}
                onChange={handleChange}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button variant={"outlined"} type="submit" text={"Göndər"} />
        </Form>
      )}
    </Formik>
  );
};

export default ThreeDSecure;
