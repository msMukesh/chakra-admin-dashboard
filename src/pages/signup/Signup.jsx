import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Rectangle from "./Rectangle";
import apple from '../../assets/icons/apple.png';
import facebook from '../../assets/icons/facebook.png';
import google from '../../assets/icons/google.png';
import Togglebutton from "../../components/togglebutton/Togglebutton.jsx";
// import Footer from "../footermenu/Footer.jsx"

function Signup() {
  return (
  <>
  <div className="signup-container">
    <div className="signup-bg"> 
    </div>
    <div className="welcome">
      <h3>Welcome!</h3>
      <br/>
      <div>
        <p> Use these awesome forms to login or create new </p>
        <p> account in your project for free</p>
      </div>
    </div>

    <div className="addUser">
      <div className="head"> 
      <h3>Register with</h3>
      <div className="RectangleDiv"> 
      <Rectangle rectangleImage={facebook} />
      <Rectangle rectangleImage={apple} />
      <Rectangle rectangleImage={google} />
      </div>
      <p>or</p>
      </div>

      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your full name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your emai address" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Your password" required />
          
      <div className="toggle-div">
          <Togglebutton/>
          <span className='toggletext-signup '>Remember me</span>

      </div>

          <button type="submit" className="signupBtn">Sign Up</button>
        </div>
      </form>
      

      <div className="signincontainer">
        <p>Already have an account?</p>
        <Link to="/signin" className="signinLink">Sign in</Link>
      </div>

    </div>
    
    </div>
    </>
  );
}

export default Signup;
