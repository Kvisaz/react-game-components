import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";import{S as m}from"./index-CXj_FItR.js";import{G as d}from"./GameContext-asQScSvx.js";const n="_field_1f2pz_1",p={field:n},c=()=>{const{state:o,dispatch:r}=i.useContext(d),a=s=>{r({type:"MAKE_MOVE",index:s})};return e.jsx("div",{className:p.field,children:o.squares.map((s,t)=>e.jsx(m,{value:s,index:t,handleClick:a},t))})};c.__docgenInfo={description:"",methods:[],displayName:"Field"};export{c as F};