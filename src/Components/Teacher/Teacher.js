import React from 'react';

const Teacher = (props) => {
         const {img, name, position, subject, email} =props.teacher
         return (
                  
                           <div className="col-md-4 mt-4 mb-3">     
                                    <div className="card h-100">
                                    <div className="row g-0">
                                    <div className="col-md-4">
                                    <div className="techer-img mt-3">
                                    <img src={img} className="img-fluid mt-4" alt="..."/>
                                    </div>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                    <h4 className="card-title">{name}</h4>
                                    <h6>Subject: {subject}</h6>
                                    <p>Email: {email}</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
         );
};

export default Teacher;