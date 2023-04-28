import React, { useContext, useEffect } from 'react'
import { VoiceCtx } from '../VoiceContext';

function LessonView() {
  const voiceCtx = useContext(VoiceCtx);
  
  useEffect(() => {
    voiceCtx?.readTextWithVoiceSlowly("Ich war aber krank gestern");
  }, [])

  return (
    <div>LessonView</div>
  )
}

export default LessonView