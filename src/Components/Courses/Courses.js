import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
         const [services, setServices] = useState([]);
         useEffect(()=>{
                  fetch('/services.JSON')
                  .then(res => res.json())
                  .then(data => setServices(data))
         },[]);
         return (
                  <div>
                           <div className="container mb-4">
                           <h2 className="my-3 text-center fw-bold ">Popular Services</h2>
                           <p className="text-center text-secondary fs-5">Upgrade your skills with newest courses</p>
                           <div className="row">
                           {
                                    services.map(service => <Course
                                    key={service.key}
                                    service={service}
                                    ></Course>)
                           }
                           </div>
                  </div>
                  </div>
         );
};

export default Courses;