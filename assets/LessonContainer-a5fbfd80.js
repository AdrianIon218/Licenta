import{j as u,a as s,r as t,V as B,F as b,u as W,_ as j}from"./index-272c0258.js";import{a as C}from"./axios-707ed124.js";import{I as k}from"./commonInterfaces-83a6a30d.js";import{N as A,a as E}from"./Notfication-9258026a.js";function J({progressStatus:e}){return u("div",{className:"progress-bar__box",children:[s("div",{className:"progress-bar__loading",style:{width:`${e}%`}}),s("div",{className:"progress-bar__grid-half"})]})}function _(e){const[r,o]=t.useState(0),n=t.useContext(B),i=e.sentence.length,l=i<8?i*190:i>20?i*120:i*170;return s("button",{className:"play-btn",onClick:()=>{o(a=>a===0?(n==null||n.readTextWithVoice(e.sentence),setTimeout(()=>{o(0)},l),1):a)},children:s("i",{className:`${r===0?"fa fa-play":"fa fa-pause"}`})})}function I(e){const r=t.useRef(null),[o,n]=t.useState(!1),i=l=>{var d;o||((d=r.current)==null||d.classList.add("word__container--fade-out"),setTimeout(()=>l(),300),n(!0))};return u("div",{className:"flex-column--centered word__container",ref:r,children:[s("img",{className:"flex-element word__img",src:e.imageURL,alt:e.wordName}),s("h3",{className:"u-center-text",children:e.wordName}),u("h4",{className:"u-center-text",children:["[ ",e.translation," ]"]}),u("h5",{className:"u-center-text",children:["Ex : ",e.example," "]}),s(_,{sentence:e.wordName}),u("div",{className:"arrow-ctn",children:[e.previousWord!==void 0&&s("i",{className:"fas fa-chevron-circle-left",onClick:()=>i(e.previousWord)}),e.nextWord!==void 0&&s("i",{className:"fas fa-chevron-circle-right arrow-right",onClick:()=>i(e.nextWord)})]})]})}function X(e){const[r,o]=t.useState(0),n=e.unkwonWords.length,[i,l]=t.useState(0);t.useEffect(()=>{e.setProgressBar(i)},[i]);const d=h=>{l(g=>g+50/n),o(h)},a=h=>{l(g=>g-50/n),o(h)},c=()=>{l(h=>h+50/n),e.toExecises()},m=t.useMemo(()=>e.unkwonWords.map((h,g)=>g===0?t.createElement(I,{...h,key:g,nextWord:()=>d(g+1)}):g===n-1?t.createElement(I,{...h,key:g,previousWord:()=>a(g-1),nextWord:c}):t.createElement(I,{...h,key:g,previousWord:()=>a(g-1),nextWord:()=>d(g+1)})),[e.unkwonWords]);return s("div",{children:m[r]})}const D=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;function S(e){let r=e.replace(D,"");return r=r.replace(/\s+/g," ").trim(),r}function L(e){return e.replace(/[ä]/g,"a").replace(/[ü]/g,"u").replace(/[ö]/g,"o")}function z(e){const r=t.useContext(B),[o,n]=t.useState(!1),i=e.textToLookFor.length<10?3:e.textToLookFor.length<20?4:7,l=L(S(e.textToLookFor.toLowerCase()));return s("button",{className:`play-btn btn-record ${o===!0?"btn-recording":""}`,onClick:()=>{if(!o)try{e.clickActions(),n(!0),r.startRecord(i).then(a=>{a=L(S(a.toLowerCase())),a===l?e.correctAnswear():e.wrongAnswear(),n(!1)})}catch{n(!1)}},children:s("i",{className:"fa fa-microphone"})})}function y(e){const[r,o]=t.useState(0),n=t.useCallback(()=>{e.correctAnswear()},[]),i=()=>{o(d=>d+1),e.wrongAnswear()},l=()=>{e.skip()};return u(b,{children:[r>=2&&s("button",{className:"btn-skip",onClick:l,children:"Skip"}),u("div",{className:"flex-column--centered word__container",children:[s("img",{className:"flex-element word__img",src:e.imageURL,alt:e.wordName}),s(_,{sentence:e.wordName}),s("h3",{className:"u-center-text",children:e.wordName}),u("h4",{className:"u-center-text",children:["[ ",e.translation," ]"]}),s(z,{textToLookFor:e.wordName,correctAnswear:n,wrongAnswear:i,clickActions:()=>e.stopNotification()})]})]})}function G(e){const r=(g,f)=>{switch(f.type){case 0:return{progressBarStatus:g.progressBarStatus+f.ratioProgress,score:g.score+1,currentWordIndex:g.currentWordIndex+1};case 1:return{...g,score:g.score-1};case 2:return{progressBarStatus:g.progressBarStatus+f.ratioProgress,score:g.score-1,currentWordIndex:g.currentWordIndex+1};default:return g}},[o,n]=t.useReducer(r,{progressBarStatus:0,score:0,currentWordIndex:0}),i=50/e.unkwonWords.length,[l,d]=t.useState(!1),a=()=>{e.setProgressBar(o.progressBarStatus+i),n({type:0,ratioProgress:i}),d(!1)},c=()=>{n({type:1,ratioProgress:0}),d(!0)},m=()=>{e.setProgressBar(o.progressBarStatus+i),n({type:2,ratioProgress:i}),d(!1)},h=e.unkwonWords.map((g,f)=>t.createElement(y,{...g,key:f,correctAnswear:a,wrongAnswear:c,skip:m,stopNotification:()=>d(!1)}));return u(b,{children:[l&&s(A,{message:"Răspuns greșit !",type:E.ERROR,deleteNotification:()=>d(!1)}),o.currentWordIndex<e.unkwonWords.length&&h[o.currentWordIndex],o.currentWordIndex===e.unkwonWords.length&&e.toExecises(o.score)]})}function q(e){const[r,o]=t.useState(0),n=t.useRef(null),i=S(e.wordName.toLowerCase()),l=c=>{c.preventDefault(),S(n.current.value.toLowerCase())===i?e.correctAnswear():(n.current.value="",o(h=>h+1),e.wrongAnswear())},d=c=>{n.current.value.length<i.length&&(n.current.value+=c,n.current.focus())},a=t.useMemo(()=>["ä","ö","ü","ß"].map((c,m)=>s("button",{type:"button",onClick:()=>d(c),children:c},m)),[]);return u(b,{children:[u("div",{className:"info",children:[s("i",{className:"fa fa-lightbulb-o"}),s("span",{children:u("ul",{children:[s("li",{children:"Nu este nevoie să folosești majuscule ."}),s("li",{children:"Nu folosi semne de punctuație ."})]})})]}),r>=2&&s("button",{className:"btn-skip",onClick:e.skipExercise,children:"Skip"}),u("div",{className:"flex-column--centered word__container",children:[s("img",{className:"flex-element word__img",src:e.imageURL,alt:e.wordName}),s("h4",{className:"u-center-text",children:e.translation}),s(_,{sentence:e.example}),u("form",{onSubmit:l,className:"flex-column--centered write_word__form",children:[s("input",{type:"text",className:"flex-element u-center-text",maxLength:i.length,minLength:2,ref:n,autoFocus:!0}),s("div",{className:"flex-element u-center-text umlouts-ctn ",children:a}),u("button",{className:"submitBtn u-center-text",children:["Verfică ",s("i",{className:"fas fa-angle-double-right"})]})]})]})]})}function K(e){const[r,o]=t.useState(""),n=t.useMemo(()=>{let a=e.wordNames.filter(c=>c!==e.wordName).sort((c,m)=>.5-Math.random()).slice(0,3).concat(e.wordName);return a=a.sort((c,m)=>.5-Math.random()),a},[e.wordNames]),i=a=>{o(a.target.value)},l=t.useMemo(()=>n.map((a,c)=>{const m=`choice-${c}`;return u("div",{className:"choice-ctn",children:[s("label",{htmlFor:m,className:r===a?"choice--checked":"",children:a}),s("input",{type:"checkbox",id:m,name:"choice",value:a,hidden:!0,onChange:i})]},c)}),[n,r]),d=a=>{a.preventDefault(),r===e.wordName?e.correctAnswear():r!==""&&e.wrongAnswear()};return u("div",{className:"flex-column--centered multiple-choice-ex",children:[s("img",{className:"flex-element word__img",src:e.imageURL,alt:e.wordName}),s("h4",{className:"u-center-text",children:e.translation}),u("form",{className:"flex-column--centered",children:[s("div",{className:"multiple-choices-ctn",children:l}),u("button",{className:"submitBtn u-center-text",onClick:d,children:["Verfică ",s("i",{className:"fas fa-angle-double-right"})]})]})]})}function Q(e){const[r,o]=t.useState(""),n=t.useMemo(()=>{let a=e.wordsTranslation.filter(c=>c!==e.translation).sort((c,m)=>.5-Math.random()).slice(0,3).concat(e.translation);return a=a.sort((c,m)=>.5-Math.random()),a},[e.wordsTranslation]),i=a=>{o(a.target.value)},l=t.useMemo(()=>n.map((a,c)=>{const m=`choice-${c}`;return u("div",{className:"choice-ctn",children:[s("label",{htmlFor:m,className:r===a?"choice--checked":"",children:a}),s("input",{type:"checkbox",id:m,name:"choice",value:a,hidden:!0,onChange:i})]},c)}),[n,r]),d=a=>{a.preventDefault(),r===e.translation?e.correctAnswear():r!==""&&e.wrongAnswear()};return u("div",{className:"flex-column--centered multiple-choice-ex",children:[s("img",{className:"flex-element word__img",src:e.imageURL,alt:e.wordName}),s("h4",{className:"u-center-text",children:e.wordName}),s(_,{sentence:e.wordName}),u("form",{className:"flex-column--centered",children:[s("div",{className:"multiple-choices-ctn",children:l}),u("button",{className:"submitBtn u-center-text",onClick:d,children:["Verfică ",s("i",{className:"fas fa-angle-double-right"})]})]})]})}function T(e){const r=(f,N)=>{switch(N.type){case 0:return e.setProgressBar(f.progressBar+N.progressRatio),{progressBar:f.progressBar+N.progressRatio,score:f.score+1,wordIndex:f.wordIndex+1};case 1:return{...f,score:f.score-1};case 2:return e.setProgressBar(f.progressBar+N.progressRatio),{progressBar:f.progressBar+N.progressRatio,score:f.score-1,wordIndex:f.wordIndex+1};default:return f}},[o,n]=t.useReducer(r,{progressBar:50,score:e.score??0,wordIndex:0}),[i,l]=t.useState(!1),d=e.unkwonWords.length,a=sessionStorage.getItem("lessonType"),c=50/e.unkwonWords.length,m={correctAnswear:()=>{n({type:0,progressRatio:c}),l(!1)},wrongAnswear:()=>{n({type:1,progressRatio:c}),l(!0)}},h=()=>{n({type:2,progressRatio:c}),l(!1)};t.useEffect(()=>{e.unkwonWords.sort((f,N)=>.5-Math.random())},[]);const g=t.useMemo(()=>{const f=e.unkwonWords.map(w=>w.wordName),N=e.unkwonWords.map(w=>w.translation);return e.unkwonWords.map((w,x)=>{const v=a==="pronunciation"?x%4:x%3;return v===1?s(q,{...w,...m,skipExercise:h},x):v===0?s(K,{...w,...m,wordNames:f},x):v===2?s(Q,{...w,...m,wordsTranslation:N},x):s(y,{...w,...m,skip:h,stopNotification:()=>l(!1)},x)})},[e.unkwonWords]);return t.useEffect(()=>{if(o.wordIndex===e.unkwonWords.length){const f=a==="pronunciation"?2*d:d,N=o.score<=f/3?k.STAR_1:o.score<=f/2?k.STAR_2:k.STAR_3;e.onFinish(N)}},[o.wordIndex]),u("div",{className:"new_words_ex",children:[i&&s(A,{message:"Răspuns greșit !",type:E.ERROR,deleteNotification:()=>l(!1)}),o.wordIndex<e.unkwonWords.length&&g[o.wordIndex]]})}function Y(e){const r=W();return t.useEffect(()=>{const o=localStorage.getItem("userAccount"),n=sessionStorage.getItem("lessonId");sessionStorage.removeItem("moduleId"),sessionStorage.removeItem("lessonTitle"),sessionStorage.removeItem("lessonType"),o?C.post("http://localhost:5000/lessons/addProgress",{email:o,lessonId:n,status:e.statusLesson}).then(i=>{sessionStorage.removeItem("lessonId")}):sessionStorage.removeItem("lessonId")},[]),u("div",{className:"flex-column--centered",children:[s("h3",{className:"heading-secondary u-center-text",children:"Lecție terminată"}),u("div",{className:"result-stars",children:[s("i",{className:`fa fa-star ${e.statusLesson!==k.NO_PROGRESS&&"course-status--checked"}`}),s("i",{className:`fa fa-star ${e.statusLesson===k.STAR_3&&"course-status--checked"}`}),s("i",{className:`fa fa-star ${e.statusLesson>k.STAR_1&&"course-status--checked"}`})]}),s("button",{className:"btn-gradient-cyan",onClick:()=>r(-1),children:" Înapoi la lecții"})]})}const Z=t.lazy(()=>j(()=>import("./StartView-bf083d8c.js"),["assets/StartView-bf083d8c.js","assets/index-272c0258.js","assets/index-102de0be.css"]));function p(e){const[r,o]=t.useState(0),[n,i]=t.useState([]),[l,d]=t.useState(),[a,c]=t.useState(k.NO_PROGRESS),m=sessionStorage.getItem("lessonType"),h=w=>{e.triggerTransition(),setTimeout(()=>o(w),450)},g=w=>{const x=[];return C.post("http://localhost:5000/lessons/getWords",{moduleId:w}).then(v=>(v.data.forEach(R=>{const{id:P,word:M,translation:H,example:F,moduleId:U}=R,O=new Uint8Array(R.image.data),$=new Blob([O],{type:"application/octet-stream"}),V=URL.createObjectURL($);x.push({id:P,wordName:M.trim(),translation:H.trim(),example:F,moduleId:U,imageURL:V})}),x))};t.useEffect(()=>{(m==="new_words"||m==="pronunciation"||m==="test")&&g(e.moduleId).then(w=>{w.sort((x,v)=>.5-Math.random()),i(w)})},[e.moduleId]);const f=w=>{c(w),h(3)},N=w=>{e.triggerTransition(),setTimeout(()=>{d(s(T,{score:w,unkwonWords:n,setProgressBar:e.setProgressBar,onFinish:f}))},450)};return t.useEffect(()=>{if(m==="new_words"){d(s(X,{toExecises:()=>h(2),unkwonWords:n,setProgressBar:e.setProgressBar}));return}if(m==="pronunciation"){d(s(G,{toExecises:N,unkwonWords:n,setProgressBar:e.setProgressBar}));return}},[n]),t.useEffect(()=>{r===2&&m!=="pronunciation"&&d(s(T,{unkwonWords:n,setProgressBar:e.setProgressBar,onFinish:f})),r===3&&d(s(Y,{statusLesson:a}))},[r,a]),u(b,{children:[r===0&&s(Z,{title:e.lessonTitle,startClickHandler:()=>h(1)}),(r===1||r===2||r===3)&&l]})}function ee(e){const[r,o]=t.useState(!1),n=W(),i=t.useCallback(()=>{sessionStorage.removeItem("lessonType"),sessionStorage.removeItem("lessonId"),sessionStorage.removeItem("moduleId"),sessionStorage.removeItem("lessonTitle"),o(!0),setTimeout(()=>n(-1),410)},[]),l=t.useCallback(()=>{o(!0),setTimeout(()=>e.closeBk(),350)},[]);return s("div",{className:`exit_message__blackdrop ${r&&"exit_message__blackdrop--close"}`,children:u("div",{className:"exit_message__box flex-column--centered",children:[s("div",{className:"btn_exit_ctn",children:s("div",{className:"btn_exit",onClick:l,children:" × "})}),s("h3",{children:" Sigur dorești să închizi lecția ? "}),u("div",{className:"flex-row--centered",children:[s("div",{className:"btn btn--white lesson-btn",onClick:i,children:" Da "}),s("div",{className:"btn btn--blue lesson-btn",onClick:l,children:" Nu "})]})]})})}function se(){const[e,r]=t.useState(!1);return u(b,{children:[e&&s(ee,{closeBk:()=>r(!1)}),s("div",{className:"lesson__exit",children:s("button",{className:"lesson__exit__btn",onClick:()=>{r(!0)},children:"×"})})]})}function te(e,r){const o=t.useRef(null);return t.useImperativeHandle(r,()=>({trigger:()=>{o.current.classList.add("lesson-transition--animated")}}),[]),s("div",{className:"lesson-transition",onAnimationEnd:()=>{o.current.classList.remove("lesson-transition--animated")},ref:o})}const ne=t.forwardRef(te);function ie(){const[e,r]=t.useState({lessonId:-1,moduleId:-1,lessonTitle:""}),[o,n]=t.useState(0),i=W(),l=t.useRef({trigger:()=>{}});t.useEffect(()=>{const c=sessionStorage.getItem("lessonId"),m=sessionStorage.getItem("moduleId"),h=sessionStorage.getItem("lessonTitle");c&&m&&h?r({lessonId:+c,moduleId:+m,lessonTitle:h}):i("/Licenta/PageNotFound")},[]);const d=t.useCallback(c=>{c>=0&&c<=100&&n(c)},[]),a=t.useCallback(()=>{l.current.trigger()},[]);return s("div",{className:"lesson-section-ctn",children:u("section",{className:"lesson-section",children:[u("div",{className:"lesson-ctn",children:[e.lessonId>=0&&s(p,{...e,setProgressBar:c=>d(c),triggerTransition:a}),s(ne,{ref:l})]}),s("div",{className:"lesson__progress-bar",children:s(J,{progressStatus:o})}),s(se,{})]})})}export{ie as default};
