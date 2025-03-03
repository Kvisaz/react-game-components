import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{Q as j}from"./index-CWOO79FC.js";import{U as v}from"./index-CXXfGiEY.js";import{P as w}from"./index-DKuUvuAa.js";import"./index-l2PZgWEW.js";const y="_box_we2ud_11",I="_tip_we2ud_27",P="_top_we2ud_53",Q="_right_we2ud_89",R="_bottom_we2ud_125",U="_left_we2ud_161",A="_text_we2ud_197",e={box:y,tip:I,top:P,right:Q,bottom:R,left:U,text:A},f=({position:C="top",text:b="This is a tip!",children:T})=>t.jsxs("div",{className:e.box,children:[T,t.jsx("div",{className:e.tip+" "+e[C],children:t.jsx("span",{className:e.text,children:b})})]});f.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{position:{defaultValue:{value:'"top"',computed:!1},required:!1},text:{defaultValue:{value:'"This is a tip!"',computed:!1},required:!1}}};const D={title:"Components/007-26-09-2024-react-katas/Tooltip",component:f,argTypes:{position:{control:{type:"select"},options:["top","right","bottom","left"]}},parameters:{layout:"centered"}},o={args:{position:"top",text:"It's a normal div!",children:t.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"grey"}})}},r={args:{position:"top",text:"It's a React component Quote!",children:t.jsx(j,{text:"Лучший способ предсказать будущее - это создать его.",author:"Авраам Линкольн"})}},s={args:{position:"top",text:"It's a React component  UnderlineText!",children:t.jsx(v,{text:"Важная информация!"})}},a={args:{position:"top",text:"It's a React component  ProductCard!",children:t.jsx(w,{name:"Футболка Bear",price:1e3,image:"https://placebear.com/200/300"})}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    position: "top",
    text: "It's a normal div!",
    children: <div style={{
      width: "100px",
      height: "100px",
      backgroundColor: "grey"
    }}></div>
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    position: "top",
    text: "It's a React component Quote!",
    children: <Quote text={"Лучший способ предсказать будущее - это создать его."} author={"Авраам Линкольн"} />
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    position: "top",
    text: "It's a React component  UnderlineText!",
    children: <UnderlineText text={"Важная информация!"} />
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,g,_;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    position: "top",
    text: "It's a React component  ProductCard!",
    children: <ProductCard name={"Футболка Bear"} price={1000} image={"https://placebear.com/200/300"} />
  }
}`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const E=["Default","QuoteAsChild","UnderlineTextAsChild","ProductCardAsChild"];export{o as Default,a as ProductCardAsChild,r as QuoteAsChild,s as UnderlineTextAsChild,E as __namedExportsOrder,D as default};
