import React from 'react';
import "./Iconrect.css";

function Iconrect({ recbgcolor, imgsrc,imgheight="15px",imgwidth="15px", containerheight="30px",containerwidth="30px"}) {
  return (
    <div className="icon-rect" style={{ backgroundColor: recbgcolor,   width: containerwidth, 
      height: containerheight,   }}>
      {imgsrc && <img src={imgsrc} alt="icon" style={{ width: imgheight, height: imgwidth}} />}
    </div>
  );
}

export default Iconrect;
