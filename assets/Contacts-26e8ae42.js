import{r,j as a,a as e,e as g}from"./index-5d30a80d.js";import{a as t,N}from"./Notfication-bdbdd996.js";function S(){const m=localStorage.getItem("userAccount"),c=r.useRef(null),i=r.useRef(null),o=r.useRef(null),[l,s]=r.useState({isShown:!1,message:"",type:t.NO_TYPE});function n(u){u.preventDefault();const d=m??c.current.value.trim(),f=i.current.value.trim(),_=o.current.value.trim();g.post("http://localhost:5000/contacts",{email:d,topic:f,message:_}).then(p=>{const{status:h}=p.data;h==="sent"?(i.current.value="",o.current.value="",s({isShown:!0,message:"Mesaj trimis !",type:t.SUCCESS})):s({isShown:!0,message:"Eroare, încercați mai târziu !",type:t.ERROR})}).catch(()=>{s({isShown:!0,message:"Eroare, încercați mai târziu !",type:t.ERROR})})}return a("section",{className:"section-header form u_padding_down--big flex-column--centered",children:[l.isShown&&e(N,{message:l.message,type:l.type,deleteNotification:()=>s({isShown:!1,message:"",type:t.NO_TYPE})}),a("form",{onSubmit:n,className:"forn box-form u-margin-top--small",children:[e("div",{className:"u-margin-bottom-medium u-center-text",children:e("h2",{className:"heading-secondary",children:"Formular de contact"})}),!m&&a("div",{className:"form__group",children:[e("input",{type:"email",className:"form__input",placeholder:"Adresă ta de email *",id:"email",required:!0,ref:c}),e("label",{htmlFor:"email",className:"form__label form__label__required",children:"Adresă ta de email"})]}),a("div",{className:"form__group",children:[e("input",{type:"text",className:"form__input",placeholder:"Topic *",id:"topic",required:!0,ref:i}),e("label",{htmlFor:"topic",className:"form__label form__label__required",children:"Topic"})]}),a("div",{className:"form__group",children:[e("textarea",{name:"message",className:"form__input form__textarea",id:"message",rows:10,ref:o,minLength:5,placeholder:"Mesaj *",required:!0}),e("label",{htmlFor:"message",className:"form__label form__label__required",children:"Mesaj"})]}),e("div",{className:"form__group",children:e("button",{className:"btn btn--white",children:"Trimite mesajul"})})]})]})}export{S as default};