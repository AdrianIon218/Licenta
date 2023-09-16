import { useEffect, useMemo, useReducer, useState } from "react";
import { IconStatus, Word } from "../../../../Helpers/CommonInterfaces";
import WriteWord from "./WriteWord";
import Notification, {
  NotificationType,
} from "../../../../Features/Notfication";
import MultipleChoice from "./MultipleChoice";
import ChooseTranslation from "./ChooseTranslation";
import WordRecord from "../../LessonCommonFeatures/WordRecord";

interface LocProps {
  unkwonWords: Word[];
  setProgressBar: (num: number) => void;
  onFinish: (status: IconStatus) => void;
  score?: number;
}

enum ExerciseType {
  MUTIPLE_CHOICE,
  WRITE_wORD,
  CHOOSE_TRANSLATION,
  PRONUNCIATION,
}
enum ACTION {
  CORRECT_ANSWEAR,
  WRONG_ANSWEAR,
  SKIP_ANSWEAR,
}

function WordsExercises(props: LocProps) {
  const reducer = (
    state: any,
    action: { type: ACTION; progressRatio: number },
  ) => {
    switch (action.type) {
      case ACTION.CORRECT_ANSWEAR:
        props.setProgressBar(state.progressBar + action.progressRatio);
        return {
          progressBar: state.progressBar + action.progressRatio,
          score: state.score + 1,
          wordIndex: state.wordIndex + 1,
        };
      case ACTION.WRONG_ANSWEAR:
        return { ...state, score: state.score - 1 };
      case ACTION.SKIP_ANSWEAR:
        props.setProgressBar(state.progressBar + action.progressRatio);
        return {
          progressBar: state.progressBar + action.progressRatio,
          score: state.score - 1,
          wordIndex: state.wordIndex + 1,
        };
      default:
        return state;
    }
  };
  const [exerciseInfo, dispatch] = useReducer(reducer, {
    progressBar: 50,
    score: props.score ?? 0,
    wordIndex: 0,
  });
  const [warningNotification, setNotification] = useState(false);
  const numWords = props.unkwonWords.length;
  const lessonType = sessionStorage.getItem("lessonType");
  const progressRatio = 50 / props.unkwonWords.length;
  const commonMethodes = {
    correctAnswear: () => {
      dispatch({ type: ACTION.CORRECT_ANSWEAR, progressRatio: progressRatio });
      setNotification(false);
    },
    wrongAnswear: () => {
      dispatch({ type: ACTION.WRONG_ANSWEAR, progressRatio: progressRatio });
      setNotification(true);
    },
  };
  const skipHandler = () => {
    dispatch({ type: ACTION.SKIP_ANSWEAR, progressRatio: progressRatio });
    setNotification(false);
  };

  useEffect(() => {
    props.unkwonWords.sort((a, b) => 0.5 - Math.random());
  }, []);

  const exerciseJSX = useMemo(() => {
    const wordNames = props.unkwonWords.map((word) => word.wordName);
    const wordsTranslations = props.unkwonWords.map((word) => word.translation);

    return props.unkwonWords.map((word, index) => {
      const currentExerciseType =
        lessonType === "pronunciation" ? index % 4 : index % 3;

      if (currentExerciseType === ExerciseType.WRITE_wORD) {
        return (
          <WriteWord
            key={index}
            {...word}
            {...commonMethodes}
            skipExercise={skipHandler}
          />
        );
      }

      if (currentExerciseType === ExerciseType.MUTIPLE_CHOICE) {
        return (
          <MultipleChoice
            key={index}
            {...word}
            {...commonMethodes}
            wordNames={wordNames}
          />
        );
      }

      if (currentExerciseType === ExerciseType.CHOOSE_TRANSLATION) {
        return (
          <ChooseTranslation
            key={index}
            {...word}
            {...commonMethodes}
            wordsTranslation={wordsTranslations}
          />
        );
      }

      return (
        <WordRecord
          key={index}
          {...word}
          {...commonMethodes}
          skip={skipHandler}
          stopNotification={() => setNotification(false)}
        />
      );
    });
  }, [props.unkwonWords]);

  useEffect(() => {
    if (exerciseInfo.wordIndex === props.unkwonWords.length) {
      const numOfExercises =
        lessonType === "pronunciation" ? 2 * numWords : numWords;
      const status =
        exerciseInfo.score <= numOfExercises / 3
          ? IconStatus.STAR_1
          : exerciseInfo.score <= numOfExercises / 2
          ? IconStatus.STAR_2
          : IconStatus.STAR_3;
      props.onFinish(status);
    }
  }, [exerciseInfo.wordIndex]);

  return (
    <div className="new_words_ex">
      {warningNotification && (
        <Notification
          message="Răspuns greșit !"
          type={NotificationType.ERROR}
          deleteNotification={() => setNotification(false)}
        />
      )}
      {exerciseInfo.wordIndex < props.unkwonWords.length &&
        exerciseJSX[exerciseInfo.wordIndex]}
    </div>
  );
}

export default WordsExercises;
