import React from 'react';
import { useState } from 'react';
import { Level } from '../Helpers/constants';
import {IProps} from '../Helpers/commonInterfaces';

export const CourseCtx = React.createContext<null | {courseLvl:Level, setCourseLvl:any }>(null);

function CourseContext({children}:IProps) {
    const [currentCourseLvl, setCurrentCourseLevel] = useState(Level.A1);

    return (<CourseCtx.Provider value={{courseLvl:currentCourseLvl, setCourseLvl:setCurrentCourseLevel}}>
      {children}
    </CourseCtx.Provider>
  )
}

export default CourseContext;