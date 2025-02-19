import React from 'react';
import "./Iconrect.css";

function Iconrect({ recbgcolor, imgsrc,imgheight="15px",imgwidth="15px" }) {
  return (
    <div className="icon-rect" style={{ backgroundColor: recbgcolor,   width: imgheight !== "15px" ? "35px" : "30px", 
      height: imgheight !== "15px" ? "35px" : "30px",   }}>
      {imgsrc && <img src={imgsrc} alt="icon" style={{ width: imgheight, height: imgwidth}} />}
    </div>
  );
}

export default Iconrect;
