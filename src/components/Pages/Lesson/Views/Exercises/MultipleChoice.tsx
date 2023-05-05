import { useMemo, useRef, useState } from 'react'
import { Word } from '../../../../Helpers/commonInterfaces'

interface LocProps extends Word{
    wordNames: string[]
    correctAnswear: ()=> void,
    wrongAnswear: ()=> void
  }

function MultipleChoice(props:LocProps) {
    const [choiceMade, setChoiceMade] = useState('');
    const choicesLabes = useMemo(()=>{
      let choices =  props.wordNames.filter(word => word !== props.wordName).sort((a, b) => 0.5 - Math.random()).slice(0,3).concat(props.wordName);
      choices = choices.sort((a, b) => 0.5 - Math.random());
      return choices;
    },[props.wordNames]);

    const choiceHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setChoiceMade(e.target.value);
    }

    const choicesJSX =  useMemo(()=>{
        return choicesLabes.map((choice, index) => {
            const idElement = `choice-${index}`;
            return (
              <div key={index} className='choice-ctn'>
                <label htmlFor={idElement} className={choiceMade === choice ? 'choice--checked':'' }>{choice}</label>
                <input type="checkbox" id={idElement} name="choice" value={choice} hidden onChange={choiceHandler}/>
              </div>);
        })
    },[choicesLabes, choiceMade]);

    const submitAction = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
      e.preventDefault();
      if(choiceMade === props.wordName){
        props.correctAnswear();
      }
      else{
        props.wrongAnswear();
       }  
     }

    return ( <div className='flex-column--centered multiple-choice-ex'>
      <img className='flex-element word__img' src={props.imageURL} alt={props.wordName} />
      <h4 className='u-center-text'>{props.translation}</h4>
      <form className='flex-column--centered'>
        <div className='multiple-choices-ctn'>
           {choicesJSX}
        </div>
        <button className='submitBtn u-center-text' onClick={submitAction}>Verfică <i className='fas fa-angle-double-right'/></button>
      </form>
    </div>);
}

export default MultipleChoice;