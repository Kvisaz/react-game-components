import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";const u="_container_ihzjh_1",l={container:u},d=({seconds:t=120})=>{const[n,o]=r.useState(0);return r.useEffect(()=>{o(t);const i=setInterval(()=>{o(m=>Math.max(m-1,0))},1e3);return()=>{clearInterval(i)}},[t]),p.jsxs("div",{className:l.container,children:[Math.floor(n/60).toString().padStart(2,"0"),":",(n%60).toString().padStart(2,"0")]})};d.__docgenInfo={description:"",methods:[],displayName:"CountdownTimer",props:{seconds:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}}}};const x={title:"Components/002-29-08-2024-react-katas/CountdownTimer",component:d,argTypes:{seconds:{control:{type:"range",min:0,max:3600,step:1}}}},e={args:{seconds:120}};var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    seconds: 120
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,x as default};