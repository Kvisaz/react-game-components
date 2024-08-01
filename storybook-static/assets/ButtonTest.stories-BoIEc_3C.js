import{r as k}from"./index-DJO9vBfz.js";var x={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=k,v=Symbol.for("react.element"),S=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,C=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function g(o,e,a){var t,r={},i=null,u=null;a!==void 0&&(i=""+a),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(u=e.ref);for(t in e)T.call(e,t)&&!h.hasOwnProperty(t)&&(r[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:v,type:o,key:i,ref:u,props:r,_owner:C.current}}c.Fragment=S;c.jsx=g;c.jsxs=g;x.exports=c;var B=x.exports;const y=({text:o,onClick:e})=>B.jsx("button",{onClick:e,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:o});y.__docgenInfo={description:"",methods:[],displayName:"ButtonTest",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O={title:"Components/ButtonTest",component:y},n={args:{text:"Click me",onClick:()=>console.log("Button clicked")}},s={args:{text:"Another Test button for same component",onClick:()=>console.log("Second Button clicked")}};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Click me',
    onClick: () => console.log('Button clicked')
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,f,_;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Another Test button for same component',
    onClick: () => console.log('Second Button clicked')
  }
}`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const R=["Primary","Second"];export{n as Primary,s as Second,R as __namedExportsOrder,O as default};
