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
        const hoursToExpire = +value_end[0];
        let timeTarget = converToMs(hoursToExpire, +value_end[1], +value_end[2]);
        
        const id = setInterval(()=>{
          const timeOBj = new Date();
          let hours_now = timeOBj.getHours();
          hours_now = hours_now > 12 ? hours_now - 12 : hours_now;
          if(hours_now === 11 && hoursToExpire === 0){
            timeTarget = converToMs(12, +value_end[1], +value_end[2]);
          }
          let timeNow = converToMs(hours_now, timeOBj.getMinutes(), timeOBj.getSeconds());
          let timeDif = timeTarget - timeNow;
          if(timeDif < 0){
            props.codeExpire();
            clearInterval(id);
          }else{
            setTimeToShow({min: Math.floor(timeDif/1000/60), sec:timeDif/1000%60});
          }
        }, 1000);
        
        return ()=>{
          clearInterval(id);
        }   
    },[props.time]);

  return (
    <span style={{color:'red'}}>{timeToShow.min} min {timeToShow.sec} sec</span>
  )
}

export default CountDownTime;