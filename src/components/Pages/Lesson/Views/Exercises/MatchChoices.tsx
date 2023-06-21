import { useMemo, useState } from "react";

interface LocProps{
    structure: {
      choices: string[][]
    },
    correctAnswear:()=>void,
    wrongAnswear:()=>void
}

function MatchChoices(props:LocProps) {
    const [choicesMade, setChoices] = useState<string[]>([]);
    const [results, setResults] = useState({isShown:false, isCorrect:false});

    const leftColoumnElements = props.structure.choices.map(arr=>arr[0]).map((choice,index)=>{
        return (<li key={index}>
           <div className="u-center-text">{choice}</div>
           <div className={`u-center-text ${results.isShown? choicesMade[index] === props.structure.choices[index][1]? 'backgd-green':'backgd-red':''}`}>{choicesMade[index]??''}</div>
        </li>);
    });
    
    const onClickHandler=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
       const {value} = e.currentTarget;
       setChoices(oldVal=>oldVal.concat([value]));
    }
    
    const choicesShuffled = useMemo(()=>props.structure.choices.map(arr=>arr[1]).sort((a, b)=> 0.5 - Math.random()),[]);
    const choiceElements =  choicesShuffled.map((choice, index)=>{
        return (<button key={index} onClick={onClickHandler} value={choice} 
            disabled={choicesMade.length === leftColoumnElements.length || choicesMade.includes(choice)}>{choice}</button>);
    });

    const onSubmit = ()=>{
      if(choicesMade.length === props.structure.choices.length){
        const result = props.structure.choices.every((choice,index)=>{
            return choice[1] === choicesMade[index];
        });
        setResults({isShown:true, isCorrect:result});
      }
    }

    const continueHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      event.currentTarget.disabled = true;
      if(results.isCorrect){
        props.correctAnswear();
        return;
      }
      props.wrongAnswear();
    }

    return (<div className="flex-column--centered exercise">
       <h3>Completează perechiile</h3>
       <ul className="choices-match-box">
        {leftColoumnElements}
       </ul>
       <div className="box-btns choices-box">
        {choiceElements}
       </div>
       <button className='submitBtn u-center-text' onClick={()=>{setChoices([])}} hidden={results.isShown}><i className="fa fa-refresh" /> Reset</button>
       <button className='submitBtn u-center-text' onClick={onSubmit} hidden={results.isShown}>Verifică <i className='fas fa-angle-double-right'/></button>
       {results.isShown && !results.isCorrect && <ul className="choices-box correct-choices">
        {props.structure.choices.map((choice,index)=>(<li key={index}>{choice.join(' ')}</li>))}
        </ul>}
       {results.isShown && <button className='submitBtn u-center-text' onClick={continueHandler}>Continuă <i className='fas fa-angle-double-right'/></button>}
    </div>);
}

export default MatchChoices