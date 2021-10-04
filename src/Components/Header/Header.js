import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
         return (
                  <div className="header-container">
                       
                        <div>
                           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                           <div className="container-fluid">
                           <h4 className="mx-5 fw-bold fs-3">Learn <span className="text-danger">Pro</span></h4>
                           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <Link to="/home"><li className="nav-link active fw-bold fs-5">Home</li></Link>
                           <Link to="/services"><li className="nav-link active fw-bold fs-5">Services</li></Link>
                           <Link to="/teachers"><li className="nav-link active fw-bold fs-5">Teachers</li></Link>
                           <Link to="/aboutus"><li className="nav-link active fw-bold fs-5">About Us</li></Link>
                           </ul>
                           </div>
                           </div>
                           </nav>
                        </div>
                        <div className="row">
                           <div className="col-md-6 ms-5 mt-5">
                                    <div>
                                    <h1 className="text-white fw-bold text-center mt-5">Start your journey whit our practical courses</h1>
                                    <p className="text-white">Our online course are buil in partner ship with technology leaders and are designed to meet industry demand</p>
                                    <div className="d-flex justify-content-center  align-items-center"><button className="text-center btn btn-light text-dark fw-bold rounded-pill">Take a course</button></div>
                                    </div>
                                    
                           </div>
                        </div>
                  </div>
         );
};

export default Header;