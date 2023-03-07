import LayoutMainPage from './components/Layouts/LayoutMainPage';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './LoginPage/Login';
import MainLayout from './MainPage/Layout';

function App() {
  /*
  <Route path="signup" element={<Contact />} />
  <Route path="*" element={<NoPage />} />
  */
  return (<Router>
    <Routes>
      <Route path="/" element={<LayoutMainPage />}>
        <Route index element={<MainLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Login />} />
        <Route path="signup" element={<Login />} />
        <Route path="*" element={ <Login />} />
      </Route>
    </Routes> 
  </Router>);
}

export default App
