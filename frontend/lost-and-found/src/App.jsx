import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import LostPage from './components/LostPage';
import FoundPage from './components/FoundPage';
import BrowseItemsPage from "./components/BrowseItemsPage";
import SignUp from './components/SignUp';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
          <Route path = "/lost" element = {<LostPage/>} />
          <Route path = "/found" element = {<FoundPage/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path="/browse" element={<BrowseItemsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

