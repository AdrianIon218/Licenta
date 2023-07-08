import React, { useState } from "react";
import Notification, {
  NotificationType,
} from "../../../../Features/Notfication";

interface LocProps {
  structure: {
    sentence: string;
    state: boolean;
    correct_sentence?: string;
  };
  correctAnswear: () => void;
  wrongAnswear: () => void;
}

function TrueOrFalse(props: LocProps) {
  const [warningNotification, setNotification] = useState(false);
  const [nextBtn, setNextState] = useState(false);
  const [isGoodAnswear, setGoodAnswear] = useState(false);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const value = event.currentTarget.value === "true";
    if (value === props.structure.state) {
      setGoodAnswear(true);
      setNotification(true);
      setNextState(true);
    } else {
      setGoodAnswear(false);
      setNotification(true);
      setNextState(true);
    }
  };

  const nextExercise = () => {
    if (isGoodAnswear) {
      props.correctAnswear();
    } else {
      props.wrongAnswear();
    }
  };

  return (
    <>
      {warningNotification && (
        <Notification
          message={`Propoziția este ${
            props.structure.state ? "correctă " : `incorectă `
          }!`}
          type={
            isGoodAnswear ? NotificationType.SUCCESS : NotificationType.ERROR
          }
          deleteNotification={() => setNotification(false)}
        />
      )}
      <div className="flex-column--centered exercise">
        <h3>Este corectă propoziția din punct de vedere gramatical ?</h3>
        <h4>{props.structure.sentence}</h4>
        <div>
          <button
            value={"flase"}
            disabled={nextBtn}
            onClick={onClickHandler}
            className="false-btn"
          >
            Falsch
          </button>
          <button
            value={"true"}
            disabled={nextBtn}
            onClick={onClickHandler}
            className="true-btn"
          >
            Richtig
          </button>
        </div>
        {nextBtn && (
          <div className="flex-column--centered">
            {props.structure.correct_sentence && (
              <h4 className="correct_sentence">{`Varianta corectă : ${props.structure.correct_sentence}`}</h4>
            )}
          </div>
        )}
        {nextBtn && (
          <button className="submitBtn u-center-text" onClick={nextExercise}>
            Continuă
          </button>
        )}
      </div>
    </>
  );
}

export default TrueOrFalse;
