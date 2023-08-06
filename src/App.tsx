import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "./components/Layouts/MainLayout";
import LessonLayout from "./components/Layouts/LessonLayout";
import CourseAvailableContext from "./components/Features/CourseAvailableContext";

function App() {
  const MainPage = lazy(() => import("./components/Pages/Home/MainPage"));
  const NoPage = lazy(() => import("./components/Pages/NoPage"));
  const Login = lazy(() => import("./components/Pages/Auth/Login"));
  const RegisterForm = lazy(() => import("./components/Sections/RegisterForm"));
  const Contacts = lazy(() => import("./components/Pages/Contacts"));
  const CoursePlan = lazy(() => import("./components/Pages/Course/CoursePlan"));
  const CoursesSection = lazy(
    () => import("./components/Sections/CoursesSection"),
  );
  const LessonContainer = lazy(
    () =>
      import("./components/Pages/Lesson/LessonCommonFeatures/LessonContainer"),
  );
  const ResetPassword = lazy(() => import("./components/Pages/Auth/ResetPass"));
  const ResetPassCode = lazy(
    () => import("./components/Pages/Auth/ResetPassCode"),
  );
  const NewPassword = lazy(() => import("./components/Pages/Auth/NewPassword"));

  return (
    <Router basename="/Licenta">
      <Routes>
        <Route path="/lesson" element={<LessonLayout />}>
          <Route index element={<LessonContainer />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signup" element={<RegisterForm location="register" />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/course-plan/:id" element={<CoursePlan />} />
          <Route
            path="/courses"
            element={
              <CourseAvailableContext>
                <CoursesSection location="own-page" />
              </CourseAvailableContext>
            }
          />
          <Route path="password_reset">
            <Route index element={<ResetPassword />} />
            <Route path="new_password" element={<NewPassword />} />
          </Route>
          <Route path="password_reset_code" element={<ResetPassCode />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
