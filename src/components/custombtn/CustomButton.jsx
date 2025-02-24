import React from "react";
import "./CustomButton.css";

function CustomButton({ text, color, onClick }) {
  return (
    <button
      className={`custom-button`}
      onClick={onClick}
      style={{ backgroundColor: color }} // Set the button color dynamically

    >
      {text}
    </button>
  );
}

export default CustomButton;
