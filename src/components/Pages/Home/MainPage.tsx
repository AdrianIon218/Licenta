import Header from './Header';
import AboutSection from './AboutSection';
import TestSection from './TestSection';
import CoursesSection from '../../Sections/CoursesSection';
import RegisterForm from '../../Sections/RegisterForm';
import { useEffect, useState } from 'react';

export default function MainPage(){
  const [displayRegisterForm, setDisplayRegisterForm] = useState(true);
  useEffect(()=>{
    if(sessionStorage.getItem('userAccount')){
      setDisplayRegisterForm(false);
    }
  },[]);

  return (<> 
    <Header />
    <main >
      <AboutSection />
      <TestSection />
      <CoursesSection location='home' />
      {displayRegisterForm && <RegisterForm location="home" /> }
    </main> 
    </>);
}