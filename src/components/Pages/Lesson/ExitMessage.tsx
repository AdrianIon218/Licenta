import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LocProps{
    closeBk: () => void
}

function ExitMessage(props:LocProps) {
  const [closeMessage, setCloseMessage] = useState(false);
  const  navigate = useNavigate();
  const closeLesson = useCallback(()=>{
    sessionStorage.removeItem('lessonType');
    sessionStorage.removeItem('lessonId');
    sessionStorage.removeItem('moduleId');
    sessionStorage.removeItem('lessonTitle');
    setCloseMessage(true);
    setTimeout( ()=>navigate(-1), 410);
  },[]);
  const closeMessageHandler = useCallback(()=>{
    setCloseMessage(true);
    setTimeout( ()=>props.closeBk(), 350);
  },[]);

  return (
    <div className={`exit_message__blackdrop ${closeMessage && 'exit_message__blackdrop--close'}`}>
      <div className="exit_message__box flex-column--centered">
         <div className='btn_exit_ctn'>
            <div className="btn_exit" onClick={closeMessageHandler}> &times; </div>
         </div>
         <h3> Sigur dorești să închizi lecția ? </h3> 
         <div className="flex-row--centered">
          <div className="btn btn--white lesson-btn" onClick={closeLesson}> Da </div>
          <div className="btn btn--blue lesson-btn" onClick={closeMessageHandler}> Nu </div>
         </div>
      </div>
    </div>
  )
}

export default ExitMessage;