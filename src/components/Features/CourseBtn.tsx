export type IconStatus = "not started"|"in progress"|"completed";
import { useContext } from "react";
import { Level } from "../Helpers/constants";
import { CourseCtx } from "./CourseContext";

class Icon{
  className='';
  containerClass='';
  message='';

  constructor(status:IconStatus){
    this.className = status === "not started" ? "fas fa-clock" : 
                    status === "in progress" ? "fas fa-history" : "fa fa-check";
    this.containerClass = status === "not started" ? "course-status--gray" :
            status === "in progress" ? "course-status--yellow" : "course-status--green";
    this.message = status === "not started" ? "neînceput" :
            status === "in progress" ? "neterminat" : "terminat";
  }
}

type props = {
  children:string,
  status:IconStatus
};

function CourseBtn({children, status}:props) {
  const {courseLvl:level} = useContext(CourseCtx)!;
  const icon = new Icon(status);

  const onClickHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    event.stopPropagation();

  }


  return (
    <div className='course-lesson'>
      <button className={`course-lesson-btn course-lesson-btn--${Level[level]}`} onClick={onClickHandler}>
        {children}
      </button>
      <div className={`course-status ${icon.containerClass}`} title={icon.message}>
        <i className={icon.className}></i>
      </div>
    </div>);
}

export default CourseBtn;