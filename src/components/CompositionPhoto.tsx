export interface ICompositionPhotoProps{
  photo: string,
  alt: string,
  class: string,
  title?: string
}

function CompositionPhoto(props:ICompositionPhotoProps){
  return (
    <img src={`images/${props.photo}`} alt={props.alt} 
      className={`composition__photo ${props.class}`}
      title={props.title? props.title:"" }  
    />);
}

export default CompositionPhoto;