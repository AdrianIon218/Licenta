import React from 'react'
import { useParams } from 'react-router-dom'

function CoursePlan() {
  const {id:level} = useParams();
  console.log(level);

  return (
    <section className='header-section'>
      {level}
    </section>
  );
}

export default CoursePlan