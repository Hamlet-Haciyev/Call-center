import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "../../../../components";
import { Icon } from "../../../../assets/icons";
import { GetAllPeople } from "../../../../store/document";
import { useDispatch, useSelector } from "react-redux";
const DataGridSx = {
  border: "none",
  height: "421px",
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
};

const DocumentBoard = () => {
  const data = useSelector((state) => state.document.data);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(GetAllPeople()));
    console.log(data);
  }, []);
  const [rows, setRows] = useState([]);

  const [columns, setColumns] = useState([
    {
      field: "No",
      headerName: "No",
      sortable: false,
      width: 100,
    },
    {
      field: "documentName",
      headerName: "Sənədin adı",
      sortable: false,
      width: 280,
    },
    {
      field: "fileLength",
      headerName: "File uzantısı",
      sortable: false,
      width: 210,
    },
    {
      field: "size",
      headerName: "Həcmi",
      sortable: false,
      width: 215,
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
          <Box sx={{ cursor: "pointer" }}>
            <Icon name={"edit"} color={"#ffb500"} />
          </Box>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => handleDeleteItem(row.id)}
          >
            <Icon name={"delete"} />
          </Box>
        </Box>
      ),
      sortable: false,
      width: 100,
    },
  ]);
  const handleDeleteItem = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        mb: "20px",
      }}
    >
      <Typography
        fontFamily={"Regular"}
        fontSize={"16px"}
        component={"h4"}
        color="#75787B"
        padding={"15px 20px"}
        backgroundColor="#FBFBFB"
      >
        Sənəd Cədvəli
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "13px 30px",
        }}
      >
        <Box sx={{ width: "119px" }}>
          <Button
            text={"Əlavə et"}
            variant={"outlined"}
            padding={"2px 5px"}
            radius={"12px"}
            startIcon={<Icon name="add" />}
          />
        </Box>
        <div>search input</div>
      </Box>
      <DataGrid
        sx={DataGridSx}
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[6]}
        pagination
        page={page}
        pageSize={pageSize}
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default DocumentBoard;
