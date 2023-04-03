import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {TransitionCtx} from './TransitionContext';

interface IProps{
  to:string,
  icon:string
}

function LinkTansition(props:IProps) {
  const context = useContext(TransitionCtx);

  const navigate = useNavigate();
  const clickHandler = (event:React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
    context!.setTransition(true);
    setTimeout(() => {
      context!.setTransition(false);
    }, 500);

    setTimeout(()=>{
      navigate(props.to);
    }, 400);
  }

  return (<span className="span-header-block__link" onClick={clickHandler}> 
      <i className={props.icon} />
    </span>);
}

export default LinkTansition;