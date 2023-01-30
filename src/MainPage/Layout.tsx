import Header from './Header';
import AboutSection from './AboutSection';
import TestSection from './TestSection';
import CoursesSection from './CoursesSection';
import Footer from './Footer';
import {IProps} from '../CommonInterfaces';
import RegisterForm from './RegisterForm';

interface ILayout extends IProps {

}

export default function Layout(props:ILayout){
  return (<><div className="layout-container">  
    <Header />
      <main>
        <AboutSection />
        <TestSection />
        <CoursesSection />
        <RegisterForm />
      </main>
    </div>
    <Footer /> </>);
}