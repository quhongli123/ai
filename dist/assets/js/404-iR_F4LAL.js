import{j as t,s as n,C as s,B as r,E as i,T as a,k as e,c}from"./mui-vendor-BAM24Atb.js";import{u as l}from"./react-vendor-BZIsAIRW.js";const x=e`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,d=e`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`,p=n(r)({background:"linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}),m=n(r)({fontSize:"120px",color:"rgba(255, 255, 255, 0.9)",marginBottom:"24px",animation:`${d} 3s ease-in-out infinite`,display:"flex",justifyContent:"center"}),f=n(c)({background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(10px)",borderRadius:"12px",padding:"12px 32px",color:"white",border:"1px solid rgba(255, 255, 255, 0.3)",transition:"all 0.3s ease",textTransform:"none",fontSize:"1.1rem","&:hover":{background:"rgba(255, 255, 255, 0.3)",transform:"translateY(-2px)"}}),u=()=>{const o=l();return t.jsx(p,{children:t.jsx(s,{maxWidth:"sm",children:t.jsxs(r,{textAlign:"center",sx:{animation:`${x} 0.6s ease-out`},children:[t.jsx(m,{children:t.jsx(i,{sx:{fontSize:"inherit"}})}),t.jsx(a,{variant:"h2",component:"h1",gutterBottom:!0,sx:{color:"white",fontWeight:700,textShadow:"0 2px 4px rgba(0,0,0,0.2)",mb:2},children:"404"}),t.jsx(a,{variant:"h5",sx:{color:"rgba(255,255,255,0.9)",mb:4,fontWeight:500},children:"抱歉，您访问的页面不存在"}),t.jsx(f,{onClick:()=>o("/"),variant:"contained",size:"large",children:"返回首页"})]})})})};export{u as default};
