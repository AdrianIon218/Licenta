import{r as s,a as e,j as a}from"./index-733065ca.js";import{L as t}from"./LinkTransition-82c380f1.js";function d(){const n=s.useRef(null),r=s.useRef(null);function l(o){o.preventDefault(),fetch("http://localhost:5000/login/",{method:"POST",body:JSON.stringify({name:n.current.value,email:r.current.value}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{n.current.value=r.current.value="",console.log(i)})}return e("section",{className:"section-gradient header-section u_padding_down--big",children:e("div",{className:"flex-row--centered",children:e("div",{className:"box-mountain-bg",children:e("div",{className:"box-mountain-bg__form",children:a("form",{onSubmit:l,className:"forn",children:[a("div",{className:"u-margin-bottom-medium u-center-text",children:[e("h2",{className:"heading-secondary",children:"Autentificare"}),a("span",{className:"span-header-block",children:["creeare cont nou  ",e(t,{to:"/signup",icon:"fas fa-id-card"})]})]}),a("div",{className:"form__group",children:[e("input",{type:"email",className:"form__input",placeholder:"Adresă de mail",id:"email",name:"email",ref:n,required:!0}),e("label",{htmlFor:"email",className:"form__label",children:"Adresă de mail"})]}),a("div",{className:"form__group u-margin-bottom-intermediate",children:[e("input",{type:"password",className:"form__input",placeholder:"Parolă",id:"password",name:"password",ref:r,required:!0}),e("label",{htmlFor:"password",className:"form__label",children:"Parolă"})]}),e("div",{className:"form__group",children:a("button",{className:"btn btn--white",children:["Intră in cont ",e("i",{className:"fas fa-sign-in-alt"})]})})]})})})})})}export{d as default};
