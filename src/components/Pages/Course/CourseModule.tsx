import { useContext, useEffect, useMemo, useState } from "react";
import LessonBtn from "../../Features/LessonBtn";
import StringMaxLength from "../../Helpers/StringMaxLength";
import { Level } from "../../Helpers/constants";
import { CourseCtx } from "../../Features/CourseContext";
import { IconStatus, lessonItem } from "../../Helpers/commonInterfaces";

interface LocProps {
  title: StringMaxLength;
  activeModule: number;
  index: number;
  closeOtherModules: () => void;
  lessons: lessonItem[];
}

function CourseModule({
  title,
  activeModule,
  index,
  closeOtherModules,
  lessons,
}: LocProps) {
  const [isModuleExpanded, setModuleExpanded] = useState(false);
  const currentLevelStr = Level[useContext(CourseCtx)!.courseLvl];

  const triggerExpandedModule = () => {
    setModuleExpanded((oltVal) => {
      if (oltVal === false) {
        closeOtherModules();
      }
      return !oltVal;
    });
  };

  useEffect(() => {
    if (activeModule !== index) {
      setModuleExpanded(false);
    }
  }, [activeModule]);

  const lessonsJSX = useMemo(() => {
    return lessons.map((l, index) => (
      <LessonBtn
        status={l.status ?? IconStatus.NO_PROGRESS}
        lessonId={l.id}
        moduleId={l.moduleId}
        type={l.type}
        key={index}
      >
        {l.title}
      </LessonBtn>
    ));
  }, [lessons]);

  return (
    <div className="course__module flex-element" tabIndex={index}>
      <div
        className="course__module__title u-center-text"
        onClick={triggerExpandedModule}
      >
        {title.str}
        <span
          className={`course__module__title__arrow course__module__title__arrow--${currentLevelStr}`}
        >
          <i
            className={` ${
              isModuleExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"
            } `}
          />
        </span>
      </div>
      <div
        className={`course__module__ctn ${
          isModuleExpanded && "course__module__ctn--open"
        }`}
      >
        <div
          className={`flex-column--start course__module__ctn__list course__module__ctn__list--${currentLevelStr} ${
            isModuleExpanded && "course__module__ctn__list--open"
          }`}
        >
          {lessonsJSX}
        </div>
      </div>
    </div>
  );
}

export default CourseModule;
