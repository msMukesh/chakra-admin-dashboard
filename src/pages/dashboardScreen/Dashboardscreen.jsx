import React from 'react';
import Sidepanel from '../../components/sidepannel/Sidepanel';
import Apptollbar from '../../components/apptoolbar/Apptoolbar.jsx';
import "./Dashboardscreen.css";

function Dashboardscreen() {
  return (
    <div className='dashboard-container'>
        <Sidepanel />
        <Apptollbar/>
       
    </div>
  );
}

export default Dashboardscreen;
