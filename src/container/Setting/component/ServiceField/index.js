import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import React, { useMemo, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../../../assets/icons";
import {
  Button,
  Modal,
  Pagination,
  SearchInput,
  TextField,
} from "../../../../components";
import { useDeleteSettingMutation } from "../../../../services/setting";
const DataGridSx = {
  border: "none",
  "& .MuiDataGrid-columnHeaders": {
    padding: "0px 23px",
  },
  "& .MuiDataGrid-columnHeader[tabindex='0']": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontFamily: "bold",
    fontSize: "16px",
    color: "#63666A",
  },
  "& .MuiDataGrid-cell": {
    fontFamily: "Regular",
    fontSize: "16px",
    color: "#63666A",
    border: "none",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  ".MuiDataGrid-row": {
    padding: "0px 23px",
    minHeight: "65px !important",
    alignItems: "center",
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
  "& .MuiDataGrid-virtualScrollerContent": {
    height: "350px !important",
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
const ServiceField = () => {
  const navigate = useNavigate();
  let data = [
    {
      id: 1,
      serviceField: "Hökümət ödənişləri",
      postDate: "12.06.2022",
    },
    {
      id: 2,
      serviceField: "Təhsil",
      postDate: "12.06.2022",
    },
    {
      id: 3,
      serviceField: "TV & İnternet",
      postDate: "12.06.2022",
    },
    {
      id: 4,
      serviceField: "Qalıq kartı",
      postDate: "12.06.2022",
    },
    {
      id: 5,
      serviceField: "Bank xidmətləri",
      postDate: "12.06.2022",
    },
    {
      id: 6,
      serviceField: "Sığorta",
      postDate: "12.06.2022",
    },
    {
      id: 7,
      serviceField: "Telefon",
      postDate: "12.06.2022",
    },
    {
      id: 8,
      serviceField: "E-pul kisəsi",
      postDate: "12.06.2022",
    },
    {
      id: 9,
      serviceField: "",
      postDate: "12.06.2022",
    },
    {
      id: 10,
      serviceField: "",
      postDate: "12.06.2022",
    },
  ];
  const [deleteSetting, response] = useDeleteSettingMutation();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = useMemo(() => 6, []);

  const [deletePopupOpen, setDeletePopupOpen] = useState({
    isDelete: false,
    itemId: null,
  });

  const [rows, setRows] = useState([]);
  const columns = useMemo(
    () => [
      {
        field: "No",
        headerName: "No",
        sortable: false,
        width: 140,
      },
      {
        field: "serviceField",
        headerName: "Xidmət sahəsi",
        sortable: false,
        width: 320,
      },
      {
        field: "postDate",
        headerName: "Yerləşdirilmə tarixi",
        type: "dateTime",
        sortable: false,
        width: 270,
      },
      {
        field: "actions",
        headerName: "",
        renderCell: (row) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              sx={{ cursor: "pointer" }}
              // onClick={() => navigate(`/document/${row.id}`)}
            >
              <Icon name={"edit"} color={"#ffb500"} />
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() =>
                setDeletePopupOpen({ isDelete: true, itemId: row.id })
              }
            >
              <Icon name={"delete"} />
            </Box>
          </Box>
        ),
        sortable: false,
        width: 90,
      },
    ],
    []
  );

  const handleDeleteItem = useCallback(
    (id) => {
      deleteSetting(id);
      setRows(rows.filter((row) => row.id !== id));
      setDeletePopupOpen({ isDelete: false, itemId: null });
    },
    [deletePopupOpen]
  );

  const showDataSlice = useCallback(() => {
    return rows.slice((page - 1) * pageSize, page * pageSize);
  }, [rows, page]);
  useEffect(() => {
    data = data.map((item, index) => {
      return { ...item, No: ++index };
    });
    if (searchTerm)
      setRows(data.filter((row) => row.serviceField.includes(searchTerm)));
    else setRows([]);
  }, [searchTerm]);
  return (
    <>
    
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
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
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
      <Box
        sx={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          "&  .MuiDataGrid-footerContainer": {
            display: "none",
          },
        }}
      >
        {deletePopupOpen.isDelete ? (
          <Modal
            open={deletePopupOpen.isDelete}
            onClose={setDeletePopupOpen}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#fff",
                padding: "30px 20px 60px 20px",
                borderRadius: "8px",
                width: 490,
              }}
            >
              <div className="closebtn-wrapper">
                <button
                  variant="outlined"
                  onClick={() =>
                    setDeletePopupOpen({ isDelete: false, itemId: null })
                  }
                  className="closebtn"
                >
                  <Icon name={"close"} />
                </button>
              </div>
              <h2 className="modal-title">Silmək istədiyinizdən əminsiniz??</h2>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "108px", marginRight: "10px" }}>
                  <Button
                    text={"Bəli"}
                    variant="outlined"
                    onClick={(e) => handleDeleteItem(deletePopupOpen.itemId)}
                    radius={"8px"}
                  />
                </Box>
                <Box sx={{ width: "108px" }}>
                  <Button
                    text={"Xeyir"}
                    onClick={(e) =>
                      setDeletePopupOpen({ isDelete: false, itemId: null })
                    }
                    radius={"8px"}
                    style={{
                      background: "#fff",
                      color: "#75787b",
                      border: "1px solid #B1B3B3",
                      padding: "5px 40px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Modal>
        ) : null}
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          padding={"15px 20px"}
          backgroundColor="#FBFBFB"
        >
          <Typography
            fontFamily={"Regular"}
            fontSize={"16px"}
            component={"h4"}
            color="#75787B"
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
        <DataGrid
          sx={DataGridSx}
          rows={searchTerm ? showDataSlice() : []}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          disableColumnMenu={true}
          autoHeight={true}
        />
        {rows.length > 6 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "15px 30px",
            }}
          >
            <Typography component={"span"} color={"#75787B"}>
              {showDataSlice().length} / {rows.length}
            </Typography>
            <Pagination
              onChange={(e, page) => setPage(page)}
              count={Math.ceil(rows.length / pageSize)}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default ServiceField;
