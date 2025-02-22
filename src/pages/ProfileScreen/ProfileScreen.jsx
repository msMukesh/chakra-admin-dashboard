import React from 'react';
import "./ProfileScreen.css";
import Sidepanel from '../../components/sidepannel/Sidepanel';
import Apptoolbar from '../../components/apptoolbar/Apptoolbar.jsx';
import ProfileScreenbg from '../../assets/images/ProfileScreenBg.png';
function ProfileScreen() {
  return (
    <div className='profileScreen-container'>
         <div className='sidepanel'><Sidepanel /></div>
         <div className='apptoolbar-profileScreen'><Apptoolbar /></div>
         
         <img className='profileScreen-bg' src={ProfileScreenbg}></img>

        <div className='profileScreen-content'>


        </div>
    </div>
  )
}

export default ProfileScreen