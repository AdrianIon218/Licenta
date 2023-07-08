import React, { useRef, useState } from "react";

interface LocProps {
  structure: {
    sentence_part_1: string;
    sentence_part_2: string;
    choices: string[];
    correctAnswear: string;
  };
  correctAnswear: () => void;
  wrongAnswear: () => void;
}

function CompleteSentence(props: LocProps) {
  const answearRef = useRef<HTMLSpanElement>(null);
  const [answearState, setAnswear] = useState({
    isShown: false,
    isCorrect: false,
  });

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    answearRef.current!.innerText = event.currentTarget.value;
  };

  const onSubmit = () => {
    if (answearState.isShown) {
      if (answearState.isCorrect) {
        props.correctAnswear();
      } else {
        props.wrongAnswear();
      }
      return;
    }
    const text = answearRef.current!.innerText;
    if (text != "") {
      if (text === props.structure.correctAnswear) {
        setAnswear({ isShown: true, isCorrect: true });
      } else {
        setAnswear({ isShown: true, isCorrect: false });
      }
    }
  };

  const choicesJSX = props.structure.choices.map((choice, index) => {
    return (
      <button
        key={index}
        onClick={onClickHandler}
        className={
          answearState.isShown
            ? choice === props.structure.correctAnswear
              ? "backgd-green"
              : "backgd-red"
            : ""
        }
        value={choice}
        disabled={answearState.isShown}
      >
        {choice}
      </button>
    );
  });

  return (
    <div className="flex-column--centered exercise">
      <h3>Completează propoziția</h3>
      <h4>
        {props.structure.sentence_part_1}{" "}
        <span
          className={`block-transparent ${
            answearState.isShown
              ? answearState.isCorrect
                ? "backgd-green"
                : "backgd-red"
              : ""
          }`}
          ref={answearRef}
        ></span>{" "}
        {props.structure.sentence_part_2}
      </h4>
      <div className="box-btns">{choicesJSX}</div>

      <button className="submitBtn u-center-text" onClick={onSubmit}>
        {answearState.isShown ? "Continuă" : "Verifică"}{" "}
        <i className="fas fa-angle-double-right" />
      </button>
    </div>
  );
}

export default CompleteSentence;
