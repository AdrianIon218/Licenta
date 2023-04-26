import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import LessonController from './LessonController';

function LessonContainer() {
  const [lessonInfo, setLessonInfo] = useState({lessonId:-1, moduleId:-1, lessonTitle:''});
  const [progressBarLoading, setProgressBarLoading] = useState(0);
  const navigate = useNavigate();

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

  const goBack = useCallback(()=>{
    navigate(-1);
  },[]);
 
  return (
    <section className='lesson-section'>
     <div className="lesson__exit">
        <button className='lesson__exit__btn' onClick={() => goBack()}>
            &times;
        </button>
     </div>
      <div className="lesson-ctn">
        <LessonController {...lessonInfo} setProgressBar={setProgressBar}/>
      </div>
      <div className="lesson__progress-bar">
        <ProgressBar progressStatus={progressBarLoading} />
      </div>
    </section>
  );
}

export default LessonContainer;