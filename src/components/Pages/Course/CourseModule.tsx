import { useEffect, useState } from "react";
import CourseBtn from '../../Features/CourseBtn';
import StringMaxLength from "../../Helpers/StringMaxLength";
import { Level } from "../../Helpers/constants";

interface LocProps{
    title:StringMaxLength,
    activeModule:number,
    index:number,
    closeOtherModules:()=>void
}

function CourseModule({title, activeModule, index, closeOtherModules}:LocProps) {
  const [isModuleExpanded ,setModuleExpanded] = useState(false);

  const triggerExpandedModule = ()=>{
    setModuleExpanded(oltVal => {
      console.log("Index",index)
      if(oltVal === false){
        closeOtherModules();
      }
      return !oltVal;
    });
  }
  
  useEffect(()=>{
   if(activeModule !== index){
     setModuleExpanded(false);
   }
  },[activeModule]);

  // <CourseBtn level={2} status="not started">Buna ziua</CourseBtn>
  return (
    <div className="course__module flex-element" >
      <div className="course__module__title u-center-text" onClick={triggerExpandedModule}  >
        {title.str}
        <span className="course__module__title__arrow">
          <i className={` ${isModuleExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} `} />
        </span>
      </div>
      <div className={`course__module__ctn ${isModuleExpanded && 'course__module__ctn--open'}`}>
        <div className={`flex-column--start course__module__ctn__list ${isModuleExpanded && 'course__module__ctn__list--open'}`}>
          <CourseBtn level={2} status="not started">Buna ziua</CourseBtn>
          <CourseBtn level={2} status="not started">Buna ziua</CourseBtn>
          <CourseBtn level={2} status="not started">Buna ziua</CourseBtn>
        </div>
      </div>
    </div>
  )
}

export default CourseModule;