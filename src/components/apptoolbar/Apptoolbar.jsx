import React from 'react'
import "./Apptoolbar.css"
import notificationicon from "../../assets/apptoolbar/notification.svg";
import settings from "../../assets/apptoolbar/settings.svg";
import signinperson from "../../assets/apptoolbar/persongrey.svg";

import searchicon from "../../assets/apptoolbar/searchicon.svg";

function Apptoolbar() {
  return (
    <div className='toolbar-container'>
      <div className='search'>
        <img className="search-icon" src={searchicon} alt="search icon" />
        <input class="search-input" type="search" placeholder='Type here...'></input>
      </div>

    <div className='tool-menu'>

    <div className='toolbar-signin-conainer'>
    <img className="tool-element" src={signinperson} alt="signin icon" />
        <span className='signin-txt'>Sign In</span>
    </div>

    <img className="tool-element" src={notificationicon} alt="notification icon" />
    <img className="tool-element" src={settings} alt="settings icon" />

    </div>
    </div>
  )
}

export default Apptoolbar