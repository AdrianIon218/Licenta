import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function CoursePlan() {
  const {id:level} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:5000/course-plan/${level}`).then((res)=>{
      console.log(res.data);
    });
  },[]);

  return (
    <section className='header-section course'>
      <div className={`course-board course-${level} flex-column--centered`}>
        <h1>Nivel {level}</h1>
        <div></div>
      </div>

    </section>
  );
}

export default CoursePlan