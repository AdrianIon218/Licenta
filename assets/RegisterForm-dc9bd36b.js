import{j as a,a as e,r as t,F as k}from"./index-7a0d1aa5.js";import{L as h}from"./LinkTransition-563a59d3.js";import{a as p}from"./axios-707ed124.js";import{N as A,a as F}from"./Notfication-482d6359.js";function c(l){return a("div",{className:"form__radio-group",children:[e("input",{type:"radio",className:"form__radio-input",id:l.id,name:l.name,value:l.value,onChange:()=>l.change(),checked:l.validate()}),a("label",{htmlFor:l.id,className:"form__radio-label",children:[e("span",{className:"form__radio-button"}),l.label]})]})}function S({location:l}){const[i,s]=t.useState(0),[g,m]=t.useState(!1),d=t.useRef(null),u=t.useRef(null),r=t.useRef(null),[_,N]=t.useState("");function b(w){w.preventDefault();const o=u.current.value,f=i===2?"C1":i===0?"A1":"B1";p.post("http://localhost:5000/signup/checkemail",{email:o}).then(n=>{const{isEmailAvailable:x}=n.data;if(x){const y=d.current.value,R=r.current.value;return p.post("http://localhost:5000/signup/addNewUser",{email:o,name:y,password:R,level:f})}else m(!0)}).then(n=>{n!=null&&n.data.isUserAdded&&(localStorage.setItem("userAccount",o),N(`/Licenta/course-plan/${f}`))})}function v(){r.current.type==="password"?r.current.type="text":r.current.type="password"}return a(k,{children:[g&&e(A,{message:"Adresa de mail este deja folosită !",type:F.WARNING,deleteNotification:()=>m(!1)}),_&&e(h,{to:_,transitNow:!0,children:" "}),e("section",{className:l==="home"?"section-sign-up between-section u_padding_down--med":"header-section u_padding_down--big section-gradient",children:e("div",{className:"flex-row--centered",children:e("div",{className:"box-mountain-bg",children:e("div",{className:"box-mountain-bg__form",children:a("form",{onSubmit:b,className:"forn",children:[a("div",{className:"u-margin-bottom-medium u-center-text",children:[e("h2",{className:"heading-secondary",children:"Creare cont"}),a("span",{className:"span-header-block",children:["ai cont deja ?  ",e("span",{className:"span-pointer",children:e(h,{to:"/Licenta/login",icon:"fas fa-sign-in-alt"})})]})]}),a("div",{className:"form__group",children:[e("input",{type:"text",className:"form__input",placeholder:"Nume complet *",id:"name",ref:d,required:!0}),e("label",{htmlFor:"name",className:"form__label form__label__required",children:"Nume complet"})]}),a("div",{className:"form__group",children:[e("input",{type:"email",className:"form__input",placeholder:"Adresă de email *",id:"email",ref:u,required:!0}),e("label",{htmlFor:"email",className:"form__label form__label__required",children:"Adresă de email"})]}),a("div",{className:"form__group",children:[e("input",{type:"password",minLength:6,className:"form__input",placeholder:"Parolă de minim 6 caractere *",id:"password",ref:r,required:!0}),e("label",{htmlFor:"password",className:"form__label form__label__required",children:"Parolă"}),a("div",{className:"form__group form__group__checkbox",children:[e("label",{htmlFor:"pass_toggle",className:"form__label",children:"Arată parola"}),e("input",{type:"checkbox",className:"form__checkbox",onClick:v,name:"pass_toggle",id:"pass_toggle"})]})]}),a("div",{className:"form__group u-margin-bottom-intermediate",children:[e("h3",{className:"form__sub-heading",children:"Care este nivelul tău de germană ?"}),e(c,{id:"beginner",name:"level",value:0,change:()=>s(0),label:"Începător  (A1-A2)",validate:()=>i===0}),e(c,{id:"intermediate",name:"level",value:1,change:()=>s(1),label:"Intermediar  (B1-B2)",validate:()=>i===1}),e(c,{id:"advanced",name:"level",value:2,change:()=>s(2),label:"Avansat  (C1-C2)",validate:()=>i===2})]}),e("div",{className:"form__group",children:a("button",{className:"btn btn--white",children:["Următorul pas ",e("i",{className:"fas fa-angle-right"})]})})]})})})})})," "]})}export{S as default};
