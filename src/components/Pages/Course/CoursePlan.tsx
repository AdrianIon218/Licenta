import { useEffect, useMemo, lazy } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import getCourseDetails from "../../Helpers/coursePhotoLevel";

const NoPage = lazy(() =>import("../NoPage"));
const CoursePanel = lazy(()=> import('./CoursePanel'));

function CoursePlan() {
  let {id:level} = useParams();
  level = ['A1','A2','B1','B2','C1'].find(l => l === level);
  if(!level){
    return (<NoPage />);
  }

  useEffect(()=>{
    axios.get(`http://localhost:5000/course-plan/${level}`).then((res)=>{
      console.log(res.data);
    });

  },[]);
  const course_details = useMemo(()=> getCourseDetails(level!),[]);

  return (
    <section className='header-section course'>
      <div className={`course-board course-${level} flex-column--centered`}>
        <div className='course-title-container u-margin-bottom-intermediate'>
          <h1>Nivelul {level}</h1>
        </div>
        <CoursePanel />
      </div>
    </section>
  );
}

export default CoursePlan;