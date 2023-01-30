import React from "react";
import { Grid, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import { TextField, Button } from "../../../../components";
const banks = [
  { value: "Text 1", label: "text 1" },
  { value: "Text 2", label: "text 2" },
  { value: "Text 3", label: "text 3" },
];
const DeleteAccount = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    fatherName: "",
    phoneNumber: "",
    userId: "",
    contract: "",
    bank: "",
    message: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, values, handleChange }) => (
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
                id="userId"
                name="userId"
                label="Müştəri id"
                variant="outlined"
                value={values.userId}
                onChange={handleChange}
                error={touched.userId && Boolean(errors.userId)}
                helperText={touched.userId && errors.userId}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="contract"
                name="contract"
                label="Müqavilə"
                variant="outlined"
                value={values.contract}
                onChange={handleChange}
                error={touched.contract && Boolean(errors.contract)}
                helperText={touched.contract && errors.contract}
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
                label="Qeyd"
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

export default DeleteAccount;
