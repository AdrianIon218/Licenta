
import CourseModule from './CourseModule';
import { useState , useMemo} from 'react';
import StringMaxLength from '../../Helpers/StringMaxLength';

function CoursePanel() {
  const [currentModule, setCurrentModule] = useState(-1);

  const courseModules = useMemo(()=>{
    console.log("Current",currentModule); 
    return ['Forme de salut','Conversatii'].map(
      (c,index) => <CourseModule title={new StringMaxLength(c, 25)} 
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