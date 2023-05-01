import { Word } from '../../../Helpers/commonInterfaces';
import { useContext } from 'react'
import { VoiceCtx } from '../VoiceContext';

interface LocProps{
  toExecises: ()=> void
  unkwonWords: Word[]
};

function PronunciationLesson(props:LocProps) {
  const voiceCtx = useContext(VoiceCtx);
  const startRecord = ()=>{
    voiceCtx!.startRecord(5).then((text)=>{
      console.log(text);
    })
  }
  return (
    <div>

    </div>
  )
}

export default PronunciationLesson