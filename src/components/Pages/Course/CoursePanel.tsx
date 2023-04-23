import CourseModule from './CourseModule';
import { useState , useMemo, useContext, useEffect} from 'react';
import StringMaxLength from '../../Helpers/StringMaxLength';
import { COURSE_TITLE_LENGTH, Level } from '../../Helpers/constants';
import { CourseCtx } from '../../Features/CourseContext';
import { IconStatus, lessonItem } from "../../Helpers/commonInterfaces";
import axios from 'axios';

interface LocProps{
  level:Level
}

interface ModuleData{
  id:number,
  title:string,
  lessons:lessonItem[]
}

function CoursePanel({level}:LocProps) {
  const [activeModule, setActiveModule] = useState(-1);
  useContext(CourseCtx)!.setCourseLvl(level);

  const [courseModules, setCourseModules] = useState< {modules:Array<ModuleData>, 
    finishedLessons?:{ lessonId:number, progressStatus:'good'|'very good'|'perfect' }[]}>( {modules:[]} );
  
  useEffect(()=>{
    const user = sessionStorage.getItem('userAccount');
    
    if(!user){
      axios.get('http://localhost:5000/course_modules', {params: {level: Level[level]}}).
       then((res)=>{
        const {lessons: lessonsRetrived, modules: modulesRetrieved} = res.data;
        const modules = modulesRetrieved.
          map((m: {id:number, title:string }) => {
            return { title: m.title,
              lessons: lessonsRetrived.filter((l:lessonItem) => l.moduleId === m.id)
            };
          });
        setCourseModules({modules:modules});
       });
    }
    else
    {
      axios.get('http://localhost:5000/course_modules', {params: {level: Level[level], email:user}}).
       then((res)=>{
        const {lessons: lessonsRetrived, modules: modulesRetrieved} = res.data;
        
        let modules = modulesRetrieved.
          map((m: {id:number, title:string }) => {
            return { title: m.title,
              lessons: (lessonsRetrived.filter((l:lessonItem) => l.moduleId === m.id))
            };
          });
        
        const {finishedLessons} = res.data;
        setCourseModules({modules:modules, finishedLessons:finishedLessons});
       });
    }
  }, []);

  const courseModulesJSX = useMemo(() => {
      return courseModules.modules.map((c,index) => {
        const Lessons = courseModules.finishedLessons ?
              c.lessons.map(l => {
                const statusLesson = courseModules.finishedLessons!.find(f => f.lessonId === l.id)
                return { ...l,
                  status: !statusLesson ? IconStatus.NO_PROGRESS : 
                      statusLesson.progressStatus === 'good' ? IconStatus.STAR_1 :
                      statusLesson.progressStatus === 'very good' ? IconStatus.STAR_2 : IconStatus.STAR_3
                }
              }) : c.lessons;
        
        return (<CourseModule title={new StringMaxLength(c.title, COURSE_TITLE_LENGTH)} 
          key={index} index={index} activeModule={activeModule} lessons={Lessons}
          closeOtherModules={() => setActiveModule(index)} /> )
        }
      )},[courseModules, activeModule]);

  return (
    <div className={`course-plan course-plan--${Level[level]}`} >
      <div className='flex-column--centered'>
      {courseModulesJSX}
      </div>
    </div>
  );
}

export default CoursePanel;