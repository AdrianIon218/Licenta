import Footer from '../Footer';
import MainMenu from '../MainMenu';
import { navListNoLogin as navList} from '../../assets/ts-data/navLists';
import { Outlet } from 'react-router-dom';

export default function MainLayout(){
  return (<> 
    <MainMenu navList={navList} />
    <Outlet />
    <Footer /> 
  </>);
}