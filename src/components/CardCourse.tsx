export enum cardTypes{BEGINNER=1, INTERMEDIARY, ADVANCED};

export interface IPropsCardCourse{
  frontImageName:string,
  heading:string,
  typeCard:cardTypes,
  details:{
    levels:string,
    lessonsNumber:number,
    words:number,
    testsNumber:number
  }
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
      <div className="card__details">
        <ul>
          <li>
            <i className={`fas fa-university u-margin-right-small icon-background--${props.typeCard}`} />
            Nivele : {props.details.levels} </li>
          <li>
            <i className={`fas fa-coffee u-margin-right-small icon-background--${props.typeCard}`} />Număr de lecți : {props.details.lessonsNumber} </li>
          <li>
            <i className={`fas fa-apple-alt u-margin-right-small icon-background--${props.typeCard}`}/>
            Cuvinte noi : {props.details.words} </li>
          <li>
            <i className={`fas fa-history u-margin-right-small icon-background--${props.typeCard}`} />Număr de teste : {props.details.testsNumber} </li>
        </ul>
      </div>
    </div>
    <div className={`card__side card__side--back card__side--back--${props.typeCard}`}>
      Back
    </div>
  </div>
}