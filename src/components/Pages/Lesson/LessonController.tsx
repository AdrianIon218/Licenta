import { lazy, useEffect, useState } from "react";
import LessonView from "./Views/LessonView";
import axios from "axios";
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

   const [imageUrl, setImage] = useState<string>();

   useEffect(()=>{
     const moduleId = sessionStorage.getItem("moduleId");
     const lessonId = sessionStorage.getItem('lessonId');
     const lessonType = sessionStorage.getItem('lessonType');
     
     axios.post("http://localhost:5000/course_modules/getWords", {moduleId: moduleId }).then(response => {
         console.log(response.data)
         response.data.forEach((word:any) => {
          const buffer = new Uint8Array(word.image.data)
          setImage(URL.createObjectURL(new Blob([buffer],{type:'application/octet-stream'})));//
         });
       
     });
   },[])

   return (
    <>
     <img src={imageUrl} alt="nu merge"/>
     {stage === ViewStage.START && <StartView title={props.lessonTitle} startClickHandler={()=> stageHandler(ViewStage.LESSON)} />}
     {stage === ViewStage.LESSON && <LessonView toExecises={()=> stageHandler(ViewStage.EXERCISE)}/>}
    </>
  )
}

export default LessonController;