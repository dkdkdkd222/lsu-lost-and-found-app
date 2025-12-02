import React, { useState } from "react";
import { Link } from "react-router-dom";
import lsuLogo from "../images/lsulogo.png";
import lsuCampus from "../images/lsucampus.jpg";
import "../styles/BrowseItems.css";

const ITEMS = [
  {
    id: 1,
    title: "AirPods Pro Case",
    status: "Found",
    category: "electronics",
    location: "Middleton Library",
    dateFound: "2025-11-15",
    description: "White AirPods case with slight scratches."
  },
  {
    id: 2,
    title: "Backpack",
    status: "Found",
    category: "bag",
    location: "Student Union",
    dateFound: "2025-11-25",
    description: "Grey backpack found in the Student Union."
  }
];

const CATEGORY_OPTIONS = [
  { value: "", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "wallet", label: "Wallets" },
  { value: "keys", label: "Keys" },
  { value: "card", label: "Cards / IDs" },
  { value: "bag", label: "Bags" },
  { value: "book", label: "Books" },
  { value: "jewelry", label: "Jewelry" },
  { value: "sports", label: "Sports" },
  { value: "personal", label: "Personal Items" },
  { value: "other", label: "Other" }
];

const LOCATION_OPTIONS = [
  { value: "", label: "Any Location" },
  { value: "Student Union", label: "Student Union" },
  { value: "Middleton Library", label: "Middleton Library" },
  { value: "Patrick F. Taylor", label: "Patrick F. Taylor Hall" },
  { value: "Business Education Complex", label: "Business Education Complex" },
  { value: "LSU Library", label: "LSU Library" },
  { value: "Parking Garage", label: "Parking Garage" },
  { value: "Tiger Stadium", label: "Tiger Stadium" },
  { value: "Residential Halls", label: "Residential Halls" },
  { value: "Other Campus Area", label: "Other Campus Area" }
];

const DATE_RANGE_OPTIONS = [
  { value: "all", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "this-week", label: "This Week" },
  { value: "past-30-days", label: "Past 30 Days" },
  { value: "this-semester", label: "This Semester" }
];

const matchesDateRange = (dateString, range) => {
  if (range === "all") return true;
  const itemDate = new Date(dateString);
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = (today - itemDate) / oneDay;

  if (range === "today") {
    return itemDate.toDateString() === today.toDateString();
  }
  if (range === "this-week") {
    return diffDays <= 7;
  }
  if (range === "past-30-days") {
    return diffDays <= 30;
  }
  if (range === "this-semester") {
    const month = today.getMonth();
    const year = today.getFullYear();
    const semesterStart =
      month < 6 ? new Date(year, 0, 1) : new Date(year, 7, 1);
    return itemDate >= semesterStart;
  }
  return true;
};

const BrowseItemsPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    dateRange: "all"
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredItems = ITEMS.filter((item) => {
    if (filters.category && item.category !== filters.category) return false;
    if (filters.location && item.location !== filters.location) return false;
    if (!matchesDateRange(item.dateFound, filters.dateRange)) return false;
    return true;
  });

  return (
    <div>
      <div className="navigationLostContainer">
        <Link to="/">
          <img src={lsuLogo} className="lsuLostLogin" />
        </Link>
        <h1 className="lostTitle">Browse Items</h1>
        <Link to="/lost" className="reportLost">
          Report Lost
        </Link>
        <Link to="/found" className="reportFound">
          Report Found
        </Link>
        <Link to="/login" className="logInLost">
          Log In
        </Link>
        <Link to="/browse" className="browseItems">
          Browse Items
        </Link>
        <Link to="/signup" className="signUpLost">
          Sign Up
        </Link>
      </div>

      <img src={lsuCampus} className="lsuCampusLostImg" />

      <div className="browseOuterContainer">
        <div className="browseFilterContainer">
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option.value || "all-cat"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          >
            {LOCATION_OPTIONS.map((option) => (
              <option key={option.value || "all-loc"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            name="dateRange"
            value={filters.dateRange}
            onChange={handleFilterChange}
          >
            {DATE_RANGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="browseResultsContainer">
          {filteredItems.map((item) => (
            <div key={item.id} className="browseItem">
              <h2 className="browseItemTitle">{item.title}</h2>
              <div className="browseItemTags">
                <span className="statusTag">{item.status}</span>
                <span className="locationTag">{item.location}</span>
              </div>
              <p className="browseItemDescription">{item.description}</p>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <p className="noResultsText">
              No items match the selected filters.
            </p>
          )}
        </div>
      </div>

      <div className="footerLostContainer">
        <div className="siteLinks">
          <h3 className="siteTitle">Site</h3>
          <a href="https://www.lsu.edu">lsu.edu</a>
          <Link to="/lost">Report Lost</Link>
          <Link to="/found">Report Found</Link>
        </div>

        <p className="copyRight">
          © Copyright 2025 LSU Lost and Found. All Rights Reserved
        </p>

        <div className="contactLinks">
          <h3 className="contactTitle">Contact</h3>
          <a href="mailto:kagraw2@lsu.edu" id="kagraw">
            kagraw2@lsu.edu
          </a>
          <a href="mailto:knette2@lsu.edu" id="knette">
            knette2@lsu.edu
          </a>
          <a href="mailto:cjenk52@lsu.edu" id="cjenk">
            cjenk52@lsu.edu
          </a>
          <a href="mailto:jgrady8@lsu.edu" id="jgrady">
            jgrady8@lsu.edu
          </a>
          <a href="mailto:rchave12@lsu.edu" id="rchav">
            rchav12@lsu.edu
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrowseItemsPage;
