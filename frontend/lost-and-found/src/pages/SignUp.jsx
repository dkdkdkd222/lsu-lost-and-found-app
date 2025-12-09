import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lsuLoginLogo from "../images/lsulogo.png";
import "../styles/login.css";
import { signUpWithEmail } from "../services/authService.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailColor, setEmailColor] = useState("#000");
  const [emailBackground, setEmailBackground] = useState(null);
  const [passwordColor, setPasswordColor] = useState("#000");
  const [passwordBackground, setPasswordBackground] = useState(null);

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (email.trim() === "") {
      alert("There is no email on set. Please enter an email.");
      setEmailColor("#DC2626");
      setEmailBackground("#FEE2E2");
      hasError = true;
    } else {
      setEmailColor("#000");
      setEmailBackground(null);
    }

    if (password.trim() === "") {
      alert("There is no password on set. Please enter a password.");
      setPasswordColor("#DC2626");
      setPasswordBackground("#FEE2E2");
      hasError = true;
    } else {
      setPasswordColor("#000");
      setPasswordBackground(null);
    }

    if (hasError) return;

    const { error } = await signUpWithEmail(email, password);

    if (error) {
      alert("Sign up unsuccessful. Please try again.");
      return;
    }

    alert("Account created! Check your email to confirm your address.");
    navigate("/");
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <img src={lsuLoginLogo} className="loginLogo" alt="LSU logo" />
        <h2 className="loginTitle">Create Account</h2>
        <p className="loginSubtitle">Use your LSU email to sign up</p>

        <form onSubmit={handleSubmit} className="loginForm">
          <div className="formField">
            <label className="formLabel">Email</label>
            <input
              type="email"
              className="textInput"
              placeholder="e.g. student@lsu.edu"
              value={email}
              onChange={emailChange}
              style={{
                borderColor: emailColor,
                backgroundColor: emailBackground || "",
              }}
            />
          </div>

          <div className="formField">
            <label className="formLabel">Password</label>
            <input
              type="password"
              className="textInput"
              placeholder="Create a password"
              value={password}
              onChange={passwordChange}
              style={{
                borderColor: passwordColor,
                backgroundColor: passwordBackground || "",
              }}
            />
          </div>

          <button type="submit" className="lsuButton">
            Sign Up
          </button>
        </form>

        <div className="loginActions">
          <Link to="/login" className="loginLink">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
