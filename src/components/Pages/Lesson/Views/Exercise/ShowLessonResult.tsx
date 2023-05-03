import React from 'react'
import { IconStatus } from '../../../../Helpers/commonInterfaces'

interface LocProps {
    statusLesson:IconStatus
}

function ShowLessonResult(props:LocProps) {
  return (
    <div>{props.statusLesson}</div>
  );
}

export default ShowLessonResult;