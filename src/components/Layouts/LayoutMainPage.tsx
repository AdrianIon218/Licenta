import Header from '../../MainPage/Header';
import Footer from '../../MainPage/Footer';
import MainMenu from '../MainMenu';
import { navListNoLogin as navList} from '../../assets/ts-data/navLists';
import { Outlet } from 'react-router-dom';

interface ILayout {

}

export default function Layout(props:ILayout){
  return (<> 
    <MainMenu navList={navList} />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer /> </>);
}