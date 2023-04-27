var N=Object.defineProperty;var x=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var R=(s,e,t)=>(x(s,typeof e!="symbol"?e+"":e,t),t);import{r as a,u as C,j as p,a as r}from"./index-7a0d1aa5.js";import{C as g,L as h,a as L}from"./CoursePlan-ecff897d.js";import{a as T}from"./axios-707ed124.js";var u=(s=>(s[s.NO_PROGRESS=0]="NO_PROGRESS",s[s.STAR_1=1]="STAR_1",s[s.STAR_2=2]="STAR_2",s[s.STAR_3=3]="STAR_3",s))(u||{});function A({children:s,status:e,lessonId:t,moduleId:S}){const{courseLvl:n}=a.useContext(g),c=C(),_=l=>{l.stopPropagation(),sessionStorage.setItem("lessonId",t.toString()),sessionStorage.setItem("moduleId",S.toString()),sessionStorage.setItem("lessonTitle",s),c("/Licenta/lesson")};return p("div",{className:"course-lesson",children:[r("button",{className:`course-lesson-btn course-lesson-btn--${h[n]}`,onClick:_,children:s}),p("div",{className:`course-status ${n<h.B1?"course-status--A":n>h.B2?"course-status--C":"course-status--B"}`,children:[r("i",{className:`fa fa-star ${e!==u.NO_PROGRESS&&"course-status--checked"}`}),r("i",{className:`fa fa-star ${e===u.STAR_3&&"course-status--checked"}`}),r("i",{className:`fa fa-star ${e>u.STAR_1&&"course-status--checked"}`})]})]})}function E({title:s,activeModule:e,index:t,closeOtherModules:S,lessons:n}){const[c,_]=a.useState(!1),l=h[a.useContext(g).courseLvl],i=()=>{_(o=>(o===!1&&S(),!o))};a.useEffect(()=>{e!==t&&_(!1)},[e]);const m=a.useMemo(()=>n.map((o,d)=>r(A,{status:o.status??u.NO_PROGRESS,lessonId:o.id,moduleId:o.moduleId,children:o.title},d)),[n]);return p("div",{className:"course__module flex-element",tabIndex:t,children:[p("div",{className:"course__module__title u-center-text",onClick:i,children:[s.str,r("span",{className:`course__module__title__arrow course__module__title__arrow--${l}`,children:r("i",{className:` ${c?"fas fa-chevron-up":"fas fa-chevron-down"} `})})]}),r("div",{className:`course__module__ctn ${c&&"course__module__ctn--open"}`,children:r("div",{className:`flex-column--start course__module__ctn__list course__module__ctn__list--${l} ${c&&"course__module__ctn__list--open"}`,children:m})})]})}class M{constructor(e,t){R(this,"_str","Not available");R(this,"setStr",e=>{const t=e.length;t>0&&t<=this.dimension?this._str=e:t===0?this._str="Not available":this._str=e.substring(0,this.dimension)});this.dimension=t,this.setStr(e)}set str(e){this.setStr(e)}get str(){return this._str}}function k({level:s}){const[e,t]=a.useState(-1),S=a.useContext(g),[n,c]=a.useState({modules:[]});a.useEffect(()=>{S.setCourseLvl(s);const l=localStorage.getItem("userAccount");T.get("http://localhost:5000/course_modules",{params:{level:h[s],email:l}}).then(i=>{const{lessons:m,modules:o}=i.data;let d=o.map(f=>({title:f.title,lessons:m.filter(v=>v.moduleId===f.id)}));if(l){const{finishedLessons:f}=i.data;c({modules:d,finishedLessons:f})}else c({modules:d})})},[]);const _=a.useMemo(()=>n.modules.map((l,i)=>{const m=n.finishedLessons?l.lessons.map(o=>{const d=n.finishedLessons.find(f=>f.lessonId===o.id);return{...o,status:d?d.progressStatus==="good"?u.STAR_1:d.progressStatus==="very good"?u.STAR_2:u.STAR_3:u.NO_PROGRESS}}):l.lessons;return m.length>0?r(E,{title:new M(l.title,L),index:i,activeModule:e,lessons:m,closeOtherModules:()=>t(i)},i):void 0}),[n,e]);return r("div",{className:`course-plan course-plan--${h[s]}`,children:r("div",{className:"flex-column--centered",children:_})})}export{k as default};