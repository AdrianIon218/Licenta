import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../../Features/ProgressBar';
import LessonController from './LessonController';
import LessonExitButton from './LessonExitButton';
import StageTransition from './StageTransition';

function LessonContainer() {
  const [lessonInfo, setLessonInfo] = useState({lessonId:-1, moduleId:-1, lessonTitle:''});
  const [progressBarLoading, setProgressBarLoading] = useState(0);
  const navigate = useNavigate();
  const transitionRef = useRef<{trigger:()=>void}>({trigger:()=>{}});

  useEffect(()=>{
    const lessonId = sessionStorage.getItem('lessonId');
    const moduleId = sessionStorage.getItem('moduleId');
    const lessonTitle = sessionStorage.getItem('lessonTitle');
    
    if(lessonId && moduleId && lessonTitle){
        setLessonInfo({lessonId: +lessonId, moduleId: +moduleId, lessonTitle:lessonTitle});
    }else{
        navigate('/Licenta/PageNotFound');
    }
  },[]);

  const setProgressBar = useCallback((progressStatus:number) => {
    if(progressStatus >= 0 && progressStatus <= 100){
      setProgressBarLoading(progressStatus);
    }
  },[]);

  const triggerTransition = useCallback(()=>{
    transitionRef.current!.trigger();
  },[]);
 
  return (
    <div className='lesson-section-ctn'>
    <section className='lesson-section'>
      <div className="lesson-ctn">
        {lessonInfo.lessonId >= 0 && <LessonController {...lessonInfo} setProgressBar={setProgressBar} triggerTransition={triggerTransition} />}
        <StageTransition ref={transitionRef} />
      </div>
      <div className="lesson__progress-bar">
        <ProgressBar progressStatus={progressBarLoading} />
      </div>
      <LessonExitButton />
    </section>
    </div>
  );
}

export default LessonContainer;