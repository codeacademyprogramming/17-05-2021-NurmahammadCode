import React from "react";
import "./CustomSelect.css";

export default function CustomSelect({
  dummyData,
  setOption,
  disabled = false,
}) {
  return (
    <select
      disabled={disabled}
      onChange={(value) => setOption(value.target.value)}
      className="custom-select"
    >
      {disabled ? (
        <option>AZN</option>
      ) : (
        dummyData.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))
      )}
    </select>
  );
}
