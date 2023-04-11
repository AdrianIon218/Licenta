import { useState } from "react";

interface LocProps{
    title:string,
}

function CourseModule({title}:LocProps) {
  const [isModuleExpanded ,setModuleExpanded] = useState(false);

  const triggerExpandedModule = ()=>{
    setModuleExpanded(oltVal => !oltVal);
  }

  return (
    <div className="course__module">
        <div className="course__module__title u-center-text" onClick={triggerExpandedModule} >
         {title}
         <span>
          <i className={`course__module__title__arrow ${isModuleExpanded === true ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} `} />
          
            
         </span>
        </div>
        
     
    </div>
  )
}

export default CourseModule;