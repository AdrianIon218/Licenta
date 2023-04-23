export interface IProps{
  children:any;
}

export enum IconStatus{
  NO_PROGRESS , STAR_1, STAR_2, STAR_3
}

export interface lessonItem{
  id:number,
  title:string,
  moduleId:number,
  status?:IconStatus
}
