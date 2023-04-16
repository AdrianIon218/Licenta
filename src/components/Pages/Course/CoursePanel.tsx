import CourseModule from './CourseModule';
import { useState , useMemo, useContext, useEffect} from 'react';
import StringMaxLength from '../../Helpers/StringMaxLength';
import { COURSE_TITLE_LENGTH, Level } from '../../Helpers/constants';
import { CourseCtx } from '../../Features/CourseContext';
import axios from 'axios';

interface LocProps{
  level:Level
}

interface ModuleData{
  id:number,
  title:string,
  level:Level,
  lessonIds:any
}

function CoursePanel({level}:LocProps) {
  const [activeModule, setActiveModule] = useState(-1);
  useContext(CourseCtx)!.setCourseLvl(level); 

  const [courseModules, setCourseModules] = useState<Array<ModuleData>>([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/course_modules',{ params: {level: Level[level]} }).then((res)=>{
     setCourseModules(res.data);
   });
  }, []);

  const courseModulesJSX = useMemo(() => {
      return courseModules.map((c,index) => 
        <CourseModule title={new StringMaxLength(c.title, COURSE_TITLE_LENGTH)} 
          key={index} index={index} activeModule={activeModule} closeOtherModules={() => setActiveModule(index)} /> 
      )},[courseModules, activeModule] );

  return (
    <div className={`course-plan  course-plan--${Level[level]}`} >
      <div className='flex-column--centered'>
      {courseModulesJSX}
      </div>
    </div>
  );
}

export default CoursePanel;