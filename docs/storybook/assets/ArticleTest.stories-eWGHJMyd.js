import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{T as t}from"./index-MPseBI5e.js";import"./index-l2PZgWEW.js";const m=({hText:p,list:l})=>e.jsxs("article",{children:[e.jsx("h1",{children:e.jsx(t,{text:p})}),e.jsx("ol",{children:l.map((T,x)=>e.jsx("li",{children:e.jsx(t,{text:T})},"ArticleTest"+x))})]});m.__docgenInfo={description:"",methods:[],displayName:"ArticleTest",props:{hText:{required:!0,tsType:{name:"string"},description:""},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const g={title:"Components/ArticleTest",component:m},r={args:{hText:"Primary!",list:["1. Test!","2. Test2!","2. Primary!","4. Added through story."]}},s={args:{hText:"Second!",list:["1. Second!","2. Second!","2. Second!"]}};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    hText: "Primary!",
    list: ["1. Test!", "2. Test2!", "2. Primary!", "4. Added through story."]
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,c,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    hText: "Second!",
    list: ["1. Second!", "2. Second!", "2. Second!"]
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const S=["Primary","Second"];export{r as Primary,s as Second,S as __namedExportsOrder,g as default};
