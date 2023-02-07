import React from "react";
import { createTheme, Modal as MuiModal, ThemeProvider } from "@mui/material";
const Modal = ({ open, onClose, children }) => {
  const ModalTheme = createTheme({
    components: {
      MuiModal: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .closebtn": {
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              position: "relative",
              top: "-10px",
              background: "none",
              border: "none",
              padding: 0,
              borderRadius: "8px",
              cursor: "pointer",
            },
            "& .modal-title ": {
              fontFamily: "Regular",
              color: "#75787b",
              fontSize: "22px",
              marginTop: "10px",
              marginBottom: "20px",
            },
            "& .closebtn-wrapper": {
              display: "flex",
              width: "100%",
              justifyContent: "end",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={ModalTheme}>
      <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        {children}
      </MuiModal>
    </ThemeProvider>
  );
};

export default Modal;
