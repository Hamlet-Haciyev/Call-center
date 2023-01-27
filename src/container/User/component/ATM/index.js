import React from "react";
import { Box, Button, Grid, MenuItem, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { TextField } from "../../../../components";
import CurrencyInput from "../../../../components/Input";

const ATM = () => {
  const paymentTypes = [
    { label: "Pul", value: "Pul" },
    { label: "Plastik Kart", value: "Plastik Kart" },
    { label: "SMS Banking", value: "SMS Banking" },
    { label: "3D Secure", value: "3D Secure " },
  ];
  const currencyOptions = [
    { label: "USD", value: "usd" },
    { label: "AZN", value: "azn" },
    { label: "TR", value: "tr" },
  ];
  return (
    <Formik
      initialValues={{
        paymentType: "Pul",
        firtName: "",
        lastName: "",
        fatherName: "",
        identificationSerie: "",
        phoneNumber: "",
        date: "",
        time: "",
        currency: "",
        amount: "",
        company: "",
        terminalNumber: "",
        cardNumber: "",
        cardType: "",
        belongCard: "",
        message: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, values, handleChange, setFieldValue }) => (
        <Form>
          <Grid container rowSpacing={2.5}>
            <Grid item width={"100%"}>
              <TextField
                select
                id="paymentType"
                name="paymentType"
                label={values.paymentType}
                value={values.paymentType}
                onChange={handleChange}
                fullWidth
              >
                {paymentTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="firtName"
                name="firtName"
                label="Adı"
                variant="outlined"
                value={values.firtName}
                onChange={handleChange}
                error={touched.firtName && Boolean(errors.firtName)}
                helperText={touched.firtName && errors.firtName}
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
                id="identificationSerie"
                name="identificationSerie"
                label="Vəsiqənin seriya və nömrəsi"
                variant="outlined"
                value={values.identificationSerie}
                onChange={handleChange}
                error={
                  touched.identificationSerie &&
                  Boolean(errors.identificationSerie)
                }
                helperText={
                  touched.identificationSerie && errors.identificationSerie
                }
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="(+__) __ ___ __ __"
                variant="outlined"
                value={values.phoneNumber}
                onChange={handleChange}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%^"}>
              {/* <CurrencyInput
                selectId={"currency"}
                selectName="currency"
                selectValue={values.selectValue}
                selectChange={(values) =>
                  setFieldValue("currency", values.currency, true)
                }
                options={currencyOptions}
                id={"amount"}
                name={"amount"}
                value={values.amount}
                handleChange={(values) =>
                  setFieldValue("amount", values.amount, true)
                }
              /> */}
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

export default ATM;
