"use strict";(()=>{var ne=Object.defineProperty;var n=(M,w)=>ne(M,"name",{value:w,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[8851],{42650:(M,w,u)=>{u.d(w,{H:()=>f,v:()=>p});var h=u(11427);function p(){const a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}n(p,"showGlobalError");function f(){const a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}n(f,"hideGlobalError"),(0,h.on)("deprecatedAjaxError","[data-remote]",function(a){const r=a.detail,{error:l,text:E}=r;a.currentTarget===a.target&&(l==="abort"||l==="canceled"||(/<html/.test(E)?(p(),a.stopImmediatePropagation()):setTimeout(function(){a.defaultPrevented||p()},0)))}),(0,h.on)("deprecatedAjaxSend","[data-remote]",function(){f()}),(0,h.on)("click",".js-ajax-error-dismiss",function(){f()})},83895:(M,w,u)=>{u.d(w,{Ty:()=>p,YE:()=>f,Zf:()=>a});var h=u(13178);const p=n(()=>{const r=document.querySelector("meta[name=keyboard-shortcuts-preference]");return r?r.content==="all":!0},"areCharacterKeyShortcutsEnabled"),f=n(r=>/Enter|Arrow|Escape|Meta|Control|Esc/.test(r)||r.includes("Alt")&&r.includes("Shift"),"isNonCharacterKeyShortcut"),a=n(r=>{const l=(0,h.EL)(r);return p()?!0:f(l)},"isShortcutAllowed")},21668:(M,w,u)=>{u.d(w,{L$:()=>E,nj:()=>g});var h=u(27157),p=u(11427),f=u(34060),a=u(30762),r=u(66789),l=u(65889);(0,a.N7)(".js-task-list-container .js-task-list-field",function(e){const o=e.closest(".js-task-list-container");E(o),q(o)}),(0,p.on)("task-lists-move","task-lists",function(e){const{src:o,dst:t}=e.detail,d=e.currentTarget.closest(".js-task-list-container");m(d,"reordered",{operation:"move",src:o,dst:t})}),(0,p.on)("task-lists-check","task-lists",function(e){const{position:o,checked:t}=e.detail,d=e.currentTarget.closest(".js-task-list-container");m(d,`checked:${t?1:0}`,{operation:"check",position:o,checked:t})});function E(e){if(e.querySelector(".js-task-list-field")){const o=e.querySelectorAll("task-lists");for(const t of o)if(t instanceof f.Z){t.disabled=!1;const d=t.querySelectorAll("button");for(const L of d)L.disabled=!1}}}n(E,"enableTaskList");function g(e){for(const o of e.querySelectorAll("task-lists"))if(o instanceof f.Z){o.disabled=!0;const t=o.querySelectorAll("button");for(const d of t)d.disabled=!0}}n(g,"disableTaskList");function m(e,o,t){const d=e.querySelector(".js-comment-update");g(e),q(e);const L=d.elements.namedItem("task_list_track");L instanceof Element&&L.remove();const T=d.elements.namedItem("task_list_operation");T instanceof Element&&T.remove();const A=document.createElement("input");A.setAttribute("type","hidden"),A.setAttribute("name","task_list_track"),A.setAttribute("value",o),d.appendChild(A);const k=document.createElement("input");if(k.setAttribute("type","hidden"),k.setAttribute("name","task_list_operation"),k.setAttribute("value",JSON.stringify(t)),d.appendChild(k),!d.elements.namedItem("task_list_key")){const O=d.querySelector(".js-task-list-field").getAttribute("name").split("[")[0],D=document.createElement("input");D.setAttribute("type","hidden"),D.setAttribute("name","task_list_key"),D.setAttribute("value",O),d.appendChild(D)}e.classList.remove("is-comment-stale"),(0,l.Bt)(d)}n(m,"saveTaskList"),(0,r.AC)(".js-task-list-container .js-comment-update",async function(e,o){const t=e.closest(".js-task-list-container"),d=e.elements.namedItem("task_list_track");d instanceof Element&&d.remove();const L=e.elements.namedItem("task_list_operation");L instanceof Element&&L.remove();let T;try{T=await o.json()}catch(A){let k;try{k=JSON.parse(A.response.text)}catch{}if(k&&k.stale){const C=t.querySelector(".js-task-list-field");C.classList.add("session-resumable-canceled"),C.classList.remove("js-session-resumable")}else A.response.status===422||window.location.reload()}T&&(L&&T.json.source&&(t.querySelector(".js-task-list-field").value=T.json.source),E(t),requestAnimationFrame(()=>q(t)))});let v=!1,_=!1,y=null;function i(e){e.inputType==="insertLineBreak"?v=!0:v=!1}n(i,"tryAutoCompleteOnBeforeInput");function c(e){const o=e;if(!v&&!(o.inputType==="insertLineBreak"))return;const t=o.target;s(t),v=!1}n(c,"autoCompleteOnInput");function s(e){const o=J(e.value,[e.selectionStart,e.selectionEnd]);o!==void 0&&b(e,o)}n(s,"listAutocomplete");function b(e,o){if(y===null||y===!0){e.contentEditable="true";try{v=!1;let t;o.commandId===X.insertText?(t=o.autocompletePrefix,o.writeSelection[0]!==null&&o.writeSelection[1]!==null&&(e.selectionStart=o.writeSelection[0],e.selectionEnd=o.writeSelection[1])):e.selectionStart=o.selection[0],y=document.execCommand(o.commandId,!1,t)}catch{y=!1}e.contentEditable="false"}if(!y){try{document.execCommand("ms-beginUndoUnit")}catch{}e.value=o.text;try{document.execCommand("ms-endUndoUnit")}catch{}e.dispatchEvent(new CustomEvent("input",{bubbles:!0,cancelable:!0}))}o.selection[0]!=null&&o.selection[1]!=null&&(e.selectionStart=o.selection[0],e.selectionEnd=o.selection[1])}n(b,"updateElementText");function S(e){if(_)return;const o=e;if(o.key==="Enter"&&o.shiftKey&&!o.metaKey){const t=o.target,d=G(t.value,[t.selectionStart,t.selectionEnd]);if(d===void 0)return;b(t,d),o.preventDefault(),(0,p.f)(t,"change")}}n(S,"handleShiftEnter");function R(){_=!0}n(R,"onCompositionStart");function j(){_=!1}n(j,"onCompositionEnd");function H(e){if(_)return;const o=e;if(o.key==="Escape"){ee(e);return}if(o.key!=="Tab")return;const t=o.target,d=Y(t.value,[t.selectionStart,t.selectionEnd],o.shiftKey);d!==void 0&&(o.preventDefault(),b(t,d))}n(H,"updateIndentation"),(0,a.N7)(".js-task-list-field",{subscribe:e=>(0,h.qC)((0,h.RB)(e,"keydown",H),(0,h.RB)(e,"keydown",S),(0,h.RB)(e,"beforeinput",i),(0,h.RB)(e,"input",c),(0,h.RB)(e,"compositionstart",R),(0,h.RB)(e,"compositionend",j))});var X=(e=>(e.insertText="insertText",e.delete="delete",e))(X||{});const Z=/^(\s*)?/;function G(e,o){const t=o[0];if(!t||!e)return;const d=e.substring(0,t).split(`
`),L=d[d.length-1],T=L==null?void 0:L.match(Z);if(!T)return;const k=`
${T[1]||""}`;return{text:e.substring(0,t)+k+e.substring(t),autocompletePrefix:k,selection:[t+k.length,t+k.length],commandId:"insertText",writeSelection:[null,null]}}n(G,"addSoftNewline");const z=/^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;function Q(e,o){let t=e.split(`
`);return t=t.map(d=>{if(d.replace(/^\s+/,"").startsWith(`${o}.`)){const L=d.replace(`${o}`,`${o+1}`);return o+=1,L}return d}),t.join(`
`)}n(Q,"updateRemainingNumberBullets");function J(e,o){const t=o[0];if(!t||!e)return;const d=e.substring(0,t).split(`
`),L=d[d.length-2],T=L==null?void 0:L.match(z);if(!T)return;const A=T[0],k=T[1],C=T[2],x=parseInt(T[3],10),O=Boolean(T[4]),D=!isNaN(x);let B=`${D?`${x+1}.`:C} ${O?"[ ] ":""}`,W=e.indexOf(`
`,t);W<0&&(W=e.length);const K=e.substring(t,W);if(K.startsWith(B)&&(B=""),L.replace(A,"").trim().length>0||K.trim().length>0){let P=`${k}${B}`,I=e.substring(t);const F=P.length;let U=[null,null];const te=/^\s*$/g;let V=e.substring(0,t)+P+I;return D&&!e.substring(t).match(te)&&(I=Q(e.substring(t),x+1),P+=I,U=[t,t+P.length],V=e.substring(0,t)+P),{text:V,autocompletePrefix:P,selection:[t+F,t+F],commandId:"insertText",writeSelection:U}}else{const P=t-`
${A}`.length;return{autocompletePrefix:"",text:e.substring(0,P)+e.substring(t),selection:[P,P],commandId:"delete",writeSelection:[null,null]}}}n(J,"autocompletedList");function Y(e,o,t){const d=o[0]||0,L=o[1]||d;if(o[0]===null||d===L)return;const T=e.substring(0,d).lastIndexOf(`
`)+1,A=e.indexOf(`
`,L-1),k=A>0?A:e.length-1,C=e.substring(T,k).split(`
`);let x=!1,O=0,D=0;const N=[];for(const $ of C){const P=$.match(/^\s*/);if(P){let I=P[0];const F=$.substring(I.length);if(t){const U=I.length;I=I.slice(0,-2),O=x?O:I.length-U,x=!0,D+=I.length-U}else I+="  ",O=2,D+=2;N.push(I+F)}}const B=N.join(`
`),W=e.substring(0,T)+B+e.substring(k),K=[Math.max(T,d+O),L+D];return{text:W,selection:K,autocompletePrefix:B,commandId:"insertText",writeSelection:[T,k]}}n(Y,"indent");function ee(e){const t=e.target;t.selectionDirection==="backward"?t.selectionEnd=t.selectionStart:t.selectionStart=t.selectionEnd}n(ee,"deselectText");function q(e){if(document.querySelectorAll("tracked-issues-progress").length===0||e.closest(".js-timeline-item"))return;const t=e.querySelectorAll(".js-comment-body [type=checkbox]"),d=t.length,L=Array.from(t).filter(A=>A.checked).length,T=document.querySelectorAll("tracked-issues-progress[data-type=checklist]");for(const A of T)A.setAttribute("data-completed",String(L)),A.setAttribute("data-total",String(d))}n(q,"updateProgress")},18137:(M,w,u)=>{u.d(w,{W:()=>p});var h=u(11427);async function p(f){const r=document.querySelector("#site-details-dialog").content.cloneNode(!0),l=r.querySelector("details"),E=l.querySelector("details-dialog"),g=l.querySelector(".js-details-dialog-spinner");f.detailsClass&&l.classList.add(...f.detailsClass.split(" ")),f.dialogClass&&E.classList.add(...f.dialogClass.split(" ")),f.label?E.setAttribute("aria-label",f.label):f.labelledBy&&E.setAttribute("aria-labelledby",f.labelledBy),document.body.append(r);const m=await f.content;return g.remove(),E.prepend(m),l.addEventListener("toggle",()=>{l.hasAttribute("open")||((0,h.f)(E,"dialog:remove"),l.remove())}),E}n(p,"dialog")},16393:(M,w,u)=>{u.d(w,{D:()=>a,a:()=>f});var h=u(7358),p=u(75914);async function f(r,l,E){const g=new Request(l,E);g.headers.append("X-Requested-With","XMLHttpRequest");const m=await self.fetch(g);if(m.status<200||m.status>=300)throw new Error(`HTTP ${m.status}${m.statusText||""}`);return(0,h.t)((0,h.P)(r),m),(0,p.r)(r,await m.text())}n(f,"fetchSafeDocumentFragment");function a(r,l,E=1e3){return n(async function g(m){const v=new Request(r,l);v.headers.append("X-Requested-With","XMLHttpRequest");const _=await self.fetch(v);if(_.status<200||_.status>=300)throw new Error(`HTTP ${_.status}${_.statusText||""}`);if(_.status===200)return _;if(_.status===202)return await new Promise(y=>setTimeout(y,m)),g(m*1.5);throw new Error(`Unexpected ${_.status} response status from poll endpoint`)},"poll")(E)}n(a,"fetchPoll")},65889:(M,w,u)=>{u.d(w,{Bt:()=>r,DN:()=>g,KL:()=>_,Se:()=>E,qC:()=>y,sw:()=>m});var h=u(11427),p=u(27316),f=u(42650);(0,h.on)("click",".js-remote-submit-button",async function(i){const s=i.currentTarget.form;i.preventDefault();let b;try{b=await fetch(s.action,{method:s.method,body:new FormData(s),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}b&&!b.ok&&(0,f.v)()});function a(i,c,s){return i.dispatchEvent(new CustomEvent(c,{bubbles:!0,cancelable:s}))}n(a,"fire");function r(i,c){c&&(l(i,c),(0,p.j)(c)),a(i,"submit",!0)&&i.submit()}n(r,"requestSubmit");function l(i,c){if(!(i instanceof HTMLFormElement))throw new TypeError("The specified element is not of type HTMLFormElement.");if(!(c instanceof HTMLElement))throw new TypeError("The specified element is not of type HTMLElement.");if(c.type!=="submit")throw new TypeError("The specified element is not a submit button.");if(!i||i!==c.form)throw new Error("The specified element is not owned by the form element.")}n(l,"checkButtonValidity");function E(i,c){if(typeof c=="boolean")if(i instanceof HTMLInputElement)i.checked=c;else throw new TypeError("only checkboxes can be set to boolean value");else{if(i.type==="checkbox")throw new TypeError("checkbox can't be set to string value");i.value=c}a(i,"change",!1)}n(E,"changeValue");function g(i,c){for(const s in c){const b=c[s],S=i.elements.namedItem(s);(S instanceof HTMLInputElement||S instanceof HTMLTextAreaElement)&&(S.value=b)}}n(g,"fillFormValues");function m(i){if(!(i instanceof HTMLElement))return!1;const c=i.nodeName.toLowerCase(),s=(i.getAttribute("type")||"").toLowerCase();return c==="select"||c==="textarea"||c==="input"&&s!=="submit"&&s!=="reset"||i.isContentEditable}n(m,"isFormField");function v(i){return new URLSearchParams(i)}n(v,"searchParamsFromFormData");function _(i,c){const s=new URLSearchParams(i.search),b=v(c);for(const[S,R]of b)s.append(S,R);return s.toString()}n(_,"combineGetFormSearchParams");function y(i){return v(new FormData(i)).toString()}n(y,"serialize")},36805:(M,w,u)=>{u.d(w,{M:()=>f,T:()=>a});var h=u(46393),p=u(65889);function f(s,b=!1){return a(s)||v(s,b)||i(s)||c(s)}n(f,"hasInteractions");function a(s){for(const b of s.querySelectorAll("input, textarea"))if((b instanceof HTMLInputElement||b instanceof HTMLTextAreaElement)&&r(b))return!0;return!1}n(a,"hasDirtyFields");function r(s){if(s instanceof HTMLInputElement&&(s.type==="checkbox"||s.type==="radio")){if(s.checked!==s.defaultChecked)return!0}else if(s.value!==s.defaultValue)return!0;return!1}n(r,"formFieldValueChanged");let l;async function E(s,b){l=s;try{await b()}finally{l=null}}n(E,"withActiveElement");function g(s){return l instanceof Element?l:s&&s.ownerDocument&&s.ownerDocument.activeElement?s.ownerDocument.activeElement:null}n(g,"getActiveElement");let m;document.addEventListener("mouseup",function(s){m=s.target});function v(s,b){const S=g(s);return S===null||b&&S===s?!1:S===s&&(0,p.sw)(S)||s.contains(S)&&!y(S)?!0:m instanceof Element&&s.contains(m)&&!!m.closest("details[open] > summary")}n(v,"hasFocus");const _="a[href], button";function y(s){var b;if(s instanceof h.Z)return!0;const S=s instanceof HTMLAnchorElement||s instanceof HTMLButtonElement,R=(b=s.parentElement)==null?void 0:b.classList.contains("task-list-item");if(S&&R)return!0;if(!(m instanceof Element))return!1;const j=s.closest(_);if(!j)return!1;const H=m.closest(_);return j===H}n(y,"activeElementIsSafe");function i(s){return s.matches(":active:enabled")}n(i,"hasMousedown");function c(s){return!!(s.closest(".is-dirty")||s.querySelector(".is-dirty"))}n(c,"markedAsDirty")},7358:(M,w,u)=>{u.d(w,{P:()=>h,t:()=>f});function h(a){const r=[...a.querySelectorAll("meta[name=html-safe-nonce]")].map(l=>l.content);if(r.length<1)throw new Error("could not find html-safe-nonce on document");return r}n(h,"getDocumentHtmlSafeNonces");class p extends Error{constructor(r,l){super(`${r} for HTTP ${l.status}`);this.response=l}}n(p,"ResponseError");function f(a,r,l=!1){const E=r.headers.get("content-type")||"";if(!l&&!E.startsWith("text/html"))throw new p(`expected response with text/html, but was ${E}`,r);if(l&&!(E.startsWith("text/html")||E.startsWith("application/json")))throw new p(`expected response with text/html or application/json, but was ${E}`,r);const g=r.headers.get("x-html-safe");if(g){if(!a.includes(g))throw new p("response X-HTML-Safe nonce did not match",r)}else throw new p("missing X-HTML-Safe nonce",r)}n(f,"verifyResponseHtmlSafeNonce")},66123:(M,w,u)=>{u.d(w,{ZG:()=>r,q6:()=>E,w4:()=>l});var h=u(22593);let p=!1;const f=new h.Z;function a(g){const m=g.target;if(m instanceof HTMLElement&&m.nodeType!==Node.DOCUMENT_NODE)for(const v of f.matches(m))v.data.call(null,m)}n(a,"handleFocus");function r(g,m){p||(p=!0,document.addEventListener("focus",a,!0)),f.add(g,m),document.activeElement instanceof HTMLElement&&document.activeElement.matches(g)&&m(document.activeElement)}n(r,"onFocus");function l(g,m,v){function _(y){const i=y.currentTarget;!i||(i.removeEventListener(g,v),i.removeEventListener("blur",_))}n(_,"blurHandler"),r(m,function(y){y.addEventListener(g,v),y.addEventListener("blur",_)})}n(l,"onKey");function E(g,m){function v(_){const{currentTarget:y}=_;!y||(y.removeEventListener("input",m),y.removeEventListener("blur",v))}n(v,"blurHandler"),r(g,function(_){_.addEventListener("input",m),_.addEventListener("blur",v)})}n(E,"onInput")},27316:(M,w,u)=>{u.d(w,{j:()=>h,u:()=>p});function h(f){const a=f.closest("form");if(!(a instanceof HTMLFormElement))return;let r=p(a);if(f.name){const l=f.matches("input[type=submit]")?"Submit":"",E=f.value||l;r||(r=document.createElement("input"),r.type="hidden",r.classList.add("is-submit-button-value"),a.prepend(r)),r.name=f.name,r.value=E}else r&&r.remove()}n(h,"persistSubmitButtonValue");function p(f){const a=f.querySelector("input.is-submit-button-value");return a instanceof HTMLInputElement?a:null}n(p,"findPersistedSubmitButtonValue")},39800:(M,w,u)=>{u.d(w,{Z:()=>p});class h{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}n(h,"NoOpStorage");function p(f,a={throwQuotaErrorsOnSet:!1},r=window){let l;try{l=r[f]}catch{l=new h}const{throwQuotaErrorsOnSet:E}=a;function g(_){try{return l.getItem(_)}catch{return null}}n(g,"getItem");function m(_,y){try{l.setItem(_,y)}catch(i){if(E&&i.message.toLowerCase().includes("quota"))throw i}}n(m,"setItem");function v(_){try{l.removeItem(_)}catch{}}return n(v,"removeItem"),{getItem:g,setItem:m,removeItem:v}}n(p,"safeStorage")},79030:(M,w,u)=>{u.d(w,{Z:()=>y});var h=u(18137),p=u(16393),f=u(30762);function a(i){return new Promise(c=>{i.addEventListener("dialog:remove",c,{once:!0})})}n(a,"waitForDialogClose");function r(i){const c=document.querySelector(".sso-modal");!c||(c.classList.remove("success","error"),i?c.classList.add("success"):c.classList.add("error"))}n(r,"setModalStatus");function l(i){const c=document.querySelector("meta[name=sso-expires-around]");c&&c.setAttribute("content",i)}n(l,"updateExpiresAroundTag");async function E(){const i=document.querySelector("link[rel=sso-modal]"),c=await(0,h.W)({content:(0,p.a)(document,i.href),dialogClass:"sso-modal"});let s=null;const b=window.external;if(b.ssoComplete=function(S){S.error?(s=!1,r(s)):(s=!0,r(s),l(S.expiresAround),window.focus()),b.ssoComplete=null},await a(c),!s)throw new Error("sso prompt canceled")}n(E,"ssoPrompt"),(0,f.N7)(".js-sso-modal-complete",function(i){if(window.opener&&window.opener.external.ssoComplete){const c=i.getAttribute("data-error"),s=i.getAttribute("data-expires-around");window.opener.external.ssoComplete({error:c,expiresAround:s}),window.close()}else{const c=i.getAttribute("data-fallback-url");c&&(window.location.href=c)}});function g(i){if(!(i instanceof HTMLMetaElement))return!0;const c=parseInt(i.content);return new Date().getTime()/1e3>c}n(g,"expiresSoon");async function m(){const i=document.querySelector("link[rel=sso-session]"),c=document.querySelector("meta[name=sso-expires-around]");if(!(i instanceof HTMLLinkElement)||!g(c))return!0;const s=i.href;return await(await fetch(s,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})).json()}n(m,"fetchSsoStatus");let v=null;function _(){v=null}n(_,"clearActiveSsoPrompt");async function y(){await m()||(v||(v=E().then(_).catch(_)),await v)}n(y,"__WEBPACK_DEFAULT_EXPORT__")},27157:(M,w,u)=>{u.d(w,{RB:()=>p,qC:()=>f,w0:()=>h});class h{constructor(r){this.closed=!1,this.unsubscribe=()=>{r(),this.closed=!0}}}n(h,"Subscription");function p(a,r,l,E={capture:!1}){return a.addEventListener(r,l,E),new h(()=>{a.removeEventListener(r,l,E)})}n(p,"fromEvent");function f(...a){return new h(()=>{for(const r of a)r.unsubscribe()})}n(f,"compose")}}]);})();

//# sourceMappingURL=8851-a944b5558dc9.js.map