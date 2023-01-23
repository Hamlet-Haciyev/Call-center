import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Information from "./component/Information";
import ATM from "./component/ATM";
const User = () => {
  return (
    <Container maxWidth="xl" style={{ background: "#F5F5F5" }}>
      <Box sx={{ display: "flex", padding: "35px 0" }}>
        <Information />
        <ATM />
      </Box>
    </Container>
  );
};

export default User;
