import React, { useEffect, useState } from 'react';

const Teachers = () => {
         const [teachers, setTeachers] = useState([]);
         useEffect(()=>{
                  fetch('/teacher.JSON')
                  .then(res => res.json())
                  .then(data => setTeachers(data));
         },[]);
         console.log(teachers)
         return (
                  <div>
                           <h2 className="my-3 text-center fw-bold">Teachers</h2>
                         <div className="row">
                                  {
                                    teachers.map(teacher => 
                                                         
                                   
                                             <div className="col-md-4 h-100 my-4">     
                                    <div className="card mb-3 ">
                                    <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={teacher.img} className="img-fluid mt-3" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                    <h4 className="card-title">{teacher.name}</h4>
                                    <h6>Position: {teacher.position}</h6>
                                    <p>Subject: {teacher.subject}</p>
                                    <p>Email: {teacher.email}</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                     )
                                  }
                           </div>  
                  </div>
         );
};

export default Teachers;