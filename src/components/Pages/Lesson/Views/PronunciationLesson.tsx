import { Word } from '../../../Helpers/commonInterfaces';
import { useEffect, useReducer, useState } from 'react';
import WordRecord from '../LessonCommonFeatures/WordRecord';
import Notification, { NotificationType } from '../../../Features/Notfication';

enum ACTION{
  CORRECT_ANSWEAR, WRONG_ANSWEAR, SKIP
};

interface LocProps{
  setProgressBar: (progress: number) => void,
  toExecises: (score:number)=> void
  unkwonWords: Word[]
};

function PronunciationLesson(props:LocProps) {
  const reducer = (state:{progressBarStatus:number, score:number, currentWordIndex: number}, action:{type:ACTION, ratioProgress:number})=>{
    switch(action.type){
      case ACTION.CORRECT_ANSWEAR:
        props.setProgressBar(state.progressBarStatus + action.ratioProgress);
        return { progressBarStatus: state.progressBarStatus + action.ratioProgress, score: state.score+1, currentWordIndex: state.currentWordIndex+1}
      case ACTION.WRONG_ANSWEAR:
        return {...state, score: state.score-1}
      case ACTION.SKIP:
        props.setProgressBar(state.progressBarStatus + action.ratioProgress);
        return {...state, progressBarStatus: state.progressBarStatus + action.ratioProgress, score: state.score-1, currentWordIndex: state.currentWordIndex+1}
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer,{progressBarStatus:0, score:0, currentWordIndex:0});
  const ratioProgress = 50/props.unkwonWords.length;
  const [warningNotification, setNotification] = useState(false);

  const correctAnswearHandler = ()=>{
    dispatch({type:ACTION.CORRECT_ANSWEAR, ratioProgress: ratioProgress});
  }

  const wrongAnswearHandler = ()=>{
    dispatch({type:ACTION.WRONG_ANSWEAR, ratioProgress:0});
    setNotification(true);
  }

  const skipHandler = ()=>{
    dispatch({type:ACTION.SKIP, ratioProgress: ratioProgress});
  }

  const WordsRecordJSX = props.unkwonWords.map((word, index)=> 
       <WordRecord {...word} key={index} correctAnswear={correctAnswearHandler} wrongAnswear={wrongAnswearHandler} skip={skipHandler}/>);  
      
  return (
    <>
    {warningNotification && <Notification message="Răspuns greșit !" type={NotificationType.ERROR} deleteNotification={() => setNotification(false)} />}
    {state.currentWordIndex < props.unkwonWords.length && WordsRecordJSX[state.currentWordIndex]}
    {state.currentWordIndex === props.unkwonWords.length && props.toExecises(state.score)}
    </>
  )
}

export default PronunciationLesson;