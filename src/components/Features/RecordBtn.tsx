import { useContext, useState } from 'react'
import { VoiceCtx } from './VoiceContext';
import { removePunctuation, removeUmlauts } from '../Helpers/StringMethodes';


interface LocProps{
    textToLookFor: string,
    correctAnswear: ()=> void,
    wrongAnswear: ()=> void
}

function RecordBtn(props:LocProps) {
    const voiceCtx = useContext(VoiceCtx);
    const [isListening, setListening] = useState(false); 
    const timeToRecord = props.textToLookFor.length < 10 ? 3 : props.textToLookFor.length < 20 ? 5 : 8 ;
    const textToLookFor = removeUmlauts(removePunctuation(props.textToLookFor.toLowerCase()));

    const startRecord = ()=>{
      if(!isListening){
        try{
          setListening(true);
          voiceCtx!.startRecord(timeToRecord).then((text)=>{
            text = removeUmlauts(removePunctuation(text.toLowerCase()));
            
            if(text === textToLookFor){
                props.correctAnswear();
            }
            else{
                props.wrongAnswear();
                console.log(text)
            }
            setListening(false);
          });
        }catch{
          setListening(false);
        }
      }
    }

    return (<button className={`play-btn btn-record ${isListening === true ? 'btn-recording':''}`} onClick={startRecord}>
        <i className='fa fa-microphone' />
      </button>);
}

export default RecordBtn