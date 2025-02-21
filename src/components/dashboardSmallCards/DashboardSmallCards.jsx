import React from 'react'
import wallet from '../../assets/icons/wallet.svg';
import Iconrec from "../../components/iconRect/Iconrect.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS (for components)
import "./DashboardSmallCards.css";

function DashboardSmallCards() {
  return (

    <div className="cards-item">
      <div className='cards-icon-conainer '>
        <Iconrec imgsrc={wallet} recbgcolor="#4FD1C5" imgheight="12px" imgwidth="12px" containerheight="30px" containerwidth="30px" />
        <span className='names'>Users</span>
      </div>

      <p className="cards-item-num">32,984</p>

      <div className="progress" style={{ width: "100%", height: "6px", marginTop: "-10px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "70%", backgroundColor: '#4FD1C5' }}
        >
        </div>
      </div>

    </div>
  )
}

export default DashboardSmallCards