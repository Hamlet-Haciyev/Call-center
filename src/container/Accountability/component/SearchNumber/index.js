import React from "react";
import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { TextField, Button } from "../../../../components";
import { DataGrid } from "@mui/x-data-grid";
const DataGridSx = {
  "&": {
    border: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#FBFBFB",
    padding: "15.5px 15px",
    fontFamily: "Regular",
    fontSize: "14px",
    color: "#63666A",
  },
  "& .MuiDataGrid-columnHeader": {
    outline: "none !important",
  },
  "& .MuiDataGrid-row": {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    padding: "0px 15px",
    "&.Mui-selected": {
      backgroundColor: "#FFFBF3",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#FFFBF3",
    },
    "&:focus": {
      outline: "none",
    },
  },

  "& .MuiDataGrid-cell": {
    fontFamily: "Regular",
    fontSize: "14px",
    borderBottom: "none",
    color: "#63666A",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
};
const SearchNumber = () => {
  const defaultRows = [
    {
      id: 1,
      callDate: "2018-03-12 11:45:52.0",
      fullName: "Tərlan Canmirzəyev Eldar oğlu",
      serviceField: "Hesablaşma-Kassa Əməliyyatı",
      serviceType: "Expresso debet/depozit kart",
      record: "Empty",
      complaint: "Empty",
      enterName: "Məlahət Babayev",
    },
    {
      id: 2,
      callDate: "2018-03-12 11:45:52.0",
      fullName: "Tərlan Canmirzəyev Eldar oğlu",
      serviceField: "Hesablaşma-Kassa Əməliyyatı",
      serviceType: "Expresso debet/depozit kart",
      record: "Empty",
      complaint: "Empty",
      enterName: "Məlahət Babayev",
    },
    {
      id: 3,
      callDate: "2018-03-12 11:45:52.0",
      fullName: "Tərlan Canmirzəyev Eldar oğlu",
      serviceField: "Hesablaşma-Kassa Əməliyyatı",
      serviceType: "Expresso debet/depozit kart",
      record: "Empty",
      complaint: "Empty",
      enterName: "Məlahət Babayev",
    },
    {
      id: 4,
      callDate: "2018-03-12 11:45:52.0",
      fullName: "Tərlan Canmirzəyev Eldar oğlu",
      serviceField: "Hesablaşma-Kassa Əməliyyatı",
      serviceType: "Expresso debet/depozit kart",
      record: "Empty",
      complaint: "Empty",
      enterName: "Məlahət Babayev",
    },
    {
      id: 5,
      callDate: "2018-03-12 11:45:52.0",
      fullName: "Tərlan Canmirzəyev Eldar oğlu",
      serviceField: "Hesablaşma-Kassa Əməliyyatı",
      serviceType: "Expresso debet/depozit kart",
      record: "Empty",
      complaint: "Empty",
      enterName: "Məlahət Babayev",
    },
    {
      id: 6,
      callDate: "2018-03-12 11:45:52.0",
      fullName: "Tərlan Canmirzəyev Eldar oğlu",
      serviceField: "Hesablaşma-Kassa Əməliyyatı",
      serviceType: "Expresso debet/depozit kart",
      record: "Empty",
      complaint: "Empty",
      enterName: "Məlahət Babayev",
    },
    {
      id: 7,
      callDate: "2018-03-12 11:45:52.0",
      fullName: "Tərlan Canmirzəyev Eldar oğlu",
      serviceField: "Hesablaşma-Kassa Əməliyyatı",
      serviceType: "Expresso debet/depozit kart",
      record: "Empty",
      complaint: "Empty",
      enterName: "Məlahət Babayev",
    },
  ];
  const columns = [
    {
      field: "callDate",
      headerName: "Zəng tarixi",
      sortable: false,
      width: 100,
    },
    { field: "fullName", headerName: "A.S.A", width: 130, sortable: false },
    {
      field: "serviceField",
      headerName: "Xidmət sahəsi",
      width: 130,
      sortable: false,
    },
    {
      field: "serviceType",
      headerName: "Xidmət növü",
      width: 130,
      sortable: false,
    },
    { field: "record", headerName: "Qeyd", width: 100, sortable: false },
    { field: "complaint", headerName: "Şikayət", width: 130, sortable: false },
    {
      field: "enterName",
      headerName: "Daxil edən",
      width: 100,
      sortable: false,
    },
  ];
  return (
    <>
      <Box
        sx={{
          padding: "20px 18.5px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      >
        <Formik
          initialValues={{
            fullName: "",
            phoneNumber: "",
            callDate: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => (
            <Form>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", marginBottom: "20px" }}
              >
                <Grid item sx={{ flex: "1" }}>
                  <TextField
                    id="fullName"
                    name="fullName"
                    label="A.S.A"
                    value={values.fullName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item sx={{ flex: "1" }}>
                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Mobil nömrə"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item sx={{ flex: "1" }}>
                  <TextField
                    label="Zəng tarixi"
                    id="callDate"
                    name="callDate"
                    value={values.callDate}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box textAlign="end">
                <Button
                  text={"Axtar"}
                  type="submit"
                  variant="outlined"
                  radius="38px"
                  sx={{ width: "140px" }}
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <DataGrid
          sx={DataGridSx}
          rows={defaultRows}
          columns={columns}
          disableColumnMenu={true}
          experimentalFeatures={{ newEditingApi: true }}
          autoHeight={true}
          hideFooter={true}
        />
        <Typography
          component={"p"}
          fontFamily={"Regular"}
          fontSize={"14px"}
          color={"#75787B"}
          padding={"10px 0px 20px 20px"}
        >
          Ümumi say: {defaultRows.length}
        </Typography>
      </Box>
    </>
  );
};

export default SearchNumber;
