import React from "react";
import "./CustomInput.css";

export default function CustomInput({ value, setvalue, disabled, labelRef }) {
  return (
    <input
      ref={labelRef}
      className="custom-input"
      type="text"
      value={value}
      onChange={(value) => setvalue(value.target.value)}
      disabled={disabled}
      style={disabled ? { border: "none" } : null}
    />
  );
}
