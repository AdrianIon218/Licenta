import { useMemo, useState } from "react";
import { Word } from "../../../Helpers/commonInterfaces";
import WordView from './WordView';

interface LocProps{
  toExecises: ()=> void
  unkwonWords: Word[]
}

function NewWordsLesson(props:LocProps) {
  const [currentWordIndex, setWordIndex] = useState(0);
  const numOdWords = props.unkwonWords.length;
  const wordsJSX = useMemo(()=> props.unkwonWords.map((word, index) => 
  {
    return index === 0 ? (<WordView {...word} key={index} nextWord={()=> setWordIndex(index+1)} />) :
           index === numOdWords-1 ? (<WordView {...word} key={index} previousWord={()=> setWordIndex(index-1)} />) :
            (<WordView {...word} key={index} previousWord={()=> setWordIndex(index-1)} nextWord={()=> setWordIndex(index+1)} />);

   }), [props.unkwonWords]);
  
  return (
    <div>
      {wordsJSX[currentWordIndex]}
    </div>
  )
}

export default NewWordsLesson;