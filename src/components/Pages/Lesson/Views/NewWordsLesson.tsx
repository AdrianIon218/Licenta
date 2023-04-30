import { useContext } from 'react'
import { VoiceCtx } from '../VoiceContext';
import { Word } from "../../../Helpers/commonInterfaces";

interface LocProps{
  toExecises: ()=> void
  unkwonWords: Word[]
}

function NewWordsLesson(props:LocProps) {
  const voiceCtx = useContext(VoiceCtx);
  

  const startRecord = ()=>{
    voiceCtx!.startRecord(5).then((text)=>{
      console.log(text);
    })
  }

  return (
    <div>
     <img src={props.unkwonWords[3].imageURL} alt='' />
    </div>
  )
}

export default NewWordsLesson;