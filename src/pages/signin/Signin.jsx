import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import Togglebutton from "../../components/togglebutton/Togglebutton.jsx";
import bgimage from "../../assets/images/signinbg.png";
// import Footer from "../footermenu/Footer.jsx"

function SignIn() {
  return (
    <>
      <div className="signinContainer">
        <div className="signin-content">
          <div className="signinform">
            <h3 className="welcome-text">Welcome Back</h3>
            <p className="subtitle">Enter your email and password to sign in</p>



            <form className="signin-form">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="your email address" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="your password" />
              <div className="toggle-div">
                <Togglebutton />
              </div>

              <button type="submit" className="signinbutton">Sign In</button>
            </form>

            <p className="signup-text">
              Don't have an account? <Link to="/">Sign up</Link>
            </p>

          </div>



        </div>

        <div className="signinbg">
          <img className="signinimg" src={bgimage} alt="Sign In Background" />
        </div>


      </div>

    </>

  );
}

export default SignIn;
