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
  const LessonContainer = lazy(()=>import("./components/Pages/Lesson/LessonCommonFeatures/LessonContainer"));
  const ResetPassword = lazy(()=>import("./components/Pages/Auth/ResetPass"));
  const ResetPassCode = lazy(()=>import("./components/Pages/Auth/ResetPassCode"));

  return (<Router>
    <Routes>
      <Route path="/Licenta/lesson" element={<LessonLayout />}>
        <Route index element={<LessonContainer />} />
      </Route>
      <Route path="/Licenta/" element={<MainLayout />} >
        <Route index element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="signup" element={<RegisterForm location="register"/>} />
        <Route path="*" element={ <NoPage />} />
        <Route path="course-plan/:id" element={<CoursePlan />} /> 
        <Route path="courses" element={<CoursesSection location='own-page'/>} />
        <Route path='password_reset' element={<ResetPassword />} />
        <Route path='password_reset_code' element={<ResetPassCode />} />
      </Route>
    </Routes> 
  </Router>);
}

export default App
