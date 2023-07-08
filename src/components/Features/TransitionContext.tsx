import React from "react";
import { useState } from "react";
import { IProps } from "../Helpers/commonInterfaces";
export const TransitionCtx = React.createContext<null | {
  getState: boolean;
  setTransition: any;
}>(null);

function TransitionContext(props: IProps) {
  const [transitionEffect, setTransitionEffect] = useState(false);

  return (
    <TransitionCtx.Provider
      value={{ getState: transitionEffect, setTransition: setTransitionEffect }}
    >
      <div
        className={`navigation__background ${
          transitionEffect ? "navigation__menu-open" : ""
        }`}
      />
      {props.children}
    </TransitionCtx.Provider>
  );
}

export default TransitionContext;
