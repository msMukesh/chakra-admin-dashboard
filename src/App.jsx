import React from 'react'
import Signup from "./components/signup/Signup.jsx"
import Signin from "./components/signin/Signin.jsx"
import Footer from "./components/footermenu/Footer.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import "./App.css";
import Error from "./pages/Error.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
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


export default App