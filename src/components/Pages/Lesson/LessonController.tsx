import { lazy, useEffect, useState } from "react";

interface LocProps{
    lessonId:number, 
    moduleId:number, 
    lessonTitle:string,
    setProgressBar: (progress:number) => void,
    triggerTransition: () => void
};

enum ViewStage {
    START, NEXT
}
const StartView = lazy(()=>import('./Views/StartView'));

function LessonController(props:LocProps) {
   const [stage, setStage] = useState(ViewStage.START);

   const startClickHandler = ()=>{
    props.triggerTransition();
    setTimeout(()=>setStage(ViewStage.NEXT), 450);
   }

   return (
    <>
     {stage === ViewStage.START && <StartView title={props.lessonTitle} startClickHandler={startClickHandler} />}
     {stage === ViewStage.NEXT && props.lessonTitle}
    </>
  )
}

export default LessonController;