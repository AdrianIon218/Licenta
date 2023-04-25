import { Outlet } from 'react-router-dom';
import { Suspense} from 'react';
import LoadingLoader from '../Features/LoadingLoader';
import ScrollToTop from '../Features/ScrollToTop';
import Footer from '../Sections/Footer';

function LessonLayout() {
    return (<ScrollToTop> 
    <Suspense fallback={<LoadingLoader/>}>
      <Outlet />
    </Suspense>
    <Footer />
    </ScrollToTop> );
}

export default LessonLayout