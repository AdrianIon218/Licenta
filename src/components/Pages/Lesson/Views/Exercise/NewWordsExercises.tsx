import { useEffect, useMemo, useReducer, useState } from 'react';
import { IconStatus, Word } from '../../../../Helpers/commonInterfaces';
import WriteWord from './WriteWord';
import Notification, { NotificationType } from '../../../../Features/Notfication';
import MultipleChoice from './MultipleChoice';
import ChooseTranslation from './ChooseTranslation';

interface LocProps{
  unkwonWords:Word[],
  setProgressBar: (num:number) => void,
  onFinish: (status:IconStatus)=> void
}

enum ExerciseType { MUTIPLE_CHOICE, WRITE_wORD, CHOOSE_TNRANSLATION }
enum ACTION { CORRECT_ANSWEAR, WRONG_ANSWEAR };

function NewWordsExercises(props:LocProps) {
  const [exerciseInfo, dispatch] = useReducer(reducer, {progressBar:50, score:0, wordIndex: 0});
  const [warningNotification, setNotification] = useState(false);
  const numWords = props.unkwonWords.length;

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
    const wordNames =  props.unkwonWords.map(word => word.wordName);
    const wordsTranslations = props.unkwonWords.map(word => word.translation);
    const commonMethodes = {correctAnswear:()=>dispatch({type:ACTION.CORRECT_ANSWEAR}) ,
            wrongAnswear:()=>{dispatch({type:ACTION.WRONG_ANSWEAR}); setNotification(true)}}

    return props.unkwonWords.map((word, index)=>{
      const currentExerciseType = index % 3;

      if(currentExerciseType === ExerciseType.WRITE_wORD){
        return (<WriteWord key={index} {...word} {...commonMethodes} />);
      }

      if(currentExerciseType === ExerciseType.MUTIPLE_CHOICE){
        return (<MultipleChoice key={index} {...word} {...commonMethodes} wordNames={wordNames} />);
      }
      
      return (<ChooseTranslation key={index} {...word} {...commonMethodes} wordsTranslation={wordsTranslations} />);
    })
  },[props.unkwonWords]);

  useEffect(()=>{
    if(exerciseInfo.wordIndex === props.unkwonWords.length) {
      const status = exerciseInfo.score <= numWords/3 ? IconStatus.STAR_1:
                     exerciseInfo.score <= numWords/2 ? IconStatus.STAR_2: IconStatus.STAR_3;
      props.onFinish(status);
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