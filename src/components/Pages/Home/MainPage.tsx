import Header from './Header';
import AboutSection from './AboutSection';
import TestSection from './TestSection';
import CoursesSection from '../../Sections/CoursesSection';
import RegisterForm from '../../Sections/RegisterForm';
import { useEffect, useState } from 'react';
import CourseAvailableContext from '../../Features/CourseAvailableContext';

export default function MainPage(){
  const [displayRegisterForm, setDisplayRegisterForm] = useState(true);
  useEffect(()=>{
    if(localStorage.getItem('userAccount')){
      setDisplayRegisterForm(false);
    }
  },[]);

  return (<> 
    <Header />
    <main >
      <AboutSection />
      <TestSection />
      <CourseAvailableContext>
        <CoursesSection location='home' />
      </CourseAvailableContext>
      {displayRegisterForm && <RegisterForm location="home" /> }
    </main> 
    </>);
}