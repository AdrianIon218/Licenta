import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import TrueOrFalse from "./TrueOrFalse";

interface LocProps{
    lessonId: number,
    addProgress: (num:number)=>void
}

function GrammerExercises(props:LocProps) {
    const [generalState,  setGeneralState] = useState({score:0, currentExIndex:0, progressBar:50})
    const [exercisesComps, setExerciseComps] = useState<JSX.Element[]>([]);
   
    useEffect(()=>{
       props.addProgress(generalState.progressBar);
    },[generalState.progressBar]);

    const correctAnswearHandler = (progressBarRatio:number)=>{
      setGeneralState(oldVal => ({
        score: oldVal.score+1, 
        currentExIndex: oldVal.currentExIndex+1,
        progressBar: oldVal.progressBar + progressBarRatio
      }));  
    };

    const wrongAnswearHandler = (progressBarRatio:number)=>{
      setGeneralState(oldVal => ({
        score: oldVal.score-1, 
        currentExIndex: oldVal.currentExIndex+1,
        progressBar: oldVal.progressBar + progressBarRatio
      }));
    }

    useEffect(()=>{
        axios.post("http://localhost:5000/lessons/grammer/getExercises", {lessonId: props.lessonId}).then(response => { 
          const exercises:{type:'true_false'|'multiple_choice', structure:any}[] = response.data;
          setExerciseComps(exercises.map((exercise,index)=>{
            return (<React.Fragment key={index}>
                {exercise.type === 'true_false' && 
                  <TrueOrFalse structure={exercise.structure} correctAnswear={()=>correctAnswearHandler(50/exercises.length)} wrongAnswear={()=>wrongAnswearHandler(50/exercises.length)} />}
                </React.Fragment>);
          }));
        });
    },[props.lessonId]);

    
    return (<React.Fragment>
      {exercisesComps[generalState.currentExIndex]}
    </React.Fragment>);
}

export default GrammerExercises