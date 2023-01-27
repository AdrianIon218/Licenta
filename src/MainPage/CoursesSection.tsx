import CardCoure, {IPropsCardCourse, cardTypes} from "../components/CardCourse";

export default function CoursesSection(){
  const courses:IPropsCardCourse[] = [
    {
      frontImageName:"liechtenstein-photo1.jpg", heading:"A1", typeCard:cardTypes.BEGINNER
    },
    {
      frontImageName:"graz-photo1.jpeg", heading:"A2", typeCard:cardTypes.BEGINNER
    },
    {
      frontImageName:"viena-photo3.jpeg", heading:"B1", typeCard:cardTypes.INTERMEDIARY
    },
    {
      frontImageName:"koln-photo1.jpeg", heading:"B2", typeCard:cardTypes.INTERMEDIARY
    }
    ,{
      frontImageName:"viena-photo4.jpg", heading:"C1", typeCard:cardTypes.ADVANCED
    }
  ];

  return (<section className="section-courses"> 
    <div className="u-center-text u-margin-bottom-medium">
      <h2 className="heading-secondary">
      Cursuri disponibile
      </h2>  
    </div>
    <div className="flex-row--centered">
      {courses.map((course,index) => <CardCoure {...course} key={index} />)}
    </div>
    </section>);
}