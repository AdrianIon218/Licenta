import { useState } from 'react'
import ExitMessage from './ExitMessage';

function LessonExitButton() {
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  
  const clickHandler = () => {
    setConfirmationMessage(true);
  }
  
  return (
    <>
    {confirmationMessage && <ExitMessage closeBk={()=>setConfirmationMessage(false)} />}
    <div className="lesson__exit">
        <button  className='lesson__exit__btn' onClick={clickHandler}>
            &times;
        </button>
     </div>
    </>
    
  )
}

export default LessonExitButton