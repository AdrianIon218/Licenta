import { lazy, useEffect, useState } from "react";
import axios from "axios";
import { Word } from "../../Helpers/commonInterfaces";
import NewWordsLesson from "./Views/NewWordsLesson";
import PronunciationLesson from "./Views/PronunciationLesson";
import NewWordsExercises from "./Views/NewWordsExercises";
enum ViewStage { START, LESSON, EXERCISE, END };
const StartView = lazy(()=> import('./Views/StartView'));

interface LocProps{
  lessonId:number, 
  moduleId:number, 
  lessonTitle:string,
  setProgressBar: (progress:number) => void,
  triggerTransition: () => void
};

function LessonController(props:LocProps) {
   const [stage, setStage] = useState(ViewStage.START);
   const [words, setWords] = useState<Word[]>([]);
   const [compJSX, setCompJSX] = useState<JSX.Element>();
   const lessonType = sessionStorage.getItem('lessonType');

   const stageHandler = (stage:ViewStage)=>{
    props.triggerTransition();
    setTimeout(()=> setStage(stage), 450);
   }
   
   const retrieveWords = (moduleId:number) => {
     const retrivedWords: Word[] = [];
     return axios.post("http://localhost:5000/lessons/getWords", {moduleId: moduleId}).
       then(response => {
          response.data.forEach((word:any) => {
            const {id, word:wordName, translation, example, moduleId} = word;

            const bufferToArray = new Uint8Array(word.image.data);
            const blobObj = new Blob([bufferToArray], {type:'application/octet-stream'})
            const objUrl = URL.createObjectURL(blobObj);

            retrivedWords.push({id: id, wordName:wordName.trim(), translation:translation.trim(), example: example, moduleId:moduleId, imageURL: objUrl});
          });
         
         return retrivedWords;
       });
  }

   useEffect(()=>{
    if(lessonType === 'new_words' || lessonType === 'pronunciation' || lessonType === 'test'){
      retrieveWords(props.moduleId).then(rez=>{
        rez.sort((a, b) => 0.5 - Math.random());
        setWords(rez);
      });
    }
   },[props.moduleId]);

   useEffect(()=>{
    if(lessonType === 'new_words'){
      setCompJSX(<NewWordsLesson toExecises={()=> stageHandler(ViewStage.EXERCISE)} unkwonWords={words} setProgressBar={props.setProgressBar} />);
      return;
    }
    if(lessonType === 'pronunciation'){
      setCompJSX(<PronunciationLesson toExecises={()=> stageHandler(ViewStage.EXERCISE)} unkwonWords={words} />);
      return;
    }
    if(lessonType === 'test'){

      return;
    }
   },[words]);

   useEffect(()=>{
     if(stage === ViewStage.EXERCISE){
      setCompJSX(<NewWordsExercises unkwonWords={words} setProgressBar={props.setProgressBar} onFinish={()=> stageHandler(ViewStage.END)}/>);
     }
     if(stage === ViewStage.END){
      setCompJSX(<div>Finished</div>);
     }
   },[stage]);

   return (
    <>
     {stage === ViewStage.START && <StartView title={props.lessonTitle} startClickHandler={()=> stageHandler(ViewStage.LESSON)} />}
     {(stage === ViewStage.LESSON || stage === ViewStage.EXERCISE || stage === ViewStage.END) && compJSX}
    </>
  )
}

export default LessonController;