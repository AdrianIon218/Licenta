import{r as c,u as g,j as t,F as b,a as e}from"./index-9bf9c07c.js";import{a as u}from"./axios-707ed124.js";import{a as i,N as v}from"./Notfication-c99b4275.js";function x(){const m=c.useRef(null),[r,o]=c.useState({isShown:!1,message:"",type:i.NO_TYPE}),f=g(),[l,s]=c.useState(!1),a=()=>{s(!1),o({isShown:!0,message:"Eroare de server ! Încercați mai târziu!",type:i.ERROR})},h=p=>{if(p.preventDefault(),!l){const n=m.current.value;s(!0),u.post("http://localhost:5000/login/",{email:n,password:""}).then(N=>{const{status:d}=N.data;d==="NO_USER"?(s(!1),o({isShown:!0,message:"Nu există utilizator cu această adresă!",type:i.WARNING})):d==="PASS_INCORECT"?u.post("http://localhost:5000/login/reset_pass",{email:n}).then(({status:_})=>{_?(s(!1),sessionStorage.setItem("emailToReset",n),f("/Licenta/password_reset_code")):a()}).catch(()=>{a()}):a()}).catch(()=>{a()})}};return t(b,{children:[r.isShown&&e(v,{message:r.message,type:r.type,deleteNotification:()=>o({isShown:!1,message:"",type:i.NO_TYPE})}),e("section",{className:"section-gradient section-header u_padding_down--big",children:e("div",{className:"flex-row--centered",children:e("div",{className:"box-mountain-bg",children:e("div",{className:"box-mountain-bg__form",children:t("form",{onSubmit:h,className:"forn",children:[e("div",{className:"u-margin-bottom-medium u-center-text",children:e("h2",{className:"heading-secondary",children:"Resetare parolă"})}),t("div",{className:"form__group",children:[e("input",{type:"email",className:"form__input",placeholder:"Adresă de email *",id:"email",name:"email",ref:m,required:!0,disabled:l}),e("label",{htmlFor:"email",className:"form__label form__label__required",children:"Adresă de email"})]}),e("div",{className:"form__group",children:t("button",{className:"btn btn--white",disabled:l,children:["Resetează  ",e("i",{className:"fas fa-sync"})]})})]})})})})})]})}export{x as default};
