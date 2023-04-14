import { useContext, useEffect, useState } from "react";
import CourseBtn from '../../Features/CourseBtn';
import StringMaxLength from "../../Helpers/StringMaxLength";
import { Level } from "../../Helpers/constants";
import { CourseCtx } from "../../Features/CourseContext";
import { IconStatus } from "../../Features/CourseBtn";

interface LocProps{
    title:StringMaxLength,
    activeModule:number,
    index:number,
    closeOtherModules:()=>void,
}

function CourseModule({title, activeModule, index, closeOtherModules}:LocProps) {
  const [isModuleExpanded ,setModuleExpanded] = useState(false);
  const currentLevelStr = Level[useContext(CourseCtx)!.courseLvl];

  const triggerExpandedModule = ()=>{
    setModuleExpanded(oltVal => {
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

  const onBlurHandler = (event: React.FocusEvent<HTMLDivElement, Element>)=>{
    event.preventDefault();
    setModuleExpanded(false);
  }

  return (
    <div className="course__module flex-element"  tabIndex={index}>
      <div className="course__module__title u-center-text" onClick={triggerExpandedModule}>
        {title.str}
        <span className={`course__module__title__arrow course__module__title__arrow--${currentLevelStr}`}>
          <i className={` ${isModuleExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} `} />
        </span>
      </div>
      <div className={`course__module__ctn ${isModuleExpanded && 'course__module__ctn--open'}`}>
        <div className={`flex-column--start course__module__ctn__list course__module__ctn__list--${currentLevelStr} ${isModuleExpanded && 'course__module__ctn__list--open'}`}>
          <CourseBtn status={IconStatus.NO_PROGRESS}>Buna ziua</CourseBtn>
          <CourseBtn status={IconStatus.STAR_1}>Buna ziua</CourseBtn>
          <CourseBtn status={IconStatus.STAR_2}>Buna ziua</CourseBtn>
          <CourseBtn status={IconStatus.STAR_3}>Buna ziua</CourseBtn>
          
        </div>
      </div>
    </div>
  )
}

export default CourseModule;