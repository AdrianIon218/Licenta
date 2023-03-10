import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import MainLayout from './components/Helpers/MainLayout';

function App() {
  const MainPage = lazy(() => import("./MainPage/MainPage")); 
  const NoPage = lazy(() => import("./Pages/NoPage"));
  const Login = lazy(() => import("./Pages/Login"));
  const Signup = lazy(()=> import("./Pages/RegisterPage"));

  return (<Router>
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<NoPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={ <NoPage />} />
      </Route>
    </Routes> 
  </Router>);
}

export default App
