import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import TrueOrFalse from "./TrueOrFalse";
import CompleteSentence from "./CompleteSentence";
import MatchChoices from "./MatchChoices";
import OrderWords from "./OrderWords";
import { IconStatus } from "../../../../Helpers/CommonInterfaces";

interface LocProps {
  lessonId: number;
  addProgress: (num: number) => void;
  toFinish: (status: IconStatus) => void;
  currentScore?: number;
  previousExercisesNum?: number;
}

function GrammerExercises(props: LocProps) {
  const [generalState, setGeneralState] = useState({
    score: 0,
    currentExIndex: 0,
    progressBar: 50,
  });
  const [exercisesComps, setExerciseComps] = useState<JSX.Element[]>([]);

  useEffect(() => {
    props.addProgress(generalState.progressBar);
  }, [generalState.progressBar]);

  const correctAnswearHandler = (progressBarRatio: number) => {
    setGeneralState((oldVal) => ({
      score: oldVal.score + 1,
      currentExIndex: oldVal.currentExIndex + 1,
      progressBar: oldVal.progressBar + progressBarRatio,
    }));
  };

  const wrongAnswearHandler = (progressBarRatio: number) => {
    setGeneralState((oldVal) => ({
      score: oldVal.score - 1,
      currentExIndex: oldVal.currentExIndex + 1,
      progressBar: oldVal.progressBar + progressBarRatio,
    }));
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/lessons/grammer/getExercises", {
        lessonId: props.lessonId,
      })
      .then((response) => {
        const exercises: {
          type:
            | "true_false"
            | "match_choices"
            | "complete_sentence"
            | "order_words";
          structure: any;
        }[] = response.data;
        exercises.sort((a, b) => 0.5 - Math.random());
        setExerciseComps(
          exercises.map((exercise, index) => {
            const commonStructure = {
              structure: exercise.structure,
              correctAnswear: () =>
                correctAnswearHandler(50 / exercises.length),
              wrongAnswear: () => wrongAnswearHandler(50 / exercises.length),
            };
            return (
              <React.Fragment key={index}>
                {exercise.type === "true_false" && (
                  <TrueOrFalse {...commonStructure} />
                )}
                {exercise.type === "complete_sentence" && (
                  <CompleteSentence {...commonStructure} />
                )}
                {exercise.type === "match_choices" && (
                  <MatchChoices {...commonStructure} />
                )}
                {exercise.type === "order_words" && (
                  <OrderWords {...commonStructure} />
                )}
              </React.Fragment>
            );
          }),
        );
      });
  }, [props.lessonId]);

  useEffect(() => {
    const numOfExercises = exercisesComps.length;
    if (
      generalState.currentExIndex > 0 &&
      generalState.currentExIndex === numOfExercises
    ) {
      if (props.currentScore && props.previousExercisesNum) {
        const totalScore = generalState.score + props.currentScore;
        const numOfTotalExercises = numOfExercises + props.previousExercisesNum;

        const statusResult =
          totalScore > numOfTotalExercises / 2
            ? IconStatus.STAR_3
            : totalScore > numOfTotalExercises / 3
            ? IconStatus.STAR_2
            : IconStatus.STAR_1;
        props.toFinish(statusResult);
      } else {
        const statusResult =
          generalState.score > numOfExercises / 2
            ? IconStatus.STAR_3
            : generalState.score > numOfExercises / 3
            ? IconStatus.STAR_2
            : IconStatus.STAR_1;
        props.toFinish(statusResult);
      }
    }
  }, [generalState]);

  return (
    <React.Fragment>
      {exercisesComps[generalState.currentExIndex]}
    </React.Fragment>
  );
}

export default GrammerExercises;
