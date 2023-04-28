import { Outlet } from 'react-router-dom';
import { Suspense} from 'react';
import LoadingLoader from '../Features/LoadingLoader';
import ScrollToTop from '../Features/ScrollToTop';
import VoiceContext from '../Pages/Lesson/VoiceContext';

function LessonLayout() {
    return (<VoiceContext><ScrollToTop> 
    <Suspense fallback={<LoadingLoader/>}>
      <Outlet />
    </Suspense>
    </ScrollToTop></VoiceContext>);
}

export default LessonLayout