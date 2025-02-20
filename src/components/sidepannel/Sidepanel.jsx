import React from 'react';
import "./Sidepanel.css";
import creativetimlogoblue from "../../assets/icons/logo-creative-tim-black-blue.svg";
import dashboardhouse from "../../assets/sidebar/House.svg";
import tables from "../../assets/sidebar/tabless.svg";
import billingimg from "../../assets/sidebar/billingimg.svg";
import toolsrtl from "../../assets/sidebar/toolrtl.svg";
import profile from "../../assets/sidebar/profile.svg";
import signinfolder from "../../assets/sidebar/signinfolder.svg";
import rocket from "../../assets/sidebar/rocket.svg";
import needhelp from "../../assets/sidebar/questionmark.svg";
import Iconrec from "../iconRect/Iconrect.jsx";

function Sidepanel() {
  return (
    <div className='sidepanel-container'>
        <div className='nav-head'>
            <img src={creativetimlogoblue} alt="Logo" />
            <span>PURITY UI DASHBOARD</span>
        </div>
        <hr className="custom-hr" />
<div className='menu'>
<div className='dashboard-home'>
        <Iconrec imgsrc={dashboardhouse} recbgcolor="#4FD1C5"/>
        <span>Dashboard</span>
        </div>

        <div className='icon-conainer tables'>
        <Iconrec imgsrc={tables} recbgcolor="#FFFFFF"/>
        <span className='names'>Tables</span>
        </div>

        <div className='icon-conainer '>
        <Iconrec imgsrc={billingimg} recbgcolor="#FFFFFF"/>
        <span className='names'>Billing</span>
        </div>

        <div className='icon-conainer '>
        <Iconrec imgsrc={toolsrtl} recbgcolor="#FFFFFF"/>
        <span className='names'>RTL</span>
        </div>

        <div className='icon-conainer '>
        <p className='textaccpage'> ACCOUNTS PAGES</p>
        </div>

        <div className='icon-conainer '>
        <Iconrec imgsrc={profile} recbgcolor="#FFFFFF"/>
        <span className='names'>Profile</span>
        </div>

        <div className='icon-conainer '>
        <Iconrec imgsrc={signinfolder} recbgcolor="#FFFFFF"/>
        <span className='names'>Sign In</span>
        </div>

        <div className='icon-conainer '>
        <Iconrec imgsrc={rocket} recbgcolor="#FFFFFF"/>
        <span className='names'>Sign Up</span>
        </div>
</div>
      

        <div className='needhelp-container'>
        <div className='needhelp-icon '>
        <Iconrec imgsrc={needhelp} recbgcolor="#FFFFFF" imgheight="20px" imgwidth="20px" containerheight="35px" containerwidth="35px"/>
        </div>

<div className='needhelp-text-container'>
  <p className='needhelp-text1'>Need help?</p>
  <p className='needhelp-text2'>Please check our docs</p>
</div>

<button className="custom-button">DOCUMENTATION</button>

          </div>
    </div>
  );
}

export default Sidepanel;
