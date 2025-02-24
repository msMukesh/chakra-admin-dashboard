import React from 'react';
import Sidepanel from '../../components/sidepannel/Sidepanel';
import Apptoolbar from '../../components/apptoolbar/Apptoolbar.jsx';
import AnalyticsCard from '../../components/analyticsCards/AnalyticsCard.jsx';
import analytics_statistics from '../../data/dashboardAnalyticsStat.js';
import chakraimg from "../../assets/images/chakra-image.png";
import CustomBarChart from '../../components/customChart/CustomBarChart.jsx';
import SalesChart from '../../components/customChart/SalesChart.jsx';
import DashboardSmallCards from '../../components/dashboardSmallCards/DashboardSmallCards.jsx';
import small_cards_data from '../../data/smallCardsData.js';
import arrowicon from "../../assets/icons/arrow.svg";
import arrowwhite from "../../assets/icons/arrowwhite.svg";
import "./Dashboardscreen.css";

function Dashboardscreen() {
  return (
    <div className='dashboard-container'>
      
      <div className='sidepanel'><Sidepanel /></div>
      <div className='apptoolbar'><Apptoolbar /></div>
      <div className='dashboard-content'>
        <div className=" analytics-cards row">

          {
            analytics_statistics.map((data,index) => {
              return <div className="analytics-card" key={index}> <AnalyticsCard  text={data.text} amount={data.amount} percentage={data.percentage} iconsrc={data.src} /> </div>
            })
          }

        </div>
        <div className="bigCards">
          <div className="card-dashboard cardOne">
            <div className='cardOne-text'>
              <p>Built by developers</p>
              <p>Purity UI Dashboard</p>
              <p>From colors, cards, typogaphy to complex elements,</p>
              <p>you will find the full documentataion.</p>

              <p className='readmore'>Read more <img src={arrowicon} className='arrowicon' alt="Arrow Icon" /></p>
            </div>

            <div className='cardOne-img'>
              <img src={chakraimg} alt="chakra-image" />
            </div>
          </div>
          <div className=" card-dashboard cardTwo">
            <div className="cardTwoBgImg">
              <p className='cardTwoBgImg-heading'> Work with the Rockets</p>
              <p>Wealth creation is an evolutionarily recent positive-sum game.
              </p>
              <p>It is all about who take the opportunity first.</p>
              <p className='readmore'>Read more <img src={arrowwhite} className='arrowicon' alt="Arrow Icon" /></p>

            </div>
          </div>
        </div>
        <div className="analytics-cards-two rwo">
          <div className="analytics-cards-two-cards firstCard">
            <div className="graph-container">
              <div className="graph-graph"><CustomBarChart /></div>
              <div className="graph-text">
                <h3>Active Users</h3>
                <p><span className='number'>(+23)</span><span> than last week</span></p>
              </div>
              <div className="graph-card">

                {small_cards_data.map((data, ind) => {
                  return <DashboardSmallCards key={ind} iconsrc={data.imgsrc} iconname={data.name} value={data.number} progresspercentage={data.progress} />
                })}

              </div>
            </div>
          </div>

          <div className="analytics-cards-two-cards secondCard">
            <div className='graph-head'><p className='graph-title'>Sales overview</p><p><span>(+5) more </span> in 2021</p></div>
            <SalesChart /></div>
        </div>
        <div className="row">Row 4</div>
      </div>
    </div>
  );
}

export default Dashboardscreen;
