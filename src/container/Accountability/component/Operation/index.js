import React, { useEffect, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { TextField, Button } from "../../../../components";
import { Icon } from "../../../../assets/icons";
import { DataGrid } from "@mui/x-data-grid";

const DataGridSx = {
  border: "none",
  "& .MuiDataGrid-columnHeaders": {
    padding: "0px 15px",
    border: "none",
  },
  "& .MuiDataGrid-columnHeader[tabindex='0']": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: "16px",
    color: "#63666A",
  },
  "& .MuiDataGrid-cell": {
    fontFamily: "Regular",
    fontSize: "16px",
    color: "#63666A",
    height: "53px",
    border: "none",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  ".MuiDataGrid-row": {
    padding: "0px 15px",
  },
  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "#FFFBF3",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#FFFBF3",
  },
  "& .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: "#FFFBF3",
  },
  "& .MuiDataGrid-columnSeparator": {
    visibility: "hidden",
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    width: "100%",
  },
  ".MuiDataGrid-virtualScroller::-webkit-scrollbar": {
    height: "8px",
  },
  ".MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
    background: "#FBFBFB",
  },
  ".MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
    background: "#D9D9D9",
    borderRadius: "10px",
  },
};
const OperationTheme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiIconButton-root": {
            svg: {
              color: "#FFA300",
            },
          },
          "&.MuiPickersDay-root": {
            margin: "0 3px",
          },
          "&.MuiPickersDay-root:focus.Mui-selected": {
            backgroundColor: "#FFA300",
          },
          "&.MuiPickersDay-root:hover": {
            backgroundColor: "#FFA300",
            color: "#fff",
          },
          "&.MuiPickersDay-root.Mui-selected": {
            backgroundColor: "#FFA300",
          },
          "&.MuiPickersDay-root.Mui-selected:hover": {
            backgroundColor: "#FFB500",
          },
          "&.MuiPickersDay-root:not(.Mui-selected)": {
            border: "1px solid transparent",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "& .MuiYearPicker-root .PrivatePickersYear-yearButton.Mui-selected": {
            backgroundColor: "#FFA300",
          },
          "& .MuiFormControl-root": {
            width: "100%",
          },
          "& .MuiCalendarOrClockPicker-root > div": {
            width: "100%",
            margin: "0px",
          },
          ".MuiCalendarPicker-root .MuiDayPicker-header": {
            justifyContent: "space-evenly",
          },
          ".MuiCalendarPicker-root .MuiDayPicker-weekContainer": {
            justifyContent: "space-evenly",
          },
        },
      },
    },
  },
});
const Operation = () => {
  let data = [
    {
      id: 1,
      documentName: "Təhsil",
      fileLength: ".xlsx",
      size: "12KB",
      postDate: "12.02.2023",
    },
  ];
  const columns = useMemo(
    () => [
      {
        field: "No",
        headerName: "No",
        sortable: false,
        width: 70,
      },
      {
        field: "documentName",
        headerName: "Sənədin adı",
        sortable: false,
        width: 150,
      },
      {
        field: "fileLength",
        headerName: "Fayl uzantısı",
        sortable: false,
        width: 150,
      },
      {
        field: "size",
        headerName: "Həcmi",
        sortable: false,
        width: 150,
      },
      {
        field: "postDate",
        headerName: "Yerləşdirilmə tarixi",
        type: "dateTime",
        sortable: false,
        width: 220,
      },
      {
        field: "actions",
        headerName: "",
        renderCell: (row) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ cursor: "pointer" }} onClick={() => console.log("")}>
              <Icon name={"download"} />
            </Box>
          </Box>
        ),
        sortable: false,
        width: 90,
      },
    ],
    []
  );
  const [rows, setRows] = useState([]);
  useEffect(() => {
    data = data.map((item, index) => {
      return { ...item, No: ++index };
    });
    setRows(data);
  }, []);
  return (
    <ThemeProvider theme={OperationTheme}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          marginBottom: "30px",
          padding: "40px 35px 20px",
          "& .MuiCalendarPicker-root": {
            width: "100%",
            margin: "0",
          },
        }}
      >
        <Formik
          initialValues={{
            startDate: dayjs(new Date()),
            endDate: dayjs(new Date()),
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => (
            <Form>
              <Grid container columnSpacing={10}>
                <Grid item sm={12} md={6} lg={6}>
                  <Box marginBottom={"25px"} width={"100%"}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Başlanğıc tarix"
                        value={values.startDate}
                        onChange={(value) =>
                          setFieldValue("startDate", value, true)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Box>
                  <Box>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale={"az"}
                    >
                      <StaticDatePicker
                        name="startDate"
                        displayStaticWrapperAs="desktop"
                        minDate={dayjs("1/1/2013")}
                        maxDate={dayjs(new Date("1/1/2025"))}
                        value={values.startDate}
                        onChange={(value) =>
                          setFieldValue("startDate", value, true)
                        }
                        dayOfWeekFormatte={(day) => day.charAt(0).toUpperCase()}
                        renderInput={(params) => {
                          return <TextField {...params} />;
                        }}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                  <Box marginBottom={"25px"}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Son tarix"
                        value={values.endDate}
                        onChange={(value) =>
                          setFieldValue("endDate", value, true)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Box>
                  <Box>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale={"az"}
                    >
                      <StaticDatePicker
                        name="endDate"
                        displayStaticWrapperAs="desktop"
                        minDate={dayjs("1/1/2013")}
                        maxDate={dayjs(new Date("1/1/2025"))}
                        value={values.endDate}
                        onChange={(value) =>
                          setFieldValue("endDate", value, true)
                        }
                        dayOfWeekFormatte={(day) => day.charAt(0).toUpperCase()}
                        renderInput={(params) => {
                          return <TextField {...params} />;
                        }}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={12}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Box sx={{ width: "140px" }}>
                    <Button
                      type="submit"
                      radius="82px"
                      text={"Hazırdır"}
                      variant={"outlined"}
                    />
                  </Box>
                </Grid>
              </Grid>
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
        <Box sx={{ backgroundColor: "#FBFBFB", padding: "15.5px 20px" }}>
          <Typography component={"h4"} color={"#75787B"} fontFamily={"Regular"}>
            Nəticələr
          </Typography>
        </Box>
        <DataGrid
          sx={DataGridSx}
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          disableColumnMenu={true}
          autoHeight={true}
          hideFooter={true}
          // onRowClick={(e) => {
          //   setSelectedFile(e.id);
          // }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Operation;
