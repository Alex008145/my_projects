"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[144],{429:(t,e,s)=>{s.d(e,{A:()=>a});var n=s(43);function o(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}const a=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const[s,a]=(0,n.useReducer)(o,{status:e?"pending":null,data:null,error:null});return{sendRequest:(0,n.useCallback)((async function(e){a({type:"SEND"});try{const s=await t(e);a({type:"SUCCESS",responseData:s})}catch(s){a({type:"ERROR",errorMessage:s.message||"Something went wrong!"})}}),[t]),...s}}},980:(t,e,s)=>{s.d(e,{BC:()=>r,Ow:()=>i,dB:()=>o,kr:()=>c,zt:()=>a});const n="https://react-redux-cf72c-default-rtdb.europe-west1.firebasedatabase.app";async function o(){const t=await fetch("".concat(n,"/quotes.json")),e=await t.json();if(!t.ok)throw new Error(e.message||"Could not fetch quotes.");const s=[];for(const n in e){const t={id:n,...e[n]};s.push(t)}return s}async function a(t){const e=await fetch("".concat(n,"/quotes/").concat(t,".json")),s=await e.json();if(!e.ok)throw new Error(s.message||"Could not fetch quote.");return{id:t,...s}}async function c(t){const e=await fetch("".concat(n,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),s=await e.json();if(!e.ok)throw new Error(s.message||"Could not create quote.");return null}async function r(t){const e=await fetch("".concat(n,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}}),s=await e.json();if(!e.ok)throw new Error(s.message||"Could not add comment.");return{commentId:s.name}}async function i(t){const e=await fetch("".concat(n,"/comments/").concat(t,".json")),s=await e.json();if(!e.ok)throw new Error(s.message||"Could not get comments.");const o=[];for(const n in s){const t={id:n,...s[n]};o.push(t)}return o}},144:(t,e,s)=>{s.r(e),s.d(e,{default:()=>g});var n=s(43),o=s(688),a=s(323);const c="QuoteItem_item__gkGip";var r=s(579);const i=t=>(0,r.jsxs)("li",{className:c,children:[(0,r.jsxs)("figure",{children:[(0,r.jsx)("blockquote",{children:(0,r.jsx)("p",{children:t.text})}),(0,r.jsx)("figcaption",{children:t.author})]}),(0,r.jsx)(a.N_,{className:"btn",to:"/quotes/".concat(t.id),children:"View Fullscreen"})]}),u="QuoteList_list__Ioepu",d="QuoteList_sorting__s4sFV",l=t=>{const e=(0,o.useHistory)(),s=(0,o.useLocation)(),a="asc"===new URLSearchParams(s.search).get("sort"),c=(l=t.quotes,h=a,l.sort(((t,e)=>h?t.id>e.id?1:-1:t.id<e.id?1:-1)));var l,h;return(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)("div",{className:d,children:(0,r.jsxs)("button",{onClick:()=>{e.push({pathname:s.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),(0,r.jsx)("ul",{className:u,children:c.map((t=>(0,r.jsx)(i,{id:t.id,author:t.author,text:t.text},t.id)))})]})};var h=s(149),m=s(582);const p="NoQuotesFound_noquotes__D178a",f=()=>(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)("p",{children:"No quotes found!"}),(0,r.jsx)(m.N_,{className:"btn",to:"/new-quote",children:"Add a Quote"})]});var j=s(429),w=s(980);const g=()=>{const{sendRequest:t,status:e,data:s,error:o}=(0,j.A)(w.dB,!0);return(0,n.useEffect)((()=>{t()}),[t]),"pending"===e?(0,r.jsx)("div",{className:"centered",children:(0,r.jsx)(h.A,{})}):o?(0,r.jsx)("p",{className:"centered focused",children:o}):"completed"!==e||s&&0!==s.length?(0,r.jsx)(l,{quotes:s}):(0,r.jsx)(f,{})}}}]);
//# sourceMappingURL=144.1ffc598e.chunk.js.map