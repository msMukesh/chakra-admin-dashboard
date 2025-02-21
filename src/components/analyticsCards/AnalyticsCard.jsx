import React from 'react'
import "./AnalyticsCard.css";
import Iconrec from "../iconRect/Iconrect.jsx";
// import wallet from "../../assets/icons/wallet.svg"
function AnalyticsCard({ text, amount, percentage, iconsrc }) {
  return (
    <div className='analytics-card-container'>
      <div className='analytics-card-data'>
        <div className='analytics-card-data-text'>{text}</div>
        <div className='analytics-card-data-num'> <span>{amount}</span><span>{percentage}</span></div>
      </div>
      <div className='analytics-card-img'>
        <Iconrec imgsrc={iconsrc} recbgcolor="#4FD1C5" imgheight="22.5px" imgwidth="22.5px" containerheight="45px" containerwidth="45px" />
      </div>
    </div>
  )
}

export default AnalyticsCard