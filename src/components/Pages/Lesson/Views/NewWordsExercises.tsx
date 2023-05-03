import { useEffect, useMemo, useReducer, useState } from 'react';
import { Word } from '../../../Helpers/commonInterfaces';
import WriteWord from './Exercise/WriteWord';
import Notification, { NotificationType } from '../../../Features/Notfication';

interface LocProps{
  unkwonWords:Word[],
  setProgressBar: (num:number) => void,
  onFinish: ()=> void
}

enum ExerciseType { MUTIPLE_CHOICE, WRITE_wORD, CORRECT_TRANSLATION }
enum ACTION { CORRECT_ANSWEAR, WRONG_ANSWEAR,INCREASE_INDEX, DECREASE_INDEX, INCRESE_SCORE, DECREASE_SCORE };


function NewWordsExercises(props:LocProps) {
  const [exerciseInfo, dispatch] = useReducer(reducer, {progressBar:50, score:0, wordIndex: 0});
  const [warningNotification, setNotification] = useState(false);
  
  function reducer(state:any, action:{type:ACTION}) {
    const progressRatio = 50/props.unkwonWords.length;
    switch (action.type) {
      case ACTION.CORRECT_ANSWEAR:
        props.setProgressBar(state.progressBar + progressRatio);
        return {progressBar: state.progressBar + progressRatio, score: state.score + 1, wordIndex: state.wordIndex + 1};
      case ACTION.WRONG_ANSWEAR:
        return {...state, score: state.score - 1};
      default:
        return state;
    }
  }

  useEffect(()=>{
    props.unkwonWords.sort((a, b) => 0.5 - Math.random());
  },[]);

  const exerciseJSX = useMemo(()=> {
    return props.unkwonWords.map((word, index)=>{
      const currentExerciseType = index % 3;
      return currentExerciseType === ExerciseType.WRITE_wORD ? 
        <WriteWord key={index} {...word} 
          correctAnswear={()=>dispatch({type:ACTION.CORRECT_ANSWEAR})} 
          wrongAnswear={()=>{dispatch({type:ACTION.WRONG_ANSWEAR}); setNotification(true)}} />  : 
        <WriteWord key={index} {...word} 
          correctAnswear={()=>dispatch({type:ACTION.CORRECT_ANSWEAR})} 
          wrongAnswear={()=>{dispatch({type:ACTION.WRONG_ANSWEAR}); setNotification(true)}} />;
    })
  },[props.unkwonWords]);

  useEffect(()=>{
    if(exerciseInfo.wordIndex === props.unkwonWords.length) {
      props.onFinish();
    }
  },[exerciseInfo.wordIndex])

  return (
    <div className='new_words_ex'>
      { warningNotification && <Notification message="Răspuns greșit !" type={NotificationType.ERROR} 
           deleteNotification={() => setNotification(false)} />}
      { exerciseInfo.wordIndex < props.unkwonWords.length && exerciseJSX[exerciseInfo.wordIndex] }
    </div>
  )
}

export default NewWordsExercises;