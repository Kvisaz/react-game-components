import{j as _}from"./jsx-runtime-CkxqCPlQ.js";import{r as u}from"./index-DJO9vBfz.js";const m="_accordion_container_1xxhj_1",x="_accordion__article_1xxhj_19",p="_accordion__article__header_1xxhj_31",b="_accordion__article__header__label_1xxhj_47",f="_accordion__article__header__label__h2_1xxhj_69",y="_accordion__article__header__label__button_1xxhj_81",S="_accordion__article__content_1xxhj_95",j="_accordion__article__content__p_1xxhj_123",t={accordion_container:m,accordion__article:x,accordion__article__header:p,accordion__article__header__label:b,accordion__article__header__label__h2:f,accordion__article__header__label__button:y,accordion__article__content:S,accordion__article__content__p:j},k=[{title:"Секция 1",content:"Содержимое секции 1",key:"defaultTestSection__01"},{title:"Секция 2",content:"Содержимое секции 2",key:"defaultTestSection__02"},{title:"Секция 3",content:"Содержимое секции 3",key:"defaultTestSection__03"}],l=({sections:d=k})=>{const[o,s]=u.useState(null),h=e=>{s(c=>(console.log("index"),c===e?null:e))};return _.jsx("div",{className:t.accordion_container,children:d.map((e,c)=>_.jsxs("article",{className:t.accordion__article,style:o===c?{border:"none"}:void 0,children:[_.jsx("header",{className:t.accordion__article__header,children:_.jsxs("label",{className:t.accordion__article__header__label,htmlFor:"accordion__article__header__label__button__"+e.key,children:[_.jsx("h2",{className:t.accordion__article__header__label__h2,children:e.title}),_.jsx("button",{id:"accordion__article__header__label__button__"+e.key,className:t.accordion__article__header__label__button,onClick:()=>h(c)})]})}),o===c&&_.jsx("div",{className:t.accordion__article__content,children:_.jsx("p",{className:t.accordion__article__content__p,children:e.content})})]},e.key))})};l.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{sections:{required:!1,tsType:{name:"Array",elements:[{name:"AccordionSection"}],raw:"AccordionSection[]"},description:"",defaultValue:{value:`[\r
  {\r
    title: "Секция 1",\r
    content: "Содержимое секции 1",\r
    key: "defaultTestSection__01",\r
  },\r
  {\r
    title: "Секция 2",\r
    content: "Содержимое секции 2",\r
    key: "defaultTestSection__02",\r
  },\r
  {\r
    title: "Секция 3",\r
    content: "Содержимое секции 3",\r
    key: "defaultTestSection__03",\r
  },\r
]`,computed:!1}}}};const g={title:"Components/004-03-09-2024-react-katas/Accordion",component:l,argTypes:{sections:{control:"object"}}},n={args:{sections:[{title:"Секция 1",content:"Содержимое секции 1",key:"defaultTestSection__01"},{title:"Секция 2",content:"Содержимое секции 2",key:"defaultTestSection__02"},{title:"Секция 3",content:"Содержимое секции 3",key:"defaultTestSection__03"}]}};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    sections: [{
      title: "Секция 1",
      content: "Содержимое секции 1",
      key: "defaultTestSection__01"
    }, {
      title: "Секция 2",
      content: "Содержимое секции 2",
      key: "defaultTestSection__02"
    }, {
      title: "Секция 3",
      content: "Содержимое секции 3",
      key: "defaultTestSection__03"
    }]
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,g as default};
