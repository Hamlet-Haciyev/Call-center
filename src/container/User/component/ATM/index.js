import React from "react";
import { Box, Typography } from "@mui/material";

const ATM = () => {
  return (
    <Box
      sx={{
        width: "360px",
        borderRadius: "12px",
        background: "#fff",
        padding: "22px 30px",
      }}
    >
      <Typography component={"h2"} color={"#FFA300"}>ATM</Typography>
    </Box>
  );
};

export default ATM;
