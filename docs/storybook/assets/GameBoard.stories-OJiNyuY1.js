import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const i="_container_10sfh_11",_="_board_10sfh_13",u="_row_10sfh_35",p="_cell_10sfh_37",e={container:i,board:_,row:u,cell:p},l=({rows:m,columns:d})=>r.jsx("div",{className:e.container,children:r.jsx("div",{className:e.board,children:Array.from({length:m},(g,s)=>r.jsx("div",{className:e.row,children:Array.from({length:d},(f,n)=>r.jsx("div",{onClick:()=>{console.log("Clicked on cell! Row: "+(s+1)+". Column: "+(n+1)+".")},className:e.cell},"gameBoard_row_"+String(s)+"_column_"+String(n)))},"gameBoard_row_"+String(s)))})});l.__docgenInfo={description:"",methods:[],displayName:"GameBoard",props:{rows:{required:!0,tsType:{name:"number"},description:""},columns:{required:!0,tsType:{name:"number"},description:""}}};const x={title:"Components/009-07-10-2024-react-katas/GameBoard",component:l},o={args:{rows:10,columns:10}};var a,t,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    rows: 10,
    columns: 10
  }
}`,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const b=["Default"];export{o as Default,b as __namedExportsOrder,x as default};
