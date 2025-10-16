import React from 'react'
import {Link} from "react-router-dom";
import lsuLostLogo from '../images/lsulogo.png';
import lsuLostCampus from '../images/lsucampus.jpg';
import '../styles/lostpage.css';
const LostPage = () => {
  return (
    <div>
        {/* Navigation Container */}
        <div className = "navigationLostContainer">
                      <Link to="/"><img src = {lsuLostLogo} className = "lsuLostLogin"/></Link>
                      <h1 className = "lostTitle">Lost Items</h1>
                      <Link to="/lost" className = "reportLost">Report Lost</Link>
                      <Link to="/found" className = "reportFound">Report Found</Link>
                      <Link to="/login"className = "logInLost">Log In</Link>
                      <Link to="/signup" className = "signUpLost">Sign Up</Link>
                    </div>
                    <img src = {lsuLostCampus} className = "lsuCampusLostImg"/>
      <div className = "lostContainer">
        {/* Form Container */}
        <form action = "/submit-lost-form-data" method = "post" className = "lostFormContainer">
          <div className = "nameField">
<input id = "firstName" required type = "text" placeholder = "*First Name"/>
<input id = "lastName" required type = "text" placeholder = "*Last Name"/>
          </div>
          <div className = "emailLostField">
            <input type = "email" id = "emailAddress" placeholder = "*Email Address" required/>
          </div>
          <div className = "itemTNField">
            <select id = "itemType" defaultValue = "" required>
            <option value= "">*Select Item Type</option>
            <option value = "electronics">Electronics</option>
            <option value = "clothing">Clothing</option>
            <option value = "wallet">Wallet</option>
            <option value = "keys">Keys</option>
            <option value = "id">Card</option>
            <option value = "bag">Bag</option>
            <option value = "book">Book</option>
            <option value = "jewelry">Jewelry</option>
            <option value = "sports">Sports</option>
            <option value = "personal">Personal Item</option>
            <option value = "other">Other</option>
            </select>
            <input id = "itemName" placeholder = "*Item Name"/>
          </div>
          <div className = "itemLSPhoneNumField">
            <input type = "text" id = "itemLastSeen" placeholder = "*Item Last Seen"/>
            <input type = "text" id = "phoneNum" placeholder = "*Phone Number"/>
          </div>
          <div className = "textField">
            <textarea placeholder = "*Additional Details"rows="6" cols="72"/>
          </div>
          <button id = "lostSubmit" type = "submit">Submit</button>
        </form>
      </div>
                     <div className = "footerLostContainer">
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

export default LostPage
