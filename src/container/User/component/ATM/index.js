import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { TextField } from "../../../../components";

const ATM = () => {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        background: "#fff",
        padding: "22px 35px",
      }}
    >
      <Typography component={"h2"} color={"#FFA300"}>
        ATM
      </Typography>
      <Formik
        initialValues={{
          paymentType: "",
          firtName: "",
          lastName: "",
          fatherName: "",
          identificationSerie: "",
          phoneNumber: "",
          date: "",
          time: "",
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
                width: "150px",
              }}
            >
              Göndər
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ATM;
