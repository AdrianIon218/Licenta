import { useEffect, useState } from 'react'

interface LocProps{
    time:string,
    codeExpire:()=>void
}

function CountDownTime(props:LocProps) {
    const [timeToShow, setTimeToShow] = useState({min:10, sec:0});

    const converToMs = (hours:number, min:number, sec:number)=>{
        const hoursToMs = hours*60*60*1000;
        const minToMs = min*60*1000;
        const secToMs = sec*1000;
        return hoursToMs + minToMs + secToMs;
    }

    useEffect(()=>{
        const value_end = props.time.split(':');
        const timeTarget = converToMs(+value_end[0], +value_end[1], +value_end[2]);

        const id = setInterval(()=>{
          const time_now = new Date();
          const now_hours = time_now.getHours() > 12 ? time_now.getHours()-12 : time_now.getHours();
          const timeNow = converToMs(now_hours, time_now.getMinutes(), time_now.getSeconds());
          const timeDif = timeTarget - timeNow;
          if(timeDif < 0){
            props.codeExpire();
            clearInterval(id);
          }else{
            setTimeToShow({min: Math.floor(timeDif/1000/60), sec:timeDif/1000%60})
          }
        },1000);
        
        return ()=>{
           // props.codeExpire();
            clearInterval(id);
        }   
    },[props.time]);

  return (
    <span style={{color:'red'}}>{timeToShow.min} min {timeToShow.sec} sec</span>
  )
}

export default CountDownTime