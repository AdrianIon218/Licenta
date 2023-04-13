
import CourseModule from './CourseModule';
import { useOutsideClick } from '../../Helpers/useOutsideClick';
import { useState , useMemo} from 'react';

function CoursePanel() {
  const [currentModule, setCurrentModule] = useState(-1);

  const courseModules = useMemo(()=>{
    console.log("Current",currentModule); 
    return ['Forme de salut','Conversatii'].map((c,index) => <CourseModule title={c} key={index} index={index} activeModule={currentModule} 
     closeOtherModules={() => setCurrentModule(index)} /> )
    },[currentModule]);

  return (
    <div className='course-plan flex-column--centered'>
      {courseModules}
    </div>
  );
}

export default CoursePanel;