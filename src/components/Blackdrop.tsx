import {IProps} from '../CommonInterfaces';

interface IBlackdropProps extends IProps{
  popupId:string,
  backElementId:string
}

export default function Blackdrop(props:IBlackdropProps){
  return (<section className='blackdrop' id={props.popupId}>
    <div className='blackdrop__content'>
      <div className='blackdrop__exit'>
        <a href={`#${props.backElementId}`} className="blackdrop__exit__btn">&times;</a>
      </div>
      {props.children}
    </div>
    
  </section>);
}