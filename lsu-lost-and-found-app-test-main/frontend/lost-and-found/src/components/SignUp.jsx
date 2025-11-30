import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import lsuLoginLogo from '../images/lsulogo.png';
import lsuCampus from '../images/lsucampus.jpg'
import githubLogo from '../images/githublogo.png'
import keyLogo from '../images/key.png'
import '../styles/signup.css'
const SignUp = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailColor, setEmailColor] = useState('#000');
const [emailBackground, setEmailBackground] = useState(null);
const [passwordColor, setPasswordColor] = useState('#000');
const [passwordBackground, setPasswordBackground] = useState(null);

const emailChange = (e) => setEmail(e.target.value);
const passwordChange = (e) => setPassword(e.target.value);

const handleSubmit = (e) => {
  e.preventDefault();
  if (email.trim() === "") {
    alert('There is no email on set. Please enter an email.');
    setEmailColor('#DC2626');
    setEmailBackground('#FEE2E2');
  }
  else {
    setEmailColor('#000');
    setEmailBackground(null);
  }
  
  if (password.trim() === "") {
    alert('There is no password on set. Please enter a password.');
    setPasswordColor('#DC2626');
    setPasswordBackground('#FEE2E2');
  }
}
  return (
    <div>
      {/* Navigation Container */}
                    <div className = "navigationSignUpContainer">
                      <Link to="/"><img src = {lsuLoginLogo} className = "lsuLogoLogin"/></Link>
                      <Link to="/lost" className = "reportLostLogin">Report Lost</Link>
                      <Link to="/found" className = "reportFoundLogin">Report Found</Link>
                      <Link to="/login"className = "logInLogin">Log In</Link>
                      <Link to="/signup" className = "signUpLogin">Sign Up</Link>
                    </div>
      
      {/* Form Container */}
                      <div className = "signUpContainer">
                        <img src = {lsuCampus} className = "lsuCampusImg"/>
                        <div className =  "formContainer">
                        <form action = "/submit-signup-data" method = "post" onSubmit = {handleSubmit}>
                          {/* Email Container */}
                          <div className = "emailField">
                          <img src = {githubLogo} className = "github"/>
                          <label className = "emailLabel" htmlFor="email"> Your email</label>
                          <input value = {email} onChange ={emailChange} style = {{borderColor: emailColor, backgroundColor: emailBackground}} className = "emailInput" placeholder = "e.g.johnmacgee@gmail.com" type = "email"/>
                          <div className = "emailBorder"></div>
                          </div>
                          {/* Password Container */}
                          <div className = "passwordField">
                            <img src = {keyLogo} className = "key"/>
                          <label className = "passwordLabel">Your password </label>
                            <input value = {password} onChange={passwordChange} style = {{borderColor: passwordColor, backgroundColor: passwordBackground}}className = "passwordInput" placeholder = "e.g.macgee123456" type = "password"/>
                            <div className = "passwordBorder"></div>
                          </div>
                          <button id = "submitButton" type = "submit">Sign Up</button>
                        </form>
                      </div>
                      <div className = "optionsContainer">
                      <Link to ="/login" className = "accountAvailable">Already Have An Account?</Link>
                        </div>
                        </div>
      
                     <div className = "footerSignUpContainer">
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

export default SignUp
