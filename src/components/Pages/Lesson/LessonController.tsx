import { lazy, useEffect, useState } from "react";
import LessonView from "./Views/LessonView";

interface LocProps{
    lessonId:number, 
    moduleId:number, 
    lessonTitle:string,
    setProgressBar: (progress:number) => void,
    triggerTransition: () => void
};

enum ViewStage {
    START, LESSON, EXERCISE
}
const StartView = lazy(()=>import('./Views/StartView'));

function LessonController(props:LocProps) {
   const [stage, setStage] = useState(ViewStage.START);

   const startClickHandler = ()=>{
    props.triggerTransition();
    setTimeout(()=>setStage(ViewStage.LESSON), 450);
   }

   return (
    <>
     {stage === ViewStage.START && <StartView title={props.lessonTitle} startClickHandler={startClickHandler} />}
     {stage === ViewStage.LESSON && <LessonView />}
    </>
  )
}

export default LessonController;