import {IProps} from '../Helpers/commonInterfaces';
import {useNavigate } from 'react-router-dom';

interface IBlackdropProps extends IProps{
  popupId:string,
}

export default function Blackdrop(props:IBlackdropProps){
  const goBack = useNavigate();

  function exitBackdrop(event: React.MouseEvent<HTMLElement, MouseEvent>){
    event.stopPropagation();
    goBack(-1); // go back to the previous stage in history 
  }

  function breakPropagation(event:React.MouseEvent<HTMLDivElement, MouseEvent>){
    event.stopPropagation();
  }

  return (<section className='blackdrop' id={props.popupId} onClick={exitBackdrop}>
    <div className='blackdrop__content' onClick={breakPropagation}>
      <div className='blackdrop__exit'>
        <div onClick={exitBackdrop} className="blackdrop__exit__btn">
          &times;
        </div>
      </div>
      {props.children}
    </div>
  </section>);
}