import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
         const [courses, setCourses] = useState([]);
         useEffect(()=>{
                  fetch('/services.JSON')
                  .then(res => res.json())
                  .then(data => setCourses(data))
         },[]);
         return (
                  <div className="container mb-4">
                           <h2 className="my-3 text-center fw-bold ">Popular Services</h2>
                           <p className="text-center text-secondary fs-5">Upgrade your skills with newest courses</p>
                           <div className="row">
                           {
                                    courses.slice(0, 4).map(course => <Service
                                             key={course.key}
                                              course={course}
                                              ></Service>)
                           }
                           </div>
                  </div>
         );
};

export default Services;