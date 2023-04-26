import { lazy, useState } from "react";

interface LocProps{
    lessonId:number, 
    moduleId:number, 
    lessonTitle:string,
    setProgressBar: (progress:number) => void
};

enum ViewStage {
    START, NEXT
}
const StartView = lazy(()=>import('./Views/StartView'));

function LessonController(props:LocProps) {
   
   const [stage, setStage] = useState(ViewStage.START);
   
   return (
    <>
     {stage === ViewStage.START && <StartView title={props.lessonTitle} />}
     {stage === ViewStage.NEXT && props.lessonTitle}
    </>
  )
}

export default LessonController;