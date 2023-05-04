import React, { useMemo, useRef } from 'react'
import { Word } from '../../../../Helpers/commonInterfaces'
import SoundBtn from '../../../../Features/SoundBtn'
import { removePunctuation } from '../../../../Helpers/StringMethodes';

interface LocProps extends Word{
  correctAnswear: ()=> void,
  wrongAnswear: ()=> void
}

function WriteWord(props:LocProps) {
   const answearRef = useRef<HTMLInputElement>(null);
   const correctAnswear = removePunctuation(props.wordName.toLowerCase());

   const testAnswear = (event:React.FormEvent<HTMLFormElement>)=>{
     event.preventDefault();
     const userAnswear = removePunctuation(answearRef.current!.value.toLowerCase());
     if(userAnswear === correctAnswear){
         props.correctAnswear();
     }else{
        answearRef.current!.value = '';
         props.wrongAnswear();
     }
   } 

   const addUmlout = (umlout:string)=>{
     if(answearRef.current!.value.length < correctAnswear.length){
        answearRef.current!.value += umlout; 
        answearRef.current!.focus();
     }
   }

   const umloutsBtns = useMemo(()=>{
    return ['ä','ö','ü','ß'].map((umloat,index) => (<button type='button' onClick={()=> addUmlout(umloat)} key={index}>{umloat}</button>));
   },[]);

   return (<>
     <div className='info'>
        <i className="fa fa-lightbulb-o" />
        <span>
            <ul>
                <li>Nu este nevoie să folosești majuscule .</li>
                <li>Nu folosi semne de punctuație .</li>
            </ul>
        </span>
      </div>
     <div className='flex-column--centered word__container'>
        <img className='flex-element word__img' src={props.imageURL} alt={props.wordName} />
        <h4 className='u-center-text'>{props.translation}</h4>
        <SoundBtn sentence={props.example} /> 
        <form onSubmit={testAnswear} className='flex-column--centered write_word__form'>
          <input type='text' className='flex-element u-center-text' maxLength={correctAnswear.length} ref={answearRef} autoFocus />
          <div className='flex-element u-center-text umlouts-ctn '>
             {umloutsBtns}
          </div>
          <button className='submitBtn u-center-text'>Verfică <i className='fas fa-angle-double-right'/></button>
        </form>
     </div>
     </>);
}

export default WriteWord;