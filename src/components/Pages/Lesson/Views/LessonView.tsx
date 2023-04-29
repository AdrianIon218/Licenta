import { useContext } from 'react'
import { VoiceCtx } from '../VoiceContext';

interface LocProps{
  toExecises: ()=> void
}

function LessonView(props:LocProps) {
  const voiceCtx = useContext(VoiceCtx);

  const startRecord = ()=>{
    //https://www.youtube.com/watch?v=-k-PgvbktX4
    voiceCtx!.startRecord();

  }

  return (
    <div><button onClick={startRecord}>Start recording</button></div>
  )
}

export default LessonView;