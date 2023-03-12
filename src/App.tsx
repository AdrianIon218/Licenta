import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import MainLayout from './components/Layouts/MainLayout';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';

function App() {

  const NoPage = lazy(() => import("./NoFoundPage/NoPage"));

  return (<Router>
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<LoginPage />} />
        <Route path="signup" element={<NoPage />} />
        <Route path="*" element={ <NoPage />} />
      </Route>
    </Routes> 
  </Router>);
}

export default App
