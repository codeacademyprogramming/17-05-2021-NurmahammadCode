import React from "react";
import "./CustomButton.css";

export default function CustomButton({ click }) {
  return (
    <button className="custom-button" onClick={click}>
      Exchange
    </button>
  );
}
