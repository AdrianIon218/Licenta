import{j as i,a as e,r as c,u as m,F as o}from"./index-6e4f24a5.js";import{R as d}from"./RegisterForm-932bf666.js";import"./LinkTransition-1d17b67e.js";function u(){return i("div",{className:"header-container",children:[e("div",{className:"logo_box",children:e("img",{src:"/Licenta/images/GermanMax.png",alt:"GermanMax",className:"logo_box__img"})}),e("header",{className:"header header-section",children:i("div",{className:"text-box",children:[i("h1",{className:"heading-primary",children:[e("span",{className:"heading-primary__main",children:" GermanMaxn "}),e("span",{className:"heading-primary__sub u-margin-top-very-small",children:" Aplicație de învățat limba Germană"})]}),e("a",{href:"#section-course-id",className:"btn btn--white btn--animated",children:"Începe un curs"})]})})]})}function p(a){return i("div",{className:"composition__photo__container",children:[e("img",{src:`/Licenta/images/${a.photo}`,alt:a.alt,className:`composition__photo ${a.class}`}),e("span",{className:"composition__photo__title",children:a.title})]})}function h(a){const t=c.useId(),n=a.photos.map((l,r)=>c.createElement(p,{...l,key:`${t}-${r}`}));return e("div",{className:"composition",children:n})}const g=[{photo:"münchen_photo1.jpg",alt:"Munich",class:"composition__photo--p1",title:"München - Germania"},{photo:"viena-photo1.jpeg",alt:"Viena",class:"composition__photo--p2",title:"Viena - Austria"},{photo:"zurich-photo1.jpg",alt:"Zurich",class:"composition__photo--p3",title:"Zürich - Elveția"}],N={photos:g};function b(){return i("section",{className:"section-about between-section u_move_up--big",children:[e("div",{className:"u-center-text u-margin-bottom-medium",children:e("h2",{className:"heading-secondary",children:"Învață germană simplu și ușor"})}),i("div",{className:"flex-row",children:[i("div",{className:"col-1-of-2-text",children:[i("h3",{className:"heading-tertiary u-margin-bottom-small",children:["Unde se vorbește limba germană ",e("span",{className:"u-text-blue",children:"?"})]}),e("p",{className:"paragraph",children:"Limba germană este vorbită de majoritatea populației din Germania, Austria, Elveția, Luxemburg și Liechtenstein. Ea fiind folosită și în estul Belgiei, precum și în regiunea Schleswigul de Nord din sudul Danemarcei, dar și în regiunea autonomă Tirolul de Sud din nordul Italiei, cât și în voievodatul Opole al Poloniei și în regiunile Alsacia și Lorena din Franța."}),i("h3",{className:"heading-tertiary u-margin-bottom-small u-margin-bottom-small",children:["De ce să înveți limba germană ",e("span",{className:"u-text-blue",children:"?"})]}),e("p",{className:"paragraph",children:"În domeniul afacerilor s-a observat cum comunicare în limba germană cu partenerii vorbitori de limba germană contribuie la îmbunătățirea relației de afaceri, cât și a ratei de succes."}),e("p",{className:"paragraph",children:"Cunoștințele de limba germană pot ajuta în obținerea unui loc de muncă în cadrul unei companii care derulează afaceri pe plan internațional ."}),e("p",{className:"paragraph",children:"După engleză , germana este cea de-a doua limbă ca importanță în lumea științei. Germania ocupând locul trei în lume prin contribuția sa importantă în domeniul cercetării și a dezvoltării ."}),i("a",{href:"#",className:"btn-text",children:["Vezi cursurile disponibile  ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"col-1-of-2-img",children:e(h,{photos:N.photos})})]})]})}function v(a){return i("div",{className:"flex-element test-box",children:[e("i",{className:`${a.iconClasses} test-box__icon`,"aria-hidden":"true"}),e("h3",{className:"test-box__title u-margin-bottom-small",children:a.titleBox}),e("a",{className:"btn-text",href:"#",children:"Începe testul"})]})}const f=[{titleBox:"Nivel A1",iconClasses:"fas fa-chess-pawn",linkTest:""},{titleBox:"Nivel A2",iconClasses:"fas fa-chess-knight",linkTest:""},{titleBox:"Nivel B1",iconClasses:"fas fa-chess-bishop",linkTest:""},{titleBox:"Nivel B2",iconClasses:"fas fa-chess-rook",linkTest:""}],_={tests:f};function x(a){const t=m();function n(r){r.stopPropagation(),t(-1)}function l(r){r.stopPropagation()}return e("section",{className:"blackdrop",id:a.popupId,onClick:n,children:i("div",{className:"blackdrop__content",onClick:l,children:[e("div",{className:"blackdrop__exit",children:e("a",{href:`#${a.backElementId}`,className:"blackdrop__exit__btn",children:"×"})}),a.children]})})}const C=[{title:"A1 - Începător",description:"O persoană ce a terminat nivelul A1 va putea folosi expresii uzuale, să înțeleagă și să alcătuiască propoziții simple, să se poată prezenta altor persoane și să formuleze întrebări esențiale ."},{title:"A2 - Cunoștințe de bază",description:"O persoană ce a terminat nivelul A2 va putea înțelege propoziții și expresii folosite mai des, corelate cu mediul său apropiat, de exemplu informații despre el însuși și familia sa, cumpărături, muncă și imprejurimi. De asemnea se va putea face înțeles în situații simple, de rutină, în care este vorba despre un schimb direct de informații legate de lucruri cunoscute si comune."},{title:"B1 - Cunostințe medii de limbă",description:"O persoană ce a terminat nivelul B1 se va putea descurca în aproape toate situațiile de limbaj standardizat întâlnite într-o călătorie, să vorbească despre lucruri obișnuite de la servici, școală, timp liber, etc. În plus va putea să vorbească simplu și coerent despre teme cunoscute și domenii de interes personal , cât și să poată povesti despre experiențele și întâmplările personale."},{title:"B2 - Utilizarea limbii independent",description:"O persoană ce a terminat nivelul B2 va putea înțelege conținutul principal al unor texte complexe despre teme concrete și abstracte, precum și discuțiile din domeniul său de specialitate. De asemnea va putea comunica în mod spontan și cursiv, astfel încât o conversație obișnuită cu vorbitori nativi de limba germană să decurgă fără probleme."},{title:"C1 - Cunoștințe de limbă la nivel de expert",description:"O persoană ce a terminat nivelul C1 va putea parcurge texte lungi și complicate dintr-un spectru larg de teme. Va putea folosi limba flexibil și efectiv în viața socială și profesională, sau în pregătirea profesională și studiu. Își va putea exprima opinia clar, structurat și detaliat despre cazuri și situații complicate."}];function k(){return i("div",{className:"panel panel--white",children:[e("h2",{className:"heading-tertiary--biger u-center-text u-margin-bottom-intermediate",children:"Nivelele de cunoaștere a limbii germane"}),C.map((a,t)=>i("p",{className:"paragraph",children:[e("span",{className:"paragraph__title",children:a.title}),a.description]},t))]})}function A(){const t=_.tests.map((n,l)=>e(v,{iconClasses:n.iconClasses,titleBox:n.titleBox,linkTest:n.linkTest},l));return i(o,{children:[e(x,{popupId:"popup-test-details",backElementId:"section-tests",children:e(k,{})}),i("section",{className:"section-tests between-section",children:[e("div",{className:"section-tests__helper",children:e("a",{href:"#popup-test-details",className:"btn--cleared helper-btn",children:e("i",{className:"fas fa-question-circle"})})}),e("div",{className:"u-center-text u-margin-bottom-medium",children:e("h2",{className:"heading-secondary heading-secondary--dark-color",children:"Testează-ți cunoștiințele !"})}),e("div",{className:"flex-row--centered",children:t})]})]})}var s=(a=>(a[a.BEGINNER=1]="BEGINNER",a[a.INTERMEDIARY=2]="INTERMEDIARY",a[a.ADVANCED=3]="ADVANCED",a))(s||{});function E(a){return i("div",{className:"card flex-element",children:[i("div",{className:"card__side card__side--front",children:[e("div",{className:`card__picture card__picture--${a.typeCard}`,children:e("img",{src:`/Licenta/images/${a.frontImageName}`,alt:a.frontImageName.split(".")[0]})}),e("h4",{className:"card__heading",children:e("span",{className:`card__heading__span card__heading__span--${a.typeCard}`,children:a.heading})}),e("div",{className:"card__details",children:i("ul",{children:[i("li",{children:[e("i",{className:`fas fa-university u-margin-right-small icon-background--${a.typeCard}`}),"Nivele : ",a.details.levels," "]}),i("li",{children:[e("i",{className:`fas fa-coffee u-margin-right-small icon-background--${a.typeCard}`}),"Număr de lecții : ",a.details.lessonsNumber," "]}),i("li",{children:[e("i",{className:`fas fa-apple-alt u-margin-right-small icon-background--${a.typeCard}`}),"Cuvinte noi : ",a.details.words," "]}),i("li",{children:[e("i",{className:`fas fa-history u-margin-right-small icon-background--${a.typeCard}`}),"Număr de teste : ",a.details.testsNumber," "]})]})})]}),e("div",{className:`card__side card__side--back card__side--back--${a.typeCard}`,children:i("div",{className:"card__back-content",children:[i("div",{className:"card__time-estimation u-margin-bottom-intermediate",children:[i("p",{className:"u-margin-bottom-small",children:["Timp estimat",e("i",{className:"fas fa-clock u-margin-left-small"})]}),i("p",{children:[a.estimationWeeks," săptămâni"]})]}),i("a",{href:"#",className:"btn btn--white card__back-btn",children:[" Începe cursul ",e("i",{className:"fas fa-play u-margin-left-small"})," "]})]})})]})}const B=[{frontImageName:"liechtenstein-photo1.jpg",heading:"A1",typeCard:s.BEGINNER,details:{levels:"A1.1 / A1.2",lessonsNumber:0,words:0,testsNumber:0},estimationWeeks:0},{frontImageName:"graz-photo1.jpeg",heading:"A2",typeCard:s.BEGINNER,details:{levels:"A2.1 / A2.2",lessonsNumber:0,words:0,testsNumber:0},estimationWeeks:0},{frontImageName:"viena-photo3.jpeg",heading:"B1",typeCard:s.INTERMEDIARY,details:{levels:"B1.1 / B1.2",lessonsNumber:0,words:0,testsNumber:0},estimationWeeks:0},{frontImageName:"koln-photo1.jpeg",heading:"B2",typeCard:s.INTERMEDIARY,details:{levels:"B2.1 / B2.2",lessonsNumber:0,words:0,testsNumber:0},estimationWeeks:0},{frontImageName:"viena-photo4.jpg",heading:"C1",typeCard:s.ADVANCED,details:{levels:"C1.1",lessonsNumber:0,words:0,testsNumber:0},estimationWeeks:0}];function I(){return i("section",{className:"section-courses between-section",id:"section-course-id",children:[e("div",{className:"u-center-text u-margin-bottom-medium",children:e("h2",{className:"heading-secondary",children:"Cursuri disponibile"})}),e("div",{className:"flex-row--centered",children:B.map((a,t)=>c.createElement(E,{...a,key:t}))}),e("div",{className:"u-center-text u-margin-top-medium",children:e("a",{href:"#",className:"btn btn--blue",children:"Află ce curs ți se potrivește"})})]})}function z(){return i(o,{children:[" ",e(u,{}),i("main",{children:[e(b,{}),e(A,{}),e(I,{}),e("section",{className:"section-sign-up between-section u_padding_down--med",children:e(d,{})})]})]})}export{z as default};
