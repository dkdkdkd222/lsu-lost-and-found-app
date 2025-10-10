import React from 'react'
import {Link} from "react-router-dom";
import lsuLoginLogo from '../images/lsulogo.png';
import lsuCampus from '../images/lsucampus.jpg'
import githubLogo from '../images/githublogo.png'
import keyLogo from '../images/key.png'
import '../styles/login.css'
const LoginPage = () => {
  return (
    <div>
      {/* Navigation Container */}
              <div className = "navigationLoginContainer">
                <Link to="/"><img src = {lsuLoginLogo} className = "lsuLogoLogin"/></Link>
                <Link to="/lost" className = "reportLostLogin">Report Lost</Link>
                <Link to="/found" className = "reportFoundLogin">Report Found</Link>
                <Link to="/login"className = "logInLogin">Log In</Link>
                <Link to="/signup" className = "signUpLogin">Sign Up</Link>
              </div>

{/* Form Container */}
                <div className = "loginContainer">
                  <img src = {lsuCampus} className = "lsuCampusImg"/>
                  <div className =  "formContainer">
                  <form>
                    {/* Email Container */}
                    <div className = "emailField">
                    <img src = {githubLogo} className = "github"/>
                    <label className = "emailLabel" htmlFor="email"> Your email</label>
                    <input required className = "emailInput" placeholder = "e.g.johnmacgee@gmail.com" type = "email"/>
                    <div className = "emailBorder"></div>
                    </div>
                    {/* Password Container */}
                    <div className = "passwordField">
                      <img src = {keyLogo} className = "key"/>
                    <label className = "passwordLabel">Your password </label>
                      <input required className = "passwordInput" placeholder = "e.g.macgee123456" type = "password"/>
                      <div className = "passwordBorder"></div>
                    </div>
                    <button id = "submitButton" type = "submit">Sign In</button>
                  </form>
                </div>
                <div className = "optionsContainer">
                <Link to="/signup" className = "createAccount">Create Account</Link>
                <a className = "forgotPass">Forgot Password?</a>
                  </div>
                  </div>

               <div className = "footerLoginContainer">
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
