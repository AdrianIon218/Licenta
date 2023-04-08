import { AvailableCourses } from "../../data/ts-data/availableCourses";

export default function getCoursePhoto(level:string){
  const course = AvailableCourses.filter(c => c.heading.toUpperCase() == level.toUpperCase());
  return course[0];
} 