var N=Object.defineProperty;var x=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var g=(s,e,t)=>(x(s,typeof e!="symbol"?e+"":e,t),t);import{r as u,u as C,j as p,a as r}from"./index-c3fe12c9.js";import{C as R,L as S,a as L}from"./CoursePlan-ddc6c69c.js";import{a as T}from"./axios-707ed124.js";var i=(s=>(s[s.NO_PROGRESS=0]="NO_PROGRESS",s[s.STAR_1=1]="STAR_1",s[s.STAR_2=2]="STAR_2",s[s.STAR_3=3]="STAR_3",s))(i||{});function A({children:s,status:e,lessonId:t,moduleId:h,type:c}){const{courseLvl:l}=u.useContext(R),_=C(),n=a=>{a.stopPropagation(),sessionStorage.setItem("lessonId",t.toString()),sessionStorage.setItem("moduleId",h.toString()),sessionStorage.setItem("lessonTitle",s),sessionStorage.setItem("lessonType",c),_("/Licenta/lesson")};return p("div",{className:"course-lesson",children:[r("button",{className:`course-lesson-btn course-lesson-btn--${S[l]}`,onClick:n,children:s}),p("div",{className:`course-status ${l<S.B1?"course-status--A":l>S.B2?"course-status--C":"course-status--B"}`,children:[r("i",{className:`fa fa-star ${e!==i.NO_PROGRESS&&"course-status--checked"}`}),r("i",{className:`fa fa-star ${e===i.STAR_3&&"course-status--checked"}`}),r("i",{className:`fa fa-star ${e>i.STAR_1&&"course-status--checked"}`})]})]})}function E({title:s,activeModule:e,index:t,closeOtherModules:h,lessons:c}){const[l,_]=u.useState(!1),n=S[u.useContext(R).courseLvl],a=()=>{_(o=>(o===!1&&h(),!o))};u.useEffect(()=>{e!==t&&_(!1)},[e]);const m=u.useMemo(()=>c.map((o,d)=>r(A,{status:o.status??i.NO_PROGRESS,lessonId:o.id,moduleId:o.moduleId,type:o.type,children:o.title},d)),[c]);return p("div",{className:"course__module flex-element",tabIndex:t,children:[p("div",{className:"course__module__title u-center-text",onClick:a,children:[s.str,r("span",{className:`course__module__title__arrow course__module__title__arrow--${n}`,children:r("i",{className:` ${l?"fas fa-chevron-up":"fas fa-chevron-down"} `})})]}),r("div",{className:`course__module__ctn ${l&&"course__module__ctn--open"}`,children:r("div",{className:`flex-column--start course__module__ctn__list course__module__ctn__list--${n} ${l&&"course__module__ctn__list--open"}`,children:m})})]})}class M{constructor(e,t){g(this,"_str","Not available");g(this,"setStr",e=>{const t=e.length;t>0&&t<=this.dimension?this._str=e:t===0?this._str="Not available":this._str=e.substring(0,this.dimension)});this.dimension=t,this.setStr(e)}set str(e){this.setStr(e)}get str(){return this._str}}function P({level:s}){const[e,t]=u.useState(-1),h=u.useContext(R),[c,l]=u.useState({modules:[]});u.useEffect(()=>{h.setCourseLvl(s);const n=localStorage.getItem("userAccount");T.get("http://localhost:5000/course_modules",{params:{level:S[s],email:n}}).then(a=>{const{lessons:m,modules:o}=a.data;let d=o.map(f=>({title:f.title,lessons:m.filter(v=>v.moduleId===f.id)}));if(n){const{finishedLessons:f}=a.data;l({modules:d,finishedLessons:f})}else l({modules:d})})},[]);const _=u.useMemo(()=>c.modules.map((n,a)=>{const m=c.finishedLessons?n.lessons.map(o=>{const d=c.finishedLessons.find(f=>f.lessonId===o.id);return{...o,status:d?d.progressStatus==="good"?i.STAR_1:d.progressStatus==="very good"?i.STAR_2:i.STAR_3:i.NO_PROGRESS}}):n.lessons;return m.length>0?r(E,{title:new M(n.title,L),index:a,activeModule:e,lessons:m,closeOtherModules:()=>t(a)},a):void 0}),[c,e]);return r("div",{className:`course-plan course-plan--${S[s]}`,children:r("div",{className:"flex-column--centered",children:_})})}export{P as default};