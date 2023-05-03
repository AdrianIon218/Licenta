import{j as m,a as s,r as n,V as S,F as _,_ as H,u as W}from"./index-029e3047.js";import{a as U}from"./axios-707ed124.js";import{I as w}from"./commonInterfaces-83a6a30d.js";import{N as j,a as O}from"./Notfication-848efb8b.js";function V({progressStatus:e}){return m("div",{className:"progress-bar__box",children:[s("div",{className:"progress-bar__loading",style:{width:`${e}%`}}),s("div",{className:"progress-bar__grid-half"})]})}function E(e){const[t,r]=n.useState(0),o=n.useContext(S),c=e.sentence.length,u=c<8?c*190:c>20?c*120:c*170;return s("button",{className:"play-btn",onClick:()=>{r(f=>f===0?(o==null||o.readTextWithVoice(e.sentence),setTimeout(()=>{r(0)},u),1):f)},children:s("i",{className:`${t===0?"fa fa-play":"fa fa-pause"}`})})}function N(e){const t=n.useRef(null),[r,o]=n.useState(!1),c=u=>{var i;r||((i=t.current)==null||i.classList.add("word__container--fade-out"),setTimeout(()=>u(),300),o(!0))};return m("div",{className:"flex-column--centered word__container",ref:t,children:[s("img",{className:"flex-element word__img",src:e.imageURL,alt:e.wordName}),s("h3",{className:"u-center-text",children:e.wordName}),m("h4",{className:"u-center-text",children:["[ ",e.translation," ]"]}),m("h5",{className:"u-center-text",children:["Ex : ",e.example," "]}),s(E,{sentence:e.wordName}),m("div",{className:"arrow-ctn",children:[e.previousWord!==void 0&&s("i",{className:"fas fa-chevron-circle-left",onClick:()=>c(e.previousWord)}),e.nextWord!==void 0&&s("i",{className:"fas fa-chevron-circle-right arrow-right",onClick:()=>c(e.nextWord)})]})]})}function F(e){const[t,r]=n.useState(0),o=e.unkwonWords.length,[c,u]=n.useState(0);n.useEffect(()=>{e.setProgressBar(c)},[c]);const i=l=>{u(g=>g+50/o),r(l)},f=l=>{u(g=>g-50/o),r(l)},a=()=>{u(l=>l+50/o),e.toExecises()},d=n.useMemo(()=>e.unkwonWords.map((l,g)=>g===0?n.createElement(N,{...l,key:g,nextWord:()=>i(g+1)}):g===o-1?n.createElement(N,{...l,key:g,previousWord:()=>f(g-1),nextWord:a}):n.createElement(N,{...l,key:g,previousWord:()=>f(g-1),nextWord:()=>i(g+1)})),[e.unkwonWords]);return s("div",{children:d[t]})}function $(e){return n.useContext(S),s("div",{})}const D=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;function k(e){let t=e.replace(D,"");return t=t.replace(/\s+/g," ").trim(),t}function I(e){const t=n.useRef(null),r=k(e.wordName.toLowerCase()),o=i=>{i.preventDefault(),k(t.current.value.toLowerCase())===r?e.correctAnswear():(t.current.value="",e.wrongAnswear())},c=i=>{t.current.value.length<r.length&&(t.current.value+=i,t.current.focus())},u=n.useMemo(()=>["ä","ö","ü","ß"].map((i,f)=>s("button",{type:"button",onClick:()=>c(i),children:i},f)),[]);return m(_,{children:[m("div",{className:"info",children:[s("i",{className:"fa fa-lightbulb-o"}),s("span",{children:m("ul",{children:[s("li",{children:"Nu este nevoie să folosești majuscule ."}),s("li",{children:"Nu folosi semne de punctuație ."})]})})]}),m("div",{className:"flex-column--centered word__container",children:[s("img",{className:"flex-element word__img",src:e.imageURL,alt:e.wordName}),s("h4",{className:"u-center-text",children:e.translation}),s(E,{sentence:e.example}),m("form",{onSubmit:o,className:"flex-column--centered write_word__form",children:[s("input",{type:"text",className:"flex-element u-center-text",maxLength:r.length,ref:t}),s("div",{className:"flex-element u-center-text umlouts-ctn ",children:u}),m("button",{className:"submitBtn u-center-text",children:["Verfică ",s("i",{className:"fas fa-angle-double-right"})]})]})]})]})}function J(e){const[t,r]=n.useReducer(i,{progressBar:50,score:0,wordIndex:0}),[o,c]=n.useState(!1),u=e.unkwonWords.length;function i(a,d){const l=50/e.unkwonWords.length;switch(d.type){case 0:return e.setProgressBar(a.progressBar+l),{progressBar:a.progressBar+l,score:a.score+1,wordIndex:a.wordIndex+1};case 1:return{...a,score:a.score-1};default:return a}}n.useEffect(()=>{e.unkwonWords.sort((a,d)=>.5-Math.random())},[]);const f=n.useMemo(()=>e.unkwonWords.map((a,d)=>d%3===1?s(I,{...a,correctAnswear:()=>r({type:0}),wrongAnswear:()=>{r({type:1}),c(!0)}},d):s(I,{...a,correctAnswear:()=>r({type:0}),wrongAnswear:()=>{r({type:1}),c(!0)}},d)),[e.unkwonWords]);return n.useEffect(()=>{if(t.wordIndex===e.unkwonWords.length){const a=t.score<=u/3?w.STAR_1:t.score<=u/2?w.STAR_2:w.STAR_3;e.onFinish(a)}},[t.wordIndex]),m("div",{className:"new_words_ex",children:[o&&s(j,{message:"Răspuns greșit !",type:O.ERROR,deleteNotification:()=>c(!1)}),t.wordIndex<e.unkwonWords.length&&f[t.wordIndex]]})}function X(e){return s("div",{children:e.statusLesson})}const p=n.lazy(()=>H(()=>import("./StartView-fede8a57.js"),["assets/StartView-fede8a57.js","assets/index-029e3047.js","assets/index-5d8fcacc.css"]));function z(e){const[t,r]=n.useState(0),[o,c]=n.useState([]),[u,i]=n.useState(),[f,a]=n.useState(w.NO_PROGRESS),d=sessionStorage.getItem("lessonType"),l=h=>{e.triggerTransition(),setTimeout(()=>r(h),450)},g=h=>{const x=[];return U.post("http://localhost:5000/lessons/getWords",{moduleId:h}).then(v=>(v.data.forEach(b=>{const{id:T,word:R,translation:C,example:y,moduleId:B}=b,A=new Uint8Array(b.image.data),P=new Blob([A],{type:"application/octet-stream"}),M=URL.createObjectURL(P);x.push({id:T,wordName:R.trim(),translation:C.trim(),example:y,moduleId:B,imageURL:M})}),x))};n.useEffect(()=>{(d==="new_words"||d==="pronunciation"||d==="test")&&g(e.moduleId).then(h=>{h.sort((x,v)=>.5-Math.random()),c(h)})},[e.moduleId]),n.useEffect(()=>{if(d==="new_words"){i(s(F,{toExecises:()=>l(2),unkwonWords:o,setProgressBar:e.setProgressBar}));return}if(d==="pronunciation"){i(s($,{toExecises:()=>l(2),unkwonWords:o}));return}},[o]);const L=h=>{a(h),l(3)};return n.useEffect(()=>{t===2&&i(s(J,{unkwonWords:o,setProgressBar:e.setProgressBar,onFinish:L})),t===3&&i(s(X,{statusLesson:f}))},[t,f]),m(_,{children:[t===0&&s(p,{title:e.lessonTitle,startClickHandler:()=>l(1)}),(t===1||t===2||t===3)&&u]})}function G(e){const[t,r]=n.useState(!1),o=W(),c=n.useCallback(()=>{sessionStorage.setItem("lessonId",""),sessionStorage.setItem("moduleId",""),sessionStorage.setItem("lessonTitle",""),r(!0),setTimeout(()=>o(-1),410)},[]),u=n.useCallback(()=>{r(!0),setTimeout(()=>e.closeBk(),350)},[]);return s("div",{className:`exit_message__blackdrop ${t&&"exit_message__blackdrop--close"}`,children:m("div",{className:"exit_message__box flex-column--centered",children:[s("div",{className:"btn_exit_ctn",children:s("div",{className:"btn_exit",onClick:u,children:" × "})}),s("h3",{children:" Sigur dorești să închizi lecția ? "}),m("div",{className:"flex-row--centered",children:[s("div",{className:"btn btn--white lesson-btn",onClick:c,children:" Da "}),s("div",{className:"btn btn--blue lesson-btn",onClick:u,children:" Nu "})]})]})})}function q(){const[e,t]=n.useState(!1);return m(_,{children:[e&&s(G,{closeBk:()=>t(!1)}),s("div",{className:"lesson__exit",children:s("button",{className:"lesson__exit__btn",onClick:()=>{t(!0)},children:"×"})})]})}function K(e,t){const r=n.useRef(null);return n.useImperativeHandle(t,()=>({trigger:()=>{r.current.classList.add("lesson-transition--animated")}}),[]),s("div",{className:"lesson-transition",onAnimationEnd:()=>{r.current.classList.remove("lesson-transition--animated")},ref:r})}const Q=n.forwardRef(K);function te(){const[e,t]=n.useState({lessonId:-1,moduleId:-1,lessonTitle:""}),[r,o]=n.useState(0),c=W(),u=n.useRef({trigger:()=>{}});n.useEffect(()=>{const a=sessionStorage.getItem("lessonId"),d=sessionStorage.getItem("moduleId"),l=sessionStorage.getItem("lessonTitle");a&&d&&l?t({lessonId:+a,moduleId:+d,lessonTitle:l}):c("/Licenta/PageNotFound")},[]);const i=n.useCallback(a=>{a>=0&&a<=100&&o(a)},[]),f=n.useCallback(()=>{u.current.trigger()},[]);return m("section",{className:"lesson-section",children:[m("div",{className:"lesson-ctn",children:[e.lessonId>=0&&s(z,{...e,setProgressBar:i,triggerTransition:f}),s(Q,{ref:u})]}),s("div",{className:"lesson__progress-bar",children:s(V,{progressStatus:r})}),s(q,{})]})}export{te as default};
