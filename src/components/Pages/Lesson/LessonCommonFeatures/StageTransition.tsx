import { forwardRef, useImperativeHandle, useRef } from "react";

function StageTransition(props: any, ref: any) {
  const transitionRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        trigger: () => {
          transitionRef.current!.classList.add("lesson-transition--animated");
        },
      };
    },
    [],
  );

  const animationEnd = () => {
    transitionRef.current!.classList.remove("lesson-transition--animated");
  };

  return (
    <div
      className="lesson-transition"
      onAnimationEnd={animationEnd}
      ref={transitionRef}
    />
  );
}

export default forwardRef(StageTransition);
