import{j as s,a as e,r as c,u as _,F as v,e as u}from"./index-e6895c97.js";import{a as l,N as b}from"./Notfication-f70963a9.js";function R(){return s("div",{className:"loading_panel flex-column--centered",children:[e("h3",{children:"Așteptați"}),s("div",{className:"lds-ellipsis u-margin-top--medium",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{})]})]})}function w(){const d=c.useRef(null),f=_(),[r,n]=c.useState({isShown:!1,message:"",type:l.NO_TYPE}),[a,t]=c.useState(!1),i=()=>{t(!1),n({isShown:!0,message:"Eroare de server ! Încercați mai târziu!",type:l.ERROR})},h=p=>{if(p.preventDefault(),!a){const o=d.current.value;t(!0),u.post("http://localhost:5000/login/",{email:o,password:""}).then(N=>{const{status:m}=N.data;m==="NO_USER"?(t(!1),n({isShown:!0,message:"Nu există utilizator cu această adresă!",type:l.WARNING})):m==="PASS_INCORECT"?u.post("http://localhost:5000/login/reset_pass",{email:o}).then(({status:g})=>{g?(t(!1),sessionStorage.setItem("emailToReset",o),f("/password_reset_code")):i()}).catch(()=>{i()}):i()}).catch(()=>{i()})}};return s(v,{children:[r.isShown&&e(b,{message:r.message,type:r.type,deleteNotification:()=>n({isShown:!1,message:"",type:l.NO_TYPE})}),e("section",{className:"section-gradient section-header u_padding_down--big",children:e("div",{className:"flex-row--centered",children:e("div",{className:"box-mountain-bg",children:e("div",{className:"box-mountain-bg__form",children:a?e(R,{}):s("form",{onSubmit:h,className:"forn",children:[e("div",{className:"u-margin-bottom-medium u-center-text",children:e("h2",{className:"heading-secondary",children:"Resetare parolă"})}),s("div",{className:"form__group",children:[e("input",{type:"email",className:"form__input",placeholder:"Adresă de email *",id:"email",name:"email",ref:d,required:!0,disabled:a}),e("label",{htmlFor:"email",className:"form__label form__label__required",children:"Adresă de email"})]}),e("div",{className:"form__group",children:s("button",{className:"btn btn--white",disabled:a,children:["Resetează  ",e("i",{className:"fas fa-sync"})]})})]})})})})})]})}export{w as default};