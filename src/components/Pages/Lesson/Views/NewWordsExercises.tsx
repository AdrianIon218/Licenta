import { useEffect, useMemo, useReducer, useState } from 'react';
import { Word } from '../../../Helpers/commonInterfaces';
import WriteWord from './Exercise/WriteWord';

interface LocProps{
  unkwonWords:Word[]
}

enum ExerciseType { MUTIPLE_CHOICE, WRITE_wORD, CORRECT_TRANSLATION }
enum ACTION { CORRECT_ANSWEAR, WRONG_ANSWEAR,INCREASE_INDEX, DECREASE_INDEX, INCRESE_SCORE, DECREASE_SCORE };

function reducer(state:any, action:{type:ACTION}) {
  switch (action.type) {
    case ACTION.CORRECT_ANSWEAR:
      console.log("correct");
      return {...state, wordIndex: state.wordIndex + 1};
    case ACTION.WRONG_ANSWEAR:
      console.log('wrong')
      return {...state, wordIndex: state.wordIndex - 1};
    default:
      return state;
  }
}

function NewWordsExercises(props:LocProps) {
  const [exerciseInfo, dispatch] = useReducer(reducer, {score:0, wordIndex: 0});

  useEffect(()=>{
    props.unkwonWords.sort((a, b) => 0.5 - Math.random());
  },[]);

  const exerciseJSX = useMemo(()=> {
    return props.unkwonWords.map((word, index)=>{
      const currentExerciseType = index % 3;
      return currentExerciseType === ExerciseType.WRITE_wORD ? 
         <WriteWord key={index} {...word} 
          correctAnswear={()=>dispatch({type:ACTION.CORRECT_ANSWEAR})} 
          wrongAnswear={()=>dispatch({type:ACTION.WRONG_ANSWEAR})} />  : ' ';
    })
  },[props.unkwonWords]);

  return (
    <div>
      {exerciseJSX[1]}
    </div>
  )
}

export default NewWordsExercises;