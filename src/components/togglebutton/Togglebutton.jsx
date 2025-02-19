import React from 'react';
import "./togglebutton.css";

function Togglebutton() {
  return (
    <div className='togglebtn-container'>
      <label className='switch '>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <span className='toggletext '>Remember me</span>
    </div>
  );
}

export default Togglebutton;
