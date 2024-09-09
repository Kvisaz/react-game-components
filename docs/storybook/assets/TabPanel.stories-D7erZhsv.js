import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";const t={"tab-panel":"_tab-panel_1ncrm_1","tab-panel__head":"_tab-panel__head_1ncrm_11","tab-panel__head__label":"_tab-panel__head__label_1ncrm_31","label-selected":"_label-selected_1ncrm_61","tab-panel__content":"_tab-panel__content_1ncrm_83"},i=[{name:"Главная",content:"Содержимое главной вкладки",key:"test-tab-01-key"},{name:"О нас",content:"Информация о компании",key:"test-tab-02-key"},{name:"Контакты",content:"Наши контактные данные",key:"test-tab-03-key"}],m=({tabs:r=i})=>{const[l,b]=d.useState(null),p=e=>{b(n=>n===e?null:e)};return a.jsxs("div",{className:t["tab-panel"],children:[a.jsx("div",{className:t["tab-panel__head"],children:r.map((e,n)=>a.jsxs("label",{className:t["tab-panel__head__label"]+(l===n?" "+t["label-selected"]:""),htmlFor:e.key+"__button",children:[a.jsx("h2",{children:e.name}),a.jsx("button",{id:e.key+"__button",onClick:()=>p(n)})]}))}),a.jsx("div",{className:t["tab-panel__content"],children:l!==null?r[l].content:void 0})]})};m.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{tabs:{required:!1,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:"",defaultValue:{value:`[\r
  {\r
    name: "Главная",\r
    content: "Содержимое главной вкладки",\r
    key: "test-tab-01-key",\r
  },\r
  { name: "О нас", content: "Информация о компании", key: "test-tab-02-key" },\r
  {\r
    name: "Контакты",\r
    content: "Наши контактные данные",\r
    key: "test-tab-03-key",\r
  },\r
]`,computed:!1}}}};const k={title:"Components/004-03-09-2024-react-katas/TabPanel",component:m},s={};var c,o,_;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(_=(o=s.parameters)==null?void 0:o.docs)==null?void 0:_.source}}};const h=["Default"];export{s as Default,h as __namedExportsOrder,k as default};
