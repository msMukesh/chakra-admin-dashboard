import React from 'react';
import Sidepanel from '../../components/sidepannel/Sidepanel';
import "./Dashboardscreen.css";

function Dashboardscreen() {
  return (
    <div className='dashboard-container'>
        <Sidepanel />
        <div className="dashboard-content">
            Dashboardscreen Content Here
        </div>
    </div>
  );
}

export default Dashboardscreen;
