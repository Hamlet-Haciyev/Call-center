import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  currencyMenu: {
    color: " #75787b",
    border: "1px solid #b1b3b3",
    backgroundColor: "#f7f7f7",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    padding: "10px 5px",
    outline: "none",
    width: "70px",
  },
  currencyAmount: {
    border: "1px solid #b1b3b3",
    color: "#75787b",
    borderLeft: "none",
    outline: "none",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    fontSize: "14px",
    padding: "10px",
    width: " calc(100% - 70px)",
  },
});
const CurrencyInput = ({
  currency,
  amount,
  placeholder,
  handleChangeSelect,
  handleChangeInput,
  currencyValue,
  inputValue,
}) => {
  const classes = useStyles();
  const currencies = [
    { value: "azn", label: "AZN" },
    { value: "usd", label: "USD" },
    { value: "rub", label: "RUB" },
  ];
  return (
    <div>
      <select
        id={currency}
        name={currency}
        className={classes.currencyMenu}
        value={currencyValue && currencyValue}
        onChange={handleChangeSelect}
      >
        {currencies?.map((curr) => {
          return (
            <option
              key={curr?.value}
              value={curr?.value}
              className="currency-item"
            >
              {curr?.label}
            </option>
          );
        })}
      </select>
      <input
        type={"text"}
        id={amount}
        name={amount}
        className={classes.currencyAmount}
        placeholder={placeholder}
        value={inputValue && inputValue}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default CurrencyInput;
