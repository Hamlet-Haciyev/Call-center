import React, { useMemo, useEffect, useState, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
} from "@mui/material";
import { Icon } from "../../../../assets/icons";
import { TextField, Button, SearchInput } from "../../../../components";
import { Form, Formik } from "formik";
import dayjs from "dayjs";
const ServiceField = () => {
  const ServiceFieldTheme = createTheme({
    components: {
      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            borderBottom: "0.5px solid #B1B3B3",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: "none",
          },
        },
      },
    },
  });
  const [editRowId, setEditRowId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      serviceField: "John",
      postDate: dayjs(new Date("6/11/2022")),
    },
    {
      id: 2,
      serviceField: "Jane",
      postDate: dayjs(new Date("6/11/2022")),
    },
    {
      id: 3,
      serviceField: "Bob",
      postDate: dayjs(new Date("6/11/2022")),
    },
  ]);

  const [editFormData, setEditFormData] = useState({
    serviceField: "",
    postDate: dayjs(new Date()),
  });

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    const formValues = {
      serviceField: row.serviceField,
      postDate: row.postDate,
    };
    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedData = {
      id: editRowId,
      serviceField: editFormData.serviceField,
      postDate: editFormData.postDate,
    };
    const newList = [...data];
    const index = data.findIndex((row) => row.id === editRowId);
    newList[index] = editedData;
    setData(newList);
    setEditRowId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...editFormData };
    newFormData[name] = value;
    setEditFormData(newFormData);
  };

  const handleDeleteClick = (row) => {
    const newList = data.filter((item) => item.id !== row.id);
    setData(newList);
  };
  return (
    <ThemeProvider theme={ServiceFieldTheme}>
      <Box
        sx={{
          background: "#fff",
          marginBottom: "30px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography
          component={"h2"}
          color="#75787B"
          fontFamily={"Regular"}
          backgroundColor="#FBFBFB"
          padding={"15.5px 20px"}
        >
          Yeni xidmət sahəsi
        </Typography>
        <Box sx={{ padding: "10px 15px 20px" }}>
          <Formik
            initialValues={{
              serviceField: "",
              postDate: dayjs(new Date()),
            }}
            onSubmit={(values, actions) => {
              setData([
                ...data,
                {
                  serviceField: values.serviceField,
                  postDate: values.postDate,
                },
              ]);
              alert(JSON.stringify(values, null, 2));
              actions.resetForm();
            }}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <Box display="flex" alignItems={"center"}>
                  <TextField
                    id="serviceField"
                    name="serviceField"
                    label="Yeni xidmət sahəsi..."
                    value={values.serviceField}
                    onChange={handleChange}
                    borderRadius="12px"
                    sx={{ width: "320px" }}
                  />
                  <Box width={"120px"} marginLeft="20px">
                    <Button
                      text={"Əlavə et"}
                      variant={"outlined"}
                      padding={"7px"}
                      radius={"12px"}
                      type="submit"
                      startIcon={<Icon name="add" />}
                    />
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          padding={"15.5px 20px"}
          backgroundColor="#FBFBFB"
        >
          <Typography
            component={"h4"}
            color={"#75787B"}
            fontFamily={"Regular"}
            backgroundColor={"#FBFBFB"}
          >
            Xidmət sahəsi
          </Typography>
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ padding: "5px 15px", backgroundColor: "#fff" }}
            placeholder={"Axtarış..."}
            endAdornment={<Icon name={"search"} />}
          />
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Xidmət sahəsi</TableCell>
              <TableCell>Yerləşdirilmə tarixi</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  {editRowId === row.id ? (
                    <input
                      name="serviceField"
                      value={editFormData.serviceField}
                      onChange={handleChange}
                    />
                  ) : (
                    row.serviceField
                  )}
                </TableCell>
                <TableCell>{row.postDate.format("DD.MM.YYYY")}</TableCell>
                <TableCell>
                  {editRowId === row.id ? (
                    <IconButton onClick={(e) => handleEditFormSubmit(e, row)}>
                      <Icon name="save" />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => handleEditClick(row)}>
                      <Icon name="edit" color={"#FFA300"}/>
                    </IconButton>
                  )}
                  <IconButton onClick={() => handleDeleteClick(row)}>
                    <Icon name="delete" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default ServiceField;
