(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{5845:function(e,s,t){Promise.resolve().then(t.bind(t,2754))},7175:function(e,s,t){"use strict";t.r(s),t.d(s,{UserContext:function(){return l},default:function(){return u}});var n=t(7437),r=t(2265),a=t(280);let l=(0,r.createContext)({user:{},setUser:{},updateLoggedUser:()=>({})});function u(e){let{children:s}=e,[t,u]=(0,r.useState)(null);async function i(){u(await (0,a.F6)())}return(0,r.useEffect)(()=>{i()},[]),(0,n.jsx)(l.Provider,{value:{user:t,setUser:u,updateLoggedUser:i},children:s})}},2754:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var n=t(7437),r=t(4033),a=t(2265),l=t(7175),u=t(6818),i=t(280);function c(){let e=(0,r.useRouter)(),[s,t]=(0,a.useState)(""),[c,o]=(0,a.useState)(""),[d,h]=(0,a.useState)(""),{updateLoggedUser:f}=(0,a.useContext)(l.UserContext);async function m(t){t.preventDefault();try{h("");let{session:t}=await (0,i.zB)(s,c);t&&(e.refresh(),e.push(u.X.ROOT_PATH),f())}catch(e){h(e.message)}}return(0,a.useEffect)(()=>{(async function(){await (0,i.F6)()&&(e.refresh(),e.push(u.X.ROOT_PATH))})()},[e]),(0,n.jsx)("div",{className:"card w-96 bg-base-300 shadow-xl mx-auto",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h2",{className:"card-title",children:"Sign in"}),d&&(0,n.jsxs)("div",{role:"alert",className:"alert alert-error",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:d})]}),(0,n.jsxs)("form",{onSubmit:m,children:[(0,n.jsxs)("label",{className:"form-control w-full",children:[(0,n.jsx)("div",{className:"label",children:(0,n.jsx)("span",{className:"label-text",children:"Email"})}),(0,n.jsx)("input",{type:"text",className:"input input-bordered w-full",value:s,onChange:e=>t(e.target.value),required:!0})]}),(0,n.jsxs)("label",{className:"form-control w-full",children:[(0,n.jsx)("div",{className:"label",children:(0,n.jsx)("span",{className:"label-text",children:"Password"})}),(0,n.jsx)("input",{type:"password",className:"input input-bordered w-full",value:c,onChange:e=>o(e.target.value),required:!0})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn-block my-2",children:"Sign in"})]})]})})}}},function(e){e.O(0,[596,708,280,971,938,744],function(){return e(e.s=5845)}),_N_E=e.O()}]);