import{r,j as t,F as g,a as e}from"./index-1f5ed3d6.js";import{a as s,L as d,N as E}from"./Notfication-48b39793.js";import{a as S}from"./axios-707ed124.js";const b=(i,a)=>{switch(a.type){case"ACCEPTED":return{isShown:!1,message:"Te-ai autentificat !",notificationType:s.SUCCESS};case"INVALID_PASS":return{isShown:!0,message:"Parola este incorectă !",notificationType:s.ERROR};case"NO_USER":return{isShown:!0,message:"Nu există utilizator cu această adresă de mail !",notificationType:s.NO_TYPE};case"SERVER_ERR":return{isShown:!0,message:"Eroare de server, încerca-ți mai târziu !",notificationType:s.ERROR};default:return{isShown:!1,message:"",notificationType:s.NO_TYPE}}};function y(){const[i,a]=r.useReducer(b,{isShown:!1,message:"",notificationType:s.NO_TYPE}),[c,u]=r.useState(""),n=r.useRef(null),o=r.useRef(null);function p(f){f.preventDefault();const l=n.current.value,h=o.current.value;S.post("http://localhost:5000/login/",{email:l,password:h}).then(m=>{const{status:_}=m.data;switch(o.current.value="",_){case"USER_OK":n.current.value="";const{lastLevel:N}=m.data;sessionStorage.setItem("userAccount",l),a({type:"ACCEPTED"}),u(`/Licenta/course-plan/${N}`);break;case"NO_USER":a({type:"NO_USER"});break;case"PASS_INCORECT":a({type:"INVALID_PASS"});break;default:a({type:"SERVER_ERR"});break}})}return t(g,{children:[c&&e(d,{to:c,transitNow:!0,children:" "}),i.isShown&&e(E,{message:i.message,type:i.notificationType,deleteNotification:()=>a({type:"DEACTIVATE"})}),e("section",{className:"section-gradient header-section u_padding_down--big",children:e("div",{className:"flex-row--centered",children:e("div",{className:"box-mountain-bg",children:e("div",{className:"box-mountain-bg__form",children:t("form",{onSubmit:p,className:"forn",children:[t("div",{className:"u-margin-bottom-medium u-center-text",children:[e("h2",{className:"heading-secondary",children:"Autentificare"}),t("span",{className:"span-header-block",children:["creeare cont nou  ",e("span",{className:"span-pointer",children:e(d,{to:"/Licenta/signup",icon:"fas fa-id-card"})})]})]}),t("div",{className:"form__group",children:[e("input",{type:"email",className:"form__input",placeholder:"Adresă de email *",id:"email",name:"email",ref:n,required:!0}),e("label",{htmlFor:"email",className:"form__label form__label__required",children:"Adresă de email"})]}),t("div",{className:"form__group u-margin-bottom-intermediate",children:[e("input",{type:"password",className:"form__input",placeholder:"Parolă *",id:"password",name:"password",ref:o,required:!0}),e("label",{htmlFor:"password",className:"form__label form__label__required",children:"Parolă"})]}),e("div",{className:"form__group",children:t("button",{className:"btn btn--white",children:["Intră in cont ",e("i",{className:"fas fa-sign-in-alt"})]})})]})})})})})]})}export{y as default};