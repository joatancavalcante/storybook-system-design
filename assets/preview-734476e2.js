import{s as O}from"./index-d475d2ea.js";import{M as f,i as p}from"./index-999ec173.js";import"./_commonjsHelpers-042e6b4d.js";const{addons:u}=__STORYBOOK_MODULE_PREVIEW_API__,{FORCE_REMOUNT:c,STORY_RENDER_PHASE_CHANGED:d}=__STORYBOOK_MODULE_CORE_EVENTS__;var _=new f(O),b=_.fn.bind(_),{action:y}=p({action:b},{retain:!0}),E=u.getChannel(),a=new Set,o=[];E.on(c,()=>o.forEach(t=>{var e;return(e=t==null?void 0:t.mockClear)==null?void 0:e.call(t)}));E.on(d,({newPhase:t})=>{t==="loading"&&o.forEach(e=>{var r;return(r=e==null?void 0:e.mockClear)==null?void 0:r.call(e)})});var i=(t,e,r)=>{if(a.has(e))return e;a.add(e);try{if(Object.prototype.toString.call(e)==="[object Object]"){for(let[n,s]of Object.entries(e))e[n]=i(t,s,n);return e}if(Array.isArray(e))return e.map((n,s)=>i(t,n,`${r}[${s}]`));if(typeof e=="function"&&e.isAction){Object.defineProperty(e,"name",{value:r,writable:!1}),Object.defineProperty(e,"__storyId__",{value:t,writable:!1});let n=y(e);return o.push(n),n}}catch{}return e},h=({id:t,initialArgs:e})=>i(t,e),M=[h],{step:j}=p({step:(t,e,r)=>e(r)},{intercept:!0}),C={throwPlayFunctionExceptions:!1};export{M as argsEnhancers,C as parameters,j as runStep};
//# sourceMappingURL=preview-734476e2.js.map
