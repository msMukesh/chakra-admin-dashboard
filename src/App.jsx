import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/signup/Signup.jsx";
import Signin from "./pages/signin/Signin.jsx";
import Footer from "./components/Footermenu/Footer.jsx"
import Navbar from "./components/navbar/Navbar.jsx";
import Error from "./pages/Error.jsx";
import Dashboardscreen from "./pages/dashboardScreen/Dashboardscreen.jsx";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen.jsx";
import TablesScreen from "./pages/TablesScreen/TablesScreen.jsx";
import "./App.css";


//
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      <ConditionalNavbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboardscreen" element={<Dashboardscreen />} />
            <Route path="/profilescreen" element={<ProfileScreen />} />
            <Route path="/tablesscreen" element={<TablesScreen/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <div className='footerplace'>
          <Footer />
        </div>

      </BrowserRouter>
    </div>
  );
}

// Component to conditionally render Navbar
function ConditionalNavbar() {
  const location = useLocation();
  const showNavbar = location.pathname === "/" || location.pathname === "/signin";

  return showNavbar ? <Navbar /> : null;
}
export default App