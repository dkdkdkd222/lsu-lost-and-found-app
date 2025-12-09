import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import LostPage from './pages/LostPage';
import FoundPage from './pages/FoundPage';
import BrowseItemsPage from "./pages/BrowseItemsPage";
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import ReportItemPage from "./pages/ReportItemPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/report" element={<ReportItemPage />} />
            <Route path="/lost" element={<LostPage />} />
            <Route path="/found" element={<FoundPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/browse" element={<BrowseItemsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

