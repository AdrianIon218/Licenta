import { useEffect, useState } from "react";
import { IconStatus, Word } from "../../../Helpers/commonInterfaces";
import { orderRandom } from "../../../Helpers/UtilFunctions";
import WriteWord from "./Exercises/WriteWord";
import MultipleChoice from "./Exercises/MultipleChoice";
import ChooseTranslation from "./Exercises/ChooseTranslation";
import Notification, { NotificationType } from "../../../Features/Notfication";
import GrammerExercises from "./Exercises/GrammerExercises";

interface LocProps {
  unkwonWords: Word[];
  setProgressBar: (num: number) => void;
  lessonId: number;
  toFinish: (status: IconStatus) => void;
}
enum ExerciseType {
  MUTIPLE_CHOICE,
  WRITE_wORD,
  CHOOSE_TRANSLATION,
}

function TestLesson(props: LocProps) {
  const [exerciseInfo, setExerciseInfo] = useState({
    progressBar: 0,
    score: 0,
    wordIndex: 0,
  });
  const [warningNotification, setWarningNotification] = useState(false);
  const [exercisesWordJSX, setExercisesWordJSX] = useState<JSX.Element[]>([]);

  const commonMethodesWords = {
    correctAnswear: () => {
      setExerciseInfo((oldVal) => {
        const newProgress = oldVal.progressBar + 50 / props.unkwonWords.length;
        props.setProgressBar(newProgress);
        return {
          progressBar: newProgress,
          score: oldVal.score + 1,
          wordIndex:
            oldVal.wordIndex < props.unkwonWords.length
              ? oldVal.wordIndex + 1
              : props.unkwonWords.length,
        };
      });
      setWarningNotification(false);
    },
    wrongAnswear: () => {
      setExerciseInfo((oldVal) => {
        return { ...oldVal, score: oldVal.score - 1 };
      });
      setWarningNotification(true);
    },
  };
  const skipHandler = () => {
    setExerciseInfo((oldVal) => {
      const newProgress = oldVal.progressBar + 50 / props.unkwonWords.length;
      props.setProgressBar(newProgress);
      return {
        progressBar: newProgress,
        score: oldVal.score - 1,
        wordIndex:
          oldVal.wordIndex < props.unkwonWords.length
            ? oldVal.wordIndex + 1
            : props.unkwonWords.length,
      };
    });
    setWarningNotification(false);
  };

  useEffect(() => {
    orderRandom(props.unkwonWords);
    const wordNames = props.unkwonWords.map((word) => word.wordName);
    const wordsTranslations = props.unkwonWords.map((word) => word.translation);

    setExercisesWordJSX(
      props.unkwonWords.map((word, index) => {
        const currentExerciseType = index % 3;
        switch (currentExerciseType) {
          case ExerciseType.WRITE_wORD:
            return (
              <WriteWord
                key={index}
                {...word}
                {...commonMethodesWords}
                skipExercise={skipHandler}
              />
            );
          case ExerciseType.MUTIPLE_CHOICE:
            return (
              <MultipleChoice
                key={index}
                {...word}
                {...commonMethodesWords}
                wordNames={wordNames}
              />
            );
          default:
            return (
              <ChooseTranslation
                key={index}
                {...word}
                {...commonMethodesWords}
                wordsTranslation={wordsTranslations}
              />
            );
        }
      }),
    );
  }, [props.unkwonWords]);

  return (
    <div className="new_words_ex">
      {warningNotification && (
        <Notification
          message="Răspuns greșit !"
          type={NotificationType.ERROR}
          deleteNotification={() => setWarningNotification(false)}
        />
      )}
      {exerciseInfo.wordIndex < props.unkwonWords.length &&
        exercisesWordJSX[exerciseInfo.wordIndex]}
      {exerciseInfo.wordIndex === props.unkwonWords.length && (
        <GrammerExercises
          currentScore={exerciseInfo.score}
          previousExercisesNum={props.unkwonWords.length}
          lessonId={props.lessonId}
          addProgress={props.setProgressBar}
          toFinish={props.toFinish}
        />
      )}
    </div>
  );
}

export default TestLesson;
