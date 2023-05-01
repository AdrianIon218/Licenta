import { useContext, useEffect, useState } from 'react';
import {VoiceCtx} from '../Pages/Lesson/VoiceContext';
enum BtnState{ START, STOP};

interface LocProps{
    sentence:string
}

function SoundBtn(props:LocProps) {
    const [btnState, setBtnState] = useState<BtnState>(BtnState.START);
    const voiceCtx = useContext(VoiceCtx);
    let timeOutHandler:NodeJS.Timeout|null = null;
    const sentenceLenght = props.sentence.length;
    const timeToExpire = sentenceLenght < 8 ? sentenceLenght * 190 : sentenceLenght * 180;

    const clickHandler= ()=>{
       setBtnState(oldState => {
          if(oldState === BtnState.START){
            voiceCtx?.readTextWithVoice(props.sentence);
            timeOutHandler = setTimeout(()=>{setBtnState(BtnState.START);}, timeToExpire);
            return BtnState.STOP;
          }
          else{
            clearTimeout(timeOutHandler!);
            voiceCtx?.stopReadText();
            return BtnState.START;
          }
       });
    }

    return (<button className='play-btn' onClick={clickHandler}>
        <i className={`${btnState === BtnState.START ? 'fa fa-play' : 'fa fa-pause'}`} />
    </button>);
}

export default SoundBtn;