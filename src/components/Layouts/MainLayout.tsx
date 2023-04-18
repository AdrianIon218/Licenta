import Footer from '../Sections/Footer';
import MainMenu from '../Sections/MainMenu';
import { Outlet } from 'react-router-dom';
import { Suspense} from 'react';
import ScrollToTop from '../Features/ScrollToTop';
import LoadingLoader from '../Features/LoadingLoader';
export default function MainLayout(){

  return (<ScrollToTop> 
    <MainMenu />
    
    <Suspense fallback={<LoadingLoader/>}>
      <Outlet />
    </Suspense>
    
    <Footer /> 
  </ScrollToTop>);
}