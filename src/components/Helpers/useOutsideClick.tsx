import React from "react";

export function useOutsideClick(callback:()=>void)  {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !(ref.current == event.target)) {
          callback();
        }
      };
      
      document.addEventListener('click', handleClick);
      
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };