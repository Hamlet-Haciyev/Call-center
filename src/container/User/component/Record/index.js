import React from "react";
import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { Button, TextField } from "../../../../components";
const Record = () => {
  const initialValues = {
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
                multiline
                id="message"
                name="message"
                label="Qeyd..."
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

export default Record;
