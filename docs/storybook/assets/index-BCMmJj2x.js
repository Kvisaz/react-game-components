import{r as f}from"./index-DJO9vBfz.js";var a={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=f,m=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,x=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,s){var r,o={},i=null,p=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)d.call(e,r)&&!u.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:m,type:t,key:i,ref:p,props:o,_owner:x.current}}n.Fragment=c;n.jsx=_;n.jsxs=_;a.exports=n;var y=a.exports;const v="_text_mp9vh_15",T={text:v},E=({text:t,className:e,fontSize:s})=>y.jsx("span",{className:`${T.text} ${e||""}`,style:{fontSize:s},children:t});E.__docgenInfo={description:"",methods:[],displayName:"Text",props:{text:{required:!0,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{E as T,y as j};
