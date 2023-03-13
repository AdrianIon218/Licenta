import { lazy } from "react";

export default function loadLazy(path:string, nameExport:string|null = null){
  return lazy(()=>{
    // back to the app.tsx folder
    const pathAdr = "../../" + path;
    const promise = import(pathAdr);
    if(nameExport == null){
      return promise;
    } else {
      return promise.then(module => ({default:module[nameExport]}))
    }
  });
}