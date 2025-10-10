import React from 'react'
import {Link} from "react-router-dom";
import lsuLogo from '../images/lsulogo.png';
import lsuCampus from '../images/lsucampus.jpg'
import '../styles/lostpage.css'
const LoginPage = () => {
  return (
    <div>
              <div className = "navigationLoginContainer">
                <Link to="/"><img src = {lsuLogo} className = "lsuLogoImg"/></Link>
                <Link to="/lost" className = "reportLost">Report Lost</Link>
                <Link to="/found" className = "reportFound">Report Found</Link>
                <Link to="/login"className = "logIn">Log In</Link>
                <Link to="/signup" className = "signUp">Sign Up</Link>
              </div>

              <div className = "loginContainer">
                <div className = "formContainer">
                  <form>
                    <label placeholder = "e.g.johnmacgee@gmail.com" htmlFor="email"> Your email
                    <input type = "email"/>
                    </label>
                    <label placeholder = "e.g.macgee123456">Your password
                      <input type = "password"/>
                    </label>
                    <br/>
                    <button type = "submit">Sign In</button>
                  </form>
                </div>
                <div className = "optionsContainer">
                  <p>Create Account</p>
                  <p>Forgot Password</p>
                  </div>
              </div>

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
  )
}

export default LoginPage
