import Header from './Header';
import AboutSection from './AboutSection';
import Footer from './Footer';
import {IProps} from '../CommonInterfaces';

interface ILayout extends IProps {

}

export default function Layout(props:ILayout){
  return (<><div className="layout-container">  
    <Header />
      <main>
        <AboutSection />
      </main>
    </div>
    <Footer /> </>);
}