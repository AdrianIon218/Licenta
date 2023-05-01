import { useEffect, useMemo, useState } from "react";
import { Word } from "../../../Helpers/commonInterfaces";
import WordView from './WordView';

interface LocProps{
  toExecises: ()=> void
  unkwonWords: Word[]
  setProgressBar: (num:number)=> void
}

function NewWordsLesson(props:LocProps) {
  const [currentWordIndex, setWordIndex] = useState(0);
  const numOdWords = props.unkwonWords.length;
  const [currentProgress, setCurrentProgress] = useState(0);
  useEffect(()=>{
    props.setProgressBar(currentProgress);
  },[currentProgress]);
 
  const addProgress = (index:number)=>{
    setCurrentProgress(oldValue => oldValue + (50/numOdWords));
    setWordIndex(index);
  }

  const reduceProgress = (index:number)=>{
    setCurrentProgress(oldValue => oldValue - (50/numOdWords));
    setWordIndex(index);
  }

  const gotToExecise = ()=>{
    setCurrentProgress(oldValue => oldValue + (50/numOdWords));
    props.toExecises();
  }

  const wordsJSX = useMemo(()=> props.unkwonWords.map((word, index) => 
  {
    return index === 0 ? (<WordView {...word} key={index} nextWord={()=> addProgress(index+1)} />) :
           index === numOdWords-1 ? (<WordView {...word} key={index} previousWord={()=> reduceProgress(index-1)} nextWord={gotToExecise} />) :
            (<WordView {...word} key={index} previousWord={()=> reduceProgress(index-1)} nextWord={()=> addProgress(index+1)} />);
   }), [props.unkwonWords]);
  
  return (
    <div>
      {wordsJSX[currentWordIndex]}
    </div>
  )
}

export default NewWordsLesson;