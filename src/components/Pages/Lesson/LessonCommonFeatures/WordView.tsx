import { useRef, useState } from 'react'
import { Word } from '../../../Helpers/commonInterfaces';
import SoundBtn from '../../../Features/SoundBtn';

interface LocProps extends Word{
    previousWord?: ()=> void,
    nextWord?: ()=> void, 
}

function WordView(props:LocProps) {
  const wordDiv= useRef<HTMLDivElement>(null);
  const [isAnArrowClicked, setArrowClick] = useState(false);

  const clickHandler = (func:()=>void) => {
    if(!isAnArrowClicked){
      wordDiv.current?.classList.add('word__container--fade-out');   
      setTimeout(()=>func(),300);
      setArrowClick(true);
    }
  }

  return (
    <div className='flex-column--centered word__container' ref={wordDiv} >
      <img className='flex-element word__img' src={props.imageURL} alt={props.wordName} />
      <h3 className='u-center-text'>{props.wordName}</h3>
      <h4 className='u-center-text'>[ {props.translation} ]</h4>
      <h5 className='u-center-text'>Ex : {props.example} </h5>
      <SoundBtn sentence={props.wordName} />
      <div className='arrow-ctn'>
        {props.previousWord !== undefined && <i className='fas fa-chevron-circle-left' onClick={()=>clickHandler(props.previousWord!)} /> }  
        {props.nextWord !== undefined && <i className='fas fa-chevron-circle-right arrow-right' onClick={()=>clickHandler(props.nextWord!)} />}
      </div>
    </div>
  );
}

export default WordView;