import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-center fw-bold">Learn <span className="text-danger">Pro</span></h1>
              <h3>Start your journey whit our practical courses</h3>
              <p>Our online course are buil in partner ship with technology leaders and are designed to meet industry demand</p>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>Admissions</h4>
                <ul>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Single Course</li>
                  <li className="footer-menu">Courses</li>
                  <li className="footer-menu">Courses Catalog</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>Quick Links</h4>
                <ul>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Teachers</li>
                  <li className="footer-menu">Courses</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Sign up for the newsletter</h3>
                <div className="mt-3">
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <button className="text-center btn btn-light text-dark fw-bold ms-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
