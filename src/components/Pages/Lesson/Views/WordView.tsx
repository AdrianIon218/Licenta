import React from 'react'
import { Word } from '../../../Helpers/commonInterfaces';
import SoundBtn from '../../../Features/SoundBtn';

interface LocProps extends Word{
    previousWord?: ()=> void,
    nextWord?: ()=> void, 
}

function WordView(props:LocProps) {

  return (
    <div className='flex-column--centered word__container'>
      <img className='flex-element word__img' src={props.imageURL} alt={props.wordName} />
      <h3>{props.wordName}</h3>
      <h4>[ {props.translation} ]</h4>
      <h5 className='u-center-text'>Ex : {props.example} </h5>
      <SoundBtn sentence={props.wordName} />
      <div className='arrow-ctn'>
        {props.previousWord !== undefined && <i className='fas fa-chevron-circle-left' onClick={props.previousWord} /> }
        {props.nextWord !== undefined && <i className='fas fa-chevron-circle-right arrow-right' onClick={props.nextWord} />}
      </div>
    </div>
  );
}

export default WordView