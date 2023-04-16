import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Level } from '../../Helpers/constants';
import CourseContext from '../../Features/CourseContext';

const NoPage = lazy(() =>import("../NoPage"));
const CoursePanel = lazy(()=> import('./CoursePanel'));

function CoursePlan() {
  const {id:levelStr} = useParams();
  const level = [Level.A1,Level.A2,Level.B1,Level.B2,Level.C1].find((l)=>Level[l] === levelStr);
  if(level === undefined){
    return (<NoPage />);
  }

  return (
    <CourseContext>
      <section className='header-section course'>
        <div className={`course-board course-${levelStr} flex-column--centered`}>
          <div className='course-title-container u-margin-bottom-intermediate'>
            <h1 className='u-center-text'>Nivelul {levelStr}</h1>
          </div>
          <CoursePanel level={level}/>
        </div>
      </section>
    </CourseContext>);
}

export default CoursePlan;