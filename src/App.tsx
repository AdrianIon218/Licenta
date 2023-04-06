import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import MainLayout from './components/Layouts/MainLayout';

function App() {
  const MainPage = lazy(() => import("./components/Pages/Home/MainPage")); 
  const NoPage = lazy(() => import("./components/Pages/NoPage"));
  const Login = lazy(() => import("./components/Pages/Auth/Login"));
  const Signup = lazy(() => import("./components/Pages/Auth/RegisterPage"));
  const Contacts = lazy(() => import("./components/Pages/Contacts"));
  const CoursePlan = lazy(() => import("./components/Pages/Course/CoursePlan"));

  return (<Router>
    <Routes>
      <Route path="/Licenta/" element={<MainLayout />} >
        <Route index element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={ <NoPage />} />
        <Route path="course-plan/:id" element={<CoursePlan />} />
      </Route>
    </Routes> 
  </Router>);
}

export default App
