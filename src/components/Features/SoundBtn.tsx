import { useContext, useState } from "react";
import { VoiceCtx } from "./VoiceContext";
enum BtnState {
  START,
  STOP,
}

interface LocProps {
  sentence: string;
}

function SoundBtn(props: LocProps) {
  const [btnState, setBtnState] = useState<BtnState>(BtnState.START);
  const voiceCtx = useContext(VoiceCtx);
  const sentenceLenght = props.sentence.length;
  const timeToExpire =
    sentenceLenght < 8
      ? sentenceLenght * 190
      : sentenceLenght > 20
      ? sentenceLenght * 120
      : sentenceLenght * 170;

  const clickHandler = () => {
    setBtnState((oldState) => {
      if (oldState === BtnState.START) {
        voiceCtx?.readTextWithVoice(props.sentence);
        setTimeout(() => {
          setBtnState(BtnState.START);
        }, timeToExpire);
        return BtnState.STOP;
      }
      return oldState;
    });
  };

  return (
    <button className="play-btn" onClick={clickHandler}>
      <i
        className={`${
          btnState === BtnState.START ? "fa fa-play" : "fa fa-pause"
        }`}
      />
    </button>
  );
}

export default SoundBtn;
