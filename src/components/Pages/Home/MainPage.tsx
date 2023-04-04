import Header from './Header';
import AboutSection from './AboutSection';
import TestSection from './TestSection';
import CoursesSection from '../../Sections/CoursesSection';
import RegisterForm from './RegisterForm';

export default function MainPage(){

  return (<> 
    <Header />
    <main >
      <AboutSection />
      <TestSection />
      <CoursesSection />
      
      <section className="section-sign-up between-section u_padding_down--med">
        <RegisterForm /> 
      </section>
    </main> 
    </>);
}