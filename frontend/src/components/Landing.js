import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/header_logo.png";
import landingImage from "../assets/images/HomepageMasthead_Desktop.png";

const Landing = () => {
  return (
    <div className="wrapper-div">
        <div className="header-section">
            <div className="container">
                <img src={logo} alt="goodReads"/>
            </div>
        </div>
        <div className="landingImg">
            <div className="container">
                <img src={landingImage} alt="landing img" />
                <div className="cardDiv">
                <h2 className="text-center">Discover &amp; read more</h2>
                <Link className="btnEmail" href="/">Sign up with email</Link>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="innerContent">
                <div>
                    <h4 className="fw-bold">Deciding what to read next?</h4>
                    <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                </div>
                
                <div>
                    <h4 className="fw-bold">Deciding what to read next?</h4>
                    <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Landing;