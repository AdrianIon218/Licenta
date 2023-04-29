import { useContext } from 'react'
import { VoiceCtx } from '../VoiceContext';

interface LocProps{
  toExecises: ()=> void
}

function LessonView(props:LocProps) {
  const voiceCtx = useContext(VoiceCtx);

  const startRecord = ()=>{
    voiceCtx!.startRecord(5).then((text)=>{
      console.log(text);
    })

  }

  return (
    <div><button onClick={startRecord}>Start recording</button></div>
  )
}

export default LessonView;