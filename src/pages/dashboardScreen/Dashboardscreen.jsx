import React from 'react';
import Sidepanel from '../../components/sidepannel/Sidepanel';
import Apptoolbar from '../../components/apptoolbar/Apptoolbar.jsx';
import "./Dashboardscreen.css";
import AnalyticsCard from '../../components/analyticsCards/AnalyticsCard.jsx';
import analytics_statistics from '../../data/dashboardAnalyticsStat.js';
import chakraimg from "../../assets/images/chakra-image.png";
function Dashboardscreen() {
  return (
    <div className='dashboard-container'>
        <div className='sidepanel'><Sidepanel /></div>
        <div className='apptoolbar'><Apptoolbar /></div>
        <div className='dashboard-content'>
            <div className=" analytics-cards row">

              {
                analytics_statistics.map((data)=>{
                  return   <div className="analytics-card"> <AnalyticsCard text={data.text} amount={data.amount} percentage={data.percentage}  iconsrc={data.src} /> </div>
                })
              }
      
            </div>
            <div className="bigCards">
              <div className="card cardOne">
              <div className='cardOne-text'>
                <p>Built by developers</p>
                <p>Purity UI Dashboard</p>
                <p>From colors, cards, typogaphy to complex elements,</p>
                <p>you will find the full documentataion.</p>

              </div>
              <div className='cardOne-img'>
                <img src={chakraimg} alt="chakra-image" />
              </div>
              </div>
              <div className=" card cardTwo">
              <div className="cardTwoBgImg">
              <p className='cardTwoBgImg-heading'> Work with the Rockets</p>
              <p>Wealth creation is an evolutionarily recent positive-sum game.
              </p>
              <p>It is all about who take the opportunity first.</p>

              </div>
              </div>
            </div>
            <div className="row">Row 3</div>
            <div className="row">Row 4</div>
        </div>
    </div>
  );
}

export default Dashboardscreen;
