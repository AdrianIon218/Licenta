import React from 'react'
import { Word } from '../../../Helpers/commonInterfaces'
import RecordBtn from '../../../Features/RecordBtn'

interface LocProps extends Word{

}

function WordRecord(props:LocProps) {
  return (
    <div className='flex-column--centered word__container' >
      <img className='flex-element word__img' src={props.imageURL} alt={props.wordName} />
      <h3 className='u-center-text'>{props.wordName}</h3>
      <h4 className='u-center-text'>[ {props.translation} ]</h4>
      <RecordBtn textToLookFor={props.wordName} />
    </div>
  )
}

export default WordRecord