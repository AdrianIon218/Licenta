import { IconStatus, lessonType } from "../Helpers/CommonInterfaces";
import { useContext } from "react";
import { Level } from "../Helpers/constants";
import { CourseCtx } from "./CourseContext";
import { useNavigate } from "react-router-dom";

type props = {
  children: string;
  status: IconStatus;
  lessonId: number;
  moduleId: number;
  type: lessonType;
};

function LessonBtn({ children, status, lessonId, moduleId, type }: props) {
  const { courseLvl: level } = useContext(CourseCtx)!;
  const navigate = useNavigate();

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    sessionStorage.setItem("lessonId", lessonId.toString());
    sessionStorage.setItem("moduleId", moduleId.toString());
    sessionStorage.setItem("lessonTitle", children);
    sessionStorage.setItem("lessonType", type);
    navigate("/lesson");
  };

  return (
    <div className="course-lesson">
      <button
        className={`course-lesson-btn course-lesson-btn--${Level[level]}`}
        onClick={onClickHandler}
      >
        {children}
      </button>
      <div
        className={`course-status ${
          level < Level.B1
            ? "course-status--A"
            : level > Level.B2
            ? "course-status--C"
            : "course-status--B"
        }`}
      >
        <i
          className={`fa fa-star ${
            status !== IconStatus.NO_PROGRESS && "course-status--checked"
          }`}
        />
        <i
          className={`fa fa-star ${
            status === IconStatus.STAR_3 && "course-status--checked"
          }`}
        />
        <i
          className={`fa fa-star ${
            status > IconStatus.STAR_1 && "course-status--checked"
          }`}
        />
      </div>
      {type === "pronunciation" && (
        <div className="course-pronunciation">
          <i className="fa fa-microphone" />
        </div>
      )}
    </div>
  );
}

export default LessonBtn;
