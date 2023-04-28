import React, { useCallback, useEffect } from 'react';

class VoiceController {
   private static voiceUtterance = new SpeechSynthesisUtterance(); 

   static getVoiceReady = ()=>{
    this.voiceUtterance.lang = "de-De";
    this.voiceUtterance.rate = 1;
     speechSynthesis.addEventListener('voiceschanged', ()=>{
        const voice = window.speechSynthesis.getVoices().find(voice => voice.name.includes('(Natural) - German'));
        if(voice){
            this.voiceUtterance.voice = voice;
            this.voiceUtterance.pitch = 1;
        } else {
            this.voiceUtterance.pitch = 0.2;
            this.voiceUtterance.volume = 1;
        }
     });
   } 

   static readText = (text:string) => {
     speechSynthesis.cancel();
     this.voiceUtterance.text = text;
     speechSynthesis.speak(this.voiceUtterance);
   }
   
   static readTextSlowly = (text:string) => {
     speechSynthesis.cancel();
     this.voiceUtterance.rate = 0.5;
     this.voiceUtterance.text = text;
     speechSynthesis.speak(this.voiceUtterance);
   }
   
}

export const VoiceCtx = React.createContext<null | {
  readTextWithVoice: (text:string)=>void,
  readTextWithVoiceSlowly: (text:string)=>void
}>(null);

interface LocProps {
    children:any
}

function VoiceContext(props:LocProps) {
    useEffect(()=>{
      VoiceController.getVoiceReady();
    },[]);
    
    const readTextWithVoiceHandler = useCallback((text:string)=>{
      const textToRead = text.trim();
      if(textToRead.length > 0){
        VoiceController.readText(textToRead);
      }
    }, []);

    const readTextWithVoiceSlowlyHandler = useCallback((text:string)=>{
       const textToRead = text.trim();
       if(textToRead.length > 0){
         VoiceController.readTextSlowly(textToRead);
       }
    },[]);
    
    return (<VoiceCtx.Provider value={{readTextWithVoice: readTextWithVoiceHandler, 
                                    readTextWithVoiceSlowly: readTextWithVoiceSlowlyHandler}}>
        {props.children}
     </VoiceCtx.Provider>); 
}

export default VoiceContext;