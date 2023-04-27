import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface LocProps{
    closeBk: () => void
}

function ExitMessage(props:LocProps) {
  const  navigate = useNavigate();
  const closeLesson = useCallback(()=>{
    sessionStorage.setItem('lessonId', '');
    sessionStorage.setItem('moduleId', '');
    sessionStorage.setItem('lessonTitle', '');
    navigate(-1);
  },[]);

  return (
    <div className="exit_message__blackdrop ">
      <div className="exit_message__box flex-column--centered">
         <div className='btn_exit_ctn'>
            <div className="btn_exit" onClick={props.closeBk}> &times; </div>
         </div>
         <h3> Sigur dorești să închizi lecția ? </h3> 
         <div className="flex-row--centered">
          <div className="btn btn--white lesson-btn" onClick={closeLesson}> Da </div>
          <div className="btn btn--blue lesson-btn" onClick={props.closeBk}> Nu </div>
         </div>
      </div>
    </div>
  )
}

export default ExitMessage;