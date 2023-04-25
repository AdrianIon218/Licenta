import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import MainLayout from './components/Layouts/MainLayout';
import LessonLayout from './components/Layouts/LessonLayout';

function App() {
  const MainPage = lazy(() => import("./components/Pages/Home/MainPage")); 
  const NoPage = lazy(() => import("./components/Pages/NoPage"));
  const Login = lazy(() => import("./components/Pages/Auth/Login"));
  const RegisterForm = lazy(() => import("./components/Sections/RegisterForm"));
  const Contacts = lazy(() => import("./components/Pages/Contacts"));
  const CoursePlan = lazy(() => import("./components/Pages/Course/CoursePlan"));
  const CoursesSection = lazy(()=> import("./components/Sections/CoursesSection"));

  return (<Router>
    <Routes>
      <Route path="/Licenta/lesson" element={<LessonLayout />}>
        <Route index element={<NoPage />} />
      </Route>
      <Route path="/Licenta/" element={<MainLayout />} >
        <Route index element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="signup" element={<RegisterForm location="register"/>} />
        <Route path="*" element={ <NoPage />} />
        <Route path="course-plan/:id" element={<CoursePlan />} /> 
        <Route path="courses" element={<CoursesSection location='own-page'/>} />
      </Route>
    </Routes> 
  </Router>);
}

export default App
