import React from "react";
import "./CustomButton.css";

function CustomButton({ text, color, onClick, btnwidth= "65px",
  btnheight="25px" }) {
  return (
    <button
      className={`custom-button`}
      onClick={onClick}
      style={{ backgroundColor: color,width:btnwidth,height:btnheight }} // Set the button color dynamically

    >
      {text}
    </button>
  );
}

export default CustomButton;
