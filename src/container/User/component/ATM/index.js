import React, { useState } from "react";
import {
  MenuItem,
} from "@mui/material";
import { TextField } from "../../../../components";
import Plasticcard from "./form/plasticcard";
import Smsbanking from "./form/smsbanking";
import ThreeDSecure from "./form/3dsecure";
import Money from "./form/money";

const ATM = () => {
  const paymentTypes = [
    { label: "Pul", value: "pul" },
    { label: "Plastik Kart", value: "plastikkart" },
    { label: "SMS Banking", value: "smsbanking" },
    { label: "3D Secure", value: "3dsecure" },
  ];
  const [pymType, setPymSype] = useState("pul");
  const handleChangePaymentType = (e) => {
    setPymSype(e.target.value);
  };
  return (
    <>
      <TextField
        select
        id="paymentType"
        name="paymentType"
        label={pymType}
        value={pymType}
        onChange={(e) => handleChangePaymentType(e)}
        style={{ marginBottom: "20px" }}
        fullWidth
      >
        {paymentTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {pymType === "pul" ? (
        <Money />
      ) : pymType === "plastikkart" ? (
        <Plasticcard />
      ) : pymType === "smsbanking" ? (
        <Smsbanking />
      ) : (
        <ThreeDSecure />
      )}
    </>
  );
};

export default ATM;
