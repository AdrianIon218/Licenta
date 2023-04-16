import { useEffect, useRef } from 'react'

export enum NotificationType{
  ERROR, WARNING, SUCCESS, NO_TYPE
}

interface LocProps{
    message:string,
    type?:NotificationType,
    deleteNotification:()=>void
}

function Notification({message, type, deleteNotification}:LocProps) {
  const notificationRef = useRef<HTMLDivElement>(null);

  const hide = () => {
    console.log(type)
    notificationRef.current!.classList.add('notification--fade-out');
    setTimeout(() => deleteNotification(), 605);
  }

  useEffect(() => {
    setTimeout(()=>{
        if(notificationRef.current!==null)
        {
            hide();
        }
    }, 5000);
  },[]);
  
  return (
    <div className={`notification ${type === NotificationType.ERROR ? 'notification--error': 
            type === NotificationType.SUCCESS ? 'notification--success':''}`} ref={notificationRef}>
      {message}
      <span className='notification__exit' onClick={hide}>&times;</span>
    </div>
  )
}

export default Notification;