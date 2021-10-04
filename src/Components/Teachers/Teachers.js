import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import "./Teachers.css"

const Teachers = () => {
         const [teachers, setTeachers] = useState([]);
         useEffect(()=>{
                  fetch('/teacher.JSON')
                  .then(res => res.json())
                  .then(data => setTeachers(data));
         },[]);
         return (
                  <div className="container">
                           <h2 className="my-3 text-center fw-bold ">Teachers</h2>
                           <p className="text-center text-secondary fs-5">Meet professional trainers</p>
                         <div className="row">
                                  {
                                    teachers.map(teacher => <Teacher key={teacher.key} teacher={teacher}></Teacher>)
                                  }
                           </div>  
                  </div>
         );
};

export default Teachers;