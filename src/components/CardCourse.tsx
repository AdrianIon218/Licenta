export enum cardTypes{BEGINNER=1, INTERMEDIARY, ADVANCED};

export interface IPropsCardCourse{
  frontImageName:string,
  heading:string,
  typeCard:cardTypes
}

export default function CardCourse(props:IPropsCardCourse){
  return <div className="card flex-element">
    <div className="card__side card__side--front">
      <div className={`card__picture card__picture--${props.typeCard}`}>
        <img src={`images/${props.frontImageName}`} alt={props.frontImageName.split('.')[0]} />
      </div>
      <h4 className="card__heading">
        <span className={`card__heading__span card__heading__span--${props.typeCard}`}>
        {props.heading}
        </span>
      </h4>
      <div className="card-details">details</div>
    </div>
    <div className={`card__side card__side--back card__side--back--${props.typeCard}`}>
      Back
    </div>
  </div>
}