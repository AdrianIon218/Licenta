import{r as c,j as r,a as e}from"./index-188305a3.js";import{a as d}from"./axios-707ed124.js";function x(s){const[l,i]=c.useState();return c.useEffect(()=>{d.post("http://localhost:5000/lessons/grammer",{lessonId:s.lessonId}).then(t=>{const o=t.data.map((a,n)=>r("div",{children:[n===0?e("h3",{className:"u-center-text",children:a.title}):e("h4",{children:a.title}),e("p",{children:a.paragraph})]},n));i(o)})},[s.lessonId]),r("div",{className:"section-grammer",children:[l,e("div",{className:"u-center-text",children:r("button",{className:"submitBtn u-center-text",onClick:t=>{t.currentTarget.disabled=!0,s.toExercises()},children:["Începe exercițiile ",e("i",{className:"fas fa-angle-double-right"})]})})]})}export{x as default};
