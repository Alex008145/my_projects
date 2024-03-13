"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[738],{429:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(43);function s(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}const a=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const[n,a]=(0,o.useReducer)(s,{status:e?"pending":null,data:null,error:null});return{sendRequest:(0,o.useCallback)((async function(e){a({type:"SEND"});try{const n=await t(e);a({type:"SUCCESS",responseData:n})}catch(n){a({type:"ERROR",errorMessage:n.message||"Something went wrong!"})}}),[t]),...n}}},980:(t,e,n)=>{n.d(e,{BC:()=>c,Ow:()=>u,dB:()=>s,kr:()=>r,zt:()=>a});const o="https://react-redux-cf72c-default-rtdb.europe-west1.firebasedatabase.app";async function s(){const t=await fetch("".concat(o,"/quotes.json")),e=await t.json();if(!t.ok)throw new Error(e.message||"Could not fetch quotes.");const n=[];for(const o in e){const t={id:o,...e[o]};n.push(t)}return n}async function a(t){const e=await fetch("".concat(o,"/quotes/").concat(t,".json")),n=await e.json();if(!e.ok)throw new Error(n.message||"Could not fetch quote.");return{id:t,...n}}async function r(t){const e=await fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),n=await e.json();if(!e.ok)throw new Error(n.message||"Could not create quote.");return null}async function c(t){const e=await fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}}),n=await e.json();if(!e.ok)throw new Error(n.message||"Could not add comment.");return{commentId:n.name}}async function u(t){const e=await fetch("".concat(o,"/comments/").concat(t,".json")),n=await e.json();if(!e.ok)throw new Error(n.message||"Could not get comments.");const s=[];for(const o in n){const t={id:o,...n[o]};s.push(t)}return s}},738:(t,e,n)=>{n.r(e),n.d(e,{default:()=>w});var o=n(43),s=n(688);const a="Card_card__AJQJ8";var r=n(579);const c=t=>(0,r.jsx)("div",{className:a,children:t.children});var u=n(149);const i="QuoteForm_form__CZew5",d="QuoteForm_loading__g5KDD",l="QuoteForm_control__pZnt6",m="QuoteForm_actions__1TkGM",h=t=>{const[e,n]=(0,o.useState)(!1),a=(0,o.useRef)(),h=(0,o.useRef)();return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(s.Prompt,{when:e,message:t=>"Are you sure you want to leave? All your entered data will be lost!"}),(0,r.jsx)(c,{children:(0,r.jsxs)("form",{onFocus:()=>{n(!0)},className:i,onSubmit:function(e){e.preventDefault();const n=a.current.value,o=h.current.value;t.onAddQuote({author:n,text:o})},children:[t.isLoading&&(0,r.jsx)("div",{className:d,children:(0,r.jsx)(u.A,{})}),(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("label",{htmlFor:"author",children:"Author"}),(0,r.jsx)("input",{type:"text",id:"author",ref:a})]}),(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("label",{htmlFor:"text",children:"Text"}),(0,r.jsx)("textarea",{id:"text",rows:"5",ref:h})]}),(0,r.jsx)("div",{className:m,children:(0,r.jsx)("button",{onClick:()=>{n(!1)},className:"btn",children:"Add Quote"})})]})})]})};var f=n(429),p=n(980);const w=()=>{const{sendRequest:t,status:e}=(0,f.A)(p.kr),n=(0,s.useHistory)();(0,o.useEffect)((()=>{"completed"===e&&n.push("/quotes")}),[e,n]);return(0,r.jsx)(h,{isLoading:"pending"===e,onAddQuote:e=>{t(e)}})}}}]);
//# sourceMappingURL=738.51171f44.chunk.js.map