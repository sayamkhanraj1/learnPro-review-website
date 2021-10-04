import React from 'react';

const Course = (props) => {
         const {name, createdBy, price, Duration, discription, img} =props.service;
         return (
                     <div className="col-md-6 mt-4 mb-3">
                 <div className="card h-100">
                    <img className="img-fluid" src={img} alt="..."/>
                    <div className="card-body text-center">
                      <h4 className="card-title">Course Name: <span className="fs-5"> {name}</span></h4>
                      <h5 className="card-title">Created By: <span className="fs-5">{createdBy}</span></h5>
                      <h6>Price: $ {price}</h6>
                      <p>Duration: {Duration}</p>
                      <p>Discription : {discription}</p>
                    </div>
                  </div>
                 </div> 
                  
         );
};

export default Course;