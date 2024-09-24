import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";const b="_box_klsgg_13",T="_head_klsgg_35",C="_todoList_klsgg_47",j="_todo_klsgg_47",L="_todoText_klsgg_91",N="_todoLabel_klsgg_109",B="_todoCheck_klsgg_165",I="_todoButton_klsgg_231",S="_form_klsgg_251",v="_formTextarea_klsgg_263",D="_formButton_klsgg_281",a={box:b,head:T,todoList:C,todo:j,todoText:L,todoLabel:N,todoCheck:B,todoButton:I,form:S,formTextarea:v,formButton:D},h=({initialItems:x})=>{const[n,r]=i.useState(x),[l,d]=i.useState(""),g=(e,t)=>{r(n.map(o=>o.key===e?{...o,isChecked:t}:o))},u=(e,t)=>{r(n.filter((o,y)=>y!==e&&o.key!==t))},p=e=>{d(e.target.value)},f=e=>{e.preventDefault();const t=l.trim();if(t!==""){const o=[...n];o.push({text:t,isChecked:!1,key:"todo_"+(o.length+1)+"_"+t.slice(0,10).replace(/ /g,"")}),r(o),console.log("added todo: ",n[n.length-1]),d("")}};return s.jsxs("div",{className:a.box,children:[s.jsx("h1",{className:a.head,children:"Todo List"}),s.jsx("ul",{className:a.todoList,children:n.map((e,t)=>s.jsxs("li",{className:a.todo,children:[s.jsx("input",{className:a.todoCheck,id:e.key+"_checkbox"+t,type:"checkbox",onChange:o=>g(e.key,o.target.checked)}),s.jsx("p",{className:a.todoText,children:e.text}),s.jsx("label",{className:a.todoLabel,htmlFor:e.key+"_checkbox"+t}),s.jsx("button",{className:a.todoButton,onClick:()=>u(t,e.key),children:"Удалить"})]},e.key+t))}),s.jsxs("form",{className:a.form,onSubmit:f,children:[s.jsx("textarea",{className:a.formTextarea,value:l,onChange:p}),s.jsx("button",{type:"submit",className:a.formButton,children:"Добавить"})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"TodoList",props:{initialItems:{required:!0,tsType:{name:"Array",elements:[{name:"Todo"}],raw:"Array<Todo>"},description:""}}};const A={title:"Components/006-14-09-2024-react-katas/TodoList",component:h,argTypes:{initialItems:{control:"object"}}},c={args:{initialItems:[{text:"Помыть посуду",isChecked:!1,key:"todo_1_Помытьпосу"},{text:"Убраться в спальне",isChecked:!0,key:"todo_2_Убратьсявс"},{text:"Проверить почту",isChecked:!1,key:"todo_3_Проверитьп"}]}};var m,_,k;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initialItems: [{
      text: "Помыть посуду",
      isChecked: false,
      key: "todo_1_Помытьпосу"
    }, {
      text: "Убраться в спальне",
      isChecked: true,
      key: "todo_2_Убратьсявс"
    }, {
      text: "Проверить почту",
      isChecked: false,
      key: "todo_3_Проверитьп"
    }]
  }
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const V=["Default"];export{c as Default,V as __namedExportsOrder,A as default};
