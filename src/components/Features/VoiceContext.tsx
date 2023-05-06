import React, { useCallback, useEffect } from 'react';

class VoiceController {
   private static voiceUtterance = new SpeechSynthesisUtterance(); 
   private static speechRecognition: globalThis.SpeechRecognition | null = null;
   public static textRecorded:string = '';

   static getVoiceReady = ()=>{
     window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
     window.SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
     window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
     this.speechRecognition = new window.SpeechRecognition();
     this.speechRecognition.interimResults = true;
     this.speechRecognition.lang = "de-De";
     this.speechRecognition.addEventListener('result', (e)=>{
       const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
       this.textRecorded = text;
     });

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
     this.voiceUtterance.rate = 1;
     this.voiceUtterance.text = text;
     speechSynthesis.speak(this.voiceUtterance);
   }
   
   static readTextSlowly = (text:string) => {
     speechSynthesis.cancel();
     this.voiceUtterance.rate = 0.5;
     this.voiceUtterance.text = text;
     speechSynthesis.speak(this.voiceUtterance);
   }

   static stopRead = () =>{
    if(speechSynthesis.speaking){
     speechSynthesis.cancel();
     this.voiceUtterance.text = '';
    }
   }

   static startRecord(timeInMs:number = 5000){
     this.textRecorded = '';
     this.speechRecognition!.start();
     setTimeout(()=>{
        this.speechRecognition!.stop();
      }, timeInMs);
   }
}

export const VoiceCtx = React.createContext<null | {
  readTextWithVoice: (text:string)=> void,
  readTextWithVoiceSlowly: (text:string)=> void,
  startRecord: (timeInMs:number)=> Promise<string>,
  stopReadText: ()=> void
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

    const startRecordHandler = useCallback((numberOfSeconds:number)=>{
     const timeInMs = numberOfSeconds * 1000;
     VoiceController.startRecord(timeInMs);
     return new Promise<string>((resolve)=>{
        setTimeout(()=> resolve(VoiceController.textRecorded), timeInMs + 100);
     });
    },[]);

    return (<VoiceCtx.Provider value={{readTextWithVoice: readTextWithVoiceHandler, readTextWithVoiceSlowly: readTextWithVoiceSlowlyHandler,
                        startRecord:startRecordHandler, stopReadText: VoiceController.stopRead}}>
        {props.children}
     </VoiceCtx.Provider>); 
}

export default VoiceContext;