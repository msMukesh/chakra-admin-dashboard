import React from 'react';
import { useLocation } from 'react-router-dom';  // Correct import for useLocation
import "./Navbar.css";
import dashboardlogo from "../../assets/icons/dashboard.svg";
import profilelogo from "../../assets/icons/profile.svg";
import signuplogo from "../../assets/icons/signup.svg";
import signinlogo from "../../assets/icons/signin.svg";
import creativetimlogo from "../../assets/icons/logo-creative-tim-black.svg";
import dashboardblue from "../../assets/icons/dashboard-blue.svg";
import profileblue from "../../assets/icons/profile-blue.svg";
import signupblue from "../../assets/icons/signup-blue.svg";
import signinblue from "../../assets/icons/signin-blue.svg";
import creativetimlogoblue from "../../assets/icons/logo-creative-tim-black-blue.svg";
import { Link } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  const isSigninPage = location.pathname === "/signin"; // Check if the current page is the Signin page

  return (
    <nav className={`navbar ${isSigninPage ? 'signin-navbar' : ''}`}>
      <div className="navbar-container">
        <div className='nav-name'><img src={isSigninPage ? creativetimlogoblue : creativetimlogo} ></img>
         <span>PURITY UI DASHBOARD</span></div>
        <div className='nav-menu'>
            <ul className='nav-list'>
                    <li className="nav-item">
                    <img  className="nav-icon" src={isSigninPage ? dashboardblue : dashboardlogo} alt="dashboard" />
                    <span><Link to="/dashboardscreen" className="dashboardlink">DASHBOARD</Link>
                    </span>

                    </li>
                    <li className="nav-item">
                    <img className="nav-icon" src={isSigninPage ? profileblue : profilelogo} alt="profile" />
                    <span>PROFILE</span>
                    </li>
                    <li className="nav-item">
                    <img className="nav-icon" src={isSigninPage ? signupblue : signuplogo} alt="signup"/>
                    <span><Link to="/" className='dashboardlink'>SIGN UP</Link></span>
                    </li>
                    <li className="nav-item">
                    <img className="nav-icon" src={isSigninPage ? signinblue : signinlogo} alt="signin"/>
                    <span><Link to="/signin" className='dashboardlink'>SIGN IN</Link></span>
                    </li>
            </ul>
        </div>
       
        <button type="" className={`freeDownload ${isSigninPage ? 'signin-btn' : ''}`}>Free Download</button>
      
        </div>
    </nav>
  )
}

export default Navbar