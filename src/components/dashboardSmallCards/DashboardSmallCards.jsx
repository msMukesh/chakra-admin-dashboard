import React from 'react';
import Iconrec from "../../components/iconRect/Iconrect.jsx";

import "./DashboardSmallCards.css";

function DashboardSmallCards({ iconsrc, iconname, value, progresspercentage }) {
  // Ensure progresspercentage is a number
  const progressValue = parseInt(progresspercentage, 10); 

  return (
    <div className="cards-item">
      <div className='cards-icon-conainer '>
        <Iconrec imgsrc={iconsrc} recbgcolor="#4FD1C5" imgheight="13px" imgwidth="13px" containerheight="30px" containerwidth="30px" />
        <span className='names'>{iconname}</span>
      </div>

      <p className="cards-item-num">{value}</p>

      <div className="progress" style={{ width: "100px", height: "4px", backgroundColor: "#E2E8F0", borderRadius: "3px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={progressValue}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: `${progressValue}%`,  // Ensure valid percentage
            height: "4px",
            backgroundColor: '#4FD1C5',
            borderRadius: "3px",
            marginTop:"-2px",
            marginLeft:"-2px",

            transition: "width 0.5s ease-in-out" // Smooth animation
          }}
        >
        </div>
      </div>

    </div>
  );
}

export default DashboardSmallCards;
