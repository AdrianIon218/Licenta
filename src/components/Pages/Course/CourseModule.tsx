import {  useEffect, useState } from "react";
import CourseBtn from '../../Features/CourseBtn';
import { useImperativeHandle, useRef } from "react";

interface LocProps{
    title:string,
    activeModule:number,
    index:number,
    closeOtherModules:()=>void
}

function CourseModule({title, activeModule,index, closeOtherModules}:LocProps) {
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
    <div className="course__module" >
      <div className="course__module__title u-center-text" onClick={triggerExpandedModule}  >
        {title}
        <span className="course__module__title__arrow">
          <i className={` ${isModuleExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} `} />
        </span>
      </div>
      <div className={`course__module__ctn ${isModuleExpanded && 'course__module__ctn--open'}`}>
        
      </div>
    </div>
  )
}

export default CourseModule;