import Header from './Header';
import AboutSection from './AboutSection';
import TestSection from './TestSection';
import CoursesSection from './CoursesSection';
import Footer from './Footer';
import {IProps} from '../CommonInterfaces';
import RegisterForm from './RegisterForm';
import MainMenu from '../components/MainMenu';
import { navListNoLogin as navList} from '../assets/ts-data/navLists';

interface ILayout {

}

export default function Layout(props:ILayout){
  return (<> 
      <AboutSection />
      <TestSection />
      <CoursesSection />
      <RegisterForm /> 
    </>);
}