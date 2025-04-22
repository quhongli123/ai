/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-21 18:43:28
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-22 18:54:46
 * @FilePath: /ai/dist/assets/js/index-DxRou5jp.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import{j as t,B as a,C as c,T as o,s as r,f as l,k as p,M as d,g as x,L as m,h,i as g}from"./mui-vendor-BAM24Atb.js";import{u as b}from"./react-vendor-BZIsAIRW.js";const n=p`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,f=r(g)({height:"100%",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)",borderRadius:"20px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(255, 255, 255, 0.3)",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer",opacity:0,animation:`${n} 0.6s ease-out forwards`,overflow:"hidden",position:"relative","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",opacity:0,transition:"opacity 0.4s ease"},"&:hover":{transform:"translateY(-12px) scale(1.02)",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.2)","&::before":{opacity:1},"& .icon-wrapper":{transform:"scale(1.1) translateY(-5px)",color:"#6366f1"},"& .card-content":{transform:"translateY(-5px)"}}}),u=r(a)({fontSize:"3rem",marginBottom:"20px",color:"#7c3aed",display:"flex",justifyContent:"center",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)","& svg":{fontSize:48}}),y=[{title:"语音克隆工坊",description:"录制你的声音，生成专属语音模型",icon:t.jsx(d,{}),path:"/voice-clone",delay:100},{title:"文本微调器",description:"帮助 AI 学习说话",icon:t.jsx(x,{}),path:"/text-tuning",delay:200},{title:"提示词助手",description:"学习如何与 AI 对话，获得更好回答",icon:t.jsx(m,{}),path:"/prompt-helper",delay:300},{title:"数字人制作",description:"创建会互动的个性化虚拟形象",icon:t.jsx(h,{}),path:"/digital-human",delay:400}],j=r(a)({display:"flex",flexWrap:"wrap",gap:"32px",justifyContent:"center",maxWidth:"1200px",margin:"0 auto"}),v=r(a)({flex:"1 1 250px",maxWidth:"300px",minWidth:"250px"}),w=()=>{const i=b();return t.jsx(a,{sx:{background:"linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",minHeight:"100vh",paddingTop:"8vh",paddingBottom:"40px"},children:t.jsxs(c,{children:[t.jsxs(a,{textAlign:"center",mb:6,sx:{animation:`${n} 0.6s ease-out`},children:[t.jsx(o,{variant:"h2",component:"h1",gutterBottom:!0,sx:{color:"white",fontWeight:700,textShadow:"0 2px 4px rgba(0,0,0,0.2)",mb:2,fontSize:{xs:"2.5rem",md:"3.5rem"}},children:"AI 学院"}),t.jsx(o,{variant:"h5",sx:{color:"rgba(255,255,255,0.9)",mb:4,fontSize:{xs:"1.2rem",md:"1.5rem"}},children:"探索人工智能的奇妙世界"})]}),t.jsx(j,{children:y.map((e,s)=>t.jsx(v,{children:t.jsx(f,{onClick:()=>i(e.path),sx:{animationDelay:`${e.delay}ms`},children:t.jsxs(l,{className:"card-content",sx:{textAlign:"center",py:4,transition:"transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},children:[t.jsx(u,{className:"icon-wrapper",children:e.icon}),t.jsx(o,{variant:"h5",component:"h2",gutterBottom:!0,sx:{fontWeight:600,fontSize:{xs:"1.25rem",md:"1.5rem"},color:"#1a1a1a"},children:e.title}),t.jsx(o,{variant:"body1",sx:{lineHeight:1.6,fontSize:{xs:"0.9rem",md:"1rem"},color:"rgba(0,0,0,0.7)"},children:e.description})]})})},s))})]})})};export{w as default};
