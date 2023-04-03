import CardCoure from "../components/Features/CardCourse";
import { AvailableCourses } from "./AvailableCourses";

export default function CoursesSection(){
  return (<section className="section-courses between-section" id="section-course-id"> 
    <div className="u-center-text u-margin-bottom-medium">
      <h2 className="heading-secondary">
      Cursuri disponibile
      </h2>  
    </div>
    <div className="flex-row--centered">
      {AvailableCourses.map((course,index) => <CardCoure {...course} key={index} />)}
    </div>
    <div className="u-center-text u-margin-top-medium">
      <a href="#" className="btn btn--blue">Află ce curs ți se potrivește</a>
    </div>
    </section>);
}