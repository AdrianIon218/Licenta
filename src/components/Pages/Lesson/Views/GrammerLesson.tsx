import axios from "axios";
import { useEffect, useState } from "react";

interface LocProps {
  lessonId: number;
  toExercises: () => void;
}

function GrammerLesson(props: LocProps) {
  const [lessionInfo, setLessonInfo] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:5000/lessons/grammer", {
        lessonId: props.lessonId,
      })
      .then((response) => {
        const rez = response.data;
        const compsFSX = rez.map(
          (obj: { title: string; paragraph: string }, index: number) => (
            <div key={index}>
              {index === 0 ? (
                <h3 className="u-center-text">{obj.title}</h3>
              ) : (
                <h4>{obj.title}</h4>
              )}
              <p>{obj.paragraph}</p>
            </div>
          ),
        );
        setLessonInfo(compsFSX);
      });
  }, [props.lessonId]);

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.currentTarget.disabled = true;
    props.toExercises();
  };

  return (
    <div className="section-grammer">
      {lessionInfo}
      <div className="u-center-text">
        <button className="submitBtn u-center-text" onClick={clickHandler}>
          Începe exercițiile <i className="fas fa-angle-double-right" />
        </button>
      </div>
    </div>
  );
}

export default GrammerLesson;
