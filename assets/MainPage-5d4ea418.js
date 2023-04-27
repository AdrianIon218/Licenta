import{j as a,a as e,r as o,L as c,u as m,F as l}from"./index-7a0d1aa5.js";import p from"./CoursesSection-7891a7f3.js";import u from"./RegisterForm-dc9bd36b.js";import"./LinkTransition-563a59d3.js";import"./axios-707ed124.js";import"./Notfication-482d6359.js";function d(){return a("div",{className:"header-container",children:[e("div",{className:"logo_box",children:e("img",{src:"/Licenta/images/GermanMax.png",alt:"GermanMax",className:"logo_box__img"})}),e("header",{className:"header header-section",children:a("div",{className:"text-box",children:[a("h1",{className:"heading-primary",children:[e("span",{className:"heading-primary__main",children:"GermanMax"}),e("span",{className:"heading-primary__sub u-margin-top--very-small",children:"Aplicație de învățat limba Germană"})]}),e("a",{href:"#section-course-id",className:"btn btn--white btn--animated",children:"Vezi cursurile"})]})})]})}function h(i){return a("div",{className:"composition__photo__container",children:[e("img",{src:`/Licenta/images/${i.photo}`,alt:i.alt,className:`composition__photo ${i.class}`}),e("span",{className:"composition__photo__title",children:i.title})]})}function b(i){const t=o.useId(),n=i.photos.map((s,r)=>o.createElement(h,{...s,key:`${t}-${r}`}));return e("div",{className:"composition",children:n})}const g=[{photo:"münchen_photo1.jpg",alt:"Munich",class:"composition__photo--p1",title:"München - Germania"},{photo:"viena-photo1.jpeg",alt:"Viena",class:"composition__photo--p2",title:"Viena - Austria"},{photo:"zurich-photo1.jpg",alt:"Zurich",class:"composition__photo--p3",title:"Zürich - Elveția"}],v={photos:g};function f(){return a("section",{className:"section-about between-section u_move_up--big",children:[e("div",{className:"u-center-text u-margin-bottom-medium",children:e("h2",{className:"heading-secondary",children:"Învață germană simplu și ușor"})}),a("div",{className:"flex-row",children:[a("div",{className:"col-1-of-2-text",children:[a("h3",{className:"heading-tertiary u-margin-bottom-small",children:["Unde se vorbește limba germană ",e("span",{className:"u-text-blue",children:"?"})]}),e("p",{className:"paragraph",children:"Limba germană este vorbită de majoritatea populației din Germania, Austria, Elveția, Luxemburg și Liechtenstein. Ea fiind folosită și în estul Belgiei, precum și în regiunea Schleswigul de Nord din sudul Danemarcei, dar și în regiunea autonomă Tirolul de Sud din nordul Italiei, cât și în voievodatul Opole al Poloniei și în regiunile Alsacia și Lorena din Franța."}),a("h3",{className:"heading-tertiary u-margin-bottom-small u-margin-bottom-small",children:["De ce să înveți limba germană ",e("span",{className:"u-text-blue",children:"?"})]}),e("p",{className:"paragraph",children:"În domeniul afacerilor s-a observat cum comunicare în limba germană cu partenerii vorbitori de limba germană contribuie la îmbunătățirea relației de afaceri, cât și a ratei de succes."}),e("p",{className:"paragraph",children:"Cunoștințele de limba germană pot ajuta în obținerea unui loc de muncă în cadrul unei companii care derulează afaceri pe plan internațional ."}),e("p",{className:"paragraph",children:"După engleză , germana este cea de-a doua limbă ca importanță în lumea științei. Germania ocupând locul trei în lume prin contribuția sa importantă în domeniul cercetării și a dezvoltării ."}),a("a",{href:"#",className:"btn-text",children:["Vezi cursurile disponibile  ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"col-1-of-2-img",children:e(b,{photos:v.photos})})]})]})}function N(i){return a("div",{className:"flex-element test-box",children:[e("i",{className:`${i.iconClasses} test-box__icon`,"aria-hidden":"true"}),e("h3",{className:"test-box__title u-margin-bottom-small",children:i.titleBox}),e(c,{className:"btn-text",to:"#",children:"Începe testul"})]})}const x=[{titleBox:"Nivel A1",iconClasses:"fas fa-chess-pawn",linkTest:""},{titleBox:"Nivel A2",iconClasses:"fas fa-chess-knight",linkTest:""},{titleBox:"Nivel B1",iconClasses:"fas fa-chess-bishop",linkTest:""},{titleBox:"Nivel B2",iconClasses:"fas fa-chess-rook",linkTest:""}],_={tests:x};function k(i){const t=m();function n(r){r.stopPropagation(),t(-1)}function s(r){r.stopPropagation()}return e("section",{className:"blackdrop",id:i.popupId,onClick:n,children:a("div",{className:"blackdrop__content",onClick:s,children:[e("div",{className:"blackdrop__exit",children:e("div",{onClick:n,className:"blackdrop__exit__btn",children:"×"})}),i.children]})})}const C=[{title:"A1 - Începător",description:"O persoană ce a terminat nivelul A1 va putea folosi expresii uzuale, să înțeleagă și să alcătuiască propoziții simple, să se poată prezenta altor persoane și să formuleze întrebări esențiale ."},{title:"A2 - Cunoștințe de bază",description:"O persoană ce a terminat nivelul A2 va putea înțelege propoziții și expresii folosite mai des, corelate cu mediul său apropiat, de exemplu informații despre el însuși și familia sa, cumpărături, muncă și imprejurimi. De asemnea se va putea face înțeles în situații simple, de rutină, în care este vorba despre un schimb direct de informații legate de lucruri cunoscute si comune."},{title:"B1 - Cunostințe medii de limbă",description:"O persoană ce a terminat nivelul B1 se va putea descurca în aproape toate situațiile de limbaj standardizat întâlnite într-o călătorie, să vorbească despre lucruri obișnuite de la servici, școală, timp liber, etc. În plus va putea să vorbească simplu și coerent despre teme cunoscute și domenii de interes personal , cât și să poată povesti despre experiențele și întâmplările personale."},{title:"B2 - Utilizarea limbii independent",description:"O persoană ce a terminat nivelul B2 va putea înțelege conținutul principal al unor texte complexe despre teme concrete și abstracte, precum și discuțiile din domeniul său de specialitate. De asemnea va putea comunica în mod spontan și cursiv, astfel încât o conversație obișnuită cu vorbitori nativi de limba germană să decurgă fără probleme."},{title:"C1 - Cunoștințe de limbă la nivel de expert",description:"O persoană ce a terminat nivelul C1 va putea parcurge texte lungi și complicate dintr-un spectru larg de teme. Va putea folosi limba flexibil și efectiv în viața socială și profesională, sau în pregătirea profesională și studiu. Își va putea exprima opinia clar, structurat și detaliat despre cazuri și situații complicate."}];function B(){return a("div",{className:"panel panel--white",children:[e("h2",{className:"heading-tertiary--biger u-center-text u-margin-bottom-intermediate",children:"Nivelele de cunoaștere a limbii germane"}),C.map((i,t)=>a("p",{className:"paragraph",children:[e("span",{className:"paragraph__title",children:i.title}),i.description]},t))]})}function z(){const t=_.tests.map((n,s)=>e(N,{iconClasses:n.iconClasses,titleBox:n.titleBox,linkTest:n.linkTest},s));return a(l,{children:[e(k,{popupId:"popup-test-details",children:e(B,{})}),a("section",{className:"section-tests between-section",children:[e("div",{className:"section-tests__helper",children:e("a",{href:"#popup-test-details",className:"btn--cleared helper-btn",children:e("i",{className:"fas fa-question-circle"})})}),e("div",{className:"u-center-text u-margin-bottom-medium",children:e("h2",{className:"heading-secondary heading-secondary--dark-color",children:"Testează-ți cunoștiințele !"})}),e("div",{className:"flex-row--centered",children:t})]})]})}function E(){const[i,t]=o.useState(!0);return o.useEffect(()=>{localStorage.getItem("userAccount")&&t(!1)},[]),a(l,{children:[e(d,{}),a("main",{children:[e(f,{}),e(z,{}),e(p,{location:"home"}),i&&e(u,{location:"home"})]})]})}export{E as default};