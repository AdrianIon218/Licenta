import CourseModule from './CourseModule';
import { useState , useMemo, useContext} from 'react';
import StringMaxLength from '../../Helpers/StringMaxLength';
import { COURSE_TITLE_LENGTH, Level } from '../../Helpers/constants';
import { CourseCtx } from '../../Features/CourseContext';

interface LocProps{
  level:Level
}

function CoursePanel({level}:LocProps) {
  const [currentModule, setCurrentModule] = useState(-1);
  
  useContext(CourseCtx)!.setCourseLvl(level); 

  const courseModules = useMemo(()=>{
    return ['Forme de salut','Conversatii'].map(
      (c,index) => <CourseModule title={new StringMaxLength(c, COURSE_TITLE_LENGTH)} 
         key={index} index={index} activeModule={currentModule} 
         closeOtherModules={() => setCurrentModule(index)} /> 
         )}, [currentModule] );

  return (
    <div className='course-plan flex-column--centered' >
      {courseModules}
    </div>
  );
}

export default CoursePanel;