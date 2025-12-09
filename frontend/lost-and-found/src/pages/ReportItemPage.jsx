import React from "react";
import { Link } from "react-router-dom";
import "../styles/reportitem.css";

const ReportItemPage = () => {
  return (
    <div className="reportContainer">
      <div className="reportBox">
        <h1 className="reportTitle">Report an item</h1>
        <p className="reportText">
          Choose if you lost something or found something on campus.
        </p>

        <div className="reportOptions">
          <div className="reportCard">
            <h2>Lost an item?</h2>
            <p>
              Tell us what you lost and where you last remember having it.
            </p>
            <Link to="/lost" className="reportBtn">Report Lost Item</Link>
          </div>

          <div className="reportCard">
            <h2>Found an item?</h2>
            <p>
              Let other students know what you found so it can be claimed.
            </p>
            <Link to="/found" className="reportBtn">Report Found Item</Link>
          </div>
        </div>

        <p className="reportNote">
          Please only submit items related to campus and avoid posting personal info.
        </p>
      </div>
    </div>
  );
};

export default ReportItemPage;
