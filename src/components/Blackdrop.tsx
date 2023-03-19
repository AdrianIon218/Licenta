import {IProps} from './Helpers/CommonInterfaces';
import {useNavigate } from 'react-router-dom';

interface IBlackdropProps extends IProps{
  popupId:string,
  backElementId:string
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
        <a href={`#${props.backElementId}`} className="blackdrop__exit__btn">&times;</a>
      </div>
      {props.children}
    </div>
  </section>);
}