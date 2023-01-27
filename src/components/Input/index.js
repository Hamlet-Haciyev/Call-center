import React from "react";

const CurrencyInput = ({
  selectId,
  selectName,
  selectValue,
  selectChange,
  options,
  id,
  name,
  value,
  handleChange,
}) => {
  return (
    <div>
      <select id={selectId} name={selectName} value={selectValue} onChange={selectChange}>
        {options.map((opt,index) => {
          return <option key={index} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <input id={id} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default CurrencyInput;
