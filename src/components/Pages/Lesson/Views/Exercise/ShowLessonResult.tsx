import { useEffect } from 'react';
import { IconStatus } from '../../../../Helpers/commonInterfaces'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface LocProps {
    statusLesson:IconStatus
}

function ShowLessonResult(props:LocProps) {
  const navigate = useNavigate();
  useEffect(()=>{
    const user = localStorage.getItem('userAccount');
    const lessonId =  sessionStorage.getItem('lessonId');
    
    sessionStorage.removeItem('moduleId');
    sessionStorage.removeItem('lessonTitle');
    sessionStorage.removeItem('lessonType');
    if(user){
      axios.post("http://localhost:5000/lessons/addProgress", {email: user, lessonId: lessonId, status: props.statusLesson}).then(
        res => {
          sessionStorage.removeItem('lessonId');
        });
    }else{
      sessionStorage.removeItem('lessonId');
    }
  },[]);
  
  return (
    <div className='flex-column--centered'>
      <h3 className='heading-secondary u-center-text'>Lecție terminată</h3>
      <div className='result-stars'>
        <i className={`fa fa-star ${props.statusLesson !== IconStatus.NO_PROGRESS && 'course-status--checked'}`} />
        <i className={`fa fa-star ${props.statusLesson === IconStatus.STAR_3 && 'course-status--checked'}`} />
        <i className={`fa fa-star ${props.statusLesson > IconStatus.STAR_1 && 'course-status--checked'}`} />
      </div>
      <button className='btn-gradient-cyan' onClick={()=>navigate(-1)}> Înapoi la lecții</button>
    </div>
  );
}

export default ShowLessonResult;