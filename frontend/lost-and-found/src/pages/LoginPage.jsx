import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import supabase from '../supabase-setup/supabase-client.js'
import lsuLoginLogo from '../images/lsulogo.png'
import '../styles/login.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailColor, setEmailColor] = useState('#000')
  const [emailBackground, setEmailBackground] = useState(null)
  const [passwordColor, setPasswordColor] = useState('#000')
  const [passwordBackground, setPasswordBackground] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let hasError = false

    if (!email.trim()) {
      setEmailColor('#DC2626')
      setEmailBackground('#FEE2E2')
      hasError = true
    } else {
      setEmailColor('#000')
      setEmailBackground(null)
    }

    if (!password.trim()) {
      setPasswordColor('#DC2626')
      setPasswordBackground('#FEE2E2')
      hasError = true
    } else {
      setPasswordColor('#000')
      setPasswordBackground(null)
    }

    if (hasError) return

    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert('Login unsuccessful. Please check your email and password.')
      setPassword('')
      return
    }

    alert('Login successful!')
    navigate('/')
  }

  return (
    <div className = "loginPage">
      <div className = "loginCard">
        <img src = {lsuLoginLogo} className = "loginLogo" alt = "LSU logo" />
        <h2 className = "loginTitle">Student Login</h2>
        <p className = "loginSubtitle">
          Sign in with your LSU email and password
        </p>

        <form onSubmit = {handleSubmit} className = "loginForm">
          <div className = "formField">
            <label className = "formLabel">Email</label>
            <input
              type = "email"
              className = "textInput"
              placeholder = "e.g. student@lsu.edu"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              style = {{
                borderColor: emailColor,
                backgroundColor: emailBackground || ''
              }}
            />
          </div>

          <div className = "formField">
            <label className = "formLabel">Password</label>
            <input
              type = "password"
              className = "textInput"
              placeholder = "Your password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              style = {{
                borderColor: passwordColor,
                backgroundColor: passwordBackground || ''
              }}
            />
          </div>

          <button type = "submit" className = "lsuButton">
            Sign In
          </button>
        </form>

        <div className = "loginActions">
          <Link to = "/signup" className = "loginLink">
            Create account
          </Link>
          <span className = "dotSeparator">•</span>
          <span className = "loginLink loginMuted">Forgot password?</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
