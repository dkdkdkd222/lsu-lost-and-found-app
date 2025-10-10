import React from 'react'
import { Link } from "react-router-dom";
import '../styles/mainpage.css';
import lsuLibrary from '../images/lsulib.jpg';
import lsuLogo from '../images/lsulogo.png';
const MainPage = () => {
  return (
    <div>

      {/* Navigation Bar */}
      <div className = "mainContainer">
        <div className = "navigationContainer">
          <img src = {lsuLogo} className = "lsuLogoImg"/>
          <Link to="/lost" className = "reportLost">Report Lost</Link>
          <Link to="/found" className = "reportFound">Report Found</Link>
          <Link to="/login"className = "logIn">Log In</Link>
          <Link to="/signup" className = "signUp">Sign Up</Link>
        </div>

        {/* Main Page */}
        <div className = "centralContainer">
          <img className = "lsuLibImg" src = {lsuLibrary}/>
        <h1 className = "mainTitle">Lost or Found Something? We Can Help!</h1>
        </div>
        <div className = "buttonContainer">

        <Link to="/lost"><button className = "lostButton">Lost an Item</button></Link>
        <Link to="/found"><button className = "foundButton">Found an Item</button></Link>
        </div>
        
        {/* Footer Page */}
        <div className = "footerContainer">
        <div className = "siteLinks">
          <h3 className = "siteTitle">Site</h3>
        <a href="https://www.lsu.edu">lsu.edu</a>
        <Link to="/lost">Report Lost</Link>
        <Link to="/found">Report Found</Link>
        </div>

<p className = "copyRight"> © Copyright 2025 LSU Lost and Found. All Rights Reserved</p>
<div className = "contactLinks">
<h3 className = "contactTitle">Contact</h3>
<a href = "mailto:kagraw2@lsu.edu" id = "kagraw">kagraw2@lsu.edu</a>
<a href = "mailto:knette2@lsu.edu" id = "knette">knette2@lsu.edu</a>
<a href = "mailto:cjenk52@lsu.edu" id = "cjenk">cjenk52@lsu.edu</a>
<a href = "mailto:jgrady8@lsu.edu" id = "jgrady">jgrady8@lsu.edu</a>
<a href = "mailto:rchave12@lsu.edu"id = "rchav">rchav12@lsu.edu</a>
</div>
      </div>
        </div>
    </div>
  )
}

export default MainPage