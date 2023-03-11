import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/Layouts/MainLayout';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  /*
  <Route path="signup" element={<Contact />} />
  <Route path="*" element={<NoPage />} />
  */
  return (<Router>
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<LoginPage />} />
        <Route path="signup" element={<LoginPage />} />
        <Route path="*" element={ <LoginPage />} />
      </Route>
    </Routes> 
  </Router>);
}

export default App
