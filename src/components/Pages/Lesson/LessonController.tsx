import { lazy, useEffect, useState } from "react";
import LessonView from "./Views/LessonView";
const StartView = lazy(()=>import('./Views/StartView'));

enum ViewStage { START, LESSON, EXERCISE, END }

interface LocProps{
  lessonId:number, 
  moduleId:number, 
  lessonTitle:string,
  setProgressBar: (progress:number) => void,
  triggerTransition: () => void
};

function LessonController(props:LocProps) {
   const [stage, setStage] = useState(ViewStage.START);

   const stageHandler = (stage:ViewStage)=>{
    props.triggerTransition();
    setTimeout(()=>setStage(stage), 450);
   }

   useEffect(()=>{
     const moduleId = sessionStorage.getItem("moduleId");
     
   },[])

   return (
    <>
     {stage === ViewStage.START && <StartView title={props.lessonTitle} startClickHandler={()=> stageHandler(ViewStage.LESSON)} />}
     {stage === ViewStage.LESSON && <LessonView toExecises={()=> stageHandler(ViewStage.EXERCISE)}/>}
    </>
  )
}

export default LessonController;