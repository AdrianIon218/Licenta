var f=Object.defineProperty;var _=(e,s,t)=>s in e?f(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>(_(e,typeof s!="symbol"?s+"":s,t),t);import{j as c,a as r,r as i}from"./index-c033cae3.js";var m=(e=>(e[e.A1=0]="A1",e[e.A2=1]="A2",e[e.B1=2]="B1",e[e.B2=3]="B2",e[e.C1=4]="C1",e))(m||{});class g{constructor(s){a(this,"className","");a(this,"containerClass","");a(this,"message","");this.className=s==="not started"?"fas fa-clock":s==="in progress"?"fas fa-history":"fa fa-check",this.containerClass=s==="not started"?"course-status--gray":s==="in progress"?"course-status--yellow":"course-status--green",this.message=s==="not started"?"neînceput":s==="in progress"?"neterminat":"terminat"}}function d({children:e,level:s,status:t}){const n=new g(t);return c("div",{className:"course-lection",children:[r("button",{className:`course-lection-btn course-lection-btn--${m[s]}`,children:e}),r("div",{className:`course-status ${n.containerClass}`,title:n.message,children:r("i",{className:n.className})})]})}function p({title:e,activeModule:s,index:t,closeOtherModules:n}){const[o,l]=i.useState(!1),h=()=>{l(u=>(console.log("Index",t),u===!1&&n(),!u))};return i.useEffect(()=>{s!==t&&l(!1)},[s]),c("div",{className:"course__module flex-element",children:[c("div",{className:"course__module__title u-center-text",onClick:h,children:[e.str,r("span",{className:"course__module__title__arrow",children:r("i",{className:` ${o?"fas fa-chevron-up":"fas fa-chevron-down"} `})})]}),c("div",{className:`course__module__ctn flex-column--start ${o&&"course__module__ctn--open"}`,children:[r(d,{level:2,status:"not started",children:"Buna ziua"}),r(d,{level:2,status:"not started",children:"Buna ziua"})]})]})}class N{constructor(s,t){a(this,"_str","Not available");a(this,"setStr",s=>{const t=s.length;t>0&&t<=this.dimension?this._str=s:t===0?this._str="Not available":this._str=s.substring(0,this.dimension)});this.dimension=t,this.setStr(s)}set str(s){this.setStr(s)}get str(){return this._str}}function M(){const[e,s]=i.useState(-1),t=i.useMemo(()=>(console.log("Current",e),["Forme de salut","Conversatii"].map((n,o)=>r(p,{title:new N(n,25),index:o,activeModule:e,closeOtherModules:()=>s(o)},o))),[e]);return r("div",{className:"course-plan flex-column--centered",children:t})}export{M as default};
