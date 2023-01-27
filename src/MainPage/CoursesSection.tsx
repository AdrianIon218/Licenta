import CardCoure, {IPropsCardCourse, cardTypes} from "../components/CardCourse";

export default function CoursesSection(){
  const courses:IPropsCardCourse[] = [
    {
      frontImageName:"liechtenstein-photo1.jpg", heading:"A1", typeCard:cardTypes.BEGINNER,
      details:{
        levels:"A1.1 / A1.2",
        lessonsNumber: 0,
        words: 0,
        testsNumber: 0
      }
    },
    {
      frontImageName:"graz-photo1.jpeg", heading:"A2", typeCard:cardTypes.BEGINNER,
      details:{
        levels:"A2.1 / A2.2",
        lessonsNumber: 0,
        words: 0,
        testsNumber: 0
      }
    },
    {
      frontImageName:"viena-photo3.jpeg", heading:"B1", typeCard:cardTypes.INTERMEDIARY,
      details:{
        levels:"B1.1 / B1.2",
        lessonsNumber: 0,
        words: 0,
        testsNumber: 0
      }
    },
    {
      frontImageName:"koln-photo1.jpeg", heading:"B2", typeCard:cardTypes.INTERMEDIARY,
      details:{
        levels:"B2.1 / B2.2",
        lessonsNumber: 0,
        words: 0,
        testsNumber: 0
      }
    }
    ,{
      frontImageName:"viena-photo4.jpg", heading:"C1", typeCard:cardTypes.ADVANCED,
      details:{
        levels:"C1.1",
        lessonsNumber: 0,
        words: 0,
        testsNumber: 0
      }
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