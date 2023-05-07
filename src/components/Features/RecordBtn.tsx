import { useContext } from 'react'
import { VoiceCtx } from './VoiceContext';

interface LocProps{
    textToLookFor: string
}

function RecordBtn(props:LocProps) {
    const voiceCtx = useContext(VoiceCtx);
    const timeToRecord = props.textToLookFor.length > 15 ? 8 : 3;
    const startRecord = ()=>{
      voiceCtx!.startRecord(timeToRecord).then((text)=>{
       if(text === props.textToLookFor){
        console.log("text match")
       }
       else{
        console.log(text);
       }
      });
    }
    
    return (<button className='play-btn' onClick={startRecord}>
        <i className='fa fa-microphone' />
      </button>);
}

export default RecordBtn