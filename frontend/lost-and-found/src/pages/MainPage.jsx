import React from "react";
import { Link } from "react-router-dom";
import lsuCampusImg from "../images/lsucampus.jpg";
import "../styles/mainpage.css";

const MainPage = () => {
  return (
    <div className="homePage">
      <section className="homeHero">
        <div
          className="homeHeroImage"
          style={{ backgroundImage: `url(${lsuCampusImg})` }}
        />
        <div className="homeHeroOverlay">
          <div className="homeHeroContent">
            <h1 className="homeHeroTitle">LSU Lost &amp; Found</h1>
            <p className="homeHeroText">
              Report lost or found items on campus and help them get back to the
              right student.
            </p>
            <div className="homeHeroButtons">
              <Link to="/report" className="homeHeroBtn mainHeroBtn">
                Report an item
              </Link>
              <Link to="/browse" className="homeHeroBtn secondaryHeroBtn">
                Browse items
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homeInfo">
        <div className="homeInfoRow">
          <div className="homeInfoCard">
            <h2>Lost something?</h2>
            <p>
              Post what went missing so other students and staff can look out
              for it.
            </p>
          </div>
          <div className="homeInfoCard">
            <h2>Found something?</h2>
            <p>
              Quickly log what you found and where it is so the owner can claim
              it.
            </p>
          </div>
          <div className="homeInfoCard">
            <h2>LSU students only</h2>
            <p>
              Use your LSU email so everything stays within the campus
              community.
            </p>
          </div>
        </div>
      </section>

      <section className="homeSteps">
        <h2 className="homeStepsTitle">How it works</h2>
        <p className="homeStepsText">
          It takes less than a minute to help something get back to its owner.
        </p>
        <div className="homeStepsRow">
          <div className="homeStepCard">
            <span className="homeStepNumber">1</span>
            <h3>Sign in</h3>
            <p>Log in with your LSU email so we can link items to real students.</p>
          </div>
          <div className="homeStepCard">
            <span className="homeStepNumber">2</span>
            <h3>Submit details</h3>
            <p>
              Add a short description, where it was lost or found, and when it
              happened.
            </p>
          </div>
          <div className="homeStepCard">
            <span className="homeStepNumber">3</span>
            <h3>Check updates</h3>
            <p>
              Check the browse page or your items to see matches and messages
              from other students.
            </p>
          </div>
        </div>
      </section>

      <section className="homeBottom">
        <div className="homeBottomBox">
          <div className="homeBottomText">
            <h2>Not sure where to start?</h2>
            <p>
              If you just realized something is missing, report it now so people
              on campus can keep an eye out.
            </p>
          </div>
          <div className="homeBottomActions">
            <Link to="/report" className="homeBottomBtn">
              Report an item
            </Link>
            <Link to="/login" className="homeBottomLink">
              Log in to view your items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;