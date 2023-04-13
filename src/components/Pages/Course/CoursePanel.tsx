import CourseModule from './CourseModule';
import { useState , useMemo} from 'react';
import StringMaxLength from '../../Helpers/StringMaxLength';
import { COURSE_TITLE_LENGTH } from '../../Helpers/constants';

function CoursePanel() {
  const [currentModule, setCurrentModule] = useState(-1);

  const courseModules = useMemo(()=>{
    console.log("Current",currentModule); 
    return ['Forme de salut','Conversatii'].map(
      (c,index) => <CourseModule title={new StringMaxLength(c, COURSE_TITLE_LENGTH)} 
         key={index} index={index} activeModule={currentModule} 
         closeOtherModules={() => setCurrentModule(index)} /> 
         )}, [currentModule] );

  return (
    <div className='course-plan flex-column--centered'>
      {courseModules}
    </div>
  );
}

export default CoursePanel;