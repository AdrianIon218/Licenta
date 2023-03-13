import Footer from '../Footer';
import MainMenu from '../MainMenu';
import { navListNoLogin as navList} from '../../assets/ts-data/navLists';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ScrollToTop from './ScrollToTop';

export default function MainLayout(){
  return (<ScrollToTop> 
    <MainMenu navList={navList} />
    <Suspense fallback={"Loading"}>
      <Outlet />
    </Suspense>
    <Footer /> 
  </ScrollToTop>);
}