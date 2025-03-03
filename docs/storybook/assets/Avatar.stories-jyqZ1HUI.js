import{j as i}from"./jsx-runtime-DWbWqHZ-.js";import{R as p}from"./index-l2PZgWEW.js";const c="_avatar_f06w3_1",l={avatar:c},o=p.memo(({size:e=50,name:a="KOfW"})=>{a.length===0&&(a="O");const m={avatar:{width:`${e}px`,height:`${e}px`,fontSize:`${e-Math.floor(.64*e)}px`}};return i.jsx("div",{className:l.avatar,style:m.avatar,children:a[0].toUpperCase()})},(e,a)=>e.name===a.name&&e.size===a.size);o.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"KOfW"',computed:!1}}}};const u={title:"Components/003-31-08-2024-react-katas/Avatar",component:o,argTypes:{size:{control:{type:"range",min:0,max:600,step:1}},name:{control:{type:"text"}}}},t={args:{size:50,name:"KOfW"}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: 50,
    name: "KOfW"
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,u as default};
