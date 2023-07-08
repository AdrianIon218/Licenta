import { useCallback, useState } from "react";
import { Word } from "../../../Helpers/commonInterfaces";
import RecordBtn from "../../../Features/RecordBtn";
import SoundBtn from "../../../Features/SoundBtn";

interface LocProps extends Word {
  correctAnswear: () => void;
  wrongAnswear: () => void;
  skip: () => void;
  stopNotification: () => void;
}

function WordRecord(props: LocProps) {
  const [countMistakes, setCountMistakes] = useState(0);

  const correctAnswearHandler = useCallback(() => {
    props.correctAnswear();
  }, []);

  const wrongAnswearHandler = () => {
    setCountMistakes((oldVal) => oldVal + 1);
    props.wrongAnswear();
  };

  const skipHandler = () => {
    props.skip();
  };

  return (
    <>
      {countMistakes >= 2 && (
        <button className="btn-skip" onClick={skipHandler}>
          Skip
        </button>
      )}
      <div className="flex-column--centered word__container">
        <img
          className="flex-element word__img"
          src={props.imageURL}
          alt={props.wordName}
        />
        <SoundBtn sentence={props.wordName} />
        <h3 className="u-center-text">{props.wordName}</h3>
        <h4 className="u-center-text">[ {props.translation} ]</h4>
        <RecordBtn
          textToLookFor={props.wordName}
          correctAnswear={correctAnswearHandler}
          wrongAnswear={wrongAnswearHandler}
          clickActions={() => props.stopNotification()}
        />
      </div>
    </>
  );
}

export default WordRecord;
