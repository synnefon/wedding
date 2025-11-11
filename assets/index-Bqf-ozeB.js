(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const vl=()=>{};var jo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Tl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,b=d&63;h||(b=64,a||(w=64)),r.push(e[m],e[y],e[w],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(oc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Tl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||y==null)throw new wl;const w=o<<2|l>>4;if(r.push(w),d!==64){const b=l<<4&240|d>>2;if(r.push(b),y!==64){const V=d<<6&192|y;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Il=function(n){const t=oc(n);return ac.encodeByteArray(t,!0)},Vr=function(n){return Il(n).replace(/\./g,"")},Al=function(n){try{return ac.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=()=>bl().__FIREBASE_DEFAULTS__,Sl=()=>{if(typeof process>"u"||typeof jo>"u")return;const n=jo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Al(n[1]);return t&&JSON.parse(t)},oi=()=>{try{return vl()||Rl()||Sl()||Cl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pl=n=>oi()?.emulatorHosts?.[n],Vl=n=>{const t=Pl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},cc=()=>oi()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vr(JSON.stringify(e)),Vr(JSON.stringify(a)),""].join(".")}const Mn={};function xl(){const n={prod:[],emulator:[]};for(const t of Object.keys(Mn))Mn[t]?n.emulator.push(t):n.prod.push(t);return n}function Ll(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let zo=!1;function Ml(n,t){if(typeof window>"u"||typeof document>"u"||!ai(window.location.host)||Mn[n]===t||Mn[n]||zo)return;Mn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=xl().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,b){w.setAttribute("width","24"),w.setAttribute("id",b),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{zo=!0,a()},w}function m(w,b){w.setAttribute("id",b),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=Ll(r),b=e("text"),V=document.getElementById(b)||document.createElement("span"),k=e("learnmore"),P=document.getElementById(k)||document.createElement("a"),U=e("preprendIcon"),j=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const H=w.element;l(H),m(P,k);const ot=d();h(j,U),H.append(j,V,P,ot),document.body.appendChild(H)}o?(V.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fl(){const n=oi()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bl(){return!Fl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ul(){try{return typeof indexedDB=="object"}catch{return!1}}function ql(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="FirebaseError";class an extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=$l,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uc.prototype.create)}}class uc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?jl(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new an(s,l,r)}}function jl(n,t){return n.replace(zl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const zl=/\{\$([^}]+)}/g;function qn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Ho(o)&&Ho(a)){if(!qn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ho(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Dl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kl(t))try{this.getOrInitializeService({instanceIdentifier:ke})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ke){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ke){return this.instances.has(t)}getOptions(t=ke){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ke){return this.component?this.component.multipleInstances?t:ke:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gl(n){return n===ke?void 0:n}function Kl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Hl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Wl={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Xl=Y.INFO,Yl={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Jl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Yl[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lc{constructor(t){this.name=t,this._logLevel=Xl,this._logHandler=Jl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Zl=(n,t)=>t.some(e=>n instanceof e);let Go,Ko;function th(){return Go||(Go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eh(){return Ko||(Ko=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hc=new WeakMap,Os=new WeakMap,dc=new WeakMap,Ss=new WeakMap,ci=new WeakMap;function nh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(fe(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&hc.set(e,n)}).catch(()=>{}),ci.set(t,n),t}function rh(n){if(Os.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Os.set(n,t)}let Fs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Os.get(n);if(t==="objectStoreNames")return n.objectStoreNames||dc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return fe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function sh(n){Fs=n(Fs)}function ih(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Cs(this),t,...e);return dc.set(r,t.sort?t.sort():[t]),fe(r)}:eh().includes(n)?function(...t){return n.apply(Cs(this),t),fe(hc.get(this))}:function(...t){return fe(n.apply(Cs(this),t))}}function oh(n){return typeof n=="function"?ih(n):(n instanceof IDBTransaction&&rh(n),Zl(n,th())?new Proxy(n,Fs):n)}function fe(n){if(n instanceof IDBRequest)return nh(n);if(Ss.has(n))return Ss.get(n);const t=oh(n);return t!==n&&(Ss.set(n,t),ci.set(t,n)),t}const Cs=n=>ci.get(n);function ah(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=fe(a);return r&&a.addEventListener("upgradeneeded",h=>{r(fe(a.result),h.oldVersion,h.newVersion,fe(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ch=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],Ps=new Map;function Qo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ps.get(t))return Ps.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=uh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ch.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return Ps.set(t,o),o}sh(n=>({...n,get:(t,e,r)=>Qo(t,e)||n.get(t,e,r),has:(t,e)=>!!Qo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(hh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function hh(n){return n.getComponent()?.type==="VERSION"}const Bs="@firebase/app",Wo="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new lc("@firebase/app"),dh="@firebase/app-compat",fh="@firebase/analytics-compat",mh="@firebase/analytics",ph="@firebase/app-check-compat",gh="@firebase/app-check",_h="@firebase/auth",yh="@firebase/auth-compat",Eh="@firebase/database",vh="@firebase/data-connect",Th="@firebase/database-compat",wh="@firebase/functions",Ih="@firebase/functions-compat",Ah="@firebase/installations",bh="@firebase/installations-compat",Rh="@firebase/messaging",Sh="@firebase/messaging-compat",Ch="@firebase/performance",Ph="@firebase/performance-compat",Vh="@firebase/remote-config",Dh="@firebase/remote-config-compat",Nh="@firebase/storage",kh="@firebase/storage-compat",xh="@firebase/firestore",Lh="@firebase/ai",Mh="@firebase/firestore-compat",Oh="firebase",Fh="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]",Bh={[Bs]:"fire-core",[dh]:"fire-core-compat",[mh]:"fire-analytics",[fh]:"fire-analytics-compat",[gh]:"fire-app-check",[ph]:"fire-app-check-compat",[_h]:"fire-auth",[yh]:"fire-auth-compat",[Eh]:"fire-rtdb",[vh]:"fire-data-connect",[Th]:"fire-rtdb-compat",[wh]:"fire-fn",[Ih]:"fire-fn-compat",[Ah]:"fire-iid",[bh]:"fire-iid-compat",[Rh]:"fire-fcm",[Sh]:"fire-fcm-compat",[Ch]:"fire-perf",[Ph]:"fire-perf-compat",[Vh]:"fire-rc",[Dh]:"fire-rc-compat",[Nh]:"fire-gcs",[kh]:"fire-gcs-compat",[xh]:"fire-fst",[Mh]:"fire-fst-compat",[Lh]:"fire-vertex","fire-js":"fire-js",[Oh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,Uh=new Map,qs=new Map;function Xo(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Nr(n){const t=n.name;if(qs.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;qs.set(t,n);for(const e of Dr.values())Xo(e,n);for(const e of Uh.values())Xo(e,n);return!0}function qh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function $h(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new uc("app","Firebase",jh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=Fh;function fc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Us,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw me.create("bad-app-name",{appName:String(s)});if(e||(e=cc()),!e)throw me.create("no-options");const o=Dr.get(s);if(o){if(qn(e,o.options)&&qn(r,o.config))return o;throw me.create("duplicate-app",{appName:s})}const a=new Ql(s);for(const h of qs.values())a.addComponent(h);const l=new zh(e,r,a);return Dr.set(s,l),l}function Gh(n=Us){const t=Dr.get(n);if(!t&&n===Us&&cc())return fc();if(!t)throw me.create("no-app",{appName:n});return t}function Ye(n,t,e){let r=Bh[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}Nr(new $n(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="firebase-heartbeat-database",Qh=1,jn="firebase-heartbeat-store";let Vs=null;function mc(){return Vs||(Vs=ah(Kh,Qh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(jn)}catch(e){console.warn(e)}}}}).catch(n=>{throw me.create("idb-open",{originalErrorMessage:n.message})})),Vs}async function Wh(n){try{const e=(await mc()).transaction(jn),r=await e.objectStore(jn).get(pc(n));return await e.done,r}catch(t){if(t instanceof an)ee.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:t?.message});ee.warn(e.message)}}}async function Yo(n,t){try{const r=(await mc()).transaction(jn,"readwrite");await r.objectStore(jn).put(t,pc(n)),await r.done}catch(e){if(e instanceof an)ee.warn(e.message);else{const r=me.create("idb-set",{originalErrorMessage:e?.message});ee.warn(r.message)}}}function pc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=1024,Yh=30;class Jh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new td(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Yh){const s=ed(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ee.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jo(),{heartbeatsToSend:e,unsentEntries:r}=Zh(this._heartbeatsCache.heartbeats),s=Vr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ee.warn(t),""}}}function Jo(){return new Date().toISOString().substring(0,10)}function Zh(n,t=Xh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Zo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Zo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class td{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ul()?ql().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Wh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Zo(n){return Vr(JSON.stringify({version:2,heartbeats:n})).length}function ed(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){Nr(new $n("platform-logger",t=>new lh(t),"PRIVATE")),Nr(new $n("heartbeat",t=>new Jh(t),"PRIVATE")),Ye(Bs,Wo,n),Ye(Bs,Wo,"esm2020"),Ye("fire-js","")}nd("");var rd="firebase",sd="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(rd,sd,"app");var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pe,gc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,g){function _(){}_.prototype=g.prototype,v.F=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(T,E,I){for(var p=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)p[rt-2]=arguments[rt];return g.prototype[E].apply(T,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);const T=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)T[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)T[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],E=v.g[2];let I=v.g[3],p;p=g+(I^_&(E^I))+T[0]+3614090360&4294967295,g=_+(p<<7&4294967295|p>>>25),p=I+(E^g&(_^E))+T[1]+3905402710&4294967295,I=g+(p<<12&4294967295|p>>>20),p=E+(_^I&(g^_))+T[2]+606105819&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(g^E&(I^g))+T[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(I^_&(E^I))+T[4]+4118548399&4294967295,g=_+(p<<7&4294967295|p>>>25),p=I+(E^g&(_^E))+T[5]+1200080426&4294967295,I=g+(p<<12&4294967295|p>>>20),p=E+(_^I&(g^_))+T[6]+2821735955&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(g^E&(I^g))+T[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(I^_&(E^I))+T[8]+1770035416&4294967295,g=_+(p<<7&4294967295|p>>>25),p=I+(E^g&(_^E))+T[9]+2336552879&4294967295,I=g+(p<<12&4294967295|p>>>20),p=E+(_^I&(g^_))+T[10]+4294925233&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(g^E&(I^g))+T[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(I^_&(E^I))+T[12]+1804603682&4294967295,g=_+(p<<7&4294967295|p>>>25),p=I+(E^g&(_^E))+T[13]+4254626195&4294967295,I=g+(p<<12&4294967295|p>>>20),p=E+(_^I&(g^_))+T[14]+2792965006&4294967295,E=I+(p<<17&4294967295|p>>>15),p=_+(g^E&(I^g))+T[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(E^I&(_^E))+T[1]+4129170786&4294967295,g=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(g^_))+T[6]+3225465664&4294967295,I=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(I^g))+T[11]+643717713&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^g&(E^I))+T[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^I&(_^E))+T[5]+3593408605&4294967295,g=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(g^_))+T[10]+38016083&4294967295,I=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(I^g))+T[15]+3634488961&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^g&(E^I))+T[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^I&(_^E))+T[9]+568446438&4294967295,g=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(g^_))+T[14]+3275163606&4294967295,I=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(I^g))+T[3]+4107603335&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^g&(E^I))+T[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^I&(_^E))+T[13]+2850285829&4294967295,g=_+(p<<5&4294967295|p>>>27),p=I+(_^E&(g^_))+T[2]+4243563512&4294967295,I=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(I^g))+T[7]+1735328473&4294967295,E=I+(p<<14&4294967295|p>>>18),p=_+(I^g&(E^I))+T[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(_^E^I)+T[5]+4294588738&4294967295,g=_+(p<<4&4294967295|p>>>28),p=I+(g^_^E)+T[8]+2272392833&4294967295,I=g+(p<<11&4294967295|p>>>21),p=E+(I^g^_)+T[11]+1839030562&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^g)+T[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^I)+T[1]+2763975236&4294967295,g=_+(p<<4&4294967295|p>>>28),p=I+(g^_^E)+T[4]+1272893353&4294967295,I=g+(p<<11&4294967295|p>>>21),p=E+(I^g^_)+T[7]+4139469664&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^g)+T[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^I)+T[13]+681279174&4294967295,g=_+(p<<4&4294967295|p>>>28),p=I+(g^_^E)+T[0]+3936430074&4294967295,I=g+(p<<11&4294967295|p>>>21),p=E+(I^g^_)+T[3]+3572445317&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^g)+T[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^I)+T[9]+3654602809&4294967295,g=_+(p<<4&4294967295|p>>>28),p=I+(g^_^E)+T[12]+3873151461&4294967295,I=g+(p<<11&4294967295|p>>>21),p=E+(I^g^_)+T[15]+530742520&4294967295,E=I+(p<<16&4294967295|p>>>16),p=_+(E^I^g)+T[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(E^(_|~I))+T[0]+4096336452&4294967295,g=_+(p<<6&4294967295|p>>>26),p=I+(_^(g|~E))+T[7]+1126891415&4294967295,I=g+(p<<10&4294967295|p>>>22),p=E+(g^(I|~_))+T[14]+2878612391&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~g))+T[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~I))+T[12]+1700485571&4294967295,g=_+(p<<6&4294967295|p>>>26),p=I+(_^(g|~E))+T[3]+2399980690&4294967295,I=g+(p<<10&4294967295|p>>>22),p=E+(g^(I|~_))+T[10]+4293915773&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~g))+T[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~I))+T[8]+1873313359&4294967295,g=_+(p<<6&4294967295|p>>>26),p=I+(_^(g|~E))+T[15]+4264355552&4294967295,I=g+(p<<10&4294967295|p>>>22),p=E+(g^(I|~_))+T[6]+2734768916&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~g))+T[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~I))+T[4]+4149444226&4294967295,g=_+(p<<6&4294967295|p>>>26),p=I+(_^(g|~E))+T[11]+3174756917&4294967295,I=g+(p<<10&4294967295|p>>>22),p=E+(g^(I|~_))+T[2]+718787259&4294967295,E=I+(p<<15&4294967295|p>>>17),p=_+(I^(E|~g))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.v=function(v,g){g===void 0&&(g=v.length);const _=g-this.blockSize,T=this.C;let E=this.h,I=0;for(;I<g;){if(E==0)for(;I<=_;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<g;)if(T[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,T),E=0;break}}else for(;I<g;)if(T[E++]=v[I++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)v[g++]=this.g[_]>>>T&255;return v};function o(v,g){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function a(v,g){this.h=g;const _=[];let T=!0;for(let E=v.length-1;E>=0;E--){const I=v[E]|0;T&&I==g||(_[E]=I,T=!1)}this.g=_}var l={};function h(v){return-128<=v&&v<128?o(v,function(g){return new a([g|0],g<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(v<0)return P(d(-v));const g=[];let _=1;for(let T=0;v>=_;T++)g[T]=v/_|0,_*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return P(m(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let T=y;for(let I=0;I<v.length;I+=8){var E=Math.min(8,v.length-I);const p=parseInt(v.substring(I,I+E),g);E<8?(E=d(Math.pow(g,E)),T=T.j(E).add(d(p))):(T=T.j(_),T=T.add(d(p)))}return T}var y=h(0),w=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();let v=0,g=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);v+=(T>=0?T:4294967296+T)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(k(this))return"-"+P(this).toString(v);const g=d(Math.pow(v,6));var _=this;let T="";for(;;){const E=ot(_,g).g;_=U(_,E.j(g));let I=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=E,V(_))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=U(this,v),k(v)?-1:V(v)?0:1};function P(v){const g=v.g.length,_=[];for(let T=0;T<g;T++)_[T]=~v.g[T];return new a(_,~v.h).add(w)}n.abs=function(){return k(this)?P(this):this},n.add=function(v){const g=Math.max(this.g.length,v.g.length),_=[];let T=0;for(let E=0;E<=g;E++){let I=T+(this.i(E)&65535)+(v.i(E)&65535),p=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=p>>>16,I&=65535,p&=65535,_[E]=p<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(v,g){return v.add(P(g))}n.j=function(v){if(V(this)||V(v))return y;if(k(this))return k(v)?P(this).j(P(v)):P(P(this).j(v));if(k(v))return P(this.j(P(v)));if(this.l(b)<0&&v.l(b)<0)return d(this.m()*v.m());const g=this.g.length+v.g.length,_=[];for(var T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<v.g.length;E++){const I=this.i(T)>>>16,p=this.i(T)&65535,rt=v.i(E)>>>16,$t=v.i(E)&65535;_[2*T+2*E]+=p*$t,j(_,2*T+2*E),_[2*T+2*E+1]+=I*$t,j(_,2*T+2*E+1),_[2*T+2*E+1]+=p*rt,j(_,2*T+2*E+1),_[2*T+2*E+2]+=I*rt,j(_,2*T+2*E+2)}for(v=0;v<g;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=g;v<2*g;v++)_[v]=0;return new a(_,0)};function j(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function H(v,g){this.g=v,this.h=g}function ot(v,g){if(V(g))throw Error("division by zero");if(V(v))return new H(y,y);if(k(v))return g=ot(P(v),g),new H(P(g.g),P(g.h));if(k(g))return g=ot(v,P(g)),new H(P(g.g),g.h);if(v.g.length>30){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var _=w,T=g;T.l(v)<=0;)_=tt(_),T=tt(T);var E=at(_,1),I=at(T,1);for(T=at(T,2),_=at(_,2);!V(T);){var p=I.add(T);p.l(v)<=0&&(E=E.add(_),I=p),T=at(T,1),_=at(_,1)}return g=U(v,E.j(g)),new H(E,g)}for(E=y;v.l(g)>=0;){for(_=Math.max(1,Math.floor(v.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=d(_),p=I.j(g);k(p)||p.l(v)>0;)_-=T,I=d(_),p=I.j(g);V(I)&&(I=w),E=E.add(I),v=U(v,p)}return new H(E,v)}n.B=function(v){return ot(this,v).h},n.and=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)&v.i(T);return new a(_,this.h&v.h)},n.or=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)|v.i(T);return new a(_,this.h|v.h)},n.xor=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)^v.i(T);return new a(_,this.h^v.h)};function tt(v){const g=v.g.length+1,_=[];for(let T=0;T<g;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(_,v.h)}function at(v,g){const _=g>>5;g%=32;const T=v.g.length-_,E=[];for(let I=0;I<T;I++)E[I]=g>0?v.i(I+_)>>>g|v.i(I+_+1)<<32-g:v.i(I+_);return new a(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,gc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,pe=a}).apply(typeof ta<"u"?ta:typeof self<"u"?self:typeof window<"u"?window:{});var gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _c,Dn,yc,Ar,$s,Ec,vc,Tc;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof gr=="object"&&gr];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break t;u=u[A]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function m(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function y(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,A,R){for(var D=Array(arguments.length-2),z=2;z<arguments.length;z++)D[z-2]=arguments[z];return c.prototype[A].apply(f,D)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function b(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function V(i,c){for(let f=1;f<arguments.length;f++){const A=arguments[f];var u=typeof A;if(u=u!="object"?u:A?Array.isArray(A)?"array":u:"null",u=="array"||u=="object"&&typeof A.length=="number"){u=i.length||0;const R=A.length||0;i.length=u+R;for(let D=0;D<R;D++)i[u+D]=A[D]}else i.push(A)}}class k{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function P(i){a.setTimeout(()=>{throw i},0)}function U(){var i=v;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class j{constructor(){this.h=this.g=null}add(c,u){const f=H.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var H=new k(()=>new ot,i=>i.reset());class ot{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,at=!1,v=new j,g=()=>{const i=Promise.resolve(void 0);tt=()=>{i.then(_)}};function _(){for(var i;i=U();){try{i.h.call(i.g)}catch(u){P(u)}var c=H;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}at=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i})();function p(i){return/^[\s\xa0]*$/.test(i)}function rt(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}y(rt,E),rt.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&rt.Z.h.call(this)},rt.prototype.h=function(){rt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),qe=0;function $e(i,c,u,f,A){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=A,this.key=++qe,this.da=this.fa=!1}function je(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Se(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function us(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function q(i){const c={};for(const u in i)c[u]=i[u];return c}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function W(i,c){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let R=0;R<L.length;R++)u=L[R],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function $(i){this.src=i,this.g={},this.h=0}$.prototype.add=function(i,c,u,f,A){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const D=G(i,c,f,A);return D>-1?(c=i[D],u||(c.fa=!1)):(c=new $e(c,this.src,R,!!f,A),c.fa=u,i.push(c)),c};function J(i,c){const u=c.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,c,void 0),R;(R=A>=0)&&Array.prototype.splice.call(f,A,1),R&&(je(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function G(i,c,u,f){for(let A=0;A<i.length;++A){const R=i[A];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return A}return-1}var kt="closure_lm_"+(Math.random()*1e6|0),vt={};function jt(i,c,u,f,A){if(Array.isArray(c)){for(let R=0;R<c.length;R++)jt(i,c[R],u,f,A);return null}return u=rr(u),i&&i[$t]?i.J(c,u,l(f)?!!f.capture:!1,A):It(i,c,u,!1,f,A)}function It(i,c,u,f,A,R){if(!c)throw Error("Invalid event type");const D=l(A)?!!A.capture:!!A;let z=Bt(i);if(z||(i[kt]=z=new $(i)),u=z.add(c,u,f,D,R),u.proxy)return u;if(f=Ot(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)I||(A=D),A===void 0&&(A=!1),i.addEventListener(c.toString(),f,A);else if(i.attachEvent)i.attachEvent(ct(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ot(){function i(u){return c.call(i.src,i.listener,u)}const c=ie;return i}function se(i,c,u,f,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)se(i,c[R],u,f,A);else f=l(f)?!!f.capture:!!f,u=rr(u),i&&i[$t]?(i=i.i,R=String(c).toString(),R in i.g&&(c=i.g[R],u=G(c,u,f,A),u>-1&&(je(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[R],i.h--)))):i&&(i=Bt(i))&&(c=i.g[c.toString()],i=-1,c&&(i=G(c,u,f,A)),(u=i>-1?c[i]:null)&&mn(u))}function mn(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[$t])J(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(ct(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Bt(c))?(J(u,i),u.h==0&&(u.src=null,c[kt]=null)):je(i)}}}function ct(i){return i in vt?vt[i]:vt[i]="on"+i}function ie(i,c){if(i.da)i=!0;else{c=new rt(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&mn(i),i=u.call(f,c)}return i}function Bt(i){return i=i[kt],i instanceof $?i:null}var zt="__closure_events_fn_"+(Math.random()*1e9>>>0);function rr(i){return typeof i=="function"?i:(i[zt]||(i[zt]=function(c){return i.handleEvent(c)}),i[zt])}function ut(){T.call(this),this.i=new $(this),this.M=this,this.G=null}y(ut,T),ut.prototype[$t]=!0,ut.prototype.removeEventListener=function(i,c,u,f){se(this,i,c,u,f)};function ft(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var A=c;c=new E(f,i),W(c,A)}A=!0;let R,D;if(u)for(D=u.length-1;D>=0;D--)R=c.g=u[D],A=sr(R,f,!0,c)&&A;if(R=c.g=i,A=sr(R,f,!0,c)&&A,A=sr(R,f,!1,c)&&A,u)for(D=0;D<u.length;D++)R=c.g=u[D],A=sr(R,f,!1,c)&&A}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)je(u[f]);delete i.g[c],i.h--}}this.G=null},ut.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},ut.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function sr(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let R=0;R<c.length;++R){const D=c[R];if(D&&!D.da&&D.capture==u){const z=D.listener,yt=D.ha||D.src;D.fa&&J(i.i,D),A=z.call(yt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Qu(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Qi(i){i.g=Qu(()=>{i.g=null,i.i&&(i.i=!1,Qi(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Wu extends T{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Qi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pn(i){T.call(this),this.h=i,this.g={}}y(pn,T);var Wi=[];function Xi(i){Se(i.g,function(c,u){this.g.hasOwnProperty(u)&&mn(c)},i),i.g={}}pn.prototype.N=function(){pn.Z.N.call(this),Xi(this)},pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ls=a.JSON.stringify,Xu=a.JSON.parse,Yu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Yi(){}function Ji(){}var gn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hs(){E.call(this,"d")}y(hs,E);function ds(){E.call(this,"c")}y(ds,E);var Ce={},Zi=null;function ir(){return Zi=Zi||new ut}Ce.Ia="serverreachability";function to(i){E.call(this,Ce.Ia,i)}y(to,E);function _n(i){const c=ir();ft(c,new to(c))}Ce.STAT_EVENT="statevent";function eo(i,c){E.call(this,Ce.STAT_EVENT,i),this.stat=c}y(eo,E);function Vt(i){const c=ir();ft(c,new eo(c,i))}Ce.Ja="timingevent";function no(i,c){E.call(this,Ce.Ja,i),this.size=c}y(no,E);function yn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function En(){this.g=!0}En.prototype.ua=function(){this.g=!1};function Ju(i,c,u,f,A,R){i.info(function(){if(i.g)if(R){var D="",z=R.split("&");for(let et=0;et<z.length;et++){var yt=z[et].split("=");if(yt.length>1){const Tt=yt[0];yt=yt[1];const Gt=Tt.split("_");D=Gt.length>=2&&Gt[1]=="type"?D+(Tt+"="+yt+"&"):D+(Tt+"=redacted&")}}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+u+`
`+D})}function Zu(i,c,u,f,A,R,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+u+`
`+R+" "+D})}function ze(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+el(i,u)+(f?" "+f:"")})}function tl(i,c){i.info(function(){return"TIMEOUT: "+c})}En.prototype.info=function(){};function el(i,c){if(!i.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var u=R[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let D=1;D<f.length;D++)f[D]=""}}}}return ls(R)}catch{return c}}var or={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ro={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},so;function fs(){}y(fs,Yi),fs.prototype.g=function(){return new XMLHttpRequest},so=new fs;function vn(i){return encodeURIComponent(String(i))}function nl(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function oe(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new pn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new io}function io(){this.i=null,this.g="",this.h=!1}var oo={},ms={};function ps(i,c,u){i.M=1,i.A=cr(Ht(c)),i.u=u,i.R=!0,ao(i,null)}function ao(i,c){i.F=Date.now(),ar(i),i.B=Ht(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),To(u.i,"t",f),i.C=0,u=i.j.L,i.h=new io,i.g=Bo(i.j,u?c:null,!i.u),i.P>0&&(i.O=new Wu(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var A="readystatechange";Array.isArray(A)||(A&&(Wi[0]=A.toString()),A=Wi);for(let R=0;R<A.length;R++){const D=jt(u,A[R],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.J?q(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),_n(),Ju(i.i,i.v,i.B,i.l,i.S,i.u)}oe.prototype.ba=function(i){i=i.target;const c=this.O;c&&ue(i)==3?c.j():this.Y(i)},oe.prototype.Y=function(i){try{if(i==this.g)t:{const z=ue(this.g),yt=this.g.ya(),et=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||Co(this.g)))){this.K||z!=4||yt==7||(yt==8||et<=0?_n(3):_n(2)),gs(this);var c=this.g.ca();this.X=c;var u=rl(this);if(this.o=c==200,Zu(this.i,this.v,this.B,this.l,this.S,z,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(f)){var R=f;break e}}R=null}if(i=R)ze(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_s(this,i);else{this.o=!1,this.m=3,Vt(12),Pe(this),Tn(this);break t}}if(this.R){i=!0;let Tt;for(;!this.K&&this.C<u.length;)if(Tt=sl(this,u),Tt==ms){z==4&&(this.m=4,Vt(14),i=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==oo){this.m=4,Vt(15),ze(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else ze(this.i,this.l,Tt,null),_s(this,Tt);if(co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||u.length!=0||this.h.h||(this.m=1,Vt(16),i=!1),this.o=this.o&&i,!i)ze(this.i,this.l,u,"[Invalid Chunked Response]"),Pe(this),Tn(this);else if(u.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),bs(D),D.P=!0,Vt(11))}}else ze(this.i,this.l,u,null),_s(this,u);z==4&&Pe(this),this.o&&!this.K&&(z==4?Lo(this.j,this):(this.o=!1,ar(this)))}else yl(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Vt(12)):(this.m=0,Vt(13)),Pe(this),Tn(this)}}}catch{}finally{}};function rl(i){if(!co(i))return i.g.la();const c=Co(i.g);if(c==="")return"";let u="";const f=c.length,A=ue(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Pe(i),Tn(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,u+=i.h.i.decode(c[R],{stream:!(A&&R==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function co(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function sl(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?ms:(u=Number(c.substring(u,f)),isNaN(u)?oo:(f+=1,f+u>c.length?ms:(c=c.slice(f,f+u),i.C=f+u,c)))}oe.prototype.cancel=function(){this.K=!0,Pe(this)};function ar(i){i.T=Date.now()+i.H,uo(i,i.H)}function uo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=yn(d(i.aa,i),c)}function gs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}oe.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(tl(this.i,this.B),this.M!=2&&(_n(),Vt(17)),Pe(this),this.m=2,Tn(this)):uo(this,this.T-i)};function Tn(i){i.j.I==0||i.K||Lo(i.j,i)}function Pe(i){gs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Xi(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function _s(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||ys(u.h,i))){if(!i.L&&ys(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)fr(u),hr(u);else break t;As(u),Vt(18)}}else u.xa=A[1],0<u.xa-u.K&&A[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=yn(d(u.Va,u),6e3));fo(u.h)<=1&&u.ta&&(u.ta=void 0)}else De(u,11)}else if((i.L||u.g==i)&&fr(u),!p(c))for(A=u.Ba.g.parse(c),c=0;c<A.length;c++){let et=A[c];const Tt=et[0];if(!(Tt<=u.K))if(u.K=Tt,et=et[1],u.I==2)if(et[0]=="c"){u.M=et[1],u.ba=et[2];const Gt=et[3];Gt!=null&&(u.ka=Gt,u.j.info("VER="+u.ka));const Ne=et[4];Ne!=null&&(u.za=Ne,u.j.info("SVER="+u.za));const le=et[5];le!=null&&typeof le=="number"&&le>0&&(f=1.5*le,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const he=i.g;if(he){const pr=he.g?he.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pr){var R=f.h;R.g||pr.indexOf("spdy")==-1&&pr.indexOf("quic")==-1&&pr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Es(R,R.h),R.h=null))}if(f.G){const Rs=he.g?he.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(f.wa=Rs,st(f.J,f.G,Rs))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var D=i;if(f.na=Fo(f,f.L?f.ba:null,f.W),D.L){mo(f.h,D);var z=D,yt=f.O;yt&&(z.H=yt),z.D&&(gs(z),ar(z)),f.g=D}else ko(f);u.i.length>0&&dr(u)}else et[0]!="stop"&&et[0]!="close"||De(u,7);else u.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?De(u,7):Is(u):et[0]!="noop"&&u.l&&u.l.qa(et),u.A=0)}}_n(4)}catch{}}var il=class{constructor(i,c){this.g=i,this.map=c}};function lo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ho(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function fo(i){return i.h?1:i.g?i.g.size:0}function ys(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Es(i,c){i.g?i.g.add(c):i.h=c}function mo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}lo.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function po(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return b(i.i)}var go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ol(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let A,R=null;f>=0?(A=i[u].substring(0,f),R=i[u].substring(f+1)):A=i[u],c(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ae(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof ae?(this.l=i.l,wn(this,i.j),this.o=i.o,this.g=i.g,In(this,i.u),this.h=i.h,vs(this,wo(i.i)),this.m=i.m):i&&(c=String(i).match(go))?(this.l=!1,wn(this,c[1]||"",!0),this.o=An(c[2]||""),this.g=An(c[3]||"",!0),In(this,c[4]),this.h=An(c[5]||"",!0),vs(this,c[6]||"",!0),this.m=An(c[7]||"")):(this.l=!1,this.i=new Rn(null,this.l))}ae.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(bn(c,_o,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(bn(c,_o,!0),"@"),i.push(vn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(bn(u,u.charAt(0)=="/"?ul:cl,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",bn(u,hl)),i.join("")},ae.prototype.resolve=function(i){const c=Ht(this);let u=!!i.j;u?wn(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)In(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=c.h.lastIndexOf("/");A!=-1&&(f=c.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let D=0;D<A.length;){const z=A[D++];z=="."?f&&D==A.length&&R.push(""):z==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&D==A.length&&R.push("")):(R.push(z),f=!0)}f=R.join("/")}else f=A}return u?c.h=f:u=i.i.toString()!=="",u?vs(c,wo(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Ht(i){return new ae(i)}function wn(i,c,u){i.j=u?An(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function In(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function vs(i,c,u){c instanceof Rn?(i.i=c,dl(i.i,i.l)):(u||(c=bn(c,ll)),i.i=new Rn(c,i.l))}function st(i,c,u){i.i.set(c,u)}function cr(i){return st(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function An(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function bn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,al),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function al(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var _o=/[#\/\?@]/g,cl=/[#\?:]/g,ul=/[#\?]/g,ll=/[#\?@]/g,hl=/#/g;function Rn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Ve(i){i.g||(i.g=new Map,i.h=0,i.i&&ol(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Rn.prototype,n.add=function(i,c){Ve(this),this.i=null,i=He(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function yo(i,c){Ve(i),c=He(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Eo(i,c){return Ve(i),c=He(i,c),i.g.has(c)}n.forEach=function(i,c){Ve(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(c,A,f,this)},this)},this)};function vo(i,c){Ve(i);let u=[];if(typeof c=="string")Eo(i,c)&&(u=u.concat(i.g.get(He(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return Ve(this),this.i=null,i=He(this,i),Eo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=vo(this,i),i.length>0?String(i[0]):c):c};function To(i,c,u){yo(i,c),u.length>0&&(i.i=null,i.g.set(He(i,c),b(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const A=vn(u);u=vo(this,u);for(let R=0;R<u.length;R++){let D=A;u[R]!==""&&(D+="="+vn(u[R])),i.push(D)}}return this.i=i.join("&")};function wo(i){const c=new Rn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function He(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function dl(i,c){c&&!i.j&&(Ve(i),i.i=null,i.g.forEach(function(u,f){const A=f.toLowerCase();f!=A&&(yo(this,f),To(this,A,u))},i)),i.j=c}function fl(i,c){const u=new En;if(a.Image){const f=new Image;f.onload=m(ce,u,"TestLoadImage: loaded",!0,c,f),f.onerror=m(ce,u,"TestLoadImage: error",!1,c,f),f.onabort=m(ce,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(ce,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function ml(i,c){const u=new En,f=new AbortController,A=setTimeout(()=>{f.abort(),ce(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?ce(u,"TestPingServer: ok",!0,c):ce(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ce(u,"TestPingServer: error",!1,c)})}function ce(i,c,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function pl(){this.g=new Yu}function Ts(i){this.i=i.Sb||null,this.h=i.ab||!1}y(Ts,Yi),Ts.prototype.g=function(){return new ur(this.i,this.h)};function ur(i,c){ut.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(ur,ut),n=ur.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Cn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Io(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Io(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Sn(this):Cn(this),this.readyState==3&&Io(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Sn(this))},n.Na=function(i){this.g&&(this.response=i,Sn(this))},n.ga=function(){this.g&&Sn(this)};function Sn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Cn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function Cn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ao(i){let c="";return Se(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function ws(i,c,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Ao(u),typeof i=="string"?u!=null&&vn(u):st(i,c,u))}function ht(i){ut.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ht,ut);var gl=/^https?$/i,_l=["POST","PUT"];n=ht.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():so.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){bo(this,R);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),A=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(_l,c,void 0)>=0)||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of u)this.g.setRequestHeader(R,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){bo(this,R)}};function bo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ro(i),lr(i)}function Ro(i){i.A||(i.A=!0,ft(i,"complete"),ft(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,ft(this,"complete"),ft(this,"abort"),lr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),lr(this,!0)),ht.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?So(this):this.Xa())},n.Xa=function(){So(this)};function So(i){if(i.h&&typeof o<"u"){if(i.v&&ue(i)==4)setTimeout(i.Ca.bind(i),0);else if(ft(i,"readystatechange"),ue(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var f;if(f=R===0){let D=String(i.D).match(go)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),f=!gl.test(D?D.toLowerCase():"")}u=f}if(u)ft(i,"complete"),ft(i,"success");else{i.o=6;try{var A=ue(i)>2?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.ca()+"]",Ro(i)}}finally{lr(i)}}}}function lr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||ft(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ue(i){return i.g?i.g.readyState:0}n.ca=function(){try{return ue(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Xu(c)}};function Co(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function yl(i){const c={};i=(i.g&&ue(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(p(i[f]))continue;var u=nl(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[A]||[];c[A]=R,R.push(u)}us(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function Po(i){this.za=0,this.i=[],this.j=new En,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pn("baseRetryDelayMs",5e3,i),this.Za=Pn("retryDelaySeedMs",1e4,i),this.Ta=Pn("forwardChannelMaxRetries",2,i),this.va=Pn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new lo(i&&i.concurrentRequestLimit),this.Ba=new pl,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Po.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,f){Vt(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=Fo(this,null,this.W),dr(this)};function Is(i){if(Vo(i),i.I==3){var c=i.V++,u=Ht(i.J);if(st(u,"SID",i.M),st(u,"RID",c),st(u,"TYPE","terminate"),Vn(i,u),c=new oe(i,i.j,c),c.M=2,c.A=cr(Ht(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=Bo(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ar(c)}Oo(i)}function hr(i){i.g&&(bs(i),i.g.cancel(),i.g=null)}function Vo(i){hr(i),i.v&&(a.clearTimeout(i.v),i.v=null),fr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function dr(i){if(!ho(i.h)&&!i.m){i.m=!0;var c=i.Ea;tt||g(),at||(tt(),at=!0),v.add(c,i),i.D=0}}function El(i,c){return fo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=yn(d(i.Ea,i,c),Mo(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const A=new oe(this,this.j,i);let R=this.o;if(this.U&&(R?(R=q(R),W(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=No(this,A,c),u=Ht(this.J),st(u,"RID",i),st(u,"CVER",22),this.G&&st(u,"X-HTTP-Session-Id",this.G),Vn(this,u),R&&(this.R?c="headers="+vn(Ao(R))+"&"+c:this.u&&ws(u,this.u,R)),Es(this.h,A),this.Ra&&st(u,"TYPE","init"),this.S?(st(u,"$req",c),st(u,"SID","null"),A.U=!0,ps(A,u,null)):ps(A,u,c),this.I=2}}else this.I==3&&(i?Do(this,i):this.i.length==0||ho(this.h)||Do(this))};function Do(i,c){var u;c?u=c.l:u=i.V++;const f=Ht(i.J);st(f,"SID",i.M),st(f,"RID",u),st(f,"AID",i.K),Vn(i,f),i.u&&i.o&&ws(f,i.u,i.o),u=new oe(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=No(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Es(i.h,u),ps(u,f,c)}function Vn(i,c){i.H&&Se(i.H,function(u,f){st(c,f,u)}),i.l&&Se({},function(u,f){st(c,f,u)})}function No(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var A=i.i;let z=-1;for(;;){const yt=["count="+u];z==-1?u>0?(z=A[0].g,yt.push("ofs="+z)):z=0:yt.push("ofs="+z);let et=!0;for(let Tt=0;Tt<u;Tt++){var R=A[Tt].g;const Gt=A[Tt].map;if(R-=z,R<0)z=Math.max(0,A[Tt].g-100),et=!1;else try{R="req"+R+"_"||"";try{var D=Gt instanceof Map?Gt:Object.entries(Gt);for(const[Ne,le]of D){let he=le;l(le)&&(he=ls(le)),yt.push(R+Ne+"="+encodeURIComponent(he))}}catch(Ne){throw yt.push(R+"type="+encodeURIComponent("_badmap")),Ne}}catch{f&&f(Gt)}}if(et){D=yt.join("&");break t}}D=void 0}return i=i.i.splice(0,u),c.G=i,D}function ko(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;tt||g(),at||(tt(),at=!0),v.add(c,i),i.A=0}}function As(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=yn(d(i.Da,i),Mo(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,xo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=yn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Vt(10),hr(this),xo(this))};function bs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function xo(i){i.g=new oe(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Ht(i.na);st(c,"RID","rpc"),st(c,"SID",i.M),st(c,"AID",i.K),st(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&st(c,"TO",i.ia),st(c,"TYPE","xmlhttp"),Vn(i,c),i.u&&i.o&&ws(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=cr(Ht(c)),u.u=null,u.R=!0,ao(u,i)}n.Va=function(){this.C!=null&&(this.C=null,hr(this),As(this),Vt(19))};function fr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Lo(i,c){var u=null;if(i.g==c){fr(i),bs(i),i.g=null;var f=2}else if(ys(i.h,c))u=c.G,mo(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var A=i.D;f=ir(),ft(f,new no(f,u)),dr(i)}else ko(i);else if(A=c.m,A==3||A==0&&c.X>0||!(f==1&&El(i,c)||f==2&&As(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),A){case 1:De(i,5);break;case 4:De(i,10);break;case 3:De(i,6);break;default:De(i,2)}}}function Mo(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function De(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const A=!f;f=new ae(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||wn(f,"https"),cr(f),A?fl(f.toString(),u):ml(f.toString(),u)}else Vt(2);i.I=0,i.l&&i.l.pa(c),Oo(i),Vo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Oo(i){if(i.I=0,i.ja=[],i.l){const c=po(i.h);(c.length!=0||i.i.length!=0)&&(V(i.ja,c),V(i.ja,i.i),i.h.i.length=0,b(i.i),i.i.length=0),i.l.oa()}}function Fo(i,c,u){var f=u instanceof ae?Ht(u):new ae(u);if(f.g!="")c&&(f.g=c+"."+f.g),In(f,f.u);else{var A=a.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const R=new ae(null);f&&wn(R,f),c&&(R.g=c),A&&In(R,A),u&&(R.h=u),f=R}return u=i.G,c=i.wa,u&&c&&st(f,u,c),st(f,"VER",i.ka),Vn(i,f),f}function Bo(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ht(new Ts({ab:u})):new ht(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uo(){}n=Uo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function mr(){}mr.prototype.g=function(i,c){return new xt(i,c)};function xt(i,c){ut.call(this),this.g=new Po(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!p(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!p(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ge(this)}y(xt,ut),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Is(this.g)},xt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=ls(i),i=u);c.i.push(new il(c.Ya++,i)),c.I==3&&dr(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,Is(this.g),delete this.g,xt.Z.N.call(this)};function qo(i){hs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}y(qo,hs);function $o(){ds.call(this),this.status=1}y($o,ds);function Ge(i){this.g=i}y(Ge,Uo),Ge.prototype.ra=function(){ft(this.g,"a")},Ge.prototype.qa=function(i){ft(this.g,new qo(i))},Ge.prototype.pa=function(i){ft(this.g,new $o)},Ge.prototype.oa=function(){ft(this.g,"b")},mr.prototype.createWebChannel=mr.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Tc=function(){return new mr},vc=function(){return ir()},Ec=Ce,$s={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},or.NO_ERROR=0,or.TIMEOUT=8,or.HTTP_ERROR=6,Ar=or,ro.COMPLETE="complete",yc=ro,Ji.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Dn=Ji,ht.prototype.listenOnce=ht.prototype.K,ht.prototype.getLastError=ht.prototype.Ha,ht.prototype.getLastErrorCode=ht.prototype.ya,ht.prototype.getStatus=ht.prototype.ca,ht.prototype.getResponseJson=ht.prototype.La,ht.prototype.getResponseText=ht.prototype.la,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Fa,_c=ht}).apply(typeof gr<"u"?gr:typeof self<"u"?self:typeof window<"u"?window:{});const ea="@firebase/firestore",na="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new lc("@firebase/firestore");function Ke(){return Oe.logLevel}function x(n,...t){if(Oe.logLevel<=Y.DEBUG){const e=t.map(ui);Oe.debug(`Firestore (${cn}): ${n}`,...e)}}function ne(n,...t){if(Oe.logLevel<=Y.ERROR){const e=t.map(ui);Oe.error(`Firestore (${cn}): ${n}`,...e)}}function Ze(n,...t){if(Oe.logLevel<=Y.WARN){const e=t.map(ui);Oe.warn(`Firestore (${cn}): ${n}`,...e)}}function ui(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,wc(n,r,e)}function wc(n,t,e){let r=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ne(r),new Error(r)}function Z(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||wc(t,s,r)}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends an{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class id{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ct.UNAUTHENTICATED)))}shutdown(){}}class od{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ad{constructor(t){this.t=t,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Z(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new te;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new te,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new te)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Ic(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string",2055,{h:t}),new Ct(t)}}class cd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ud{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new cd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Ct.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ra{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ld{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$h(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Z(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ra(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ra(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function K(n,t){return n<t?-1:n>t?1:0}function js(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Ds(s)===Ds(o)?K(s,o):Ds(s)?1:-1}return K(n.length,t.length)}const dd=55296,fd=57343;function Ds(n){const t=n.charCodeAt(0);return t>=dd&&t<=fd}function tn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="__name__";class Kt{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&O(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Kt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Kt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return K(t.length,e.length)}static compareSegments(t,e){const r=Kt.isNumericId(t),s=Kt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Kt.extractNumericId(t).compare(Kt.extractNumericId(e)):js(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return pe.fromString(t.substring(4,t.length-2))}}class nt extends Kt{construct(t,e,r){return new nt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new nt(e)}static emptyPath(){return new nt([])}}const md=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Kt{construct(t,e,r){return new bt(t,e,r)}static isValidIdentifier(t){return md.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sa}static keyField(){return new bt([sa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bt(e)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(nt.fromString(t))}static fromName(t){return new M(nt.fromString(t).popFirst(5))}static empty(){return new M(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new nt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function pd(n,t,e,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ia(n){if(!M.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function oa(n){if(M.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O(12329,{type:typeof n})}function Mt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=zr(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,t){const e={typeString:n};return t&&(e.value=t),e}function Yn(n,t){if(!bc(n))throw new N(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=-62135596800,ca=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ca);return new it(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<aa)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ca}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Yn(t,it._jsonSchema))return new it(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-aa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:_t("string",it._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new it(0,0))}static max(){return new F(new it(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=-1;function gd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new _e(s,M.empty(),t)}function _d(n){return new _e(n.readTime,n.key,zn)}class _e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new _e(F.min(),M.empty(),zn)}static max(){return new _e(F.max(),M.empty(),zn)}}function yd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ed)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((s=>s?C.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++l,l===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new C(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Td(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Hr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=-1;function Gr(n){return n==null}function kr(n){return n===0&&1/n==-1/0}function wd(n){return typeof n=="number"&&Number.isInteger(n)&&!kr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="";function Id(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ua(t)),t=Ad(n.get(e),t);return ua(t)}function Ad(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Rc:e+="";break;default:e+=o}}return e}function ua(n){return n+Rc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ae(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Sc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e){this.comparator=t,this.root=e||At.EMPTY}insert(t,e){return new lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,At.BLACK,null,null))}remove(t){return new lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,At.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _r(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _r(this.root,t,this.comparator,!1)}getReverseIterator(){return new _r(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _r(this.root,t,this.comparator,!0)}}class _r{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class At{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??At.RED,this.left=s??At.EMPTY,this.right=o??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new At(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return At.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new At(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.comparator=t,this.data=new lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ha(this.data.getIterator())}getIteratorFrom(t){return new ha(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof Et)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Et(this.comparator);return e.data=t,e}}class ha{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(bt.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new Et(bt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Cc("Invalid base64 string: "+o):o}})(t);return new Rt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const bd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ye(n){if(Z(!!n,39018),typeof n=="string"){let t=0;const e=bd.exec(n);if(Z(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ee(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="server_timestamp",Vc="__type__",Dc="__previous_value__",Nc="__local_write_time__";function di(n){return(n?.mapValue?.fields||{})[Vc]?.stringValue===Pc}function Kr(n){const t=n.mapValue.fields[Dc];return di(t)?Kr(t):t}function Hn(n){const t=ye(n.mapValue.fields[Nc].timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e,r,s,o,a,l,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const xr="(default)";class Gn{constructor(t,e){this.projectId=t,this.database=e||xr}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===xr}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="__type__",Sd="__max__",yr={mapValue:{}},xc="__vector__",Lr="value";function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?di(n)?4:Pd(n)?9007199254740991:Cd(n)?10:11:O(28295,{value:n})}function Zt(n,t){if(n===t)return!0;const e=ve(n);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Hn(n).isEqual(Hn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ye(s.timestampValue),l=ye(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return Ee(s.bytesValue).isEqual(Ee(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return mt(s.geoPointValue.latitude)===mt(o.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return mt(s.integerValue)===mt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=mt(s.doubleValue),l=mt(o.doubleValue);return a===l?kr(a)===kr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return tn(n.arrayValue.values||[],t.arrayValue.values||[],Zt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(la(a)!==la(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Zt(a[h],l[h])))return!1;return!0})(n,t);default:return O(52216,{left:n})}}function Kn(n,t){return(n.values||[]).find((e=>Zt(e,t)))!==void 0}function en(n,t){if(n===t)return 0;const e=ve(n),r=ve(t);if(e!==r)return K(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=mt(o.integerValue||o.doubleValue),h=mt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return da(n.timestampValue,t.timestampValue);case 4:return da(Hn(n),Hn(t));case 5:return js(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=Ee(o),h=Ee(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=K(l[d],h[d]);if(m!==0)return m}return K(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=K(mt(o.latitude),mt(a.latitude));return l!==0?l:K(mt(o.longitude),mt(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return fa(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},d=l[Lr]?.arrayValue,m=h[Lr]?.arrayValue,y=K(d?.values?.length||0,m?.values?.length||0);return y!==0?y:fa(d,m)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===yr.mapValue&&a===yr.mapValue)return 0;if(o===yr.mapValue)return 1;if(a===yr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=js(h[y],m[y]);if(w!==0)return w;const b=en(l[h[y]],d[m[y]]);if(b!==0)return b}return K(h.length,m.length)})(n.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function da(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=ye(n),r=ye(t),s=K(e.seconds,r.seconds);return s!==0?s:K(e.nanos,r.nanos)}function fa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=en(e[s],r[s]);if(o)return o}return K(e.length,r.length)}function nn(n){return zs(n)}function zs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ye(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ee(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=zs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${zs(e.fields[a])}`;return s+"}"})(n.mapValue):O(61005,{value:n})}function br(n){switch(ve(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Kr(n);return t?16+br(t):16;case 5:return 2*n.stringValue.length;case 6:return Ee(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+br(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ae(r.fields,((o,a)=>{s+=o.length+br(a)})),s})(n.mapValue);default:throw O(13486,{value:n})}}function ma(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Hs(n){return!!n&&"integerValue"in n}function fi(n){return!!n&&"arrayValue"in n}function pa(n){return!!n&&"nullValue"in n}function ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rr(n){return!!n&&"mapValue"in n}function Cd(n){return(n?.mapValue?.fields||{})[kc]?.stringValue===xc}function On(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ae(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=On(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=On(n.arrayValue.values[e]);return t}return{...n}}function Pd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Sd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=On(e)}setAll(t){let e=bt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=On(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ae(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Nt(On(this.value))}}function Lc(n){const t=[];return Ae(n.fields,((e,r)=>{const s=new bt([e]);if(Rr(r)){const o=Lc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Pt(t,0,F.min(),F.min(),F.min(),Nt.empty(),0)}static newFoundDocument(t,e,r,s){return new Pt(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new Pt(t,2,e,F.min(),F.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new Pt(t,3,e,F.min(),F.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e){this.position=t,this.inclusive=e}}function _a(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=en(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ya(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Zt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{}class gt extends Mc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Nd(t,e,r):e==="array-contains"?new Ld(t,r):e==="in"?new Md(t,r):e==="not-in"?new Od(t,r):e==="array-contains-any"?new Fd(t,r):new gt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new kd(t,r):new xd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(en(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(en(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends Mc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new qt(t,e)}matches(t){return Oc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Oc(n){return n.op==="and"}function Fc(n){return Dd(n)&&Oc(n)}function Dd(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function Gs(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(Fc(n))return n.filters.map((t=>Gs(t))).join(",");{const t=n.filters.map((e=>Gs(e))).join(",");return`${n.op}(${t})`}}function Bc(n,t){return n instanceof gt?(function(r,s){return s instanceof gt&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)})(n,t):n instanceof qt?(function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&Bc(a,s.filters[l])),!0):!1})(n,t):void O(19439)}function Uc(n){return n instanceof gt?(function(e){return`${e.field.canonicalString()} ${e.op} ${nn(e.value)}`})(n):n instanceof qt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Uc).join(" ,")+"}"})(n):"Filter"}class Nd extends gt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class kd extends gt{constructor(t,e){super(t,"in",e),this.keys=qc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class xd extends gt{constructor(t,e){super(t,"not-in",e),this.keys=qc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function qc(n,t){return(t.arrayValue?.values||[]).map((e=>M.fromName(e.referenceValue)))}class Ld extends gt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fi(e)&&Kn(e.arrayValue,this.value)}}class Md extends gt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Kn(this.value.arrayValue,e)}}class Od extends gt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Kn(this.value.arrayValue,e)}}class Fd extends gt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Kn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Ea(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Bd(n,t,e,r,s,o,a)}function mi(n){const t=B(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Gs(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Gr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>nn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>nn(r))).join(",")),t.Te=e}return t.Te}function pi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Vd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Bc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ya(n.startAt,t.startAt)&&ya(n.endAt,t.endAt)}function Ks(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ud(n,t,e,r,s,o,a,l){return new hn(n,t,e,r,s,o,a,l)}function Qr(n){return new hn(n)}function va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $c(n){return n.collectionGroup!==null}function Fn(n){const t=B(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Et(bt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Qn(o,r))})),e.has(bt.keyField().canonicalString())||t.Ie.push(new Qn(bt.keyField(),r))}return t.Ie}function Qt(n){const t=B(n);return t.Ee||(t.Ee=qd(t,Fn(n))),t.Ee}function qd(n,t){if(n.limitType==="F")return Ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Qn(s.field,o)}));const e=n.endAt?new Mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mr(n.startAt.position,n.startAt.inclusive):null;return Ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Qs(n,t){const e=n.filters.concat([t]);return new hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ws(n,t,e){return new hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Wr(n,t){return pi(Qt(n),Qt(t))&&n.limitType===t.limitType}function jc(n){return`${mi(Qt(n))}|lt:${n.limitType}`}function Qe(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Uc(s))).join(", ")}]`),Gr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>nn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>nn(s))).join(",")),`Target(${r})`})(Qt(n))}; limitType=${n.limitType})`}function Xr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of Fn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=_a(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,Fn(r),s)||r.endAt&&!(function(a,l,h){const d=_a(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,Fn(r),s))})(n,t)}function $d(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zc(n){return(t,e)=>{let r=!1;for(const s of Fn(n)){const o=jd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function jd(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?en(h,d):O(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Sc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new lt(M.comparator);function re(){return zd}const Hc=new lt(M.comparator);function Nn(...n){let t=Hc;for(const e of n)t=t.insert(e.key,e);return t}function Gc(n){let t=Hc;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function xe(){return Bn()}function Kc(){return Bn()}function Bn(){return new Be((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Hd=new lt(M.comparator),Gd=new Et(M.comparator);function Q(...n){let t=Gd;for(const e of n)t=t.add(e);return t}const Kd=new Et(K);function Qd(){return Kd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kr(t)?"-0":t}}function Qc(n){return{integerValue:""+n}}function Wd(n,t){return wd(t)?Qc(t):gi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this._=void 0}}function Xd(n,t,e){return n instanceof Wn?(function(s,o){const a={fields:{[Vc]:{stringValue:Pc},[Nc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&di(o)&&(o=Kr(o)),o&&(a.fields[Dc]=o),{mapValue:a}})(e,t):n instanceof rn?Xc(n,t):n instanceof Xn?Yc(n,t):(function(s,o){const a=Wc(s,o),l=Ta(a)+Ta(s.Ae);return Hs(a)&&Hs(s.Ae)?Qc(l):gi(s.serializer,l)})(n,t)}function Yd(n,t,e){return n instanceof rn?Xc(n,t):n instanceof Xn?Yc(n,t):e}function Wc(n,t){return n instanceof Or?(function(r){return Hs(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Wn extends Yr{}class rn extends Yr{constructor(t){super(),this.elements=t}}function Xc(n,t){const e=Jc(t);for(const r of n.elements)e.some((s=>Zt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Xn extends Yr{constructor(t){super(),this.elements=t}}function Yc(n,t){let e=Jc(t);for(const r of n.elements)e=e.filter((s=>!Zt(s,r)));return{arrayValue:{values:e}}}class Or extends Yr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ta(n){return mt(n.integerValue||n.doubleValue)}function Jc(n){return fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e){this.field=t,this.transform=e}}function Jd(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof rn&&s instanceof rn||r instanceof Xn&&s instanceof Xn?tn(r.elements,s.elements,Zt):r instanceof Or&&s instanceof Or?Zt(r.Ae,s.Ae):r instanceof Wn&&s instanceof Wn})(n.transform,t.transform)}class Zd{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Sr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Jr{}function tu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new nu(n.key,Ut.none()):new Jn(n.key,n.data,Ut.none());{const e=n.data,r=Nt.empty();let s=new Et(bt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new be(n.key,r,new Lt(s.toArray()),Ut.none())}}function tf(n,t,e){n instanceof Jn?(function(s,o,a){const l=s.value.clone(),h=Ia(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof be?(function(s,o,a){if(!Sr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ia(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(eu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Un(n,t,e,r){return n instanceof Jn?(function(o,a,l,h){if(!Sr(o.precondition,a))return l;const d=o.value.clone(),m=Aa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof be?(function(o,a,l,h){if(!Sr(o.precondition,a))return l;const d=Aa(o.fieldTransforms,h,a),m=a.data;return m.setAll(eu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(n,t,e,r):(function(o,a,l){return Sr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function ef(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Wc(r.transform,s||null);o!=null&&(e===null&&(e=Nt.empty()),e.set(r.field,o))}return e||null}function wa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&tn(r,s,((o,a)=>Jd(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Jn extends Jr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class be extends Jr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function eu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ia(n,t,e){const r=new Map;Z(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Yd(a,l,e[s]))}return r}function Aa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Xd(o,a,t))}return r}class nu extends Jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nf extends Jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&tf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Kc();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=tu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Q())}isEqual(t){return this.batchId===t.batchId&&tn(this.mutations,t.mutations,((e,r)=>wa(e,r)))&&tn(this.baseMutations,t.baseMutations,((e,r)=>wa(e,r)))}}class _i{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Z(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return Hd})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new _i(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,X;function af(n){switch(n){case S.OK:return O(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return O(15467,{code:n})}}function ru(n){if(n===void 0)return ne("GRPC error has no .code"),S.UNKNOWN;switch(n){case pt.OK:return S.OK;case pt.CANCELLED:return S.CANCELLED;case pt.UNKNOWN:return S.UNKNOWN;case pt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case pt.INTERNAL:return S.INTERNAL;case pt.UNAVAILABLE:return S.UNAVAILABLE;case pt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case pt.NOT_FOUND:return S.NOT_FOUND;case pt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case pt.ABORTED:return S.ABORTED;case pt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case pt.DATA_LOSS:return S.DATA_LOSS;default:return O(39323,{code:n})}}(X=pt||(pt={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new pe([4294967295,4294967295],0);function ba(n){const t=cf().encode(n),e=new gc;return e.update(t),new Uint8Array(e.digest())}function Ra(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new pe([e,r],0),new pe([s,o],0)]}class yi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new kn(`Invalid padding: ${e}`);if(r<0)throw new kn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new kn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=pe.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(pe.fromNumber(r)));return s.compare(uf)===1&&(s=new pe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=ba(t),[r,s]=Ra(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new yi(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=ba(t),[r,s]=Ra(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Zn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Zr(F.min(),s,new lt(K),re(),Q())}}class Zn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Zn(r,e,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class su{constructor(t,e){this.targetId=t,this.Ce=e}}class iu{constructor(t,e,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Sa{constructor(){this.ve=0,this.Fe=Ca(),this.Me=Rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Q(),e=Q(),r=Q();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O(38017,{changeType:o})}})),new Zn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Ca()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class lf{constructor(t){this.Ge=t,this.ze=new Map,this.je=re(),this.Je=Er(),this.He=Er(),this.Ye=new lt(K)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:O(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ks(o))if(r===0){const a=new M(o.path);this.et(e,a,Pt.newNoDocument(a,F.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Ee(r).toUint8Array()}catch(h){if(h instanceof Cc)return Ze("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new yi(a,s,o)}catch(h){return Ze(h instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Ks(l.target)){const h=new M(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Pt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=Q();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new Zr(t,e,this.Ye,this.je,r);return this.je=re(),this.Je=Er(),this.He=Er(),this.Ye=new lt(K),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Sa,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new Et(K),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new Et(K),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Sa),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Er(){return new lt(M.comparator)}function Ca(){return new lt(M.comparator)}const hf={asc:"ASCENDING",desc:"DESCENDING"},df={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ff={and:"AND",or:"OR"};class mf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Xs(n,t){return n.useProto3Json||Gr(t)?t:{value:t}}function Fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ou(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function pf(n,t){return Fr(n,t.toTimestamp())}function Wt(n){return Z(!!n,49232),F.fromTimestamp((function(e){const r=ye(e);return new it(r.seconds,r.nanos)})(n))}function Ei(n,t){return Ys(n,t).canonicalString()}function Ys(n,t){const e=(function(s){return new nt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function au(n){const t=nt.fromString(n);return Z(du(t),10190,{key:t.toString()}),t}function Js(n,t){return Ei(n.databaseId,t.path)}function Ns(n,t){const e=au(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(uu(e))}function cu(n,t){return Ei(n.databaseId,t)}function gf(n){const t=au(n);return t.length===4?nt.emptyPath():uu(t)}function Zs(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uu(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pa(n,t,e){return{name:Js(n,t),fields:e.value.mapValue.fields}}function _f(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(Z(m===void 0||typeof m=="string",58123),Rt.fromBase64String(m||"")):(Z(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Rt.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const m=d.code===void 0?S.UNKNOWN:ru(d.code);return new N(m,d.message||"")})(a);e=new iu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ns(n,r.document.name),o=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):F.min(),l=new Nt({mapValue:{fields:r.document.fields}}),h=Pt.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Cr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ns(n,r.document),o=r.readTime?Wt(r.readTime):F.min(),a=Pt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Cr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ns(n,r.document),o=r.removedTargetIds||[];e=new Cr([],o,s,null)}else{if(!("filter"in t))return O(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new of(s,o),l=r.targetId;e=new su(l,a)}}return e}function yf(n,t){let e;if(t instanceof Jn)e={update:Pa(n,t.key,t.value)};else if(t instanceof nu)e={delete:Js(n,t.key)};else if(t instanceof be)e={update:Pa(n,t.key,t.data),updateMask:Sf(t.fieldMask)};else{if(!(t instanceof nf))return O(16599,{Vt:t.type});e={verify:Js(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof Wn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof rn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Or)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw O(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:pf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)})(n,t.precondition)),e}function Ef(n,t){return n&&n.length>0?(Z(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Wt(s.updateTime):Wt(o);return a.isEqual(F.min())&&(a=Wt(o)),new Zd(a,s.transformResults||[])})(e,t)))):[]}function vf(n,t){return{documents:[cu(n,t.path)]}}function Tf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=cu(n,s);const o=(function(d){if(d.length!==0)return hu(qt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:We(w.field),direction:Af(w.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Xs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function wf(n){let t=gf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Z(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(y){const w=lu(y);return w instanceof qt&&Fc(w)?w.getFilters():[w]})(e.where));let a=[];e.orderBy&&(a=(function(y){return y.map((w=>(function(V){return new Qn(Xe(V.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(w)))})(e.orderBy));let l=null;e.limit&&(l=(function(y){let w;return w=typeof y=="object"?y.value:y,Gr(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(y){const w=!!y.before,b=y.values||[];return new Mr(b,w)})(e.startAt));let d=null;return e.endAt&&(d=(function(y){const w=!y.before,b=y.values||[];return new Mr(b,w)})(e.endAt)),Ud(t,s,a,o,l,"F",h,d)}function If(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function lu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Xe(e.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xe(e.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Xe(e.unaryFilter.field);return gt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xe(e.unaryFilter.field);return gt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}})(n):n.fieldFilter!==void 0?(function(e){return gt.create(Xe(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return qt.create(e.compositeFilter.filters.map((r=>lu(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}})(e.compositeFilter.op))})(n):O(30097,{filter:n})}function Af(n){return hf[n]}function bf(n){return df[n]}function Rf(n){return ff[n]}function We(n){return{fieldPath:n.canonicalString()}}function Xe(n){return bt.fromServerFormat(n.fieldPath)}function hu(n){return n instanceof gt?(function(e){if(e.op==="=="){if(ga(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NAN"}};if(pa(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ga(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NOT_NAN"}};if(pa(e.value))return{unaryFilter:{field:We(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:We(e.field),op:bf(e.op),value:e.value}}})(n):n instanceof qt?(function(e){const r=e.getFilters().map((s=>hu(s)));return r.length===1?r[0]:{compositeFilter:{op:Rf(e.op),filters:r}}})(n):O(54877,{filter:n})}function Sf(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function du(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e,r,s,o=F.min(),a=F.min(),l=Rt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new de(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.yt=t}}function Pf(n){const t=wf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ws(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.Cn=new Df}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(_e.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(_e.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Df{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Et(nt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Et(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fu=41943040;class Dt{static withCacheSize(t){return new Dt(t,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(fu,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new sn(0)}static cr(){return new sn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="LruGarbageCollector",Nf=1048576;function Na([n,t],[e,r]){const s=K(n,e);return s===0?K(t,r):s}class kf{constructor(t){this.Ir=t,this.buffer=new Et(Na),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Na(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class xf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){x(Da,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?x(Da,"Ignoring IndexedDB error during garbage collection: ",e):await un(e)}await this.Vr(3e5)}))}}class Lf{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Hr.ce);const r=new kf(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Va)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Va):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s)))).next((y=>(r=y,l=Date.now(),this.removeTargets(t,r,e)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((y=>(d=Date.now(),Ke()<=Y.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y}))))}}function Mf(n,t){return new Lf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.changes=new Be((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Un(r.mutation,s,Lt.empty(),it.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,Q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=Q()){const s=xe();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=Nn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=xe();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,Q())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=re();const a=Bn(),l=(function(){return Bn()})();return e.forEach(((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof be)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Un(m.mutation,d,m.mutation.getFieldMask(),it.now())):a.set(d.key,Lt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>l.set(d,new Ff(m,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=Bn();let s=new lt(((a,l)=>a-l)),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Lt.empty();m=l.applyToLocalView(d,m),r.set(h,m);const y=(s.get(l.batchId)||Q()).add(h);s=s.insert(l.batchId,y)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,y=Kc();m.forEach((w=>{if(!o.has(w)){const b=tu(e.get(w),r.get(w));b!==null&&y.set(w,b),o=o.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):$c(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(xe());let l=zn,h=o;return a.next((d=>C.forEach(d,((m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next((w=>{h=h.insert(m,w)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,Q()))).next((m=>({batchId:l,changes:Gc(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let s=Nn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Nn();return this.indexManager.getCollectionParents(t,o).next((l=>C.forEach(l,(h=>{const d=(function(y,w){return new hn(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((m=>{m.forEach(((y,w)=>{a=a.insert(y,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Pt.newInvalidDocument(m)))}));let l=Nn();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&Un(m.mutation,d,Lt.empty(),it.now()),Xr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return C.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:Pf(s.bundledQuery),readTime:Wt(s.readTime)}})(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.overlays=new lt(M.comparator),this.qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=xe();return C.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.St(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=xe(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new lt(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=xe(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=xe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>l.set(d,m))),!(l.size()>=s)););return C.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new sf(e,r));let o=this.qr.get(e);o===void 0&&(o=Q(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.Qr=new Et(wt.$r),this.Ur=new Et(wt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new wt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new wt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new M(new nt([])),r=new wt(e,t),s=new wt(e,t+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new nt([])),r=new wt(e,t),s=new wt(e,t+1);let o=Q();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new wt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class wt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||K(t.Yr,e.Yr)}static Kr(t,e){return K(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new Et(wt.$r)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new wt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?hi:this.tr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new wt(e,0),s=new wt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Et(K);return e.forEach((s=>{const o=new wt(s,0),a=new wt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),C.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new wt(new M(o),0);let l=new Et(K);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Yr)),!0)}),a),C.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Z(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return C.forEach(e.mutations,(s=>{const o=new wt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new wt(e,0),s=this.Zr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t){this.ri=t,this.docs=(function(){return new lt(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(e))}getEntries(t,e){let r=re();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Pt.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=re();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||yd(_d(m),r)<=0||(s.has(m.key)||Xr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O(9500)}ii(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Hf(this)}getSize(t){return C.resolve(this.size)}}class Hf extends Of{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t){this.persistence=t,this.si=new Be((e=>mi(e)),pi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new vi,this.targetCount=0,this.ai=sn.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),C.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new sn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Pr(e),C.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),C.waitFor(o).next((()=>s))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this.ui={},this.overlays={},this.ci=new Hr(0),this.li=!1,this.li=!0,this.hi=new $f,this.referenceDelegate=t(this),this.Pi=new Gf(this),this.indexManager=new Vf,this.remoteDocumentCache=(function(s){return new zf(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Cf(e),this.Ii=new Uf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new jf(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new Kf(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(t,e){return C.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Kf extends vd{constructor(t){super(),this.currentSequenceNumber=t}}class Ti{constructor(t){this.persistence=t,this.Ri=new vi,this.Vi=null}static mi(t){return new Ti(t)}get fi(){if(this.Vi)return this.Vi;throw O(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(r=>{const s=M.fromPath(r);return this.gi(t,s).next((o=>{o||e.removeEntry(s,F.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return C.or([()=>C.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Br{constructor(t,e){this.persistence=t,this.pi=new Be((r=>Id(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Mf(this,e)}static mi(t,e){return new Br(t,e)}Ei(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return C.forEach(this.pi,((r,s)=>this.br(t,r,s).next((o=>o?C.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((l=>{l||(r++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=br(t.data.value)),e}br(t,e,r){return C.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=Q(),s=Q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new wi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Bl()?8:Td(Ol())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Qf;return this.Ss(t,e,a).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)}))})).next((()=>o.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(Ke()<=Y.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Ke()<=Y.DEBUG&&x("QueryEngine","Query:",Qe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ke()<=Y.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Qt(e))):C.resolve())}ys(t,e){if(va(e))return C.resolve(null);let r=Qt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ws(e,null,"F"),r=Qt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=Q(...o);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,l);return this.Cs(e,d,a,h.readTime)?this.ys(t,Ws(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,s){return va(e)||s.isEqual(F.min())?C.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?C.resolve(null):(Ke()<=Y.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qe(e)),this.vs(t,a,e,gd(s,zn)).next((l=>l)))}))}Ds(t,e){let r=new Et(zc(t));return e.forEach(((s,o)=>{Xr(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return Ke()<=Y.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Qe(e)),this.ps.getDocumentsMatchingQuery(t,e,_e.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="LocalStore",Xf=3e8;class Yf{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new lt(K),this.xs=new Be((o=>mi(o)),pi),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Bf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Jf(n,t,e,r){return new Yf(n,t,e,r)}async function pu(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=Q();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Zf(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,m){const y=d.batch,w=y.keys();let b=C.resolve();return w.forEach((V=>{b=b.next((()=>m.getEntry(h,V))).next((k=>{const P=d.docVersions.get(V);Z(P!==null,48541),k.version.compareTo(P)<0&&(y.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(h,y)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=Q();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function gu(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function tm(n,t){const e=B(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach(((m,y)=>{const w=s.get(y);if(!w)return;l.push(e.Pi.removeMatchingKeys(o,m.removedDocuments,y).next((()=>e.Pi.addMatchingKeys(o,m.addedDocuments,y))));let b=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?b=b.withResumeToken(Rt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(y,b),(function(k,P,U){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Xf?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(w,b,m)&&l.push(e.Pi.updateTargetData(o,b))}));let h=re(),d=Q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(em(o,a,t.documentUpdates).next((m=>{h=m.ks,d=m.qs}))),!r.isEqual(F.min())){const m=e.Pi.getLastRemoteSnapshotVersion(o).next((y=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return C.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=s,o)))}function em(n,t,e){let r=Q(),s=Q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=re();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):x(Ii,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function nm(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=hi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function rm(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((o=>o?(s=o,C.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new de(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function ti(n,t,e){const r=B(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ln(a))throw a;x(Ii,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function ka(n,t,e){const r=B(n);let s=F.min(),o=Q();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const y=B(h),w=y.xs.get(m);return w!==void 0?C.resolve(y.Ms.get(w)):y.Pi.getTargetData(d,m)})(r,a,Qt(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:Q()))).next((l=>(sm(r,$d(t),l),{documents:l,Qs:o})))))}function sm(n,t,e){let r=n.Os.get(t)||F.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class xa{constructor(){this.activeTargetIds=Qd()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class im{constructor(){this.Mo=new xa,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new xa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="ConnectivityMonitor";class Ma{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(La,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){x(La,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr=null;function ei(){return vr===null?vr=(function(){return 268435456+Math.round(2147483648*Math.random())})():vr++,"0x"+vr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RestConnection",am={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cm{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===xr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=ei(),l=this.zo(t,e.toUriEncodedString());x(ks,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(l),m=ai(d);return this.Jo(t,l,h,r,m).then((y=>(x(ks,`Received RPC '${t}' ${a}: `,y),y)),(y=>{throw Ze(ks,`RPC '${t}' ${a} failed with error: `,y,"url: ",l,"request:",r),y}))}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}zo(t,e){const r=am[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class lm extends cm{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=ei();return new Promise(((l,h)=>{const d=new _c;d.setWithCredentials(!0),d.listenOnce(yc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ar.NO_ERROR:const y=d.getResponseJson();x(St,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),l(y);break;case Ar.TIMEOUT:x(St,`RPC '${t}' ${a} timed out`),h(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const w=d.getStatus();if(x(St,`RPC '${t}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b?.error;if(V&&V.status&&V.message){const k=(function(U){const j=U.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(j)>=0?j:S.UNKNOWN})(V.status);h(new N(k,V.message))}else h(new N(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(S.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{x(St,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);x(St,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)}))}T_(t,e,r){const s=ei(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Tc(),l=vc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(St,`Creating RPC '${t}' stream ${s}: ${m}`,h);const y=a.createWebChannel(m,h);this.I_(y);let w=!1,b=!1;const V=new um({Yo:P=>{b?x(St,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(w||(x(St,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),x(St,`RPC '${t}' stream ${s} sending:`,P),y.send(P))},Zo:()=>y.close()}),k=(P,U,j)=>{P.listen(U,(H=>{try{j(H)}catch(ot){setTimeout((()=>{throw ot}),0)}}))};return k(y,Dn.EventType.OPEN,(()=>{b||(x(St,`RPC '${t}' stream ${s} transport opened.`),V.o_())})),k(y,Dn.EventType.CLOSE,(()=>{b||(b=!0,x(St,`RPC '${t}' stream ${s} transport closed`),V.a_(),this.E_(y))})),k(y,Dn.EventType.ERROR,(P=>{b||(b=!0,Ze(St,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),V.a_(new N(S.UNAVAILABLE,"The operation could not be completed")))})),k(y,Dn.EventType.MESSAGE,(P=>{if(!b){const U=P.data[0];Z(!!U,16349);const j=U,H=j?.error||j[0]?.error;if(H){x(St,`RPC '${t}' stream ${s} received error:`,H);const ot=H.status;let tt=(function(g){const _=pt[g];if(_!==void 0)return ru(_)})(ot),at=H.message;tt===void 0&&(tt=S.INTERNAL,at="Unknown error status: "+ot+" with message "+H.message),b=!0,V.a_(new N(tt,at)),y.close()}else x(St,`RPC '${t}' stream ${s} received:`,U),V.u_(U)}})),k(l,Ec.STAT_EVENT,(P=>{P.stat===$s.PROXY?x(St,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===$s.NOPROXY&&x(St,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.__()}),0),V}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n){return new mf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="PersistentStream";class yu{constructor(t,e,r,s,o,a,l,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _u(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return x(Oa,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(x(Oa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hm extends yu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=_f(this.serializer,t),r=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Wt(a.readTime):F.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Zs(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Ks(h)?{documents:vf(o,h)}:{query:Tf(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ou(o,a.resumeToken);const d=Xs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=Fr(o,a.snapshotVersion.toTimestamp());const d=Xs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=If(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Zs(this.serializer),e.removeTarget=t,this.q_(e)}}class dm extends yu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Ef(t.writeResults,t.commitTime),r=Wt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Zs(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>yf(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{}class mm extends fm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,Ys(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())}))}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,Ys(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class pm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ne(e),this.aa=!1):x("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="RemoteStore";class gm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Ue(this)&&(x(Fe,"Restarting streams for network reachability change."),await(async function(h){const d=B(h);d.Ea.add(4),await tr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await es(d)})(this))}))})),this.Ra=new pm(r,s)}}async function es(n){if(Ue(n))for(const t of n.da)await t(!0)}async function tr(n){for(const t of n.da)await t(!1)}function Eu(n,t){const e=B(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Si(e)?Ri(e):dn(e).O_()&&bi(e,t))}function Ai(n,t){const e=B(n),r=dn(e);e.Ia.delete(t),r.O_()&&vu(e,t),e.Ia.size===0&&(r.O_()?r.L_():Ue(e)&&e.Ra.set("Unknown"))}function bi(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}dn(n).Y_(t)}function vu(n,t){n.Va.Ue(t),dn(n).Z_(t)}function Ri(n){n.Va=new lf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),dn(n).start(),n.Ra.ua()}function Si(n){return Ue(n)&&!dn(n).x_()&&n.Ia.size>0}function Ue(n){return B(n).Ea.size===0}function Tu(n){n.Va=void 0}async function _m(n){n.Ra.set("Online")}async function ym(n){n.Ia.forEach(((t,e)=>{bi(n,t)}))}async function Em(n,t){Tu(n),Si(n)?(n.Ra.ha(t),Ri(n)):n.Ra.set("Unknown")}async function vm(n,t,e){if(n.Ra.set("Online"),t instanceof iu&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,t)}catch(r){x(Fe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ur(n,r)}else if(t instanceof Cr?n.Va.Ze(t):t instanceof su?n.Va.st(t):n.Va.tt(t),!e.isEqual(F.min()))try{const r=await gu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(Rt.EMPTY_BYTE_STRING,m.snapshotVersion)),vu(o,h);const y=new de(m.target,h,d,m.sequenceNumber);bi(o,y)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){x(Fe,"Failed to raise snapshot:",r),await Ur(n,r)}}async function Ur(n,t,e){if(!ln(t))throw t;n.Ea.add(1),await tr(n),n.Ra.set("Offline"),e||(e=()=>gu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{x(Fe,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await es(n)}))}function wu(n,t){return t().catch((e=>Ur(n,e,t)))}async function ns(n){const t=B(n),e=Te(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:hi;for(;Tm(t);)try{const s=await nm(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,wm(t,s)}catch(s){await Ur(t,s)}Iu(t)&&Au(t)}function Tm(n){return Ue(n)&&n.Ta.length<10}function wm(n,t){n.Ta.push(t);const e=Te(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Iu(n){return Ue(n)&&!Te(n).x_()&&n.Ta.length>0}function Au(n){Te(n).start()}async function Im(n){Te(n).ra()}async function Am(n){const t=Te(n);for(const e of n.Ta)t.ea(e.mutations)}async function bm(n,t,e){const r=n.Ta.shift(),s=_i.from(r,t,e);await wu(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ns(n)}async function Rm(n,t){t&&Te(n).X_&&await(async function(r,s){if((function(a){return af(a)&&a!==S.ABORTED})(s.code)){const o=r.Ta.shift();Te(r).B_(),await wu(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await ns(r)}})(n,t),Iu(n)&&Au(n)}async function Fa(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),x(Fe,"RemoteStore received new credentials");const r=Ue(e);e.Ea.add(3),await tr(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await es(e)}async function Sm(n,t){const e=B(n);t?(e.Ea.delete(2),await es(e)):t||(e.Ea.add(2),await tr(e),e.Ra.set("Unknown"))}function dn(n){return n.ma||(n.ma=(function(e,r,s){const o=B(e);return o.sa(),new hm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:_m.bind(null,n),t_:ym.bind(null,n),r_:Em.bind(null,n),H_:vm.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Si(n)?Ri(n):n.Ra.set("Unknown")):(await n.ma.stop(),Tu(n))}))),n.ma}function Te(n){return n.fa||(n.fa=(function(e,r,s){const o=B(e);return o.sa(),new dm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Im.bind(null,n),r_:Rm.bind(null,n),ta:Am.bind(null,n),na:bm.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await ns(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Fe,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Ci(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pi(n,t){if(ne("AsyncQueue",`${t}: ${n}`),ln(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{static emptySet(t){return new Je(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Nn(),this.sortedSet=new lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Je)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Je;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.ga=new lt(M.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class on{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new on(t,e,Je.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Pm{constructor(){this.queries=Ua(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=Ua(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new N(S.ABORTED,"Firestore shutting down"))}}function Ua(){return new Be((n=>jc(n)),Wr)}async function Vi(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new Cm,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Pi(a,`Initialization of query '${Qe(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Ni(e)}async function Di(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Vm(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Ni(e)}function Dm(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function Ni(n){n.Ca.forEach((t=>{t.next()}))}var ni,qa;(qa=ni||(ni={})).Ma="default",qa.Cache="cache";class ki{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new on(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=on.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ni.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.key=t}}class Ru{constructor(t){this.key=t}}class Nm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=zc(t),this.tu=new Je(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Ba,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,y)=>{const w=s.get(m),b=Xr(this.query,y)?y:null,V=!!w&&this.mutatedKeys.has(w.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;w&&b?w.data.isEqual(b.data)?V!==k&&(r.track({type:3,doc:b}),P=!0):this.su(w,b)||(r.track({type:2,doc:b}),P=!0,(h&&this.eu(b,h)>0||d&&this.eu(b,d)<0)&&(l=!0)):!w&&b?(r.track({type:0,doc:b}),P=!0):w&&!b&&(r.track({type:1,doc:w}),P=!0,(h||d)&&(l=!0)),P&&(b?(a=a.add(b),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,y)=>(function(b,V){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Rt:P})}};return k(b)-k(V)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new on(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ba,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Q(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new Ru(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new bu(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=Q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return on.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const xi="SyncEngine";class km{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class xm{constructor(t){this.key=t,this.hu=!1}}class Lm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Be((l=>jc(l)),Wr),this.Iu=new Map,this.Eu=new Set,this.du=new lt(M.comparator),this.Au=new Map,this.Ru=new vi,this.Vu={},this.mu=new Map,this.fu=sn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Mm(n,t,e=!0){const r=Nu(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Su(r,t,e,!0),s}async function Om(n,t){const e=Nu(n);await Su(e,t,!0,!1)}async function Su(n,t,e,r){const s=await rm(n.localStore,Qt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Fm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Eu(n.remoteStore,s),l}async function Fm(n,t,e,r,s){n.pu=(y,w,b)=>(async function(k,P,U,j){let H=P.view.ru(U);H.Cs&&(H=await ka(k.localStore,P.query,!1).then((({documents:v})=>P.view.ru(v,H))));const ot=j&&j.targetChanges.get(P.targetId),tt=j&&j.targetMismatches.get(P.targetId)!=null,at=P.view.applyChanges(H,k.isPrimaryClient,ot,tt);return ja(k,P.targetId,at.au),at.snapshot})(n,y,w,b);const o=await ka(n.localStore,t,!0),a=new Nm(t,o.Qs),l=a.ru(o.documents),h=Zn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);ja(n,e,d.au);const m=new km(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Bm(n,t,e){const r=B(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!Wr(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ti(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ai(r.remoteStore,s.targetId),ri(r,s.targetId)})).catch(un)):(ri(r,s.targetId),await ti(r.localStore,s.targetId,!0))}async function Um(n,t){const e=B(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ai(e.remoteStore,r.targetId))}async function qm(n,t,e){const r=Qm(n);try{const s=await(function(a,l){const h=B(a),d=it.now(),m=l.reduce(((b,V)=>b.add(V.key)),Q());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=re(),k=Q();return h.Ns.getEntries(b,m).next((P=>{V=P,V.forEach(((U,j)=>{j.isValidDocument()||(k=k.add(U))}))})).next((()=>h.localDocuments.getOverlayedDocuments(b,V))).next((P=>{y=P;const U=[];for(const j of l){const H=ef(j,y.get(j.key).overlayedDocument);H!=null&&U.push(new be(j.key,H,Lc(H.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,U,l)})).next((P=>{w=P;const U=P.applyToLocalDocumentSet(y,k);return h.documentOverlayCache.saveOverlays(b,P.batchId,U)}))})).then((()=>({batchId:w.batchId,changes:Gc(y)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new lt(K)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,e),await er(r,s.changes),await ns(r.remoteStore)}catch(s){const o=Pi(s,"Failed to persist write");e.reject(o)}}async function Cu(n,t){const e=B(n);try{const r=await tm(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))})),await er(e,r,t)}catch(r){await un(r)}}function $a(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=B(a);h.onlineState=l;let d=!1;h.queries.forEach(((m,y)=>{for(const w of y.Sa)w.va(l)&&(d=!0)})),d&&Ni(h)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $m(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new lt(M.comparator);a=a.insert(o,Pt.newNoDocument(o,F.min()));const l=Q().add(o),h=new Zr(F.min(),new Map,new lt(K),a,l);await Cu(r,h),r.du=r.du.remove(o),r.Au.delete(t),Li(r)}else await ti(r.localStore,t,!1).then((()=>ri(r,t,e))).catch(un)}async function jm(n,t){const e=B(n),r=t.batch.batchId;try{const s=await Zf(e.localStore,t);Vu(e,r,null),Pu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await er(e,s)}catch(s){await un(s)}}async function zm(n,t,e){const r=B(n);try{const s=await(function(a,l){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next((y=>(Z(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(r.localStore,t);Vu(r,t,e),Pu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await er(r,s)}catch(s){await un(s)}}function Pu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Vu(n,t,e){const r=B(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function ri(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||Du(n,r)}))}function Du(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ai(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Li(n))}function ja(n,t,e){for(const r of e)r instanceof bu?(n.Ru.addReference(r.key,t),Hm(n,r)):r instanceof Ru?(x(xi,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Du(n,r.key)):O(19791,{wu:r})}function Hm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(x(xi,"New document in limbo: "+e),n.Eu.add(r),Li(n))}function Li(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new M(nt.fromString(t)),r=n.fu.next();n.Au.set(r,new xm(e)),n.du=n.du.insert(e,r),Eu(n.remoteStore,new de(Qt(Qr(e.path)),r,"TargetPurposeLimboResolution",Hr.ce))}}async function er(n,t,e){const r=B(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const m=d?!d.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){s.push(d);const m=wi.As(h.targetId,d);o.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>C.forEach(d,(w=>C.forEach(w.Es,(b=>m.persistence.referenceDelegate.addReference(y,w.targetId,b))).next((()=>C.forEach(w.ds,(b=>m.persistence.referenceDelegate.removeReference(y,w.targetId,b)))))))))}catch(y){if(!ln(y))throw y;x(Ii,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const b=m.Ms.get(w),V=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(V);m.Ms=m.Ms.insert(w,k)}}})(r.localStore,o))}async function Gm(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){x(xi,"User change. New user:",t.toKey());const r=await pu(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new N(S.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await er(e,r.Ls)}}function Km(n,t){const e=B(n),r=e.Au.get(t);if(r&&r.hu)return Q().add(r.key);{let s=Q();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Nu(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Km.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$m.bind(null,t),t.Pu.H_=Vm.bind(null,t.eventManager),t.Pu.yu=Dm.bind(null,t.eventManager),t}function Qm(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zm.bind(null,t),t}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ts(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Jf(this.persistence,new Wf,t.initialUser,this.serializer)}Cu(t){return new mu(Ti.mi,this.serializer)}Du(t){return new im}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class Wm extends qr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Z(this.persistence.referenceDelegate instanceof Br,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xf(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new mu((r=>Br.mi(r,e)),this.serializer)}}class si{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$a(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gm.bind(null,this.syncEngine),await Sm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Pm})()}createDatastore(t){const e=ts(t.databaseInfo.databaseId),r=(function(o){return new lm(o)})(t.databaseInfo);return(function(o,a,l,h){return new mm(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new gm(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>$a(this.syncEngine,e,0)),(function(){return Ma.v()?new Ma:new om})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,m){const y=new Lm(s,o,a,l,h,d);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=B(e);x(Fe,"RemoteStore shutting down."),r.Ea.add(5),await tr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}si.provider={build:()=>new si};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="FirestoreClient";class Xm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=li.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{x(we,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(x(we,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Pi(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ls(n,t){n.asyncQueue.verifyOperationInProgress(),x(we,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await pu(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function za(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ym(n);x(we,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Fa(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Fa(t.remoteStore,s))),n._onlineComponents=t}async function Ym(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(we,"Using user provided OfflineComponentProvider");try{await Ls(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Ze("Error using user provided cache. Falling back to memory cache: "+e),await Ls(n,new qr)}}else x(we,"Using default OfflineComponentProvider"),await Ls(n,new Wm(void 0));return n._offlineComponents}async function ku(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(we,"Using user provided OnlineComponentProvider"),await za(n,n._uninitializedComponentsProvider._online)):(x(we,"Using default OnlineComponentProvider"),await za(n,new si))),n._onlineComponents}function Jm(n){return ku(n).then((t=>t.syncEngine))}async function $r(n){const t=await ku(n),e=t.eventManager;return e.onListen=Mm.bind(null,t.syncEngine),e.onUnlisten=Bm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Om.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Um.bind(null,t.syncEngine),e}function Zm(n,t,e={}){const r=new te;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const m=new Mi({next:w=>{m.Nu(),a.enqueueAndForget((()=>Di(o,y)));const b=w.docs.has(l);!b&&w.fromCache?d.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&w.fromCache&&h&&h.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new ki(Qr(l.path),m,{includeMetadataChanges:!0,qa:!0});return Vi(o,y)})(await $r(n),n.asyncQueue,t,e,r))),r.promise}function tp(n,t,e={}){const r=new te;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const m=new Mi({next:w=>{m.Nu(),a.enqueueAndForget((()=>Di(o,y))),w.fromCache&&h.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new ki(l,m,{includeMetadataChanges:!0,qa:!0});return Vi(o,y)})(await $r(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="firestore.googleapis.com",Ga=!0;class Ka{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lu,this.ssl=Ga}else this.host=t.host,this.ssl=t.ssl??Ga;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=fu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nf)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}pd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xu(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ka({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ka(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new id;switch(r.type){case"firstParty":return new ud(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Ha.get(e);r&&(x("ComponentProvider","Removing Datastore"),Ha.delete(e),r.terminate())})(this),Promise.resolve()}}function ep(n,t,e,r={}){n=Mt(n,rs);const s=ai(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;s&&(Nl(`https://${l}`),Ml("Firestore",!0)),o.host!==Lu&&o.host!==l&&Ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!qn(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Ct.MOCK_USER;else{d=kl(r.mockUserToken,n._app?.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ct(y)}n._authCredentials=new od(new Ic(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Re(this.firestore,t,this._query)}}class dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Yn(e,dt._jsonSchema))return new dt(t,r||null,new M(nt.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:_t("string",dt._jsonSchemaVersion),referencePath:_t("string")};class ge extends Re{constructor(t,e,r){super(t,e,Qr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new M(t))}withConverter(t){return new ge(this.firestore,t,this._path)}}function Tr(n,t,...e){if(n=Jt(n),Ac("collection","path",t),n instanceof rs){const r=nt.fromString(t,...e);return oa(r),new ge(n,null,r)}{if(!(n instanceof dt||n instanceof ge))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return oa(r),new ge(n.firestore,null,r)}}function xn(n,t,...e){if(n=Jt(n),arguments.length===1&&(t=li.newId()),Ac("doc","path",t),n instanceof rs){const r=nt.fromString(t,...e);return ia(r),new dt(n,null,new M(r))}{if(!(n instanceof dt||n instanceof ge))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return ia(r),new dt(n.firestore,n instanceof ge?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="AsyncQueue";class Wa{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _u(this,"async_queue_retry"),this._c=()=>{const r=xs();r&&x(Qa,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=xs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=xs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new te;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ln(t))throw t;x(Qa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,ne("INTERNAL UNHANDLED ERROR: ",Xa(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Ci.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&O(47125,{Pc:Xa(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Xa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Ie extends rs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Wa,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wa(t),this._firestoreClient=void 0,await t}}}function np(n,t){const e=typeof n=="object"?n:Gh(),r=typeof n=="string"?n:xr,s=qh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Vl("firestore");o&&ep(s,...o)}return s}function ss(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rp(n),n._firestoreClient}function rp(n){const t=n._freezeSettings(),e=(function(s,o,a,l){return new Rd(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,xu(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Xm(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ft(Rt.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ft(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Yn(t,Ft._jsonSchema))return Ft.fromBase64String(t.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:_t("string",Ft._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xt._jsonSchemaVersion}}static fromJSON(t){if(Yn(t,Xt._jsonSchema))return new Xt(t.latitude,t.longitude)}}Xt._jsonSchemaVersion="firestore/geoPoint/1.0",Xt._jsonSchema={type:_t("string",Xt._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Yn(t,Yt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Yt(t.vectorValues);throw new N(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:_t("string",Yt._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=/^__.*__$/;class ip{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new be(t,this.data,this.fieldMask,e,this.fieldTransforms):new Jn(t,this.data,e,this.fieldTransforms)}}class Mu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new be(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ou(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ac:n})}}class os{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new os({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return jr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Ou(this.Ac)&&sp.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class op{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ts(t)}Cc(t,e,r,s=!1){return new os({Ac:t,methodName:e,Dc:r,path:bt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function as(n){const t=n._freezeSettings(),e=ts(n._databaseId);return new op(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Fu(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);Bi("Data must be an object, but it was:",a,r);const l=Bu(r,a);let h,d;if(o.merge)h=new Lt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const w=ii(t,y,e);if(!a.contains(w))throw new N(S.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);qu(m,w)||m.push(w)}h=new Lt(m),d=a.fieldTransforms.filter((y=>h.covers(y.field)))}else h=null,d=a.fieldTransforms;return new ip(new Nt(l),h,d)}class cs extends nr{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof cs}}function ap(n,t,e){return new os({Ac:3,Dc:t.settings.Dc,methodName:n._methodName,fc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Oi extends nr{_toFieldTransform(t){return new Zc(t.path,new Wn)}isEqual(t){return t instanceof Oi}}class Fi extends nr{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=ap(this,t,!0),r=this.vc.map((o=>fn(o,e))),s=new rn(r);return new Zc(t.path,s)}isEqual(t){return t instanceof Fi&&qn(this.vc,t.vc)}}function cp(n,t,e,r){const s=n.Cc(1,t,e);Bi("Data must be an object, but it was:",s,r);const o=[],a=Nt.empty();Ae(r,((h,d)=>{const m=Ui(t,h,e);d=Jt(d);const y=s.yc(m);if(d instanceof cs)o.push(m);else{const w=fn(d,y);w!=null&&(o.push(m),a.set(m,w))}}));const l=new Lt(o);return new Mu(a,l,s.fieldTransforms)}function up(n,t,e,r,s,o){const a=n.Cc(1,t,e),l=[ii(t,r,e)],h=[s];if(o.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)l.push(ii(t,o[w])),h.push(o[w+1]);const d=[],m=Nt.empty();for(let w=l.length-1;w>=0;--w)if(!qu(d,l[w])){const b=l[w];let V=h[w];V=Jt(V);const k=a.yc(b);if(V instanceof cs)d.push(b);else{const P=fn(V,k);P!=null&&(d.push(b),m.set(b,P))}}const y=new Lt(d);return new Mu(m,y,a.fieldTransforms)}function lp(n,t,e,r=!1){return fn(e,n.Cc(r?4:3,t))}function fn(n,t){if(Uu(n=Jt(n)))return Bi("Unsupported field value:",t,n),Bu(n,t);if(n instanceof nr)return(function(r,s){if(!Ou(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=fn(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Fr(s.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fr(s.serializer,o)}}if(r instanceof Xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:ou(s.serializer,r._byteString)};if(r instanceof dt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ei(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yt)return(function(a,l){return{mapValue:{fields:{[kc]:{stringValue:xc},[Lr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return gi(l.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${zr(r)}`)})(n,t)}function Bu(n,t){const e={};return Sc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(n,((r,s)=>{const o=fn(s,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Uu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof Xt||n instanceof Ft||n instanceof dt||n instanceof nr||n instanceof Yt)}function Bi(n,t,e){if(!Uu(e)||!bc(e)){const r=zr(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ii(n,t,e){if((t=Jt(t))instanceof is)return t._internalPath;if(typeof t=="string")return Ui(n,t);throw jr("Field path arguments must be of type string or ",n,!1,void 0,e)}const hp=new RegExp("[~\\*/\\[\\]]");function Ui(n,t,e){if(t.search(hp)>=0)throw jr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new is(...t.split("."))._internalPath}catch{throw jr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function jr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(S.INVALID_ARGUMENT,l+n+h)}function qu(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class dp extends $u{data(){return super.data()}}function qi(n,t){return typeof t=="string"?Ui(n,t):t instanceof is?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $i{}class zu extends $i{}function Ms(n,t,...e){let r=[];t instanceof $i&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof zi)).length,l=o.filter((h=>h instanceof ji)).length;if(a>1||a>0&&l>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ji extends zu{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ji(t,e,r)}_apply(t){const e=this._parse(t);return Hu(t._query,e),new Re(t.firestore,t.converter,Qs(t._query,e))}_parse(t){const e=as(t.firestore);return(function(o,a,l,h,d,m,y){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){tc(y,m);const V=[];for(const k of y)V.push(Za(h,o,k));w={arrayValue:{values:V}}}else w=Za(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||tc(y,m),w=lp(l,a,y,m==="in"||m==="not-in");return gt.create(d,m,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class zi extends $i{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new zi(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:qt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)Hu(a,h),a=Qs(a,h)})(t._query,e),new Re(t.firestore,t.converter,Qs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hi extends zu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Hi(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qn(o,a)})(t._query,this._field,this._direction);return new Re(t.firestore,t.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new hn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Ja(n,t="asc"){const e=t,r=qi("orderBy",n);return Hi._create(r,e)}function Za(n,t,e){if(typeof(e=Jt(e))=="string"){if(e==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$c(t)&&e.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(nt.fromString(e));if(!M.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ma(n,new M(r))}if(e instanceof dt)return ma(n,e._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zr(e)}.`)}function tc(n,t){if(!Array.isArray(n)||n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Hu(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class fp{convertValue(t,e="none"){switch(ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ae(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[Lr].arrayValue?.values?.map((r=>mt(r.doubleValue)));return new Yt(e)}convertGeoPoint(t){return new Xt(mt(t.latitude),mt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Kr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Hn(t));default:return null}}convertTimestamp(t){const e=ye(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=nt.fromString(t);Z(du(r),9688,{name:t});const s=new Gn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||ne(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Ln{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Le extends $u{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(qi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Le._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Le._jsonSchemaVersion="firestore/documentSnapshot/1.0",Le._jsonSchema={type:_t("string",Le._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class Pr extends Le{data(t={}){return super.data(t)}}class Me{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ln(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Pr(this._firestore,this._userDataWriter,r.key,r,new Ln(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new Pr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ln(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new Pr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ln(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:mp(l.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Me._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=li.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function mp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n){n=Mt(n,dt);const t=Mt(n.firestore,Ie);return Zm(ss(t),n._key).then((e=>Ku(t,n,e)))}Me._jsonSchemaVersion="firestore/querySnapshot/1.0",Me._jsonSchema={type:_t("string",Me._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};class Gi extends fp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ft(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}function gp(n){n=Mt(n,Re);const t=Mt(n.firestore,Ie),e=ss(t),r=new Gi(t);return ju(n._query),tp(e,n._query).then((s=>new Me(t,r,n,s)))}function ec(n,t,e){n=Mt(n,dt);const r=Mt(n.firestore,Ie),s=Gu(n.converter,t);return Ki(r,[Fu(as(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ut.none())])}function _p(n,t,e,...r){n=Mt(n,dt);const s=Mt(n.firestore,Ie),o=as(s);let a;return a=typeof(t=Jt(t))=="string"||t instanceof is?up(o,"updateDoc",n._key,t,e,r):cp(o,"updateDoc",n._key,t),Ki(s,[a.toMutation(n._key,Ut.exists(!0))])}function yp(n,t){const e=Mt(n.firestore,Ie),r=xn(n),s=Gu(n.converter,t);return Ki(e,[Fu(as(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then((()=>r))}function nc(n,...t){n=Jt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ya(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Ya(t[r])){const h=t[r];t[r]=h.next?.bind(h),t[r+1]=h.error?.bind(h),t[r+2]=h.complete?.bind(h)}let o,a,l;if(n instanceof dt)a=Mt(n.firestore,Ie),l=Qr(n._key.path),o={next:h=>{t[r]&&t[r](Ku(a,n,h))},error:t[r+1],complete:t[r+2]};else{const h=Mt(n,Re);a=Mt(h.firestore,Ie),l=h._query;const d=new Gi(a);o={next:m=>{t[r]&&t[r](new Me(a,d,h,m))},error:t[r+1],complete:t[r+2]},ju(n._query)}return(function(d,m,y,w){const b=new Mi(w),V=new ki(m,b,y);return d.asyncQueue.enqueueAndForget((async()=>Vi(await $r(d),V))),()=>{b.Nu(),d.asyncQueue.enqueueAndForget((async()=>Di(await $r(d),V)))}})(ss(a),l,s,o)}function Ki(n,t){return(function(r,s){const o=new te;return r.asyncQueue.enqueueAndForget((async()=>qm(await Jm(r),s,o))),o.promise})(ss(n),t)}function Ku(n,t,e){const r=e.docs.get(t._key),s=new Gi(n);return new Le(n,s,t._key,r,new Ln(e.hasPendingWrites,e.fromCache),t.converter)}function Ep(){return new Oi("serverTimestamp")}function vp(...n){return new Fi("arrayUnion",n)}(function(t,e=!0){(function(s){cn=s})(Hh),Nr(new $n("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Ie(new ad(r.getProvider("auth-internal")),new ld(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(d.options.projectId,m)})(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Ye(ea,na,t),Ye(ea,na,"esm2020")})();const Tp={apiKey:"AIzaSyC_JekFZUQ5xpp33viYesstWMWW1IWrjPs",authDomain:"wedding-d16cc.firebaseapp.com",projectId:"wedding-d16cc",storageBucket:"wedding-d16cc.firebasestorage.app",messagingSenderId:"398999128995",appId:"1:398999128995:web:8f76adc5172ba04dbe6816",measurementId:"G-7BZV4Q5649"};class wp{db;constructor(){const t=fc(Tp);this.db=np(t)}async addRsvp(t){const e=(t.firstName||"").trim().toLowerCase().replace(/\s+/g,"_"),r=(t.lastName||"").trim().toLowerCase().replace(/\s+/g,"_"),s=e&&r?`${e}_${r}`:`anon_${crypto.randomUUID()}`;await ec(xn(this.db,"responses",s),t)}async saveFamilyResponse(t){await ec(xn(this.db,"responses",t.familyKey),{familyName:t.familyName,people:t.people})}async getFamilyResponse(t){const e=xn(this.db,"responses",t),r=await pp(e);if(!r.exists())return null;const s=r.data();return{familyKey:t,familyName:s.familyName||"",people:s.people||[]}}async getAllFamilies(){const t=Ms(Tr(this.db,"responses"));return(await gp(t)).docs.map(r=>({key:r.id,name:r.data().familyName||r.id}))}async addFaq(t){await yp(Tr(this.db,"faqs"),{...t,author:t.author.toUpperCase(),createdAt:Ep(),answers:[]})}onFaqs(t){const e=Ms(Tr(this.db,"faqs"),Ja("createdAt","desc"));return nc(e,r=>{const s=r.docs.map(o=>({id:o.id,data:o.data()}));t(s)})}onFaqReplies(t,e){const r=Ms(Tr(this.db,"faqs",t,"replies"),Ja("createdAt","asc"));return nc(r,s=>{const o=s.docs.map(a=>({id:a.id,data:a.data()}));e(o)})}async addFaqAnswer(t,e){const r=xn(this.db,"faqs",t);await _p(r,{answers:vp({author:e.author.toUpperCase(),text:e.text})})}}const wr=new Map;function Ip(n){const t=document.getElementById("faq-form"),e=document.getElementById("faq-status"),r=document.getElementById("faq-list");if(!r)return;const s=document.querySelector(".faq-scroll");s&&s.addEventListener("wheel",h=>{const d=s.scrollTop===0,m=h.deltaY<0;d&&m||h.stopPropagation()},{passive:!0});const o=(h,d=!1)=>{e&&(e.textContent=h,e.classList.remove("ok","err"),e.classList.add(d?"ok":"err"))},a=h=>{r.innerHTML="";for(const{id:d,data:m}of h){const y=document.createElement("div");y.className="faq-card";const w=(m.author??"").toString().trim()||"ANONYMOUS",b=Array.isArray(m.answers)?m.answers:[],V=b.length,k=V<=2,P=wr.has(d)?!!wr.get(d):k;y.innerHTML=`
        <div class="faq-head">
          <div class="faq-meta"><strong>${Ir(w)}</strong></div>
        </div>

        <div class="faq-q">${Ir(m.question)}</div>

        ${V?`
              <div class="faq-answers ${P?"":"collapsed"}">
                <button type="button" class="answers-header" aria-expanded="${P}">
                  <span class="caret${P?" open":""}" aria-hidden="true"></span>
                  <span class="answers-title">Replies (${V})</span>
                </button>
                <div class="answers-body">
                  ${b.map(I=>`
                      <div class="faq-a">
                        <div class="faq-a-head"><strong>${Ir(I.author||"HOST")}</strong></div>
                        <div class="faq-a-body">${Ir(I.text)}</div>
                      </div>
                    `).join("")}
                </div>
              </div>
            `:""}

        <div class="faq-reply-inline">
          <button type="button" class="reply-toggle" aria-label="Reply to question">+ Reply</button>
          <form class="faq-reply-form hidden" data-faq-id="${d}">
            <input class="faq-reply-author" type="text" name="author" placeholder="Name" required />
            <input class="faq-reply-text" type="text" name="text" placeholder="Reply…" required />
            <div class="reply-actions">
              <button class="reply-submit" type="submit">Post</button>
              <button class="reply-cancel" type="button" aria-label="Cancel reply" title="Cancel">×</button>
            </div>
          </form>
        </div>
      `;const U=y.querySelector(".faq-answers"),j=y.querySelector(".answers-header"),H=y.querySelector(".caret");U&&j&&H&&j.addEventListener("click",()=>{const p=!U.classList.toggle("collapsed");wr.set(d,p),j.setAttribute("aria-expanded",String(p)),H.classList.toggle("open",p)});const ot=y.querySelector(".reply-toggle"),tt=y.querySelector(".faq-reply-form"),at=tt.querySelector(".reply-submit"),v=tt.querySelector(".reply-cancel"),g=tt.querySelector(".faq-reply-author"),_=tt.querySelector(".faq-reply-text"),T=()=>{tt.classList.remove("hidden"),ot.style.display="none",g.focus();const I=p=>{p.key==="Escape"&&(p.stopPropagation(),E(!1))};tt.addEventListener("keydown",I),tt._escHandler=I},E=I=>{const p=tt._escHandler;p&&tt.removeEventListener("keydown",p),I&&tt.reset(),tt.classList.add("hidden"),ot.style.display="",ot.focus()};ot.addEventListener("click",T),v.addEventListener("click",()=>E(!0)),tt.addEventListener("submit",async I=>{I.preventDefault(),at.disabled=!0;try{const p=g.value.trim(),rt=_.value.trim();if(!p||!rt)return;U&&(U.classList.remove("collapsed"),j?.setAttribute("aria-expanded","true"),H?.classList.add("open")),wr.set(d,!0),await n.addFaqAnswer(d,{author:p,text:rt}),E(!0)}catch(p){console.error(p)}finally{at.disabled=!1}}),r.appendChild(y)}},l=n.onFaqs(a);if(t){let h=!1;t.addEventListener("submit",async d=>{if(d.preventDefault(),!h){h=!0;try{const m=new FormData(t),y=String(m.get("author")||"").trim(),w=String(m.get("question")||"").trim(),b=Number(sessionStorage.getItem("faq:lastPostTs")||"0"),V=Date.now();if(V-b<5e3){o("You're too fast—give it a sec 🐸",!1);return}if(!w){o("Ask a real question first :)",!1);return}await Ap(n,y,w),sessionStorage.setItem("faq:lastPostTs",String(V)),t.reset(),o("Posted!",!0)}catch(m){console.error(m),o("Couldn't post—try again?",!1)}finally{h=!1}}})}window.addEventListener("beforeunload",()=>l(),{once:!0})}async function Ap(n,t,e){await n.addFaq({author:t,question:e,answers:[]})}function Ir(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}class bp{onRoute;constructor(t){this.onRoute=t.onRoute,window.addEventListener("popstate",()=>this.handlePop())}navigate(t){const e=this.getPath();history.pushState({previous:e},"",t),this.onRoute(this.getPath())}handlePop(){this.onRoute(this.getPath())}getPath(){return window.location.pathname}start(){this.onRoute(this.getPath())}}function Rp(n){const t=document.getElementById("rsvp-form"),e=document.getElementById("rsvp-submit"),r=document.getElementById("add-person-btn"),s=document.getElementById("people-forms-container"),o=document.querySelector(".rsvp-note"),a=document.getElementById("rsvp-cost"),l=document.getElementById("error-modal"),h=document.getElementById("error-message"),d=document.getElementById("close-error-modal"),m=document.getElementById("confirm-modal"),y=document.getElementById("confirm-cancel"),w=document.getElementById("confirm-delete"),b=document.getElementById("preview-modal"),V=document.getElementById("preview-content"),k=document.getElementById("preview-cancel"),P=document.getElementById("preview-confirm"),U=document.getElementById("success-overlay");if(!t||!s||!r||!o||!l||!h||!d||!m||!y||!w||!b||!V||!k||!P||!U)return;let j=0;const H=q=>{h.textContent=q,l.classList.remove("hidden")},ot=()=>{l.classList.add("hidden")},tt=()=>{U.classList.remove("hidden")},at=()=>{U.classList.add("hidden")},v=()=>{m.classList.remove("hidden")},g=()=>{m.classList.add("hidden")},_=()=>{b.classList.remove("hidden")},T=()=>{b.classList.add("hidden")};d.addEventListener("click",ot),l.addEventListener("click",q=>{q.target===l&&ot()}),y.addEventListener("click",g),m.addEventListener("click",q=>{q.target===m&&g()}),k.addEventListener("click",T),b.addEventListener("click",q=>{q.target===b&&T()}),document.addEventListener("keydown",q=>{q.key==="Escape"&&(l.classList.contains("hidden")?m.classList.contains("hidden")?b.classList.contains("hidden")||T():g():ot())});const E={"friday-dinner":0,"saturday-breakfast":50,"saturday-lunch":50,"saturday-dinner":0,"sunday-brunch":0},I=100,p=()=>{let q=0;for(let L=0;L<j;L++){const W=document.querySelector(`[data-person-idx="${L}"]`);if(!W)continue;const $=W.querySelectorAll(`input[name="person-${L}-lodge"]:checked`);q+=$.length*I,W.querySelectorAll(`input[name="person-${L}-meal"]:checked`).forEach(G=>{q+=E[G.value]||0})}return q},rt=()=>{if(!a)return;const q=p();a.textContent=`Total: $${q}`},$t=q=>{const L=q.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');for(const J of L)if(J.value.trim())return!0;const W=q.querySelectorAll('input[type="checkbox"]:not([disabled])');for(const J of W)if(J.checked)return!0;return!!q.querySelector("textarea")?.value.trim()},qe=()=>{const q=s.querySelectorAll(".person-form"),L=q.length===1;q.forEach(W=>{const $=W.querySelector(".remove-person-btn");if(!$)return;const J=$t(W);L&&!J?($.disabled=!0,$.classList.add("disabled")):($.disabled=!1,$.classList.remove("disabled"))})},$e=q=>{const L=j++,W=document.createElement("div");W.className="person-form",W.setAttribute("data-person-idx",String(L)),W.innerHTML=`
      <div class="person-header-section">
        <div class="person-name-inputs">
          <div class="name-input-group">
            <label>First Name <span class="required">*</span></label>
            <input type="text" name="person-${L}-firstName" value="" required />
          </div>
          <div class="name-input-group">
            <label>Last Name <span class="required">*</span></label>
            <input type="text" name="person-${L}-lastName" value="" required />
          </div>
        </div>
        <button type="button" class="remove-person-btn" data-remove-idx="${L}">
          <img src="/images/trash.svg" alt="Remove" class="trash-icon" />
        </button>
      </div>

      <div class="person-details">
        <div class="contact-info-section">
          <label>Email <span class="optional"></span></label>
          <input type="email" name="person-${L}-email" value="" />
          <label>Phone <span class="optional"></span></label>
          <input type="tel" name="person-${L}-phone" value="" />
        </div>

        <div class="rainbow-lodge-section">
          <label class="section-label">Staying at Rainbow Lodge?</label>
          <div class="rainbow-lodge-nights">
            <label class="night-checkbox">
              <input type="checkbox" name="person-${L}-lodge" value="friday"  />
              Friday night
            </label>
            <label class="night-checkbox">
              <input type="checkbox" name="person-${L}-lodge" value="saturday"  />
              Saturday night
            </label>
          </div>
        </div>

        <div class="meals-section">
          <label class="section-label">Joining us for meals?</label>
          <div class="meals-list">
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${L}-meal" value="friday-dinner"  />
              <span>Friday rehearsal dinner <span class="complimentary">(complimentary)</span></span>
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${L}-meal" value="saturday-breakfast"  />
              Saturday breakfast
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${L}-meal" value="saturday-lunch"  />
              Saturday lunch
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${L}-meal" value="saturday-dinner" checked disabled />
              <span>Saturday wedding dinner <span class="complimentary">(complimentary)</span></span>
            </label>
            <label class="meal-checkbox">
              <input type="checkbox" name="person-${L}-meal" value="sunday-brunch"  />
              <span>Sunday brunch <span class="complimentary">(complimentary)</span></span>
            </label>
          </div>
        </div>

        <label class="dietary-toggle-label">
          Dietary Restrictions?
          <input type="checkbox" class="dietary-toggle" data-dietary-idx="${L}"  />
        </label>

        <div class="dietary-options hidden" id="dietary-${L}">
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="vegetarian"  />
            Vegetarian
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="vegan"  />
            Vegan
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="pescatarian"  />
            Pescatarian
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="dairy-free"  />
            Dairy-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="nut-free"  />
            Nut-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="egg-free"  />
            Egg-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="gluten-free"  />
            Gluten-free
          </label>
          <label class="dietary-checkbox">
            <input type="checkbox" name="person-${L}-dietary" value="other"  />
            Other
          </label>
          <div class="dietary-notes hidden" id="dietary-notes-${L}">
            <label>Please specify:</label>
            <textarea name="person-${L}-dietary-notes" rows="2" placeholder="Other dietary restrictions..."></textarea>
          </div>
        </div>

        <div class="notes-section">
          <label>Additional Notes</label>
          <textarea name="person-${L}-notes" rows="3" placeholder="Anything else we should know..."></textarea>
        </div>
      </div>
    `,W.querySelector(".remove-person-btn")?.addEventListener("click",()=>{const ct=$t(W),ie=()=>{const zt=s.querySelectorAll(".person-form").length===1;W.remove(),rt(),zt?$e():qe()};if(ct){v();const Bt=()=>{g(),ie(),w.removeEventListener("click",Bt)};w.addEventListener("click",Bt)}else ie()});const J=W.querySelector(".dietary-toggle"),G=W.querySelector(`#dietary-${L}`);J?.addEventListener("change",()=>{if(J.checked)G?.classList.remove("hidden");else{G?.classList.add("hidden"),G?.querySelectorAll(`input[name="person-${L}-dietary"]`)?.forEach(zt=>{zt.checked=!1});const ie=G?.querySelector(`textarea[name="person-${L}-dietary-notes"]`);ie&&(ie.value=""),W.querySelector(`#dietary-notes-${L}`)?.classList.add("hidden")}});const kt=W.querySelector('input[value="other"]'),vt=W.querySelector(`#dietary-notes-${L}`);kt?.addEventListener("change",()=>{kt.checked?vt?.classList.remove("hidden"):vt?.classList.add("hidden")}),W.querySelectorAll(`input[name="person-${L}-lodge"]`).forEach(ct=>{ct.addEventListener("change",rt)});const It=W.querySelector(`input[name="person-${L}-lodge"][value="friday"]`),Ot=W.querySelector(`input[name="person-${L}-meal"][value="friday-dinner"]`);if(It&&Ot){let ct=!1;It.addEventListener("change",()=>{It.checked?Ot.checked||(Ot.checked=!0,ct=!0,rt()):ct&&(Ot.checked=!1,ct=!1,rt())}),Ot.addEventListener("change",()=>{It.checked&&(ct=!1)}),It.checked&&!Ot.checked&&(Ot.checked=!0,ct=!0)}W.querySelectorAll(`input[name="person-${L}-meal"]`).forEach(ct=>{ct.addEventListener("change",rt)}),W.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="checkbox"], textarea').forEach(ct=>{ct.addEventListener("input",qe),ct.addEventListener("change",qe)}),s.appendChild(W),rt(),qe()},je=()=>{s.innerHTML="",j=0,$e(),rt()};r.addEventListener("click",()=>{$e()}),$e();const Se=()=>{const q=new FormData(t),L=[];return s.querySelectorAll(".person-form").forEach($=>{const J=$.getAttribute("data-person-idx");if(!J)return;const G=String(q.get(`person-${J}-firstName`)??"").trim(),kt=String(q.get(`person-${J}-lastName`)??"").trim(),vt=String(q.get(`person-${J}-email`)??"").trim(),jt=String(q.get(`person-${J}-phone`)??"").trim(),It=[];$.querySelectorAll(`input[name="person-${J}-lodge"]:checked`).forEach(ft=>{It.push(ft.value)});const se=[];se.push("saturday-dinner"),$.querySelectorAll(`input[name="person-${J}-meal"]:checked:not([disabled])`).forEach(ft=>{se.push(ft.value)});const ct=[];$.querySelectorAll(`input[name="person-${J}-dietary"]:checked`).forEach(ft=>{ct.push(ft.value)});const Bt=ct.includes("other")?String(q.get(`person-${J}-dietary-notes`)??"").trim():"",zt=String(q.get(`person-${J}-notes`)??"").trim(),rr=It.length>0,ut={firstName:G,lastName:kt,email:vt,phone:jt,coming:!0,overnight:rr};It.length>0&&(ut.rainbowLodgeNights=It),se.length>0&&(ut.meals=se),ct.length>0&&(ut.dietaryRestrictions=ct),Bt&&(ut.dietaryNotes=Bt),zt&&(ut.notes=zt),L.push(ut)}),L},us=q=>{const L={"friday-dinner":"Friday rehearsal dinner","saturday-breakfast":"Saturday breakfast","saturday-lunch":"Saturday lunch","saturday-dinner":"Saturday wedding dinner","sunday-brunch":"Sunday brunch"},W={vegetarian:"Vegetarian",vegan:"Vegan",pescatarian:"Pescatarian","dairy-free":"Dairy-free","nut-free":"Nut-free","egg-free":"Egg-free","gluten-free":"Gluten-free",other:"Other"};let $="";q.forEach(G=>{if($+='<div class="preview-person">',$+=`<h3>${G.firstName} ${G.lastName}</h3>`,G.email&&($+=`<p><strong>Email:</strong> ${G.email}</p>`),G.phone&&($+=`<p><strong>Phone:</strong> ${G.phone}</p>`),G.rainbowLodgeNights&&G.rainbowLodgeNights.length>0){const vt=G.rainbowLodgeNights.map(jt=>jt.charAt(0).toUpperCase()+jt.slice(1)).join(", ");$+=`<p><strong>Staying at Rainbow Lodge:</strong> ${vt}</p>`}else $+="<p><strong>Staying at Rainbow Lodge:</strong> N/A</p>";const kt=G.meals?.filter(vt=>vt!=="saturday-dinner")||[];if(G.meals&&G.meals.length>0&&kt.length>0){const vt=["friday-dinner","saturday-breakfast","saturday-lunch","saturday-dinner","sunday-brunch"],jt=G.meals.sort((It,Ot)=>vt.indexOf(It)-vt.indexOf(Ot));$+='<p><strong>Meals:</strong></p><ul style="margin: 0.25rem 0 0 1.5rem;">',jt.forEach(It=>{$+=`<li>${L[It]||It}</li>`}),$+="</ul>"}else $+="<p><strong>Meals:</strong> Saturday wedding dinner only</p>";G.dietaryRestrictions&&G.dietaryRestrictions.length>0?($+='<p><strong>Dietary Restrictions:</strong></p><ul style="margin: 0.25rem 0 0 1.5rem;">',G.dietaryRestrictions.forEach(vt=>{$+=`<li>${W[vt]||vt}</li>`}),G.dietaryNotes&&($+=`<li><em>${G.dietaryNotes}</em></li>`),$+="</ul>"):$+="<p><strong>Dietary Restrictions:</strong> N/A</p>",G.notes&&($+=`<p><strong>Notes:</strong> ${G.notes}</p>`),$+="</div>"});const J=p();return $+=`<div class="preview-total">Total Cost: $${J}</div>`,$};t.addEventListener("submit",async q=>{if(q.preventDefault(),!!e)try{const L=Se();if(!L.some(J=>J.email&&J.phone)){H("At least one person needs to provide email and phone");return}const $=us(L);V.innerHTML=$,_()}catch(L){console.error(L),H("Oops—couldn't process your response. Please try again.")}}),P.addEventListener("click",async()=>{if(e){e.disabled=!0,P.disabled=!0;try{const q=Se(),L=Date.now(),$=`${q[0]?.lastName?.toLowerCase().replace(/\s+/g,"_")||"guest"}_${L}`,J=q.map(kt=>`${kt.firstName} ${kt.lastName}`).join(", "),G={familyKey:$,familyName:J,people:q};await n.saveFamilyResponse(G),T(),tt(),setTimeout(()=>{at(),je(),e.disabled=!1,P.disabled=!1},3e3)}catch(q){console.error(q),T(),H("Oops—couldn't save your response. Please try again."),e.disabled=!1,P.disabled=!1}}})}const rc={"/404":"/pages/404.html","/rsvp":"/pages/rsvp.html"},sc=new wp,ic=n=>{Pp(),Dp(),Sp(n),Cp(n),Rp(sc),Ip(sc)};window.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#app"),t=n.innerHTML,e=navigator.userAgent.toLowerCase(),r=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(e),s=window.innerWidth<768||window.innerHeight<600,o="ontouchstart"in window||navigator.maxTouchPoints>0,a=r||s&&o,l=new bp({onRoute:async h=>{if(a&&(h==="/"||h===""||h==="/rsvp")){n.innerHTML=`
          <div class="mobile-warning">
            <div class="mobile-warning-content">
              <h1>Desktop Required</h1>
              <p>Please visit this site on a desktop or laptop computer for the best experience.</p>
              <p>Mobile viewing is not currently supported.</p>
            </div>
          </div>
        `;return}if(h==="/"||h===""){n.innerHTML=t,ic(l);return}else if(rc[h]){const d=await fetch(rc[h]);n.innerHTML=await d.text(),ic(l)}else l.navigate("404")}});l.start()});function Sp(n){const t=document.getElementById("go-to-rsvp");t&&t.addEventListener("click",e=>{e.preventDefault(),n.navigate("/rsvp")})}function Cp(n){const t=document.getElementById("letter-link");t&&t.addEventListener("click",e=>{e.preventDefault(),n.navigate("/rsvp")})}function Pp(){const n=document.querySelectorAll(".section"),t=document.querySelectorAll(".menu-bar-item");if(n.length===0||t.length===0)return;function e(){const r=window.scrollY+window.innerHeight/2;let s=-1;n.forEach((o,a)=>{const l=o.getBoundingClientRect(),h=l.top+window.scrollY,d=h+l.height;r>=h&&r<=d&&(s=a)}),t.forEach((o,a)=>{a===s?o.classList.add("active"):o.classList.remove("active")})}t.forEach(r=>{r.addEventListener("click",s=>{s.preventDefault();const o=r.getAttribute("data-section");if(!o)return;const a=document.getElementById(o);if(!a)return;const l=document.querySelector(".menu-bar")?.getBoundingClientRect().height||0,h=a.offsetTop-l;Vp(h)})}),e(),window.addEventListener("scroll",e)}function Vp(n,t={}){const e=window.scrollY,r=Math.abs(n-e),s=t.baseDuration??700,o=t.minDuration??300,a=t.maxDuration??1400,l=Math.min(a,Math.max(o,r/1e3*s)),h=t.easing??(P=>P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2);if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){window.scrollTo(0,n);return}const m=performance.now(),y=n-e;let w=!1;const b=()=>{w=!0,V()},V=()=>{window.removeEventListener("wheel",b,{passive:!0}),window.removeEventListener("touchstart",b,{passive:!0}),window.removeEventListener("keydown",b)};window.addEventListener("wheel",b,{passive:!0}),window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("keydown",b);function k(P){if(w)return;const U=Math.min(1,(P-m)/l),j=e+y*h(U);window.scrollTo(0,j),U<1?requestAnimationFrame(k):V()}requestAnimationFrame(k)}function Dp(){const n=document.querySelectorAll(".tab-button"),t=document.querySelectorAll(".tab-panel"),e=document.getElementById("prev-tab"),r=document.getElementById("next-tab");if(n.length===0||t.length===0)return;const o=Array.from(n).map(b=>b.getAttribute("data-tab")).filter(Boolean);function a(b){n.forEach(P=>P.classList.remove("active")),t.forEach(P=>P.classList.remove("active"));const V=document.querySelector(`[data-tab="${b}"]`),k=document.getElementById(b);V?.classList.add("active"),k?.classList.add("active"),l(b)}function l(b){const V=o.indexOf(b);e&&(e.disabled=V===0),r&&(r.disabled=V===o.length-1)}function h(){return document.querySelector(".tab-button.active")?.getAttribute("data-tab")||null}function d(){const b=h();if(!b)return;const V=o.indexOf(b);V>0&&a(o[V-1])}function m(){const b=h();if(!b)return;const V=o.indexOf(b);V<o.length-1&&a(o[V+1])}n.forEach(b=>{b.addEventListener("click",V=>{V.preventDefault();const k=b.getAttribute("data-tab");k&&a(k)})}),e&&e.addEventListener("click",b=>{b.preventDefault(),d()}),r&&r.addEventListener("click",b=>{b.preventDefault(),m()});function y(b){const V=document.getElementById("schedule");if(!V)return;const k=V.getBoundingClientRect();k.top>window.innerHeight||k.bottom<0||(b.key==="ArrowLeft"?(b.preventDefault(),d()):b.key==="ArrowRight"&&(b.preventDefault(),m()))}document.addEventListener("keydown",y);const w=h();w&&l(w)}
