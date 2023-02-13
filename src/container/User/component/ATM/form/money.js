import React from "react";
import { Grid, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import { TextField, Button } from "../../../../../components";
import { CurrencyInput } from "../../../../../components";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
const Money = () => {
  const cardTypes = [
    { label: "Business card", value: "businesscard" },
    { label: "Expresscard", value: "expresscard" },
    { label: "Expresso", value: "expresso" },
    { label: "Maestro", value: "maestro " },
  ];
  return (
    <Formik
      initialValues={{
        paymentType: "Pul",
        firstName: "",
        lastName: "",
        fatherName: "",
        identificationSerie: "",
        phoneNumber: "",
        date: dayjs(new Date()),
        time: dayjs(new Date()).format("hh:mm"),
        currency: "azn",
        amount: "",
        terminalNumber: "",
        belongTerminal: "",
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
            <Grid item display={"flex"} gap={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  id="date"
                  name="date"
                  label="Başvermə tarixi"
                  inputFormat="DD / MM / YYYY"
                  value={values.date}
                  onChange={(value) => setFieldValue("date", value, true)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextField
                  id="time"
                  name={"time"}
                  label="Başvermə Vaxtı"
                  type="time"
                  value={values.time}
                  onChange={handleChange}
                  sx={{ width: 210 }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item width={"100%"}>
              <CurrencyInput
                currency={"currency"}
                amount={"amount"}
                placeholder={"Məbləğ"}
                currencyValue={values.currency}
                inputValue={values.amount}
                handleChangeSelect={(e) =>
                  setFieldValue("currency", e.target.value, true)
                }
                handleChangeInput={(e) =>
                  setFieldValue("amount", e.target.value, true)
                }
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="terminalNumber"
                name="terminalNumber"
                label="Bankomatın terminal nömrəsi və ünvanı"
                variant="outlined"
                value={values.terminalNumber}
                onChange={handleChange}
                error={touched.terminalNumber && Boolean(errors.terminalNumber)}
                helperText={touched.terminalNumber && errors.terminalNumber}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="belongTerminal"
                name="belongTerminal"
                label="Bankomat hansı banka aiddir"
                variant="outlined"
                value={values.belongTerminal}
                onChange={handleChange}
                error={touched.belongTerminal && Boolean(errors.belongTerminal)}
                helperText={touched.belongTerminal && errors.belongTerminal}
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
                select
                id="cardType"
                name="cardType"
                label="Plastik kartın növü"
                value={values.cardType}
                onChange={handleChange}
                fullWidth
              >
                {cardTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item width={"100%"}>
              <TextField
                id="belongCard"
                name="belongCard"
                label="Plastik kart hansı banka aiddir"
                variant="outlined"
                value={values.belongCard}
                onChange={handleChange}
                error={touched.belongCard && Boolean(errors.belongCard)}
                helperText={touched.belongCard && errors.belongCard}
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
                heightTextArea="114px"
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                fullWidth
              />
            </Grid>
            <Grid item width={"100%"}>
              <Button
                variant={"outlined"}
                type="submit"
                text={"Göndər"}
                radius={"38px"}
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Money;
