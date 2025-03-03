import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r as d}from"./index-l2PZgWEW.js";const n={"tab-panel":"_tab-panel_1ncrm_1","tab-panel__head":"_tab-panel__head_1ncrm_11","tab-panel__head__label":"_tab-panel__head__label_1ncrm_31","label-selected":"_label-selected_1ncrm_61","tab-panel__content":"_tab-panel__content_1ncrm_83"},y=[{name:"Главная",content:"Содержимое главной вкладки",key:"test-tab-01-key"},{name:"О нас",content:"Информация о компании",key:"test-tab-02-key"},{name:"Контакты",content:"Наши контактные данные",key:"test-tab-03-key"}],b=({tabs:r=y})=>{const[l,m]=d.useState(null),p=e=>{m(a=>a===e?null:e)};return t.jsxs("div",{className:n["tab-panel"],children:[t.jsx("div",{className:n["tab-panel__head"],children:r.map((e,a)=>t.jsxs("label",{className:n["tab-panel__head__label"]+(l===a?" "+n["label-selected"]:""),htmlFor:e.key+"__button",children:[t.jsx("h2",{children:e.name}),t.jsx("button",{id:e.key+"__button",onClick:()=>p(a)})]}))}),t.jsx("div",{className:n["tab-panel__content"],children:l!==null?r[l].content:void 0})]})};b.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{tabs:{required:!1,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:"",defaultValue:{value:`[\r
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
]`,computed:!1}}}};const u={title:"Components/004-03-09-2024-react-katas/TabPanel",component:b,argTypes:{tabs:{control:"object"}}},s={args:{tabs:[{name:"Главная",content:"Содержимое главной вкладки",key:"test-tab-01-key"},{name:"О нас",content:"Информация о компании",key:"test-tab-02-key"},{name:"Контакты",content:"Наши контактные данные",key:"test-tab-03-key"}]}};var o,c,_;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    tabs: [{
      name: "Главная",
      content: "Содержимое главной вкладки",
      key: "test-tab-01-key"
    }, {
      name: "О нас",
      content: "Информация о компании",
      key: "test-tab-02-key"
    }, {
      name: "Контакты",
      content: "Наши контактные данные",
      key: "test-tab-03-key"
    }]
  }
}`,...(_=(c=s.parameters)==null?void 0:c.docs)==null?void 0:_.source}}};const h=["Default"];export{s as Default,h as __namedExportsOrder,u as default};
