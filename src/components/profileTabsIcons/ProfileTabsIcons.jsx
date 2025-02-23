import React from 'react';
import "./ProfileTabsIcons.css";

function ProfileTabsIcons({iconscr,text}) {
    return (
        <div className='icon-container'>
        <img className="icon-element" src={iconscr} alt="overview " />
        <span className='icon-txt'><a>{text} </a></span>
        </div>
);
}

export default ProfileTabsIcons;