import{r as i,a as e,j as a}from"./index-8e964ccc.js";function c(){const r=i.useRef(null),l=i.useRef(null);function s(o){fetch("http://localhost:5000/login/",{method:"POST",body:JSON.stringify({name:r.current.value,email:l.current.value}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(n=>n.json()).then(n=>console.log(n)),o.preventDefault()}return e("section",{className:"section-login header-section u_padding_down--big",children:e("div",{className:"flex-row--centered",children:e("div",{className:"box-mountain-bg",children:e("div",{className:"box-mountain-bg__form",children:a("form",{onSubmit:s,className:"forn",children:[e("div",{className:"u-margin-bottom-medium u-center-text",children:e("h2",{className:"heading-secondary",children:"Autentificare"})}),a("div",{className:"form__group",children:[e("input",{type:"email",className:"form__input",placeholder:"Adresă de mail",id:"email",name:"email",ref:r,required:!0}),e("label",{htmlFor:"email",className:"form__label",children:"Adresă de mail"})]}),a("div",{className:"form__group u-margin-bottom-intermediate",children:[e("input",{type:"password",className:"form__input",placeholder:"Parolă",id:"password",name:"password",ref:l,required:!0}),e("label",{htmlFor:"password",className:"form__label",children:"Parolă"})]}),e("div",{className:"form__group",children:a("button",{className:"btn btn--white",children:["Intră in cont ",e("i",{className:"fas fa-sign-in-alt"})]})})]})})})})})}export{c as default};