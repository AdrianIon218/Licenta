import Header from './Header';
import AboutSection from './AboutSection';
import TestSection from './TestSection';
import CoursesSection from '../../Sections/CoursesSection';
import RegisterForm from '../../Sections/RegisterForm';

export default function MainPage(){

  return (<> 
    <Header />
    <main >
      <AboutSection />
      <TestSection />
      <CoursesSection />
      <RegisterForm location="home" /> 
    </main> 
    </>);
}