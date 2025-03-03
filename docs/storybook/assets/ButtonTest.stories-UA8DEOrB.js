import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{T as l}from"./index-MPseBI5e.js";import"./index-l2PZgWEW.js";const m=({text:u,onClick:d})=>o.jsx("button",{onClick:d,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:o.jsx(l,{text:u})});m.__docgenInfo={description:"",methods:[],displayName:"ButtonTest",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"Components/ButtonTest",component:m},e={args:{text:"Click me",onClick:()=>console.log("Button clicked")}},t={args:{text:"Another Test button for same component",onClick:()=>console.log("Second Button clicked")}};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'Click me',
    onClick: () => console.log('Button clicked')
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,a,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Another Test button for same component',
    onClick: () => console.log('Second Button clicked')
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const T=["Primary","Second"];export{e as Primary,t as Second,T as __namedExportsOrder,k as default};
