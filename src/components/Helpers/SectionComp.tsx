import { IProps } from "./CommonInterfaces";
import { useEffect } from "react";

interface ISectProps extends IProps{
  classes: string,
  id?:string
}

export default function SectionComp(props:ISectProps){

  return props.id ? 
    (<section className={props.classes} id={props.id}>
      {props.children}
    </section>) :
    (<section className={props.classes}>
      {props.children}
    </section>);
}