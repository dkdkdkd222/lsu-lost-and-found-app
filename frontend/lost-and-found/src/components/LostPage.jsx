import React, {useState} from 'react'
import {Link} from "react-router-dom";
import lsuLostLogo from '../images/lsulogo.png';
import lsuLostCampus from '../images/lsucampus.jpg';
import '../styles/lostpage.css';
const LostPage = () => {
  const [errorColor, setErrorColor] = useState('#000');
  const [errorColorBackground, setErrorColorBackground] = useState(null);
  const [backgroundInfo, setBackgroundInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    itemtype: "",
    itemname: "",
    itemlastseen: "",
    phonenumber: "",
    details: ""
  });

  const handleInfoChange = (e) => {
    const {name, value} = e.target;
    setBackgroundInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleLostInfo = (e) => {
    e.preventDefault();
    const phoneDigitTest = /^[0-9]{10}$/;
    const dateDigitTest = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/;
    let emptyInputs = !backgroundInfo.firstname || !backgroundInfo.lastname || !backgroundInfo.email || !backgroundInfo.itemname || !backgroundInfo.itemtype || !backgroundInfo.itemlastseen || !backgroundInfo.phonenumber;

    if (emptyInputs) {
      alert('There are one or more inputs that are not filled. Please fill in the information.');
      setErrorColor('#DC2626');
    setErrorColorBackground('#FEE2E2');
    return;
    }  else {
      setErrorColor('#000');
    setErrorColorBackground('#FEE2E2');
    }

     // Email @ handling example@gmail.com
     if (!backgroundInfo.email.includes('@')) { 
      alert('Incorrect email usage. Please include @');  
      setErrorColor('#DC2626');
      setErrorColorBackground('#FEE2E2');
      return;
    }
    else {
      setErrorColor('#000');
      setErrorColorBackground('#FEE2E2');
    }

    // Date Handling DD/MM/YY
    if (!dateDigitTest.test(backgroundInfo.itemlastseen)) {
      alert('This is not a valid date. Try MM/DD/YY');
      setErrorColor('#DC2626');
      setErrorColorBackground('#FEE2E2');
    }
    else {
      setErrorColor('#000');
      setErrorColorBackground('#FEE2E2');
    }

    // Phone digit handling 225-XXX-XXXX
    if (!phoneDigitTest.test(backgroundInfo.phonenumber)) {
      alert('Incorrect 10-digit phone number. Please include 10 number digits');
      setErrorColor('#DC2626');
      setErrorColorBackground('#FEE2E2');
      return;
    }
    else {
      setErrorColor('#000');
      setErrorColorBackground('#FEE2E2');
    }

    if (!emptyInputs && backgroundInfo.email.includes('@') && dateDigitTest.test(backgroundInfo.itemlastseen) && phoneDigitTest.test(backgroundInfo.phonenumber)) {
      alert('Your form was submitted successfully');


      fetch('/submit-lost-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(backgroundInfo)
      })
        .then(response => response.json())
        .then(data => {
          console.log('NOTE: the form has been sent to the database.');
        })
        .catch(error => {
          console.log('NOTE: there was an error breaching the form to the database.', error);
        })
      }
    }



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
        <form onSubmit = {handleLostInfo} className = "lostFormContainer">
          <div className = "nameField">
<input onChange = {handleInfoChange} id = "firstName"  style = {{borderColor: errorColor, backgroundColor: errorColorBackground}} name = "firstname" value = {backgroundInfo.firstname} type = "text" placeholder = "*First Name"/>
<input onChange = {handleInfoChange} id = "lastName"  style = {{borderColor: errorColor, backgroundColor: errorColorBackground}} name = "lastname" value = {backgroundInfo.lastname} type = "text" placeholder = "*Last Name"/>
          </div>
          <div className = "emailLostField">
            <input onChange = {handleInfoChange} style = {{borderColor: errorColor, backgroundColor: errorColorBackground}}  name = "email" type = "email" value = {backgroundInfo.email} id = "emailAddress" placeholder = "*Email Address"/>
          </div>
          <div className = "itemTNField">
            <select onChange = {handleInfoChange}  style = {{borderColor: errorColor, backgroundColor: errorColorBackground}} name = "itemtype" value = {backgroundInfo.itemtype} id = "itemType">
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
            <input onChange = {handleInfoChange} name = "itemname" value = {backgroundInfo.itemname} style = {{borderColor: errorColor, backgroundColor: errorColorBackground}} id = "itemName" placeholder = "*Item Name"/>
          </div>
          <div className = "itemLSPhoneNumField">
            <input onChange = {handleInfoChange} name = "itemlastseen" value = {backgroundInfo.itemlastseen} style = {{borderColor: errorColor, backgroundColor: errorColorBackground}} type = "text" id = "itemLastSeen" placeholder = "*Item Last Seen"/>
            <input onChange = {handleInfoChange} name = "phonenumber" value = {backgroundInfo.phonenumber} style = {{borderColor: errorColor, backgroundColor: errorColorBackground}} type = "text" id = "phoneNum" placeholder = "*Phone Number"/>
          </div>
          <div className = "textField">
            <textarea name = "details" value = {backgroundInfo.details} onChange = {handleInfoChange} placeholder = "*Additional Details"rows="6" cols="72"/>
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
