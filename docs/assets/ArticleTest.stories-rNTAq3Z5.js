import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const m=({hText:d,list:p})=>r.jsxs("article",{children:[r.jsx("h1",{children:d}),r.jsx("ol",{children:p.map((l,y)=>r.jsx("li",{children:l},"ArticleTest"+y))})]});m.__docgenInfo={description:"",methods:[],displayName:"ArticleTest",props:{hText:{required:!0,tsType:{name:"string"},description:""},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const S={title:"Components/ArticleTest",component:m},e={args:{hText:"Primary!",list:["1. Primary!","2. Primary!","2. Primary!"]}},s={args:{hText:"Second!",list:["1. Second!","2. Second!","2. Second!"]}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    hText: "Primary!",
    list: ["1. Primary!", "2. Primary!", "2. Primary!"]
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,a,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    hText: "Second!",
    list: ["1. Second!", "2. Second!", "2. Second!"]
  }
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const T=["Primary","Second"];export{e as Primary,s as Second,T as __namedExportsOrder,S as default};
