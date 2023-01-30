import React, { useState } from "react";
import { Typography, Box, MenuItem } from "@mui/material";
import { TextField } from "../../../../components";
import ATM from "../ATM";
import DeleteAccount from "../DeleteAccount";
import Complaint from "../Complaint";
import Record from "../Record";

const SelectAction = () => {
  const actions = [
    { label: "ATM", value: "ATM" },
    { label: "Hesab sil", value: "Hesab sil" },
    { label: "Şikayət", value: "Şikayət" },
    { label: "Qeyd", value: "Qeyd" },
  ];
  const [value, setValue] = useState("ATM");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box
      sx={{
        borderRadius: "12px",
        background: "#fff",
        padding: "20px 24px",
      }}
    >
      <Box display={"flex"} alignItems={"center"} mb="20px">
        <Typography
          fontFamily={"Regular"}
          component={"h2"}
          fontSize={"21px"}
          color={"#FFA300"}
          width="160px"
        >
          {value}
        </Typography>
        <TextField select value={value} onChange={handleChange} fullWidth>
          {actions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {value === "ATM" ? (
        <ATM />
      ) : value === "Hesab sil" ? (
        <DeleteAccount />
      ) : value === "Şikayət" ? (
        <Complaint />
      ) : (
        <Record />
      )}
    </Box>
  );
};

export default SelectAction;
