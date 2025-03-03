import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r as u}from"./index-l2PZgWEW.js";import{P as b}from"./index-DKuUvuAa.js";import{T as p}from"./index-Dh8ZlKcV.js";import{C}from"./index-ToT6QvVU.js";import{Q as x}from"./index-CWOO79FC.js";import{P as _}from"./index-Beub3fUV.js";const j="_box_jok7r_13",k="_list_jok7r_15",h="_tab_jok7r_17",f="_tabButton_jok7r_81",y="_active_jok7r_115",T="_content_jok7r_125",e={box:j,list:k,tab:h,tabButton:f,active:y,content:T},m=({tabs:o})=>{const[r,d]=u.useState(0);return t.jsxs("div",{className:e.box,children:[t.jsx("ul",{className:e.list,children:o.map((n,s)=>t.jsx("li",{className:e.tab,children:t.jsx("button",{onClick:()=>{d(s)},className:e.tabButton+(s===r?" "+e.active:""),children:n.label})},n.key))}),t.jsx("div",{className:e.content,children:o[r].content})]})};m.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Array<Tab>"},description:""}}};const I={title:"Components/008-28-09-2024-react-katas/Tabs",component:m},a={args:{tabs:[{label:"Product",content:t.jsx(b,{name:"Футболка Bear",price:1e3,image:"https://placebear.com/200/300"}),key:"Product"},{label:"TodoList",content:t.jsx(p,{initialItems:["Помыть посуду","Убраться в спальне","Проверить почту"]}),key:"TodoList"},{label:"CharacterCounter",content:t.jsx(C,{}),key:"CharacterCounter"},{label:"ProfileCard",content:t.jsx(_,{name:"Иван Иванов",job:"Разработчик",avatar:"https://placebear.com/g/200/200"}),key:"ProfileCard"},{label:"Quote",content:t.jsx(x,{text:"Лучший способ предсказать будущее - это создать его.",author:"Авраам Линкольн"}),key:"Quote"}]}};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: "Product",
      content: <ProductCard name={"Футболка Bear"} price={1000} image={"https://placebear.com/200/300"} />,
      key: "Product"
    }, {
      label: "TodoList",
      content: <TodoList initialItems={["Помыть посуду", "Убраться в спальне", "Проверить почту"]} />,
      key: "TodoList"
    }, {
      label: "CharacterCounter",
      content: <CharacterCounter />,
      key: "CharacterCounter"
    }, {
      label: "ProfileCard",
      content: <ProfileCard name={"Иван Иванов"} job={"Разработчик"} avatar={"https://placebear.com/g/200/200"} />,
      key: "ProfileCard"
    }, {
      label: "Quote",
      content: <Quote text={"Лучший способ предсказать будущее - это создать его."} author={"Авраам Линкольн"} />,
      key: "Quote"
    }]
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,I as default};
