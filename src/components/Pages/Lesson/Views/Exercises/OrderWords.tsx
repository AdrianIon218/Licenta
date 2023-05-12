import React, { useMemo, useState } from 'react'

interface LocProps{
    structure: {
        words: string[]
      },
    correctAnswear:()=>void,
    wrongAnswear:()=>void
}

function OrderWords(props:LocProps) {
    const [choicesMade, setChoices] = useState<string[]>([]);
    const [results, setResults] = useState({isShown:false, isCorrect:false});

    const onClickHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const {value} = event.currentTarget;
        setChoices(oldVal=>[...oldVal, value]);
    }
    
    const sentenceParts = props.structure.words.map((word,index)=>{
        return (<span className={`block-transparent ${results.isShown? word===choicesMade[index]?'backgd-green':'backgd-red':''}`} key={index}>{choicesMade[index]}</span>)
    })

    const choicesShuffled = useMemo(()=>[...props.structure.words].sort((a, b)=> 0.5 - Math.random()),[]);
    const choiceElements =  choicesShuffled.map((word, index)=>{
        return (<button key={index} onClick={onClickHandler} value={word} disabled={choicesMade.includes(word)} >{word}</button>);
    });

    const onSubmit = ()=>{
        if(choiceElements.length === props.structure.words.length){
            const result = props.structure.words.every((word,index)=>{
                return word === choicesMade[index];
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
    
    return (
    <div className="flex-column--centered exercise">
       <h3 className='u-center-text'>Ordonează cuvintele astfel încât propoziția să fie corectă !</h3>
       <p className='flex-row--centered sentence-builder'>{sentenceParts}</p>
       <div className="box-btns choices-box">
         {choiceElements}
       </div>
       <button className='submitBtn u-center-text' onClick={()=>{setChoices([])}} hidden={results.isShown}><i className="fa fa-refresh" /> Reset</button>
       <button className='submitBtn u-center-text' onClick={onSubmit} hidden={results.isShown}>Verifică <i className='fas fa-angle-double-right'/></button>
       {results.isShown && !results.isCorrect && <div className="choices-box correct-choices flex-column--centered">
          {props.structure.words.join(' ')}
        </div>}
       {results.isShown && <button className='submitBtn u-center-text' onClick={continueHandler}>Continuă <i className='fas fa-angle-double-right'/></button>}
    </div>);
}

export default OrderWords;