import React, { useEffect } from 'react'

function LessonView() {
  const msg = new SpeechSynthesisUtterance();
  msg.text = "Ich füllte möbel , weil ich stärke kopfschmerzen hatte";
  msg.lang='de-De';
  // https://www.voorhoede.nl/en/blog/exploring-the-web-speech-api/
  
  useEffect(() => {
    const voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI.includes('(Natural) - German'));
    if(voice){
        msg.voice = voice;
        msg.rate = 1;
        msg.pitch = 2;
      }
      else{
        
        msg.rate = 1;
        msg.pitch = 0.2;
        msg.volume = 1;
      }
    window.speechSynthesis.speak(msg);
    console.log(speechSynthesis.getVoices());
  }, [msg])

  return (
    <div>LessonView</div>
  )
}

export default LessonView