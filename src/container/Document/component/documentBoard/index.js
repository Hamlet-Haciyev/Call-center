import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "Sənədin adı", width: 180 },
  { field: "age", headerName: "File uzantısı", type: "number" },
  {
    field: "dateCreated",
    headerName: "Date CreatedHəcmi",
    type: "date",
    width: 180,
  },
  {
    field: "lastLogin",
    headerName: "Yerləşdirilmə tarixi",
    type: "dateTime",
    width: 220,
  },
];

const rows = [
  {
    id: 1,
    name: "Hamlet",
    age: 25,
    dateCreated: "22/25/2022",
    lastLogin: "2/2/2023, 11:16:50 PM",
  },
  {
    id: 2,
    name: "Hamlet",
    age: 36,
    dateCreated: "22/25/2022",
    lastLogin: "2/2/2023, 11:16:50 PM",
  },
  {
    id: 3,
    name: "Hamlet",
    age: 19,
    dateCreated: "22/25/2022",
    lastLogin: "2/2/2023, 11:16:50 PM",
  },
  {
    id: 4,
    name: "Hamlet",
    age: 28,
    dateCreated: "22/25/2022",
    lastLogin: "2/2/2023, 11:16:50 PM",
  },
  {
    id: 5,
    name: "Hamlet",
    age: 23,
    dateCreated: "22/25/2022",
    lastLogin: "2/2/2023, 11:16:50 PM",
  },
];
const DocumentBoard = () => {
  return (
    <Box
      sx={{
        height: "300px",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Typography
        component={"h4"}
        color="#75787B"
        padding={"15px 20px"}
        backgroundColor="#FBFBFB"
      >
        Sənəd Cədvəli
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default DocumentBoard;
