import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as b}from"./index-DJO9vBfz.js";const t={"feedback-form":"_feedback-form_vq5kj_9","input-box":"_input-box_vq5kj_27","textarea-box":"_textarea-box_vq5kj_57","button-box":"_button-box_vq5kj_91"},c=()=>{const[a,n]=b.useState({name:"",email:"",message:""}),d=r=>{r.preventDefault(),console.log("Form submitted:",a),n({name:"",email:"",message:""})},o=r=>{const{name:u,value:x}=r.target;n({...a,[u]:x})};return e.jsxs("form",{onSubmit:d,className:t["feedback-form"],children:[e.jsxs("div",{className:t["input-box"],children:[e.jsx("label",{htmlFor:"name",children:"Имя:"}),e.jsx("input",{type:"text",id:"name",name:"name",value:a.name,onChange:o,required:!0})]}),e.jsxs("div",{className:t["input-box"],children:[e.jsx("label",{children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:o,required:!0})]}),e.jsxs("div",{className:t["textarea-box"],children:[e.jsx("label",{htmlFor:"message",children:"Сообщение:"}),e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:o,required:!0})]}),e.jsx("div",{className:t["button-box"],children:e.jsx("button",{type:"submit",children:"Отправить"})})]})};c.__docgenInfo={description:"",methods:[],displayName:"FeedbackForm"};const j={title:"Components/004-03-09-2024-react-katas/FeedbackForm",component:c},s={};var m,l,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,j as default};
