import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal, SearchInput, Pagination } from "../../../../components";
import { Icon } from "../../../../assets/icons";
import {
  useGetDocumentsQuery,
  useDeleteDocumentMutation,
} from "../../../../services/document";
import { useNavigate } from "react-router-dom";
const DataGridSx = {
  border: "none",
  height: "370px",
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
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    width: "100%",
  },
};

const Board = () => {
  const navigate = useNavigate();
  let {
    data = [
      {
        id: 1,
        documentName: "Təhsil",
        fileLength: ".pdf",
        size: "80KB",
        postDate: "2.02.2023",
      },
      {
        id: 2,
        documentName: "TV və internet",
        fileLength: ".pdf",
        size: "52KB",
        postDate: "2.07.2023",
      },
      {
        id: 3,
        documentName: "Qalıq kartı",
        fileLength: ".pdf",
        size: "25KB",
        postDate: "2.09.2023",
      },
      {
        id: 4,
        documentName: "Müştəri siyahısı",
        fileLength: ".pdf",
        size: "58KB",
        postDate: "2.01.2023",
      },
      {
        id: 5,
        documentName: "Hamlet",
        fileLength: ".pdf",
        size: "41KB",
        postDate: "2.02.2023",
      },
      {
        id: 6,
        documentName: "Hamlet",
        fileLength: ".pdf",
        size: "41KB",
        postDate: "2.02.2023",
      },
      {
        id: 7,
        documentName: "Hamlet",
        fileLength: ".pdf",
        size: "41KB",
        postDate: "2.02.2023",
      },
      {
        id: 8,
        documentName: "Təhsil",
        fileLength: ".pdf",
        size: "80KB",
        postDate: "2.02.2023",
      },
      {
        id: 9,
        documentName: "TV və internet",
        fileLength: ".pdf",
        size: "52KB",
        postDate: "2.07.2023",
      },
      {
        id: 10,
        documentName: "Qalıq kartı",
        fileLength: ".pdf",
        size: "25KB",
        postDate: "2.09.2023",
      },
      {
        id: 11,
        documentName: "Qalıq kartı",
        fileLength: ".pdf",
        size: "25KB",
        postDate: "2.09.2023",
      },
      {
        id: 12,
        documentName: "Qalıq kartı",
        fileLength: ".pdf",
        size: "25KB",
        postDate: "2.09.2023",
      },
      {
        id: 13,
        documentName: "Qalıq kartı",
        fileLength: ".pdf",
        size: "25KB",
        postDate: "2.09.2023",
      },
      {
        id: 14,
        documentName: "Qalıq kartı",
        fileLength: ".pdf",
        size: "25KB",
        postDate: "2.09.2023",
      },
      {
        id: 15,
        documentName: "Qalıq kartı",
        fileLength: ".pdf",
        size: "25KB",
        postDate: "2.09.2023",
      },
    ],
    isLoading,
    error,
  } = useGetDocumentsQuery();

  const [deleteDocument, response] = useDeleteDocumentMutation();
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
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/document/${row.id}`)}
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
      deleteDocument(id);
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
      setRows(data.filter((row) => row.documentName.includes(searchTerm)));
    else
      setRows(
        data.map((item, index) => {
          return { ...item, No: ++index };
        })
      );
  }, [searchTerm]);

  return (
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
            onClick={() => navigate(`add`)}
          />
        </Box>
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={"Axtarış..."}
          startAdornment={<Icon name={"search"} />}
        />
      </Box>
      <DataGrid
        sx={DataGridSx}
        rows={searchTerm ? showDataSlice() : []}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        disableColumnMenu={true}
      />
      {searchTerm ? (
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
            {rows.length} sənədin {showDataSlice().length}-sı göstərilir
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
  );
};

export default Board;
