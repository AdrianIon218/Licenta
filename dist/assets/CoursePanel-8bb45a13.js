var h=Object.defineProperty;var f=(e,s,t)=>s in e?h(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>(f(e,typeof s!="symbol"?s+"":s,t),t);import{j as c,a as r,r as l}from"./index-fd463380.js";var _=(e=>(e[e.A1=0]="A1",e[e.A2=1]="A2",e[e.B1=2]="B1",e[e.B2=3]="B2",e[e.C1=4]="C1",e))(_||{});const g=25;class N{constructor(s){a(this,"className","");a(this,"containerClass","");a(this,"message","");this.className=s==="not started"?"fas fa-clock":s==="in progress"?"fas fa-history":"fa fa-check",this.containerClass=s==="not started"?"course-status--gray":s==="in progress"?"course-status--yellow":"course-status--green",this.message=s==="not started"?"neînceput":s==="in progress"?"neterminat":"terminat"}}function i({children:e,level:s,status:t}){const n=new N(t);return c("div",{className:"course-lection",children:[r("button",{className:`course-lection-btn course-lection-btn--${_[s]}`,children:e}),r("div",{className:`course-status ${n.containerClass}`,title:n.message,children:r("i",{className:n.className})})]})}function p({title:e,activeModule:s,index:t,closeOtherModules:n}){const[o,u]=l.useState(!1),m=()=>{u(d=>(console.log("Index",t),d===!1&&n(),!d))};return l.useEffect(()=>{s!==t&&u(!1)},[s]),c("div",{className:"course__module flex-element",children:[c("div",{className:"course__module__title u-center-text",onClick:m,children:[e.str,r("span",{className:"course__module__title__arrow",children:r("i",{className:` ${o?"fas fa-chevron-up":"fas fa-chevron-down"} `})})]}),r("div",{className:`course__module__ctn ${o&&"course__module__ctn--open"}`,children:c("div",{className:`flex-column--start course__module__ctn__list ${o&&"course__module__ctn__list--open"}`,children:[r(i,{level:2,status:"not started",children:"Buna ziua"}),r(i,{level:2,status:"not started",children:"Buna ziua"}),r(i,{level:2,status:"not started",children:"Buna ziua"})]})})]})}class C{constructor(s,t){a(this,"_str","Not available");a(this,"setStr",s=>{const t=s.length;t>0&&t<=this.dimension?this._str=s:t===0?this._str="Not available":this._str=s.substring(0,this.dimension)});this.dimension=t,this.setStr(s)}set str(s){this.setStr(s)}get str(){return this._str}}function B(){const[e,s]=l.useState(-1),t=l.useMemo(()=>(console.log("Current",e),["Forme de salut","Conversatii"].map((n,o)=>r(p,{title:new C(n,g),index:o,activeModule:e,closeOtherModules:()=>s(o)},o))),[e]);return r("div",{className:"course-plan flex-column--centered",children:t})}export{B as default};