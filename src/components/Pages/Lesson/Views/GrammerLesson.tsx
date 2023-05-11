import axios from "axios";
import { useEffect, useMemo, useState } from "react";

interface LocProps{
    lessonId: number 
}

function GrammerLesson(props:LocProps) {
    const [lessionInfo, setLessonInfo] = useState();

    useEffect(()=>{
        axios.post("http://localhost:5000/lessons/grammer", {lessonId: props.lessonId}).then(response => { 
            const {status} = response.data;
        });
    },[props.lessonId]);

    return (
      <div>{lessionInfo}</div>
    );
}

export default GrammerLesson