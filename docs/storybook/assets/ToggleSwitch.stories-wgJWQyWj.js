import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as m}from"./index-DJO9vBfz.js";const d="_container_1fha2_79",g={container:d},i=({onSwitch:t})=>{const[s,l]=m.useState(!1),h=()=>{const n=!s;l(n),t(n)};return o.jsxs("div",{className:g.container,children:[o.jsx("input",{type:"checkbox",id:"switch",checked:s,onChange:h}),o.jsx("label",{htmlFor:"switch",children:"Toggle"})]})};i.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch"};const w={title:"Components/002-29-08-2024-react-katas/ToggleSwitch",component:i},e={args:{onSwitch:t=>console.log(`switch is ${t}`)}};var c,a,r;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onSwitch: on => console.log(\`switch is \${on}\`)
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,w as default};
