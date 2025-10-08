import React from 'react'
import '../styles/foundpage.css';
const FoundPage = () => {
  return (
    <div>

      {/* Navigation Bar */}
      <div className = "foundContainer">
        <div className = "navigationContainer">
          <a className = "reportLost">Report Lost</a>
          <a className = "reportFound">Report Found</a>
          <a className = "logIn">Log In</a>
          <a className = "signUp">Sign Up</a>
        </div>

        {/* Main Page */}
        <div className = "centralContainer">
        <h1 className = "mainTitle">Lost or Found Something? We Can Help!</h1>
        </div>
        <div className = "buttonContainer">
        <button className = "lostButton">Lost an Item</button>
        <button className = "foundButton">Found an Item</button>
        </div>
        
        {/* Footer Page */}
        <div className = "footerContainer">
          <div className = "siteLinks">
          <h3>Site</h3>
<a>lsu.edu</a>
<a>Report Lost</a>
<a>Report Found</a>
          </div>

<p className = "copyRight"> © Copyright 2025 LSU Lost and Found. All Rights Reserved</p>
<h3>Contact</h3>
<a id = "kagraw">kagraw2@lsu.edu</a>
<a id = "knette">knette2@lsu.edu</a>
<a id = "cjenk">cjenk52@lsu.edu</a>
<a id = "jgrady">jgrady8@lsu.edu</a>
<a id = "rchav">rchav12@lsu.edu</a>
        </div>
      </div>
    </div>
  )
}

export default FoundPage
