import React, { useState } from "react";
import ATM from "../ATM";
import DeleteAccount from "../DeleteAccount";
import Complaint from "../Complaint";
import Record from "../Record";
import { Typography, Box, MenuItem } from "@mui/material";
import { TextField } from "../../../../components";

const SelectAction = () => {
  const actions = [
    { label: "ATM", value: "ATM" },
    { label: "Hesab sil", value: "Hesabi sil" },
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
        padding: "22px 35px",
      }}
    >
      <Box display={"flex"} alignItems={"center"} mb="20px">
        <Typography
          fontFamily={"Regular"}
          component={"h1"}
          fontSize={"22px"}
          color={"#FFA300"}
          width="100px"
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
      ) : value === "Hesabi sil" ? (
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
