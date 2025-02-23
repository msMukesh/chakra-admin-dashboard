import React from "react";
import "./ProfileScreen.css";
import Sidepanel from "../../components/sidepannel/Sidepanel";
import Apptoolbar from "../../components/apptoolbar/Apptoolbar.jsx";
import ProfileScreenbg from "../../assets/images/ProfileScreenBg.png";
import Iconrec from "../../components/iconRect/Iconrect.jsx";
import ProfileTabsIcons from "../../components/profileTabsIcons/ProfileTabsIcons.jsx";
import Togglebtn from "../../components/togglebutton/Togglebutton.jsx";
import edit from "../../assets/icons/edit.svg";
import esther from "../../assets/images/Esthera.png";
import Overview from "../../assets/icons/Overview.svg";
import Teams from "../../assets/icons/Teams.svg";
import Projects from "../../assets/icons/Projects.svg";
import {useState,useEffect} from 'react';
import axios from 'axios';
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Insta from "../../assets/icons/instagram.svg";

const iconsdata = [
  {
    iconsrc: Overview,
    text: "Overviews",
  },
  {
    iconsrc: Teams,
    text: "Teams",
  },
  {
    iconsrc: Projects,
    text: "Projects",
  },
];
function ProfileScreen() {
  const [profileData, setProfileData]=useState([]);
  const getData =()=>{
    axios.get('https://67b9629851192bd378dd4402.mockapi.io/users/2').then(res =>{
      console.log(res.data)
      setProfileData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="profileScreen-container">
      <div className="sidepanel">
        <Sidepanel />
      </div>
      <div className="apptoolbar-profileScreen">
        <Apptoolbar />
      </div>

      <img className="profileScreen-bg" src={ProfileScreenbg}></img>
      <div className="profile-element">
        <div className="photo-box">
          <img className="profilepic" src={esther} />
          <div className="editicon">
            <Iconrec
              imgsrc={edit}
              recbgcolor="#FFFFFF"
              imgheight="12px"
              imgwidth="12px"
              containerheight="30px"
              containerwidth="30px"
            />
          </div>
        </div>

        <div className="Name-box">
          <p className="fullname">Estera Jackson</p>
          <p className="email">esthera@simmmple.com</p>
        </div>

        <div className="icons-container">
          {iconsdata.map((data, index) => (
            <ProfileTabsIcons
              key={index}
              iconscr={data.iconsrc}
              text={data.text}
            />
          ))}
        </div>
      </div>

      <div className="content-cards">
        <div className="card platform-settings">
          <h3 className="text">Platform Settings</h3>
          <div className="list">
            <h4>ACCOUNT</h4>
            <ul>
              <li>
                <Togglebtn />
                <span>Email me when someone follows me</span>
              </li>
              <li>
                <Togglebtn />
                <span>Email me when someone answers on my post</span>
              </li>
              <li>
                <Togglebtn />
                <span>Email me when someone mentions me</span>
              </li>
            </ul>
            <h4>APPLICATION</h4>
            <ul>
              <li>
                <Togglebtn />
                <span>New launches and projects</span>
              </li>
              <li>
                <Togglebtn />
                <span>Monthly product updates</span>
              </li>
              <li>
                <Togglebtn />
                <span>Subscribe to newsletter</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card profile-information">
  {profileData && ( // Ensure profileData is not null/undefined
    <>
      <div className="profile-text">
        <h4 className="text">Profile Information</h4>
        <p className="font-format">{profileData.profileinfo}</p>
        <hr className="custom-hr-profile" />
      </div>

      <div className="list list-profile">
        <ul>
          <li>
            <label>
              Full Name:<span> {profileData.name}</span>
            </label>
          </li>
          <li>
            <label>
              Mobile:<span>{profileData.mobile}</span>
            </label>
          </li>
          <li>
            <label>
              Email:<span>{profileData.email}</span>
            </label>
          </li>
          <li>
            <label>
              Location:<span>{profileData.location}</span>
            </label>
          </li>
          <li>
            <label>
              Social Media:<span> <img src={Facebook} alt="facebook"/> <img src={Twitter} alt="twitter"/> <img src={Insta} alt="insta"/></span>
            </label>
          </li>
        </ul>
      </div>
    </>
  )}
</div>





        <div className="card conversations"></div>
      </div>
    </div>
  );
}

export default ProfileScreen;
