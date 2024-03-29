import React, { useEffect, useState } from "react";
import { IProps } from "../Helpers/CommonInterfaces";
import { AvailableCourses } from "../../data/ts-data/availableCourses";
import { IPropsCardCourse } from "./CardCourse";
import axios from "axios";

export const CourseAvailableCtx = React.createContext<IPropsCardCourse[]>([]);
type CourseResponse = {
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  wordsNum: number;
  lessonsNum: number;
  testsNum: number;
};

function CourseAvailableContext({ children }: IProps) {
  const [availableCourse, setAvailableCourse] = useState(AvailableCourses);
  useEffect(() => {
    axios.get("http://localhost:5000/courses_available").then((response) => {
      const { status } = response.data;
      if (status) {
        const courses: CourseResponse[] = response.data.courses;
        setAvailableCourse((oldVal) => {
          const newVal = [...oldVal];
          oldVal.forEach((element, indexElement) => {
            const index = courses.findIndex(
              (course: CourseResponse) => course.level === element.heading,
            );
            if (index !== -1) {
              newVal[indexElement].details.words = courses[index].wordsNum;
              newVal[indexElement].details.lessonsNumber =
                courses[index].lessonsNum;
              newVal[indexElement].details.testsNumber =
                courses[index].testsNum;
              newVal[indexElement].estimationWeeks = Math.ceil(
                courses[index].lessonsNum / 2 / 7,
              );
            }
          });
          return newVal;
        });
      }
    });
  }, []);

  return (
    <CourseAvailableCtx.Provider value={availableCourse}>
      {children}
    </CourseAvailableCtx.Provider>
  );
}

export default CourseAvailableContext;
