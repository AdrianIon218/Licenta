import Header from './Header';
import AboutSection from './AboutSection';
import TestSection from './TestSection';
import CoursesSection from './CoursesSection';
import RegisterForm from './RegisterForm';

export default function MainPage(){

  return (<> <Header />
    <main >
      <AboutSection />
      <TestSection />
      <CoursesSection />
      <RegisterForm /> 
    </main> 
    </>);
}