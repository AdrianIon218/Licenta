var v=Object.defineProperty;var g=(e,s,t)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var p=(e,s,t)=>(g(e,typeof s!="symbol"?s+"":s,t),t);import{r as n,j as S,a as r}from"./index-3b656e50.js";import{C as R,L as f,a as C}from"./CoursePlan-fcde9f42.js";import{a as x}from"./axios-707ed124.js";var u=(e=>(e[e.NO_PROGRESS=0]="NO_PROGRESS",e[e.STAR_1=1]="STAR_1",e[e.STAR_2=2]="STAR_2",e[e.STAR_3=3]="STAR_3",e))(u||{});function A({children:e,status:s}){const{courseLvl:t}=n.useContext(R),c=d=>{d.stopPropagation()};return S("div",{className:"course-lesson",children:[r("button",{className:`course-lesson-btn course-lesson-btn--${f[t]}`,onClick:c,children:e}),S("div",{className:`course-status ${t<f.B1?"course-status--A":t>f.B2?"course-status--C":"course-status--B"}`,children:[r("i",{className:`fa fa-star ${s!==u.NO_PROGRESS&&"course-status--checked"}`}),r("i",{className:`fa fa-star ${s===u.STAR_3&&"course-status--checked"}`}),r("i",{className:`fa fa-star ${s>u.STAR_1&&"course-status--checked"}`})]})]})}function E({title:e,activeModule:s,index:t,closeOtherModules:c,lessons:d}){const[h,l]=n.useState(!1),a=f[n.useContext(R).courseLvl],_=()=>{l(o=>(o===!1&&c(),!o))};n.useEffect(()=>{s!==t&&l(!1)},[s]);const m=n.useMemo(()=>d.map((o,i)=>r(A,{status:o.status??u.NO_PROGRESS,children:o.title},i)),[d]);return S("div",{className:"course__module flex-element",tabIndex:t,children:[S("div",{className:"course__module__title u-center-text",onClick:_,children:[e.str,r("span",{className:`course__module__title__arrow course__module__title__arrow--${a}`,children:r("i",{className:` ${h?"fas fa-chevron-up":"fas fa-chevron-down"} `})})]}),r("div",{className:`course__module__ctn ${h&&"course__module__ctn--open"}`,children:r("div",{className:`flex-column--start course__module__ctn__list course__module__ctn__list--${a} ${h&&"course__module__ctn__list--open"}`,children:m})})]})}class L{constructor(s,t){p(this,"_str","Not available");p(this,"setStr",s=>{const t=s.length;t>0&&t<=this.dimension?this._str=s:t===0?this._str="Not available":this._str=s.substring(0,this.dimension)});this.dimension=t,this.setStr(s)}set str(s){this.setStr(s)}get str(){return this._str}}function b({level:e}){const[s,t]=n.useState(-1);n.useContext(R).setCourseLvl(e);const[c,d]=n.useState({modules:[]});n.useEffect(()=>{const l=sessionStorage.getItem("userAccount");x.get("http://localhost:5000/course_modules",{params:{level:f[e],email:l}}).then(a=>{const{lessons:_,modules:m}=a.data;let o=m.map(i=>({title:i.title,lessons:_.filter(N=>N.moduleId===i.id)}));if(l){const{finishedLessons:i}=a.data;d({modules:o,finishedLessons:i})}else d({modules:o})})},[]);const h=n.useMemo(()=>c.modules.map((l,a)=>{const _=c.finishedLessons?l.lessons.map(m=>{const o=c.finishedLessons.find(i=>i.lessonId===m.id);return{...m,status:o?o.progressStatus==="good"?u.STAR_1:o.progressStatus==="very good"?u.STAR_2:u.STAR_3:u.NO_PROGRESS}}):l.lessons;return _.length>0?r(E,{title:new L(l.title,C),index:a,activeModule:s,lessons:_,closeOtherModules:()=>t(a)},a):void 0}),[c,s]);return r("div",{className:`course-plan course-plan--${f[e]}`,children:r("div",{className:"flex-column--centered",children:h})})}export{b as default};
