import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import lsuLoginLogo from '../images/lsulogo.png';
import lsuCampus from '../images/lsucampus.jpg'
import githubLogo from '../images/githublogo.png'
import keyLogo from '../images/key.png'
import supabase from '../supabase-setup/supabase-client.js'
import '../styles/login.css'
const LoginPage = () => {
  const navigate = useNavigate()
const[email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailColor, setEmailColor] = useState("#000");
const [emailBackgroundColor, setEmailBackgroundColor] = useState(null);
const [passwordBackgroundColor, setPasswordBackgroundColor] = useState(null);
const [passwordColor, setPasswordColor] = useState("#000");

const handleEmailChange = (e) => setEmail(e.target.value);
const handlePasswordChange = (e) => setPassword(e.target.value);

const handleSubmit = async (e) => {
e.preventDefault();
 if (email.trim() === "") {
  alert('There is no email on set. Please enter an email.');
  setEmailColor('#DC2626');
  setEmailBackgroundColor('#FEE2E2');
 }
 else {
  setEmailColor('#000');
  setEmailBackgroundColor(null);
 }

 if (password.trim() === "") {
  alert('There is no password on set. Please enter a password.');
  setPasswordColor('#DC2626');
  setPasswordBackgroundColor('#FEE2E2');
 }
 else {
  setPasswordColor('#000');
  setPasswordBackgroundColor(null);
 }

 const {data, error} = await supabase.auth.signInWithPassword({
  email: email,
  password: password,
 })

 if (error) {
  alert('Login unsuccessful. Please try again.')
  setEmail("")
  setPassword("")
 }

 alert("User login successful!")
 navigate('/');
}
  return (
    <div>
      {/* Navigation Container */}
              <div className = "navigationLoginContainer">
                <Link to="/"><img src = {lsuLoginLogo} className = "lsuLogoLogin"/></Link>
                <Link to="/lost" className = "reportLostLogin">Report Lost</Link>
                <Link to="/found" className = "reportFoundLogin">Report Found</Link>
                <Link to="/login"className = "logInLogin">Log In</Link>
                <Link to="/signup" className = "signUpLogin">Sign Up</Link>
                <Link to="/browse" className="browseItems">Browse Items</Link>
              </div>

{/* Form Container */}
                <div className = "loginContainer">
                  <img src = {lsuCampus} className = "lsuCampusImg"/>
                  <div className =  "formContainer">
                  <form action = "/submit-login-data" method = "post" onSubmit = {handleSubmit}>
                    {/* Email Container */}
                    <div className = "emailField">
                    <img src = {githubLogo} className = "github"/>
                    <label className = "emailLabel" htmlFor="email"> Your email</label>
                    <input value = {email} onChange = {handleEmailChange} style ={{borderColor: emailColor, backgroundColor: emailBackgroundColor || ""}} className = "emailInput" placeholder = "e.g.johnmacgee@gmail.com" type = "email"/>
                    <div className = "emailBorder"></div>
                    </div>
                    {/* Password Container */}
                    <div className = "passwordField">
                      <img src = {keyLogo} className = "key"/>
                    <label className = "passwordLabel">Your password </label>
                      <input value = {password} onChange = {handlePasswordChange} style ={{borderColor: passwordColor, backgroundColor: passwordBackgroundColor || ""}} className = "passwordInput" placeholder = "e.g.macgee123456" type = "password"/>
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
  );
};

export default LoginPage
