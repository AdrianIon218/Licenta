export enum IconStatus{
  NO_PROGRESS , STAR_1, STAR_2, STAR_3
}
import { useContext } from "react";
import { Level } from "../Helpers/constants";
import { CourseCtx } from "./CourseContext";

type props = {
  children:string,
  status:IconStatus
};

function CourseBtn({children, status}:props) {
  const {courseLvl:level} = useContext(CourseCtx)!;

  const onClickHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    event.stopPropagation();

  }

  return (
    <div className='course-lesson'>
      <button className={`course-lesson-btn course-lesson-btn--${Level[level]}`} onClick={onClickHandler}>
        {children}
      </button>
      <div className={`course-status ${level < Level.B1 ? 'course-status--A': level > Level.B2 ? 'course-status--C':'course-status--B'}`}>
        <i className={`fa fa-star ${status !== IconStatus.NO_PROGRESS && 'course-status--checked'}`} />
        <i className={`fa fa-star ${status === IconStatus.STAR_3 && 'course-status--checked'}`} />
        <i className={`fa fa-star ${status > IconStatus.STAR_1 && 'course-status--checked'}`} />
      </div>
      
    </div>);
}

export default CourseBtn;