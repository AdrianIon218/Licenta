import Footer from '../Footer';
import MainMenu from '../MainMenu';
import { navListNoLogin as navList} from '../../assets/ts-data/navLists';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ScrollToTop from './ScrollToTop';
import LodingLoader from './LodingLoader';

export default function MainLayout(){
  return (<ScrollToTop> 
    <MainMenu navList={navList} />
    <Suspense fallback={<LodingLoader/>}>
      <Outlet />
    </Suspense>
    <Footer /> 
  </ScrollToTop>);
}