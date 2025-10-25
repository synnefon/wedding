(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Sc=()=>{};var Di={};/**
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
 */const Do=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Cc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],c=n[e++],u=n[e++],f=((i&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return t.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,u=c?n[i+1]:0,f=i+2<n.length,d=f?n[i+2]:0,I=o>>2,w=(o&3)<<4|u>>4;let R=(u&15)<<2|d>>6,C=d&63;f||(C=64,c||(R=64)),r.push(e[I],e[w],e[R],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Do(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Cc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||w==null)throw new bc;const R=o<<2|u>>4;if(r.push(R),d!==64){const C=u<<4&240|d>>2;if(r.push(C),w!==64){const V=d<<6&192|w;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pc=function(n){const t=Do(n);return No.encodeByteArray(t,!0)},xn=function(n){return Pc(n).replace(/\./g,"")},Vc=function(n){try{return No.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nc=()=>Dc().__FIREBASE_DEFAULTS__,Oc=()=>{if(typeof process>"u"||typeof Di>"u")return;const n=Di.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Vc(n[1]);return t&&JSON.parse(t)},rs=()=>{try{return Sc()||Nc()||Oc()||kc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mc=n=>rs()?.emulatorHosts?.[n],xc=n=>{const t=Mc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Oo=()=>rs()?.config;/**
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
 */class Lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Bc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[xn(JSON.stringify(e)),xn(JSON.stringify(c)),""].join(".")}const qe={};function Uc(){const n={prod:[],emulator:[]};for(const t of Object.keys(qe))qe[t]?n.emulator.push(t):n.prod.push(t);return n}function jc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ni=!1;function $c(n,t){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||qe[n]===t||qe[n]||Ni)return;qe[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Uc().prod.length>0;function c(){const R=document.getElementById(r);R&&R.remove()}function u(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,C){R.setAttribute("width","24"),R.setAttribute("id",C),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function d(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Ni=!0,c()},R}function I(R,C){R.setAttribute("id",C),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function w(){const R=jc(r),C=e("text"),V=document.getElementById(C)||document.createElement("span"),O=e("learnmore"),D=document.getElementById(O)||document.createElement("a"),U=e("preprendIcon"),$=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const G=R.element;u(G),I(D,O);const Et=d();f($,U),G.append($,V,D,Et),document.body.appendChild(G)}o?(V.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function qc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zc(){const n=rs()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hc(){return!zc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gc(){try{return typeof indexedDB=="object"}catch{return!1}}function Kc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const Wc="FirebaseError";class Ie extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Wc,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],c=o?Qc(o,r):"Error",u=`${this.serviceName}: ${c} (${i}).`;return new Ie(i,u,r)}}function Qc(n,t){return n.replace(Xc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Xc=/\{\$([^}]+)}/g;function Ln(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],c=t[i];if(Oi(o)&&Oi(c)){if(!Ln(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Oi(n){return n!==null&&typeof n=="object"}/**
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
 */function Fn(n){return n&&n._delegate?n._delegate:n}class Xe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class Jc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Lc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zc(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yc(n){return n===Zt?void 0:n}function Zc(n){return n.instantiationMode==="EAGER"}/**
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
 */class tl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Jc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const el={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},nl=B.INFO,rl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},sl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=rl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mo{constructor(t){this.name=t,this._logLevel=nl,this._logHandler=sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?el[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const il=(n,t)=>t.some(e=>n instanceof e);let ki,Mi;function ol(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function al(){return Mi||(Mi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xo=new WeakMap,Br=new WeakMap,Lo=new WeakMap,Dr=new WeakMap,is=new WeakMap;function cl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(jt(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&xo.set(e,n)}).catch(()=>{}),is.set(t,n),t}function ll(n){if(Br.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Br.set(n,t)}let Ur={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Br.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Lo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ul(n){Ur=n(Ur)}function hl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Nr(this),t,...e);return Lo.set(r,t.sort?t.sort():[t]),jt(r)}:al().includes(n)?function(...t){return n.apply(Nr(this),t),jt(xo.get(this))}:function(...t){return jt(n.apply(Nr(this),t))}}function fl(n){return typeof n=="function"?hl(n):(n instanceof IDBTransaction&&ll(n),il(n,ol())?new Proxy(n,Ur):n)}function jt(n){if(n instanceof IDBRequest)return cl(n);if(Dr.has(n))return Dr.get(n);const t=fl(n);return t!==n&&(Dr.set(n,t),is.set(t,n)),t}const Nr=n=>is.get(n);function dl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,t),u=jt(c);return r&&c.addEventListener("upgradeneeded",f=>{r(jt(c.result),f.oldVersion,f.newVersion,jt(c.transaction),f)}),e&&c.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),u.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const pl=["get","getKey","getAll","getAllKeys","count"],ml=["put","add","delete","clear"],Or=new Map;function xi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Or.get(t))return Or.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ml.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pl.includes(e)))return;const o=async function(c,...u){const f=this.transaction(c,i?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),i&&f.done]))[0]};return Or.set(t,o),o}ul(n=>({...n,get:(t,e,r)=>xi(t,e)||n.get(t,e,r),has:(t,e)=>!!xi(t,e)||n.has(t,e)}));/**
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
 */class gl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(_l(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function _l(n){return n.getComponent()?.type==="VERSION"}const jr="@firebase/app",Li="0.14.4";/**
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
 */const kt=new Mo("@firebase/app"),yl="@firebase/app-compat",El="@firebase/analytics-compat",Tl="@firebase/analytics",vl="@firebase/app-check-compat",Il="@firebase/app-check",wl="@firebase/auth",Al="@firebase/auth-compat",Rl="@firebase/database",Sl="@firebase/data-connect",Cl="@firebase/database-compat",bl="@firebase/functions",Pl="@firebase/functions-compat",Vl="@firebase/installations",Dl="@firebase/installations-compat",Nl="@firebase/messaging",Ol="@firebase/messaging-compat",kl="@firebase/performance",Ml="@firebase/performance-compat",xl="@firebase/remote-config",Ll="@firebase/remote-config-compat",Fl="@firebase/storage",Bl="@firebase/storage-compat",Ul="@firebase/firestore",jl="@firebase/ai",$l="@firebase/firestore-compat",ql="firebase",zl="12.4.0";/**
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
 */const $r="[DEFAULT]",Hl={[jr]:"fire-core",[yl]:"fire-core-compat",[Tl]:"fire-analytics",[El]:"fire-analytics-compat",[Il]:"fire-app-check",[vl]:"fire-app-check-compat",[wl]:"fire-auth",[Al]:"fire-auth-compat",[Rl]:"fire-rtdb",[Sl]:"fire-data-connect",[Cl]:"fire-rtdb-compat",[bl]:"fire-fn",[Pl]:"fire-fn-compat",[Vl]:"fire-iid",[Dl]:"fire-iid-compat",[Nl]:"fire-fcm",[Ol]:"fire-fcm-compat",[kl]:"fire-perf",[Ml]:"fire-perf-compat",[xl]:"fire-rc",[Ll]:"fire-rc-compat",[Fl]:"fire-gcs",[Bl]:"fire-gcs-compat",[Ul]:"fire-fst",[$l]:"fire-fst-compat",[jl]:"fire-vertex","fire-js":"fire-js",[ql]:"fire-js-all"};/**
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
 */const Bn=new Map,Gl=new Map,qr=new Map;function Fi(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Un(n){const t=n.name;if(qr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;qr.set(t,n);for(const e of Bn.values())Fi(e,n);for(const e of Gl.values())Fi(e,n);return!0}function Kl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Wl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ql={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new ko("app","Firebase",Ql);/**
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
 */class Xl{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const Jl=zl;function Fo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:$r,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(e||(e=Oo()),!e)throw $t.create("no-options");const o=Bn.get(i);if(o){if(Ln(e,o.options)&&Ln(r,o.config))return o;throw $t.create("duplicate-app",{appName:i})}const c=new tl(i);for(const f of qr.values())c.addComponent(f);const u=new Xl(e,r,c);return Bn.set(i,u),u}function Yl(n=$r){const t=Bn.get(n);if(!t&&n===$r&&Oo())return Fo();if(!t)throw $t.create("no-app",{appName:n});return t}function pe(n,t,e){let r=Hl[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${t}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}Un(new Xe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Zl="firebase-heartbeat-database",tu=1,Je="firebase-heartbeat-store";let kr=null;function Bo(){return kr||(kr=dl(Zl,tu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Je)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),kr}async function eu(n){try{const e=(await Bo()).transaction(Je),r=await e.objectStore(Je).get(Uo(n));return await e.done,r}catch(t){if(t instanceof Ie)kt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t?.message});kt.warn(e.message)}}}async function Bi(n,t){try{const r=(await Bo()).transaction(Je,"readwrite");await r.objectStore(Je).put(t,Uo(n)),await r.done}catch(e){if(e instanceof Ie)kt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e?.message});kt.warn(r.message)}}}function Uo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nu=1024,ru=30;class su{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ou(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ui();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>ru){const i=au(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){kt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ui(),{heartbeatsToSend:e,unsentEntries:r}=iu(this._heartbeatsCache.heartbeats),i=xn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function Ui(){return new Date().toISOString().substring(0,10)}function iu(n,t=nu){const e=[];let r=n.slice();for(const i of n){const o=e.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),ji(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ji(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ou{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gc()?Kc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await eu(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ji(n){return xn(JSON.stringify({version:2,heartbeats:n})).length}function au(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function cu(n){Un(new Xe("platform-logger",t=>new gl(t),"PRIVATE")),Un(new Xe("heartbeat",t=>new su(t),"PRIVATE")),pe(jr,Li,n),pe(jr,Li,"esm2020"),pe("fire-js","")}cu("");var lu="firebase",uu="12.4.0";/**
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
 */pe(lu,uu,"app");var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var os;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.F=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,v){for(var m=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)m[gt-2]=arguments[gt];return p.prototype[_].apply(E,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);const E=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)E[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],_=y.g[2];let v=y.g[3],m;m=p+(v^g&(_^v))+E[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[1]+3905402710&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[2]+606105819&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[5]+1200080426&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[6]+2821735955&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[9]+2336552879&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[10]+4294925233&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[13]+4254626195&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[14]+2792965006&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(_^v&(g^_))+E[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[6]+3225465664&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[11]+643717713&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[10]+38016083&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[15]+3634488961&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[14]+3275163606&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[3]+4107603335&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[2]+4243563512&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[7]+1735328473&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(g^_^v)+E[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[8]+2272392833&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[11]+1839030562&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[4]+1272893353&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[7]+4139469664&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[0]+3936430074&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[3]+3572445317&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[12]+3873151461&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[15]+530742520&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(_^(g|~v))+E[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[7]+1126891415&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[14]+2878612391&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[3]+2399980690&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[10]+4293915773&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[15]+4264355552&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[6]+2734768916&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[11]+3174756917&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[2]+718787259&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,p){p===void 0&&(p=y.length);const g=p-this.blockSize,E=this.C;let _=this.h,v=0;for(;v<p;){if(_==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<p;)if(E[_++]=y.charCodeAt(v++),_==this.blockSize){i(this,E),_=0;break}}else for(;v<p;)if(E[_++]=y[v++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;p=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=p&255,p/=256;for(this.v(y),y=Array(16),p=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[p++]=this.g[g]>>>E&255;return y};function o(y,p){var g=u;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function c(y,p){this.h=p;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;E&&v==p||(g[_]=v,E=!1)}this.g=g}var u={};function f(y){return-128<=y&&y<128?o(y,function(p){return new c([p|0],p<0?-1:0)}):new c([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return w;if(y<0)return D(d(-y));const p=[];let g=1;for(let E=0;y>=g;E++)p[E]=y/g|0,g*=4294967296;return new c(p,0)}function I(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return D(I(y.substring(1),p));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let E=w;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const m=parseInt(y.substring(v,v+_),p);_<8?(_=d(Math.pow(p,_)),E=E.j(_).add(d(m))):(E=E.j(g),E=E.add(d(m)))}return E}var w=f(0),R=f(1),C=f(16777216);n=c.prototype,n.m=function(){if(O(this))return-D(this).m();let y=0,p=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(V(this))return"0";if(O(this))return"-"+D(this).toString(y);const p=d(Math.pow(y,6));var g=this;let E="";for(;;){const _=Et(g,p).g;g=U(g,_.j(p));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,V(g))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function V(y){if(y.h!=0)return!1;for(let p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function O(y){return y.h==-1}n.l=function(y){return y=U(this,y),O(y)?-1:V(y)?0:1};function D(y){const p=y.g.length,g=[];for(let E=0;E<p;E++)g[E]=~y.g[E];return new c(g,~y.h).add(R)}n.abs=function(){return O(this)?D(this):this},n.add=function(y){const p=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=p;_++){let v=E+(this.i(_)&65535)+(y.i(_)&65535),m=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=m>>>16,v&=65535,m&=65535,g[_]=m<<16|v}return new c(g,g[g.length-1]&-2147483648?-1:0)};function U(y,p){return y.add(D(p))}n.j=function(y){if(V(this)||V(y))return w;if(O(this))return O(y)?D(this).j(D(y)):D(D(this).j(y));if(O(y))return D(this.j(D(y)));if(this.l(C)<0&&y.l(C)<0)return d(this.m()*y.m());const p=this.g.length+y.g.length,g=[];for(var E=0;E<2*p;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const v=this.i(E)>>>16,m=this.i(E)&65535,gt=y.i(_)>>>16,Kt=y.i(_)&65535;g[2*E+2*_]+=m*Kt,$(g,2*E+2*_),g[2*E+2*_+1]+=v*Kt,$(g,2*E+2*_+1),g[2*E+2*_+1]+=m*gt,$(g,2*E+2*_+1),g[2*E+2*_+2]+=v*gt,$(g,2*E+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new c(g,0)};function $(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function G(y,p){this.g=y,this.h=p}function Et(y,p){if(V(p))throw Error("division by zero");if(V(y))return new G(w,w);if(O(y))return p=Et(D(y),p),new G(D(p.g),D(p.h));if(O(p))return p=Et(y,D(p)),new G(D(p.g),p.h);if(y.g.length>30){if(O(y)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,E=p;E.l(y)<=0;)g=vt(g),E=vt(E);var _=dt(g,1),v=dt(E,1);for(E=dt(E,2),g=dt(g,2);!V(E);){var m=v.add(E);m.l(y)<=0&&(_=_.add(g),v=m),E=dt(E,1),g=dt(g,1)}return p=U(y,_.j(p)),new G(_,p)}for(_=w;y.l(p)>=0;){for(g=Math.max(1,Math.floor(y.m()/p.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=d(g),m=v.j(p);O(m)||m.l(y)>0;)g-=E,v=d(g),m=v.j(p);V(v)&&(v=R),_=_.add(v),y=U(y,m)}return new G(_,y)}n.B=function(y){return Et(this,y).h},n.and=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)&y.i(E);return new c(g,this.h&y.h)},n.or=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)|y.i(E);return new c(g,this.h|y.h)},n.xor=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)^y.i(E);return new c(g,this.h^y.h)};function vt(y){const p=y.g.length+1,g=[];for(let E=0;E<p;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new c(g,y.h)}function dt(y,p){const g=p>>5;p%=32;const E=y.g.length-g,_=[];for(let v=0;v<E;v++)_[v]=p>0?y.i(v+g)>>>p|y.i(v+g+1)<<32-p:y.i(v+g);return new c(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=I,os=c}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});var Rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jo,$e,$o,Dn,zr,qo,zo,Ho;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rn=="object"&&Rn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in l))break t;l=l[T]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var l=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&l.push([h,a[h]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,l){return s.call.apply(s.bind,arguments)}function d(s,a,l){return d=f,d.apply(null,arguments)}function I(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function w(s,a){function l(){}l.prototype=a.prototype,s.Z=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(h,T,A){for(var P=Array(arguments.length-2),M=2;M<arguments.length;M++)P[M-2]=arguments[M];return a.prototype[T].apply(h,P)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function C(s){const a=s.length;if(a>0){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function V(s,a){for(let h=1;h<arguments.length;h++){const T=arguments[h];var l=typeof T;if(l=l!="object"?l:T?Array.isArray(T)?"array":l:"null",l=="array"||l=="object"&&typeof T.length=="number"){l=s.length||0;const A=T.length||0;s.length=l+A;for(let P=0;P<A;P++)s[l+P]=T[P]}else s.push(T)}}class O{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function D(s){c.setTimeout(()=>{throw s},0)}function U(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class ${constructor(){this.h=this.g=null}add(a,l){const h=G.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var G=new O(()=>new Et,s=>s.reset());class Et{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,dt=!1,y=new $,p=()=>{const s=Promise.resolve(void 0);vt=()=>{s.then(g)}};function g(){for(var s;s=U();){try{s.h.call(s.g)}catch(l){D(l)}var a=G;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}dt=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function gt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}w(gt,_),gt.prototype.init=function(s,a){const l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&gt.Z.h.call(this)},gt.prototype.h=function(){gt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Kt="closure_listenable_"+(Math.random()*1e6|0),Wa=0;function Qa(s,a,l,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=T,this.key=++Wa,this.da=this.fa=!1}function un(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function hn(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function Xa(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function Vs(s){const a={};for(const l in s)a[l]=s[l];return a}const Ds="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ns(s,a){let l,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(l in h)s[l]=h[l];for(let A=0;A<Ds.length;A++)l=Ds[A],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function fn(s){this.src=s,this.g={},this.h=0}fn.prototype.add=function(s,a,l,h,T){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const P=cr(s,a,h,T);return P>-1?(a=s[P],l||(a.fa=!1)):(a=new Qa(a,this.src,A,!!h,T),a.fa=l,s.push(a)),a};function ar(s,a){const l=a.type;if(l in s.g){var h=s.g[l],T=Array.prototype.indexOf.call(h,a,void 0),A;(A=T>=0)&&Array.prototype.splice.call(h,T,1),A&&(un(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function cr(s,a,l,h){for(let T=0;T<s.length;++T){const A=s[T];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return T}return-1}var lr="closure_lm_"+(Math.random()*1e6|0),ur={};function Os(s,a,l,h,T){if(Array.isArray(a)){for(let A=0;A<a.length;A++)Os(s,a[A],l,h,T);return null}return l=xs(l),s&&s[Kt]?s.J(a,l,u(h)?!!h.capture:!1,T):Ja(s,a,l,!1,h,T)}function Ja(s,a,l,h,T,A){if(!a)throw Error("Invalid event type");const P=u(T)?!!T.capture:!!T;let M=fr(s);if(M||(s[lr]=M=new fn(s)),l=M.add(a,l,h,P,A),l.proxy)return l;if(h=Ya(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)v||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(Ms(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ya(){function s(l){return a.call(s.src,s.listener,l)}const a=Za;return s}function ks(s,a,l,h,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)ks(s,a[A],l,h,T);else h=u(h)?!!h.capture:!!h,l=xs(l),s&&s[Kt]?(s=s.i,A=String(a).toString(),A in s.g&&(a=s.g[A],l=cr(a,l,h,T),l>-1&&(un(a[l]),Array.prototype.splice.call(a,l,1),a.length==0&&(delete s.g[A],s.h--)))):s&&(s=fr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=cr(a,l,h,T)),(l=s>-1?a[s]:null)&&hr(l))}function hr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Kt])ar(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(Ms(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=fr(a))?(ar(l,s),l.h==0&&(l.src=null,a[lr]=null)):un(s)}}}function Ms(s){return s in ur?ur[s]:ur[s]="on"+s}function Za(s,a){if(s.da)s=!0;else{a=new gt(a,this);const l=s.listener,h=s.ha||s.src;s.fa&&hr(s),s=l.call(h,a)}return s}function fr(s){return s=s[lr],s instanceof fn?s:null}var dr="__closure_events_fn_"+(Math.random()*1e9>>>0);function xs(s){return typeof s=="function"?s:(s[dr]||(s[dr]=function(a){return s.handleEvent(a)}),s[dr])}function ct(){E.call(this),this.i=new fn(this),this.M=this,this.G=null}w(ct,E),ct.prototype[Kt]=!0,ct.prototype.removeEventListener=function(s,a,l,h){ks(this,s,a,l,h)};function pt(s,a){var l,h=s.G;if(h)for(l=[];h;h=h.G)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var T=a;a=new _(h,s),Ns(a,T)}T=!0;let A,P;if(l)for(P=l.length-1;P>=0;P--)A=a.g=l[P],T=dn(A,h,!0,a)&&T;if(A=a.g=s,T=dn(A,h,!0,a)&&T,T=dn(A,h,!1,a)&&T,l)for(P=0;P<l.length;P++)A=a.g=l[P],T=dn(A,h,!1,a)&&T}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const l=s.g[a];for(let h=0;h<l.length;h++)un(l[h]);delete s.g[a],s.h--}}this.G=null},ct.prototype.J=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},ct.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function dn(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let A=0;A<a.length;++A){const P=a[A];if(P&&!P.da&&P.capture==l){const M=P.listener,tt=P.ha||P.src;P.fa&&ar(s.i,P),T=M.call(tt,h)!==!1&&T}}return T&&!h.defaultPrevented}function tc(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:c.setTimeout(s,a||0)}function Ls(s){s.g=tc(()=>{s.g=null,s.i&&(s.i=!1,Ls(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class ec extends E{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ls(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(s){E.call(this),this.h=s,this.g={}}w(Re,E);var Fs=[];function Bs(s){hn(s.g,function(a,l){this.g.hasOwnProperty(l)&&hr(a)},s),s.g={}}Re.prototype.N=function(){Re.Z.N.call(this),Bs(this)},Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=c.JSON.stringify,nc=c.JSON.parse,rc=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Us(){}function js(){}var Se={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function mr(){_.call(this,"d")}w(mr,_);function gr(){_.call(this,"c")}w(gr,_);var Wt={},$s=null;function pn(){return $s=$s||new ct}Wt.Ia="serverreachability";function qs(s){_.call(this,Wt.Ia,s)}w(qs,_);function Ce(s){const a=pn();pt(a,new qs(a))}Wt.STAT_EVENT="statevent";function zs(s,a){_.call(this,Wt.STAT_EVENT,s),this.stat=a}w(zs,_);function mt(s){const a=pn();pt(a,new zs(a,s))}Wt.Ja="timingevent";function Hs(s,a){_.call(this,Wt.Ja,s),this.size=a}w(Hs,_);function be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Pe(){this.g=!0}Pe.prototype.ua=function(){this.g=!1};function sc(s,a,l,h,T,A){s.info(function(){if(s.g)if(A){var P="",M=A.split("&");for(let q=0;q<M.length;q++){var tt=M[q].split("=");if(tt.length>1){const et=tt[0];tt=tt[1];const Ct=et.split("_");P=Ct.length>=2&&Ct[1]=="type"?P+(et+"="+tt+"&"):P+(et+"=redacted&")}}}else P=null;else P=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+l+`
`+P})}function ic(s,a,l,h,T,A,P){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+l+`
`+A+" "+P})}function le(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+ac(s,l)+(h?" "+h:"")})}function oc(s,a){s.info(function(){return"TIMEOUT: "+a})}Pe.prototype.info=function(){};function ac(s,a){if(!s.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var l=A[s];if(!(l.length<2)){var h=l[1];if(Array.isArray(h)&&!(h.length<1)){var T=h[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<h.length;P++)h[P]=""}}}}return pr(A)}catch{return a}}var mn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ks;function _r(){}w(_r,Us),_r.prototype.g=function(){return new XMLHttpRequest},Ks=new _r;function Ve(s){return encodeURIComponent(String(s))}function cc(s){var a=1;s=s.split(":");const l=[];for(;a>0&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function Mt(s,a,l,h){this.j=s,this.i=a,this.l=l,this.S=h||1,this.V=new Re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ws}function Ws(){this.i=null,this.g="",this.h=!1}var Qs={},yr={};function Er(s,a,l){s.M=1,s.A=_n(St(a)),s.u=l,s.R=!0,Xs(s,null)}function Xs(s,a){s.F=Date.now(),gn(s),s.B=St(s.A);var l=s.B,h=s.S;Array.isArray(h)||(h=[String(h)]),li(l.i,"t",h),s.C=0,l=s.j.L,s.h=new Ws,s.g=Ci(s.j,l?a:null,!s.u),s.P>0&&(s.O=new ec(d(s.Y,s,s.g),s.P)),a=s.V,l=s.g,h=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(Fs[0]=T.toString()),T=Fs);for(let A=0;A<T.length;A++){const P=Os(l,T[A],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?Vs(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Ce(),sc(s.i,s.v,s.B,s.l,s.S,s.u)}Mt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ft(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const M=Ft(this.g),tt=this.g.ya(),q=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||gi(this.g)))){this.K||M!=4||tt==7||(tt==8||q<=0?Ce(3):Ce(2)),Tr(this);var a=this.g.ca();this.X=a;var l=lc(this);if(this.o=a==200,ic(this.i,this.v,this.B,this.l,this.S,M,a),this.o){if(this.U&&!this.L){e:{if(this.g){var h,T=this.g;if((h=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(h)){var A=h;break e}}A=null}if(s=A)le(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vr(this,s);else{this.o=!1,this.m=3,mt(12),Qt(this),De(this);break t}}if(this.R){s=!0;let et;for(;!this.K&&this.C<l.length;)if(et=uc(this,l),et==yr){M==4&&(this.m=4,mt(14),s=!1),le(this.i,this.l,null,"[Incomplete Response]");break}else if(et==Qs){this.m=4,mt(15),le(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else le(this.i,this.l,et,null),vr(this,et);if(Js(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||l.length!=0||this.h.h||(this.m=1,mt(16),s=!1),this.o=this.o&&s,!s)le(this.i,this.l,l,"[Invalid Chunked Response]"),Qt(this),De(this);else if(l.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Pr(P),P.P=!0,mt(11))}}else le(this.i,this.l,l,null),vr(this,l);M==4&&Qt(this),this.o&&!this.K&&(M==4?wi(this.j,this):(this.o=!1,gn(this)))}else Ac(this.g),a==400&&l.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),Qt(this),De(this)}}}catch{}finally{}};function lc(s){if(!Js(s))return s.g.la();const a=gi(s.g);if(a==="")return"";let l="";const h=a.length,T=Ft(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Qt(s),De(s),"";s.h.i=new c.TextDecoder}for(let A=0;A<h;A++)s.h.h=!0,l+=s.h.i.decode(a[A],{stream:!(T&&A==h-1)});return a.length=0,s.h.g+=l,s.C=0,s.h.g}function Js(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function uc(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?yr:(l=Number(a.substring(l,h)),isNaN(l)?Qs:(h+=1,h+l>a.length?yr:(a=a.slice(h,h+l),s.C=h+l,a)))}Mt.prototype.cancel=function(){this.K=!0,Qt(this)};function gn(s){s.T=Date.now()+s.H,Ys(s,s.H)}function Ys(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=be(d(s.aa,s),a)}function Tr(s){s.D&&(c.clearTimeout(s.D),s.D=null)}Mt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(oc(this.i,this.B),this.M!=2&&(Ce(),mt(17)),Qt(this),this.m=2,De(this)):Ys(this,this.T-s)};function De(s){s.j.I==0||s.K||wi(s.j,s)}function Qt(s){Tr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Bs(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function vr(s,a){try{var l=s.j;if(l.I!=0&&(l.g==s||Ir(l.h,s))){if(!s.L&&Ir(l.h,s)&&l.I==3){try{var h=l.Ba.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)In(l),Tn(l);else break t;br(l),mt(18)}}else l.xa=T[1],0<l.xa-l.K&&T[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=be(d(l.Va,l),6e3));ei(l.h)<=1&&l.ta&&(l.ta=void 0)}else Jt(l,11)}else if((s.L||l.g==s)&&In(l),!m(a))for(T=l.Ba.g.parse(a),a=0;a<T.length;a++){let q=T[a];const et=q[0];if(!(et<=l.K))if(l.K=et,q=q[1],l.I==2)if(q[0]=="c"){l.M=q[1],l.ba=q[2];const Ct=q[3];Ct!=null&&(l.ka=Ct,l.j.info("VER="+l.ka));const Yt=q[4];Yt!=null&&(l.za=Yt,l.j.info("SVER="+l.za));const Bt=q[5];Bt!=null&&typeof Bt=="number"&&Bt>0&&(h=1.5*Bt,l.O=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Ut=s.g;if(Ut){const An=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(An){var A=h.h;A.g||An.indexOf("spdy")==-1&&An.indexOf("quic")==-1&&An.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(wr(A,A.h),A.h=null))}if(h.G){const Vr=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Vr&&(h.wa=Vr,H(h.J,h.G,Vr))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),h=l;var P=s;if(h.na=Si(h,h.L?h.ba:null,h.W),P.L){ni(h.h,P);var M=P,tt=h.O;tt&&(M.H=tt),M.D&&(Tr(M),gn(M)),h.g=P}else vi(h);l.i.length>0&&vn(l)}else q[0]!="stop"&&q[0]!="close"||Jt(l,7);else l.I==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Jt(l,7):Cr(l):q[0]!="noop"&&l.l&&l.l.qa(q),l.A=0)}}Ce(4)}catch{}}var hc=class{constructor(s,a){this.g=s,this.map=a}};function Zs(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ti(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ei(s){return s.h?1:s.g?s.g.size:0}function Ir(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function wr(s,a){s.g?s.g.add(a):s.h=a}function ni(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Zs.prototype.cancel=function(){if(this.i=ri(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ri(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.G);return a}return C(s.i)}var si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(s,a){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const h=s[l].indexOf("=");let T,A=null;h>=0?(T=s[l].substring(0,h),A=s[l].substring(h+1)):T=s[l],a(T,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function xt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof xt?(this.l=s.l,Ne(this,s.j),this.o=s.o,this.g=s.g,Oe(this,s.u),this.h=s.h,Ar(this,ui(s.i)),this.m=s.m):s&&(a=String(s).match(si))?(this.l=!1,Ne(this,a[1]||"",!0),this.o=ke(a[2]||""),this.g=ke(a[3]||"",!0),Oe(this,a[4]),this.h=ke(a[5]||"",!0),Ar(this,a[6]||"",!0),this.m=ke(a[7]||"")):(this.l=!1,this.i=new xe(null,this.l))}xt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Me(a,ii,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Me(a,ii,!0),"@"),s.push(Ve(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Me(l,l.charAt(0)=="/"?mc:pc,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Me(l,_c)),s.join("")},xt.prototype.resolve=function(s){const a=St(this);let l=!!s.j;l?Ne(a,s.j):l=!!s.o,l?a.o=s.o:l=!!s.g,l?a.g=s.g:l=s.u!=null;var h=s.h;if(l)Oe(a,s.u);else if(l=!!s.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var T=a.h.lastIndexOf("/");T!=-1&&(h=a.h.slice(0,T+1)+h)}if(T=h,T==".."||T==".")h="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){h=T.lastIndexOf("/",0)==0,T=T.split("/");const A=[];for(let P=0;P<T.length;){const M=T[P++];M=="."?h&&P==T.length&&A.push(""):M==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),h&&P==T.length&&A.push("")):(A.push(M),h=!0)}h=A.join("/")}else h=T}return l?a.h=h:l=s.i.toString()!=="",l?Ar(a,ui(s.i)):l=!!s.m,l&&(a.m=s.m),a};function St(s){return new xt(s)}function Ne(s,a,l){s.j=l?ke(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Oe(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Ar(s,a,l){a instanceof xe?(s.i=a,yc(s.i,s.l)):(l||(a=Me(a,gc)),s.i=new xe(a,s.l))}function H(s,a,l){s.i.set(a,l)}function _n(s){return H(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function ke(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Me(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,dc),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function dc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ii=/[#\/\?@]/g,pc=/[#\?:]/g,mc=/[#\?]/g,gc=/[#\?@]/g,_c=/#/g;function xe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Xt(s){s.g||(s.g=new Map,s.h=0,s.i&&fc(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=xe.prototype,n.add=function(s,a){Xt(this),this.i=null,s=ue(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function oi(s,a){Xt(s),a=ue(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ai(s,a){return Xt(s),a=ue(s,a),s.g.has(a)}n.forEach=function(s,a){Xt(this),this.g.forEach(function(l,h){l.forEach(function(T){s.call(a,T,h,this)},this)},this)};function ci(s,a){Xt(s);let l=[];if(typeof a=="string")ai(s,a)&&(l=l.concat(s.g.get(ue(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)l=l.concat(s[a]);return l}n.set=function(s,a){return Xt(this),this.i=null,s=ue(this,s),ai(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=ci(this,s),s.length>0?String(s[0]):a):a};function li(s,a,l){oi(s,a),l.length>0&&(s.i=null,s.g.set(ue(s,a),C(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let h=0;h<a.length;h++){var l=a[h];const T=Ve(l);l=ci(this,l);for(let A=0;A<l.length;A++){let P=T;l[A]!==""&&(P+="="+Ve(l[A])),s.push(P)}}return this.i=s.join("&")};function ui(s){const a=new xe;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function ue(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function yc(s,a){a&&!s.j&&(Xt(s),s.i=null,s.g.forEach(function(l,h){const T=h.toLowerCase();h!=T&&(oi(this,h),li(this,T,l))},s)),s.j=a}function Ec(s,a){const l=new Pe;if(c.Image){const h=new Image;h.onload=I(Lt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=I(Lt,l,"TestLoadImage: error",!1,a,h),h.onabort=I(Lt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=I(Lt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Tc(s,a){const l=new Pe,h=new AbortController,T=setTimeout(()=>{h.abort(),Lt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?Lt(l,"TestPingServer: ok",!0,a):Lt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(l,"TestPingServer: error",!1,a)})}function Lt(s,a,l,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(l)}catch{}}function vc(){this.g=new rc}function Rr(s){this.i=s.Sb||null,this.h=s.ab||!1}w(Rr,Us),Rr.prototype.g=function(){return new yn(this.i,this.h)};function yn(s,a){ct.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(yn,ct),n=yn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Fe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||c).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Le(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function hi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Le(this):Fe(this),this.readyState==3&&hi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Le(this))},n.Na=function(s){this.g&&(this.response=s,Le(this))},n.ga=function(){this.g&&Le(this)};function Le(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Fe(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Fe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function fi(s){let a="";return hn(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Sr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=fi(l),typeof s=="string"?l!=null&&Ve(l):H(s,a,l))}function Q(s){ct.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Q,ct);var Ic=/^https?$/i,wc=["POST","PUT"];n=Q.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ks.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){di(this,A);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)l.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(Array.prototype.indexOf.call(wc,a,void 0)>=0)||h||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of l)this.g.setRequestHeader(A,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){di(this,A)}};function di(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,pi(s),En(s)}function pi(s){s.A||(s.A=!0,pt(s,"complete"),pt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,pt(this,"complete"),pt(this,"abort"),En(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),En(this,!0)),Q.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mi(this):this.Xa())},n.Xa=function(){mi(this)};function mi(s){if(s.h&&typeof o<"u"){if(s.v&&Ft(s)==4)setTimeout(s.Ca.bind(s),0);else if(pt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=A===0){let P=String(s.D).match(si)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),h=!Ic.test(P?P.toLowerCase():"")}l=h}if(l)pt(s,"complete"),pt(s,"success");else{s.o=6;try{var T=Ft(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",pi(s)}}finally{En(s)}}}}function En(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,a||pt(s,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),nc(a)}};function gi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ac(s){const a={};s=(s.g&&Ft(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(m(s[h]))continue;var l=cc(s[h]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[T]||[];a[T]=A,A.push(l)}Xa(a,function(h){return h.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Be(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function _i(s){this.za=0,this.i=[],this.j=new Pe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Be("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Be("baseRetryDelayMs",5e3,s),this.Za=Be("retryDelaySeedMs",1e4,s),this.Ta=Be("forwardChannelMaxRetries",2,s),this.va=Be("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Zs(s&&s.concurrentRequestLimit),this.Ba=new vc,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_i.prototype,n.ka=8,n.I=1,n.connect=function(s,a,l,h){mt(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.J=Si(this,null,this.W),vn(this)};function Cr(s){if(yi(s),s.I==3){var a=s.V++,l=St(s.J);if(H(l,"SID",s.M),H(l,"RID",a),H(l,"TYPE","terminate"),Ue(s,l),a=new Mt(s,s.j,a),a.M=2,a.A=_n(St(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.A.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.A,l=!0),l||(a.g=Ci(a.j,null),a.g.ea(a.A)),a.F=Date.now(),gn(a)}Ri(s)}function Tn(s){s.g&&(Pr(s),s.g.cancel(),s.g=null)}function yi(s){Tn(s),s.v&&(c.clearTimeout(s.v),s.v=null),In(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&c.clearTimeout(s.m),s.m=null)}function vn(s){if(!ti(s.h)&&!s.m){s.m=!0;var a=s.Ea;vt||p(),dt||(vt(),dt=!0),y.add(a,s),s.D=0}}function Rc(s,a){return ei(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=be(d(s.Ea,s,a),Ai(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new Mt(this,this.j,s);let A=this.o;if(this.U&&(A?(A=Vs(A),Ns(A,this.U)):A=this.U),this.u!==null||this.R||(T.J=A,A=null),this.S)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,a>4096){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ti(this,T,a),l=St(this.J),H(l,"RID",s),H(l,"CVER",22),this.G&&H(l,"X-HTTP-Session-Id",this.G),Ue(this,l),A&&(this.R?a="headers="+Ve(fi(A))+"&"+a:this.u&&Sr(l,this.u,A)),wr(this.h,T),this.Ra&&H(l,"TYPE","init"),this.S?(H(l,"$req",a),H(l,"SID","null"),T.U=!0,Er(T,l,null)):Er(T,l,a),this.I=2}}else this.I==3&&(s?Ei(this,s):this.i.length==0||ti(this.h)||Ei(this))};function Ei(s,a){var l;a?l=a.l:l=s.V++;const h=St(s.J);H(h,"SID",s.M),H(h,"RID",l),H(h,"AID",s.K),Ue(s,h),s.u&&s.o&&Sr(h,s.u,s.o),l=new Mt(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Ti(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),wr(s.h,l),Er(l,h,a)}function Ue(s,a){s.H&&hn(s.H,function(l,h){H(a,h,l)}),s.l&&hn({},function(l,h){H(a,h,l)})}function Ti(s,a,l){l=Math.min(s.i.length,l);const h=s.l?d(s.l.Ka,s.l,s):null;t:{var T=s.i;let M=-1;for(;;){const tt=["count="+l];M==-1?l>0?(M=T[0].g,tt.push("ofs="+M)):M=0:tt.push("ofs="+M);let q=!0;for(let et=0;et<l;et++){var A=T[et].g;const Ct=T[et].map;if(A-=M,A<0)M=Math.max(0,T[et].g-100),q=!1;else try{A="req"+A+"_"||"";try{var P=Ct instanceof Map?Ct:Object.entries(Ct);for(const[Yt,Bt]of P){let Ut=Bt;u(Bt)&&(Ut=pr(Bt)),tt.push(A+Yt+"="+encodeURIComponent(Ut))}}catch(Yt){throw tt.push(A+"type="+encodeURIComponent("_badmap")),Yt}}catch{h&&h(Ct)}}if(q){P=tt.join("&");break t}}P=void 0}return s=s.i.splice(0,l),a.G=s,P}function vi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;vt||p(),dt||(vt(),dt=!0),y.add(a,s),s.A=0}}function br(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=be(d(s.Da,s),Ai(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=be(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),Tn(this),Ii(this))};function Pr(s){s.B!=null&&(c.clearTimeout(s.B),s.B=null)}function Ii(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=St(s.na);H(a,"RID","rpc"),H(a,"SID",s.M),H(a,"AID",s.K),H(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&H(a,"TO",s.ia),H(a,"TYPE","xmlhttp"),Ue(s,a),s.u&&s.o&&Sr(a,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=_n(St(a)),l.u=null,l.R=!0,Xs(l,s)}n.Va=function(){this.C!=null&&(this.C=null,Tn(this),br(this),mt(19))};function In(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function wi(s,a){var l=null;if(s.g==a){In(s),Pr(s),s.g=null;var h=2}else if(Ir(s.h,a))l=a.G,ni(s.h,a),h=1;else return;if(s.I!=0){if(a.o)if(h==1){l=a.u?a.u.length:0,a=Date.now()-a.F;var T=s.D;h=pn(),pt(h,new Hs(h,l)),vn(s)}else vi(s);else if(T=a.m,T==3||T==0&&a.X>0||!(h==1&&Rc(s,a)||h==2&&br(s)))switch(l&&l.length>0&&(a=s.h,a.i=a.i.concat(l)),T){case 1:Jt(s,5);break;case 4:Jt(s,10);break;case 3:Jt(s,6);break;default:Jt(s,2)}}}function Ai(s,a){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*a}function Jt(s,a){if(s.j.info("Error code "+a),a==2){var l=d(s.bb,s),h=s.Ua;const T=!h;h=new xt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ne(h,"https"),_n(h),T?Ec(h.toString(),l):Tc(h.toString(),l)}else mt(2);s.I=0,s.l&&s.l.pa(a),Ri(s),yi(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Ri(s){if(s.I=0,s.ja=[],s.l){const a=ri(s.h);(a.length!=0||s.i.length!=0)&&(V(s.ja,a),V(s.ja,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.oa()}}function Si(s,a,l){var h=l instanceof xt?St(l):new xt(l);if(h.g!="")a&&(h.g=a+"."+h.g),Oe(h,h.u);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const A=new xt(null);h&&Ne(A,h),a&&(A.g=a),T&&Oe(A,T),l&&(A.h=l),h=A}return l=s.G,a=s.wa,l&&a&&H(h,l,a),H(h,"VER",s.ka),Ue(s,h),h}function Ci(s,a,l){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new Q(new Rr({ab:l})):new Q(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bi(){}n=bi.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function wn(){}wn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ct.call(this),this.g=new _i(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new he(this)}w(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Cr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=pr(s),s=l);a.i.push(new hc(a.Ya++,s)),a.I==3&&vn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,Tt.Z.N.call(this)};function Pi(s){mr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}w(Pi,mr);function Vi(){gr.call(this),this.status=1}w(Vi,gr);function he(s){this.g=s}w(he,bi),he.prototype.ra=function(){pt(this.g,"a")},he.prototype.qa=function(s){pt(this.g,new Pi(s))},he.prototype.pa=function(s){pt(this.g,new Vi)},he.prototype.oa=function(){pt(this.g,"b")},wn.prototype.createWebChannel=wn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Ho=function(){return new wn},zo=function(){return pn()},qo=Wt,zr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mn.NO_ERROR=0,mn.TIMEOUT=8,mn.HTTP_ERROR=6,Dn=mn,Gs.COMPLETE="complete",$o=Gs,js.EventType=Se,Se.OPEN="a",Se.CLOSE="b",Se.ERROR="c",Se.MESSAGE="d",ct.prototype.listen=ct.prototype.J,$e=js,Q.prototype.listenOnce=Q.prototype.K,Q.prototype.getLastError=Q.prototype.Ha,Q.prototype.getLastErrorCode=Q.prototype.ya,Q.prototype.getStatus=Q.prototype.ca,Q.prototype.getResponseJson=Q.prototype.La,Q.prototype.getResponseText=Q.prototype.la,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Fa,jo=Q}).apply(typeof Rn<"u"?Rn:typeof self<"u"?self:typeof window<"u"?window:{});const qi="@firebase/firestore",zi="4.9.2";/**
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
 */class ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let we="12.3.0";/**
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
 */const re=new Mo("@firebase/firestore");function fe(){return re.logLevel}function N(n,...t){if(re.logLevel<=B.DEBUG){const e=t.map(as);re.debug(`Firestore (${we}): ${n}`,...e)}}function se(n,...t){if(re.logLevel<=B.ERROR){const e=t.map(as);re.error(`Firestore (${we}): ${n}`,...e)}}function Zn(n,...t){if(re.logLevel<=B.WARN){const e=t.map(as);re.warn(`Firestore (${we}): ${n}`,...e)}}function as(n){if(typeof n=="string")return n;try{/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Go(n,r,e)}function Go(n,t,e){let r=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw se(r),new Error(r)}function X(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Go(t,i,r)}function z(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Ie{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ee{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Ko{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ut.UNAUTHENTICATED)))}shutdown(){}}class fu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class du{constructor(t){this.t=t,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},u=f=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((f=>u(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?u(f):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}}),0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Ko(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new ut(t)}}class pu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new pu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gu{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Hi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _u(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class cs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_u(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function Hr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Mr(i)===Mr(o)?j(i,o):Mr(i)?1:-1}return j(n.length,t.length)}const yu=55296,Eu=57343;function Mr(n){const t=n.charCodeAt(0);return t>=yu&&t<=Eu}function _e(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const Gi="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=bt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),i=bt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?bt.extractNumericId(t).compare(bt.extractNumericId(e)):Hr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return os.fromString(t.substring(4,t.length-2))}}class J extends bt{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new J(e)}static emptyPath(){return new J([])}}const Tu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends bt{construct(t,e,r){return new ot(t,e,r)}static isValidIdentifier(t){return Tu.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gi}static keyField(){return new ot([Gi])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else u==="`"?(c=!c,i++):u!=="."||c?(r+=u,i++):(o(),i++)}if(o(),c)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(J.fromString(t))}static fromName(t){return new x(J.fromString(t).popFirst(5))}static empty(){return new x(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new J(t.slice()))}}/**
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
 */function vu(n,t,e){if(!e)throw new k(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Iu(n,t,e,r){if(t===!0&&r===!0)throw new k(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ki(n){if(!x.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ls(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function Gr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ls(n);throw new k(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Z(n,t){const e={typeString:n};return t&&(e.value=t),e}function rn(n,t){if(!Wo(n))throw new k(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&c!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(b.INVALID_ARGUMENT,e);return!0}/**
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
 */const Wi=-62135596800,Qi=1e6;class W{static now(){return W.fromMillis(Date.now())}static fromDate(t){return W.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Qi);return new W(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Wi)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qi}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:W._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(rn(t,W._jsonSchema))return new W(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Wi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}W._jsonSchemaVersion="firestore/timestamp/1.0",W._jsonSchema={type:Z("string",W._jsonSchemaVersion),seconds:Z("number"),nanoseconds:Z("number")};/**
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new W(0,0))}static max(){return new K(new W(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ye=-1;function wu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new W(e+1,0):new W(e,r));return new qt(i,x.empty(),t)}function Au(n){return new qt(n.readTime,n.key,Ye)}class qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qt(K.min(),x.empty(),Ye)}static max(){return new qt(K.max(),x.empty(),Ye)}}function Ru(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const Su="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function us(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Su)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,c=!1;t.forEach((u=>{++i,u.next((()=>{++o,c&&o===i&&e()}),(f=>r(f)))})),c=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,c=new Array(o);let u=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next((I=>{c[d]=I,++u,u===o&&r(c)}),(I=>i(I)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function bu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class hs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}hs.ce=-1;/**
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
 */const fs=-1;function ds(n){return n==null}function jn(n){return n===0&&1/n==-1/0}function Pu(n){return typeof n=="number"&&Number.isInteger(n)&&!jn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Qo="";function Vu(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Xi(t)),t=Du(n.get(e),t);return Xi(t)}function Du(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Qo:e+="";break;default:e+=o}}return e}function Xi(n){return n+Qo+""}/**
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
 */function Ji(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ae(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Xo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sn(this.root,t,this.comparator,!0)}}class Sn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new st(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Yi(this.data.getIterator())}getIteratorFrom(t){return new Yi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Yi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new at(ot.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Nu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nu("Invalid base64 string: "+o):o}})(t);return new Pt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o})(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const Ou=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=Ou.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ye(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
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
 */const Jo="server_timestamp",Yo="__type__",Zo="__previous_value__",ta="__local_write_time__";function ps(n){return(n?.mapValue?.fields||{})[Yo]?.stringValue===Jo}function ms(n){const t=n.mapValue.fields[Zo];return ps(t)?ms(t):t}function $n(n){const t=ie(n.mapValue.fields[ta].timestampValue);return new W(t.seconds,t.nanos)}/**
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
 */class ku{constructor(t,e,r,i,o,c,u,f,d,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=I}}const qn="(default)";class zn{constructor(t,e){this.projectId=t,this.database=e||qn}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database===qn}isEqual(t){return t instanceof zn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ea="__type__",Mu="__max__",Cn={mapValue:{}},na="__vector__",Kr="value";function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ps(n)?4:Lu(n)?9007199254740991:xu(n)?10:11:L(28295,{value:n})}function Vt(n,t){if(n===t)return!0;const e=oe(n);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return $n(n).isEqual($n(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=ie(i.timestampValue),u=ie(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return ye(i.bytesValue).isEqual(ye(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=it(i.doubleValue),u=it(o.doubleValue);return c===u?jn(c)===jn(u):isNaN(c)&&isNaN(u)}return!1})(n,t);case 9:return _e(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return(function(i,o){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Ji(c)!==Ji(u))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(u[f]===void 0||!Vt(c[f],u[f])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function Ze(n,t){return(n.values||[]).find((e=>Vt(e,t)))!==void 0}function Ee(n,t){if(n===t)return 0;const e=oe(n),r=oe(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return(function(o,c){const u=it(o.integerValue||o.doubleValue),f=it(c.integerValue||c.doubleValue);return u<f?-1:u>f?1:u===f?0:isNaN(u)?isNaN(f)?0:-1:1})(n,t);case 3:return Zi(n.timestampValue,t.timestampValue);case 4:return Zi($n(n),$n(t));case 5:return Hr(n.stringValue,t.stringValue);case 6:return(function(o,c){const u=ye(o),f=ye(c);return u.compareTo(f)})(n.bytesValue,t.bytesValue);case 7:return(function(o,c){const u=o.split("/"),f=c.split("/");for(let d=0;d<u.length&&d<f.length;d++){const I=j(u[d],f[d]);if(I!==0)return I}return j(u.length,f.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,c){const u=j(it(o.latitude),it(c.latitude));return u!==0?u:j(it(o.longitude),it(c.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return to(n.arrayValue,t.arrayValue);case 10:return(function(o,c){const u=o.fields||{},f=c.fields||{},d=u[Kr]?.arrayValue,I=f[Kr]?.arrayValue,w=j(d?.values?.length||0,I?.values?.length||0);return w!==0?w:to(d,I)})(n.mapValue,t.mapValue);case 11:return(function(o,c){if(o===Cn.mapValue&&c===Cn.mapValue)return 0;if(o===Cn.mapValue)return 1;if(c===Cn.mapValue)return-1;const u=o.fields||{},f=Object.keys(u),d=c.fields||{},I=Object.keys(d);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const R=Hr(f[w],I[w]);if(R!==0)return R;const C=Ee(u[f[w]],d[I[w]]);if(C!==0)return C}return j(f.length,I.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Zi(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=ie(n),r=ie(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function to(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ee(e[i],r[i]);if(o)return o}return j(e.length,r.length)}function Te(n){return Wr(n)}function Wr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ie(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ye(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return x.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Wr(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${Wr(e.fields[c])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function Nn(n){switch(oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ms(n);return t?16+Nn(t):16;case 5:return 2*n.stringValue.length;case 6:return ye(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Nn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Ae(r.fields,((o,c)=>{i+=o.length+Nn(c)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function Qr(n){return!!n&&"integerValue"in n}function gs(n){return!!n&&"arrayValue"in n}function On(n){return!!n&&"mapValue"in n}function xu(n){return(n?.mapValue?.fields||{})[ea]?.stringValue===na}function ze(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ae(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=ze(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ze(n.arrayValue.values[e]);return t}return{...n}}function Lu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Mu}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!On(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ze(e)}setAll(t){let e=ot.emptyPath(),r={},i=[];t.forEach(((c,u)=>{if(!e.isImmediateParentOf(u)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=u.popLast()}c?r[u.lastSegment()]=ze(c):i.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());On(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];On(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ae(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new wt(ze(this.value))}}function ra(n){const t=[];return Ae(n.fields,((e,r)=>{const i=new ot([e]);if(On(r)){const o=ra(r.mapValue).fields;if(o.length===0)t.push(i);else for(const c of o)t.push(i.child(c))}else t.push(i)})),new Rt(t)}/**
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
 */class It{constructor(t,e,r,i,o,c,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(t){return new It(t,0,K.min(),K.min(),K.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new It(t,1,e,K.min(),r,i,0)}static newNoDocument(t,e){return new It(t,2,e,K.min(),K.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,K.min(),K.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function eo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],c=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(c.referenceValue),e.key):r=Ee(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function no(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class sa{}class rt extends sa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Uu(t,e,r):e==="array-contains"?new qu(t,r):e==="in"?new zu(t,r):e==="not-in"?new Hu(t,r):e==="array-contains-any"?new Gu(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ju(t,r):new $u(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ee(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Ee(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends sa{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new zt(t,e)}matches(t){return ia(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ia(n){return n.op==="and"}function oa(n){return Bu(n)&&ia(n)}function Bu(n){for(const t of n.filters)if(t instanceof zt)return!1;return!0}function Xr(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Te(n.value);if(oa(n))return n.filters.map((t=>Xr(t))).join(",");{const t=n.filters.map((e=>Xr(e))).join(",");return`${n.op}(${t})`}}function aa(n,t){return n instanceof rt?(function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Vt(r.value,i.value)})(n,t):n instanceof zt?(function(r,i){return i instanceof zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,c,u)=>o&&aa(c,i.filters[u])),!0):!1})(n,t):void L(19439)}function ca(n){return n instanceof rt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Te(e.value)}`})(n):n instanceof zt?(function(e){return e.op.toString()+" {"+e.getFilters().map(ca).join(" ,")+"}"})(n):"Filter"}class Uu extends rt{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class ju extends rt{constructor(t,e){super(t,"in",e),this.keys=la("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class $u extends rt{constructor(t,e){super(t,"not-in",e),this.keys=la("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function la(n,t){return(t.arrayValue?.values||[]).map((e=>x.fromName(e.referenceValue)))}class qu extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gs(e)&&Ze(e.arrayValue,this.value)}}class zu extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ze(this.value.arrayValue,e)}}class Hu extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ze(this.value.arrayValue,e)}}class Gu extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Ze(this.value.arrayValue,r)))}}/**
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
 */class Ku{constructor(t,e=null,r=[],i=[],o=null,c=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=u,this.Te=null}}function ro(n,t=null,e=[],r=[],i=null,o=null,c=null){return new Ku(n,t,e,r,i,o,c)}function _s(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Xr(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),ds(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Te(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Te(r))).join(",")),t.Te=e}return t.Te}function ys(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!aa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!no(n.startAt,t.startAt)&&no(n.endAt,t.endAt)}/**
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
 */class tr{constructor(t,e=null,r=[],i=[],o=null,c="F",u=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Wu(n,t,e,r,i,o,c,u){return new tr(n,t,e,r,i,o,c,u)}function Qu(n){return new tr(n)}function so(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xu(n){return n.collectionGroup!==null}function He(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new at(ot.comparator);return c.filters.forEach((f=>{f.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Gn(o,r))})),e.has(ot.keyField().canonicalString())||t.Ie.push(new Gn(ot.keyField(),r))}return t.Ie}function ne(n){const t=z(n);return t.Ee||(t.Ee=Ju(t,He(n))),t.Ee}function Ju(n,t){if(n.limitType==="F")return ro(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Gn(i.field,o)}));const e=n.endAt?new Hn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hn(n.startAt.position,n.startAt.inclusive):null;return ro(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Jr(n,t,e){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ua(n,t){return ys(ne(n),ne(t))&&n.limitType===t.limitType}function ha(n){return`${_s(ne(n))}|lt:${n.limitType}`}function je(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>ca(i))).join(", ")}]`),ds(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Te(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Te(i))).join(",")),`Target(${r})`})(ne(n))}; limitType=${n.limitType})`}function Es(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of He(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(c,u,f){const d=eo(c,u,f);return c.inclusive?d<=0:d<0})(r.startAt,He(r),i)||r.endAt&&!(function(c,u,f){const d=eo(c,u,f);return c.inclusive?d>=0:d>0})(r.endAt,He(r),i))})(n,t)}function Yu(n){return(t,e)=>{let r=!1;for(const i of He(n)){const o=Zu(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Zu(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):(function(o,c,u){const f=c.data.field(o),d=u.data.field(o);return f!==null&&d!==null?Ee(f,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Xo(this.inner)}size(){return this.innerSize}}/**
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
 */const th=new yt(x.comparator);function Kn(){return th}const fa=new yt(x.comparator);function bn(...n){let t=fa;for(const e of n)t=t.insert(e.key,e);return t}function da(n){let t=fa;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function te(){return Ge()}function pa(){return Ge()}function Ge(){return new ae((n=>n.toString()),((n,t)=>n.isEqual(t)))}const eh=new yt(x.comparator),nh=new at(x.comparator);function ht(...n){let t=nh;for(const e of n)t=t.add(e);return t}const rh=new at(j);function sh(){return rh}/**
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
 */function Ts(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jn(t)?"-0":t}}function ma(n){return{integerValue:""+n}}function ih(n,t){return Pu(t)?ma(t):Ts(n,t)}/**
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
 */class er{constructor(){this._=void 0}}function oh(n,t,e){return n instanceof Wn?(function(i,o){const c={fields:{[Yo]:{stringValue:Jo},[ta]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ps(o)&&(o=ms(o)),o&&(c.fields[Zo]=o),{mapValue:c}})(e,t):n instanceof tn?_a(n,t):n instanceof en?ya(n,t):(function(i,o){const c=ga(i,o),u=io(c)+io(i.Ae);return Qr(c)&&Qr(i.Ae)?ma(u):Ts(i.serializer,u)})(n,t)}function ah(n,t,e){return n instanceof tn?_a(n,t):n instanceof en?ya(n,t):e}function ga(n,t){return n instanceof Qn?(function(r){return Qr(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Wn extends er{}class tn extends er{constructor(t){super(),this.elements=t}}function _a(n,t){const e=Ea(t);for(const r of n.elements)e.some((i=>Vt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class en extends er{constructor(t){super(),this.elements=t}}function ya(n,t){let e=Ea(t);for(const r of n.elements)e=e.filter((i=>!Vt(i,r)));return{arrayValue:{values:e}}}class Qn extends er{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function io(n){return it(n.integerValue||n.doubleValue)}function Ea(n){return gs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ch(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof tn&&i instanceof tn||r instanceof en&&i instanceof en?_e(r.elements,i.elements,Vt):r instanceof Qn&&i instanceof Qn?Vt(r.Ae,i.Ae):r instanceof Wn&&i instanceof Wn})(n.transform,t.transform)}class lh{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class nr{}function Ta(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ia(n.key,Dt.none()):new on(n.key,n.data,Dt.none());{const e=n.data,r=wt.empty();let i=new at(ot.comparator);for(let o of t.fields)if(!i.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new ce(n.key,r,new Rt(i.toArray()),Dt.none())}}function uh(n,t,e){n instanceof on?(function(i,o,c){const u=i.value.clone(),f=ao(i.fieldTransforms,o,c.transformResults);u.setAll(f),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()})(n,t,e):n instanceof ce?(function(i,o,c){if(!kn(i.precondition,o))return void o.convertToUnknownDocument(c.version);const u=ao(i.fieldTransforms,o,c.transformResults),f=o.data;f.setAll(va(i)),f.setAll(u),o.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,t,e):(function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()})(0,t,e)}function Ke(n,t,e,r){return n instanceof on?(function(o,c,u,f){if(!kn(o.precondition,c))return u;const d=o.value.clone(),I=co(o.fieldTransforms,f,c);return d.setAll(I),c.convertToFoundDocument(c.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof ce?(function(o,c,u,f){if(!kn(o.precondition,c))return u;const d=co(o.fieldTransforms,f,c),I=c.data;return I.setAll(va(o)),I.setAll(d),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(n,t,e,r):(function(o,c,u){return kn(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u})(n,t,e)}function hh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=ga(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function oo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_e(r,i,((o,c)=>ch(o,c)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class on extends nr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends nr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function va(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function ao(n,t,e){const r=new Map;X(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],c=o.transform,u=t.data.field(o.field);r.set(o.field,ah(c,u,e[i]))}return r}function co(n,t,e){const r=new Map;for(const i of n){const o=i.transform,c=e.data.field(i.field);r.set(i.field,oh(o,c,t))}return r}class Ia extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fh extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&uh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ke(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ke(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pa();return this.mutations.forEach((i=>{const o=t.get(i.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=e.has(i.key)?null:u;const f=Ta(c,u);f!==null&&r.set(i.key,f),c.isValidDocument()||c.convertToNoDocument(K.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ht())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,((e,r)=>oo(e,r)))&&_e(this.baseMutations,t.baseMutations,((e,r)=>oo(e,r)))}}class vs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){X(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return eh})();const o=t.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new vs(t,e,r,i)}}/**
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
 */class ph{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Y,F;function mh(n){switch(n){case b.OK:return L(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function gh(n){if(n===void 0)return se("GRPC error has no .code"),b.UNKNOWN;switch(n){case Y.OK:return b.OK;case Y.CANCELLED:return b.CANCELLED;case Y.UNKNOWN:return b.UNKNOWN;case Y.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Y.INTERNAL:return b.INTERNAL;case Y.UNAVAILABLE:return b.UNAVAILABLE;case Y.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Y.NOT_FOUND:return b.NOT_FOUND;case Y.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Y.ABORTED:return b.ABORTED;case Y.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Y.DATA_LOSS:return b.DATA_LOSS;default:return L(39323,{code:n})}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new os([4294967295,4294967295],0);class _h{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Eh(n,t){return Yr(n,t.toTimestamp())}function me(n){return X(!!n,49232),K.fromTimestamp((function(e){const r=ie(e);return new W(r.seconds,r.nanos)})(n))}function wa(n,t){return Zr(n,t).canonicalString()}function Zr(n,t){const e=(function(i){return new J(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Th(n){const t=J.fromString(n);return X(bh(t),10190,{key:t.toString()}),t}function ts(n,t){return wa(n.databaseId,t.path)}function vh(n){const t=Th(n);return t.length===4?J.emptyPath():wh(t)}function Ih(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wh(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lo(n,t,e){return{name:ts(n,t),fields:e.value.mapValue.fields}}function Ah(n,t){let e;if(t instanceof on)e={update:lo(n,t.key,t.value)};else if(t instanceof Ia)e={delete:ts(n,t.key)};else if(t instanceof ce)e={update:lo(n,t.key,t.data),updateMask:Ch(t.fieldMask)};else{if(!(t instanceof fh))return L(16599,{Vt:t.type});e={verify:ts(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,c){const u=c.transform;if(u instanceof Wn)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof tn)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof en)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Qn)return{fieldPath:c.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:c.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Eh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function Rh(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map((e=>(function(i,o){let c=i.updateTime?me(i.updateTime):me(o);return c.isEqual(K.min())&&(c=me(o)),new lh(c,i.transformResults||[])})(e,t)))):[]}function Sh(n){let t=vh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){X(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=(function(w){const R=Aa(w);return R instanceof zt&&oa(R)?R.getFilters():[R]})(e.where));let c=[];e.orderBy&&(c=(function(w){return w.map((R=>(function(V){return new Gn(de(V.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(R)))})(e.orderBy));let u=null;e.limit&&(u=(function(w){let R;return R=typeof w=="object"?w.value:w,ds(R)?null:R})(e.limit));let f=null;e.startAt&&(f=(function(w){const R=!!w.before,C=w.values||[];return new Hn(C,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(w){const R=!w.before,C=w.values||[];return new Hn(C,R)})(e.endAt)),Wu(t,i,c,o,u,"F",f,d)}function Aa(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=de(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=de(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=de(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=de(e.unaryFilter.field);return rt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return rt.create(de(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return zt.create(e.compositeFilter.filters.map((r=>Aa(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function de(n){return ot.fromServerFormat(n.fieldPath)}function Ch(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ph{constructor(t){this.yt=t}}function Vh(n){const t=Sh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jr(t,t.limit,"L"):t}/**
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
 */class Dh{constructor(){this.Cn=new Nh}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(qt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Nh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new at(J.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(J.comparator)).toArray()}}/**
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
 */const uo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ra=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Ra,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class ve{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ve(0)}static cr(){return new ve(-1)}}/**
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
 */const ho="LruGarbageCollector",Oh=1048576;function fo([n,t],[e,r]){const i=j(n,e);return i===0?j(t,r):i}class kh{constructor(t){this.Ir=t,this.buffer=new at(fo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();fo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Mh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(ho,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){sn(e)?N(ho,"Ignoring IndexedDB error during garbage collection: ",e):await us(e)}await this.Vr(3e5)}))}}class xh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(hs.ce);const r=new kh(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(uo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,c,u,f,d;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,c=Date.now(),this.nthSequenceNumber(t,i)))).next((w=>(r=w,u=Date.now(),this.removeTargets(t,r,e)))).next((w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,r)))).next((w=>(d=Date.now(),fe()<=B.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(u-c)+`ms
	Removed ${o} targets in `+(f-u)+`ms
	Removed ${w} documents in `+(d-f)+`ms
Total Duration: ${d-I}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w}))))}}function Lh(n,t){return new xh(n,t)}/**
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
 */class Fh{constructor(){this.changes=new ae((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Bh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Uh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&Ke(r.mutation,i,Rt.empty(),W.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,ht()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=ht()){const i=te();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let c=bn();return o.forEach(((u,f)=>{c=c.insert(u,f.overlayedDocument)})),c}))))}getOverlayedDocuments(t,e){const r=te();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,ht())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((c,u)=>{e.set(c,u)}))}))}computeViews(t,e,r,i){let o=Kn();const c=Ge(),u=(function(){return Ge()})();return e.forEach(((f,d)=>{const I=r.get(d.key);i.has(d.key)&&(I===void 0||I.mutation instanceof ce)?o=o.insert(d.key,d):I!==void 0?(c.set(d.key,I.mutation.getFieldMask()),Ke(I.mutation,d,I.mutation.getFieldMask(),W.now())):c.set(d.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((d,I)=>c.set(d,I))),e.forEach(((d,I)=>u.set(d,new Bh(I,c.get(d)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=Ge();let i=new yt(((c,u)=>c-u)),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((c=>{for(const u of c)u.keys().forEach((f=>{const d=e.get(f);if(d===null)return;let I=r.get(f)||Rt.empty();I=u.applyToLocalView(d,I),r.set(f,I);const w=(i.get(u.batchId)||ht()).add(f);i=i.insert(u.batchId,w)}))})).next((()=>{const c=[],u=i.getReverseIterator();for(;u.hasNext();){const f=u.getNext(),d=f.key,I=f.value,w=pa();I.forEach((R=>{if(!o.has(R)){const C=Ta(e.get(R),r.get(R));C!==null&&w.set(R,C),o=o.add(R)}})),c.push(this.documentOverlayCache.saveOverlays(t,d,w))}return S.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(c){return x.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(te());let u=Ye,f=o;return c.next((d=>S.forEach(d,((I,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(I)?S.resolve():this.remoteDocumentCache.getEntry(t,I).next((R=>{f=f.insert(I,R)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,f,d,ht()))).next((I=>({batchId:u,changes:da(I)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((r=>{let i=bn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let c=bn();return this.indexManager.getCollectionParents(t,o).next((u=>S.forEach(u,(f=>{const d=(function(w,R){return new tr(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((I=>{I.forEach(((w,R)=>{c=c.insert(w,R)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((c=>{o.forEach(((f,d)=>{const I=d.getKey();c.get(I)===null&&(c=c.insert(I,It.newInvalidDocument(I)))}));let u=bn();return c.forEach(((f,d)=>{const I=o.get(f);I!==void 0&&Ke(I.mutation,d,Rt.empty(),W.now()),Es(e,d)&&(u=u.insert(f,d))})),u}))}}/**
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
 */class jh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:me(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Vh(i.bundledQuery),readTime:me(i.readTime)}})(e)),S.resolve()}}/**
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
 */class $h{constructor(){this.overlays=new yt(x.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=te();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=te(),o=e.length+1,c=new x(e.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const f=u.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new yt(((d,I)=>d-I));const c=this.overlays.getIterator();for(;c.hasNext();){const d=c.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let I=o.get(d.largestBatchId);I===null&&(I=te(),o=o.insert(d.largestBatchId,I)),I.set(d.getKey(),d)}}const u=te(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((d,I)=>u.set(d,I))),!(u.size()>=i)););return S.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new ph(e,r));let o=this.qr.get(e);o===void 0&&(o=ht(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class qh{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class Is{constructor(){this.Qr=new at(nt.$r),this.Ur=new at(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new nt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new nt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new x(new J([])),r=new nt(e,t),i=new nt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),o.push(c.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new x(new J([])),r=new nt(e,t),i=new nt(e,t+1);let o=ht();return this.Ur.forEachInRange([r,i],(c=>{o=o.add(c.key)})),o}containsKey(t){const e=new nt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class nt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return x.comparator(t.key,e.key)||j(t.Yr,e.Yr)}static Kr(t,e){return j(t.Yr,e.Yr)||x.comparator(t.key,e.key)}}/**
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
 */class zh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new at(nt.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new dh(o,e,r,i);this.mutationQueue.push(c);for(const u of i)this.Zr=this.Zr.add(new nt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return S.resolve(c)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?fs:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new nt(e,0),i=new nt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(c=>{const u=this.Xr(c.Yr);o.push(u)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(j);return e.forEach((i=>{const o=new nt(i,0),c=new nt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,c],(u=>{r=r.add(u.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const c=new nt(new x(o),0);let u=new at(j);return this.Zr.forEachWhile((f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(f.Yr)),!0)}),c),S.resolve(this.ti(u))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){X(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(i=>{const o=new nt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new nt(e,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Hh{constructor(t){this.ri=t,this.docs=(function(){return new yt(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,c=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let r=Kn();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():It.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Kn();const c=e.path,u=new x(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(u);for(;f.hasNext();){const{key:d,value:{document:I}}=f.getNext();if(!c.isPrefixOf(d.path))break;d.path.length>c.length+1||Ru(Au(I),r)<=0||(i.has(I.key)||Es(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Gh(this)}getSize(t){return S.resolve(this.size)}}class Gh extends Fh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class Kh{constructor(t){this.persistence=t,this.si=new ae((e=>_s(e)),ys),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new Is,this.targetCount=0,this.ai=ve.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new ve(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((c,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.si.delete(c),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((c=>{o.push(i.markPotentiallyOrphaned(t,c))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
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
 */class Sa{constructor(t,e){this.ui={},this.overlays={},this.ci=new hs(0),this.li=!1,this.li=!0,this.hi=new qh,this.referenceDelegate=t(this),this.Pi=new Kh(this),this.indexManager=new Dh,this.remoteDocumentCache=(function(i){return new Hh(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Ph(e),this.Ii=new jh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $h,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new zh(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new Wh(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Wh extends Cu{constructor(t){super(),this.currentSequenceNumber=t}}class ws{constructor(t){this.persistence=t,this.Ri=new Is,this.Vi=null}static mi(t){return new ws(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const i=x.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,K.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Xn{constructor(t,e){this.persistence=t,this.pi=new ae((r=>Vu(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Lh(this,e)}static mi(t,e){return new Xn(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?S.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(c=>this.br(t,c,e).next((u=>{u||(r++,o.removeEntry(c,K.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Nn(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class As{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=ht(),i=ht();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new As(t,e.fromCache,r,i)}}/**
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
 */class Qh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Xh{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Hc()?8:bu(qc())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((c=>{o.result=c})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((c=>{o.result=c}))})).next((()=>{if(o.result)return;const c=new Qh;return this.Ss(t,e,c).next((u=>{if(o.result=u,this.Vs)return this.bs(t,e,c,u.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(fe()<=B.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(fe()<=B.DEBUG&&N("QueryEngine","Query:",je(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(fe()<=B.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ne(e))):S.resolve())}ys(t,e){if(so(e))return S.resolve(null);let r=ne(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Jr(e,null,"F"),r=ne(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const c=ht(...o);return this.ps.getDocuments(t,c).next((u=>this.indexManager.getMinOffset(t,r).next((f=>{const d=this.Ds(e,u);return this.Cs(e,d,c,f.readTime)?this.ys(t,Jr(e,null,"F")):this.vs(t,d,e,f)}))))})))))}ws(t,e,r,i){return so(e)||i.isEqual(K.min())?S.resolve(null):this.ps.getDocuments(t,r).next((o=>{const c=this.Ds(e,o);return this.Cs(e,c,r,i)?S.resolve(null):(fe()<=B.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),je(e)),this.vs(t,c,e,wu(i,Ye)).next((u=>u)))}))}Ds(t,e){let r=new at(Yu(t));return e.forEach(((i,o)=>{Es(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return fe()<=B.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",je(e)),this.ps.getDocumentsMatchingQuery(t,e,qt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((c=>{o=o.insert(c.key,c)})),o)))}}/**
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
 */const Jh="LocalStore";class Yh{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new yt(j),this.xs=new ae((o=>_s(o)),ys),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Uh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Zh(n,t,e,r){return new Yh(n,t,e,r)}async function Ca(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const c=[],u=[];let f=ht();for(const d of i){c.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}for(const d of o){u.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next((d=>({Ls:d,removedBatchIds:c,addedBatchIds:u})))}))}))}function tf(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,f,d,I){const w=d.batch,R=w.keys();let C=S.resolve();return R.forEach((V=>{C=C.next((()=>I.getEntry(f,V))).next((O=>{const D=d.docVersions.get(V);X(D!==null,48541),O.version.compareTo(D)<0&&(w.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),I.addEntry(O)))}))})),C.next((()=>u.mutationQueue.removeMutationBatch(f,w)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let f=ht();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(f=f.add(u.batch.mutations[d].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function ef(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function nf(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=fs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class po{constructor(){this.activeTargetIds=sh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rf{constructor(){this.Mo=new po,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new po,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class sf{Oo(t){}shutdown(){}}/**
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
 */const mo="ConnectivityMonitor";class go{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(mo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(mo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pn=null;function es(){return Pn===null?Pn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pn++,"0x"+Pn.toString(16)}/**
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
 */const xr="RestConnection",of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class af{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===qn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const c=es(),u=this.zo(t,e.toUriEncodedString());N(xr,`Sending RPC '${t}' ${c}:`,u,r);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(u),I=ss(d);return this.Jo(t,u,f,r,I).then((w=>(N(xr,`Received RPC '${t}' ${c}: `,w),w)),(w=>{throw Zn(xr,`RPC '${t}' ${c} failed with error: `,w,"url: ",u,"request:",r),w}))}Ho(t,e,r,i,o,c){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+we})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=of[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class cf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const lt="WebChannelConnection";class lf extends af{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const c=es();return new Promise(((u,f)=>{const d=new jo;d.setWithCredentials(!0),d.listenOnce($o.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Dn.NO_ERROR:const w=d.getResponseJson();N(lt,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(w)),u(w);break;case Dn.TIMEOUT:N(lt,`RPC '${t}' ${c} timed out`),f(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case Dn.HTTP_ERROR:const R=d.getStatus();if(N(lt,`RPC '${t}' ${c} failed with status:`,R,"response text:",d.getResponseText()),R>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C?.error;if(V&&V.status&&V.message){const O=(function(U){const $=U.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf($)>=0?$:b.UNKNOWN})(V.status);f(new k(O,V.message))}else f(new k(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new k(b.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:c,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(lt,`RPC '${t}' ${c} completed.`)}}));const I=JSON.stringify(i);N(lt,`RPC '${t}' ${c} sending request:`,i),d.send(e,"POST",I,r,15)}))}T_(t,e,r){const i=es(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=Ho(),u=zo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const I=o.join("");N(lt,`Creating RPC '${t}' stream ${i}: ${I}`,f);const w=c.createWebChannel(I,f);this.I_(w);let R=!1,C=!1;const V=new cf({Yo:D=>{C?N(lt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(N(lt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),N(lt,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},Zo:()=>w.close()}),O=(D,U,$)=>{D.listen(U,(G=>{try{$(G)}catch(Et){setTimeout((()=>{throw Et}),0)}}))};return O(w,$e.EventType.OPEN,(()=>{C||(N(lt,`RPC '${t}' stream ${i} transport opened.`),V.o_())})),O(w,$e.EventType.CLOSE,(()=>{C||(C=!0,N(lt,`RPC '${t}' stream ${i} transport closed`),V.a_(),this.E_(w))})),O(w,$e.EventType.ERROR,(D=>{C||(C=!0,Zn(lt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),V.a_(new k(b.UNAVAILABLE,"The operation could not be completed")))})),O(w,$e.EventType.MESSAGE,(D=>{if(!C){const U=D.data[0];X(!!U,16349);const $=U,G=$?.error||$[0]?.error;if(G){N(lt,`RPC '${t}' stream ${i} received error:`,G);const Et=G.status;let vt=(function(p){const g=Y[p];if(g!==void 0)return gh(g)})(Et),dt=G.message;vt===void 0&&(vt=b.INTERNAL,dt="Unknown error status: "+Et+" with message "+G.message),C=!0,V.a_(new k(vt,dt)),w.close()}else N(lt,`RPC '${t}' stream ${i} received:`,U),V.u_(U)}})),O(u,qo.STAT_EVENT,(D=>{D.stat===zr.PROXY?N(lt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===zr.NOPROXY&&N(lt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{V.__()}),0),V}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Lr(){return typeof document<"u"?document:null}/**
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
 */function rr(n){return new _h(n,!0)}/**
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
 */class ba{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const _o="PersistentStream";class uf{constructor(t,e,r,i,o,c,u,f){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ba(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(se(e.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new k(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return N(_o,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(N(_o,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hf extends uf{constructor(t,e,r,i,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,c),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Rh(t.writeResults,t.commitTime),r=me(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ih(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Ah(this.serializer,r)))};this.q_(e)}}/**
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
 */class ff{}class df extends ff{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Go(t,Zr(e,r),i,o,c))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(b.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,u])=>this.connection.Ho(t,Zr(e,r),i,c,u,o))).catch((c=>{throw c.name==="FirebaseError"?(c.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new k(b.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(se(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const an="RemoteStore";class mf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{ln(this)&&(N(an,"Restarting streams for network reachability change."),await(async function(f){const d=z(f);d.Ea.add(4),await cn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await sr(d)})(this))}))})),this.Ra=new pf(r,i)}}async function sr(n){if(ln(n))for(const t of n.da)await t(!0)}async function cn(n){for(const t of n.da)await t(!1)}function ln(n){return z(n).Ea.size===0}async function Pa(n,t,e){if(!sn(t))throw t;n.Ea.add(1),await cn(n),n.Ra.set("Offline"),e||(e=()=>ef(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(an,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await sr(n)}))}function Va(n,t){return t().catch((e=>Pa(n,e,t)))}async function ir(n){const t=z(n),e=Ht(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:fs;for(;gf(t);)try{const i=await nf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,_f(t,i)}catch(i){await Pa(t,i)}Da(t)&&Na(t)}function gf(n){return ln(n)&&n.Ta.length<10}function _f(n,t){n.Ta.push(t);const e=Ht(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Da(n){return ln(n)&&!Ht(n).x_()&&n.Ta.length>0}function Na(n){Ht(n).start()}async function yf(n){Ht(n).ra()}async function Ef(n){const t=Ht(n);for(const e of n.Ta)t.ea(e.mutations)}async function Tf(n,t,e){const r=n.Ta.shift(),i=vs.from(r,t,e);await Va(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await ir(n)}async function vf(n,t){t&&Ht(n).X_&&await(async function(r,i){if((function(c){return mh(c)&&c!==b.ABORTED})(i.code)){const o=r.Ta.shift();Ht(r).B_(),await Va(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await ir(r)}})(n,t),Da(n)&&Na(n)}async function yo(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),N(an,"RemoteStore received new credentials");const r=ln(e);e.Ea.add(3),await cn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await sr(e)}async function If(n,t){const e=z(n);t?(e.Ea.delete(2),await sr(e)):t||(e.Ea.add(2),await cn(e),e.Ra.set("Unknown"))}function Ht(n){return n.fa||(n.fa=(function(e,r,i){const o=z(e);return o.sa(),new hf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:yf.bind(null,n),r_:vf.bind(null,n),ta:Ef.bind(null,n),na:Tf.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await ir(n)):(await n.fa.stop(),n.Ta.length>0&&(N(an,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Rs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const c=Date.now()+r,u=new Rs(t,e,c,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oa(n,t){if(se("AsyncQueue",`${t}: ${n}`),sn(n))return new k(b.UNAVAILABLE,`${t}: ${n}`);throw n}class wf{constructor(){this.queries=Eo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=z(e),o=i.queries;i.queries=Eo(),o.forEach(((c,u)=>{for(const f of u.Sa)f.onError(r)}))})(this,new k(b.ABORTED,"Firestore shutting down"))}}function Eo(){return new ae((n=>ha(n)),ua)}function Af(n){n.Ca.forEach((t=>{t.next()}))}var To,vo;(vo=To||(To={})).Ma="default",vo.Cache="cache";const Rf="SyncEngine";class Sf{constructor(t,e,r,i,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new ae((u=>ha(u)),ua),this.Iu=new Map,this.Eu=new Set,this.du=new yt(x.comparator),this.Au=new Map,this.Ru=new Is,this.Vu={},this.mu=new Map,this.fu=ve.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cf(n,t,e){const r=Df(n);try{const i=await(function(c,u){const f=z(c),d=W.now(),I=u.reduce(((C,V)=>C.add(V.key)),ht());let w,R;return f.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let V=Kn(),O=ht();return f.Ns.getEntries(C,I).next((D=>{V=D,V.forEach(((U,$)=>{$.isValidDocument()||(O=O.add(U))}))})).next((()=>f.localDocuments.getOverlayedDocuments(C,V))).next((D=>{w=D;const U=[];for(const $ of u){const G=hh($,w.get($.key).overlayedDocument);G!=null&&U.push(new ce($.key,G,ra(G.value.mapValue),Dt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,d,U,u)})).next((D=>{R=D;const U=D.applyToLocalDocumentSet(w,O);return f.documentOverlayCache.saveOverlays(C,D.batchId,U)}))})).then((()=>({batchId:R.batchId,changes:da(w)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(c,u,f){let d=c.Vu[c.currentUser.toKey()];d||(d=new yt(j)),d=d.insert(u,f),c.Vu[c.currentUser.toKey()]=d})(r,i.batchId,e),await or(r,i.changes),await ir(r.remoteStore)}catch(i){const o=Oa(i,"Failed to persist write");e.reject(o)}}function Io(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,c)=>{const u=c.view.va(t);u.snapshot&&i.push(u.snapshot)})),(function(c,u){const f=z(c);f.onlineState=u;let d=!1;f.queries.forEach(((I,w)=>{for(const R of w.Sa)R.va(u)&&(d=!0)})),d&&Af(f)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bf(n,t){const e=z(n),r=t.batch.batchId;try{const i=await tf(e.localStore,t);Ma(e,r,null),ka(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await or(e,i)}catch(i){await us(i)}}async function Pf(n,t,e){const r=z(n);try{const i=await(function(c,u){const f=z(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let I;return f.mutationQueue.lookupMutationBatch(d,u).next((w=>(X(w!==null,37113),I=w.keys(),f.mutationQueue.removeMutationBatch(d,w)))).next((()=>f.mutationQueue.performConsistencyCheck(d))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(d,I,u))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,I))).next((()=>f.localDocuments.getDocuments(d,I)))}))})(r.localStore,t);Ma(r,t,e),ka(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await or(r,i)}catch(i){await us(i)}}function ka(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Ma(n,t,e){const r=z(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function or(n,t,e){const r=z(n),i=[],o=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,f)=>{c.push(r.pu(f,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:e?.targetChanges.get(f.targetId)?.current;r.sharedClientState.updateQueryState(f.targetId,I?"current":"not-current")}if(d){i.push(d);const I=As.As(f.targetId,d);o.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(f,d){const I=z(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>S.forEach(d,(R=>S.forEach(R.Es,(C=>I.persistence.referenceDelegate.addReference(w,R.targetId,C))).next((()=>S.forEach(R.ds,(C=>I.persistence.referenceDelegate.removeReference(w,R.targetId,C)))))))))}catch(w){if(!sn(w))throw w;N(Jh,"Failed to update sequence numbers: "+w)}for(const w of d){const R=w.targetId;if(!w.fromCache){const C=I.Ms.get(R),V=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(V);I.Ms=I.Ms.insert(R,O)}}})(r.localStore,o))}async function Vf(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){N(Rf,"User change. New user:",t.toKey());const r=await Ca(e.localStore,t);e.currentUser=t,(function(o,c){o.mu.forEach((u=>{u.forEach((f=>{f.reject(new k(b.CANCELLED,c))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await or(e,r.Ls)}}function Df(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pf.bind(null,t),t}class Jn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Zh(this.persistence,new Xh,t.initialUser,this.serializer)}Cu(t){return new Sa(ws.mi,this.serializer)}Du(t){return new rf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jn.provider={build:()=>new Jn};class Nf extends Jn{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){X(this.persistence.referenceDelegate instanceof Xn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Sa((r=>Xn.mi(r,e)),this.serializer)}}class ns{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Io(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vf.bind(null,this.syncEngine),await If(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new wf})()}createDatastore(t){const e=rr(t.databaseInfo.databaseId),r=(function(o){return new lf(o)})(t.databaseInfo);return(function(o,c,u,f){return new df(o,c,u,f)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,c,u){return new mf(r,i,o,c,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Io(this.syncEngine,e,0)),(function(){return go.v()?new go:new sf})())}createSyncEngine(t,e){return(function(i,o,c,u,f,d,I){const w=new Sf(i,o,c,u,f,d);return I&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=z(e);N(an,"RemoteStore shutting down."),r.Ea.add(5),await cn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ns.provider={build:()=>new ns};/**
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
 */const Gt="FirestoreClient";class Of{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=cs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async c=>{N(Gt,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(N(Gt,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Oa(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Fr(n,t){n.asyncQueue.verifyOperationInProgress(),N(Gt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Ca(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function wo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await kf(n);N(Gt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>yo(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>yo(t.remoteStore,i))),n._onlineComponents=t}async function kf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Gt,"Using user provided OfflineComponentProvider");try{await Fr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Zn("Error using user provided cache. Falling back to memory cache: "+e),await Fr(n,new Jn)}}else N(Gt,"Using default OfflineComponentProvider"),await Fr(n,new Nf(void 0));return n._offlineComponents}async function Mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Gt,"Using user provided OnlineComponentProvider"),await wo(n,n._uninitializedComponentsProvider._online)):(N(Gt,"Using default OnlineComponentProvider"),await wo(n,new ns))),n._onlineComponents}function xf(n){return Mf(n).then((t=>t.syncEngine))}/**
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
 */function xa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ao=new Map;/**
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
 */const La="firestore.googleapis.com",Ro=!0;class So{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=La,this.ssl=Ro}else this.host=t.host,this.ssl=t.ssl??Ro;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ra;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Oh)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Iu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xa(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ss{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new So({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new So(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hu;switch(r.type){case"firstParty":return new mu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Ao.get(e);r&&(N("ComponentProvider","Removing Datastore"),Ao.delete(e),r.terminate())})(this),Promise.resolve()}}function Lf(n,t,e,r={}){n=Gr(n,Ss);const i=ss(t),o=n._getSettings(),c={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;i&&(Fc(`https://${u}`),$c("Firestore",!0)),o.host!==La&&o.host!==u&&Zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:u,ssl:i,emulatorOptions:r};if(!Ln(f,c)&&(n._setSettings(f),r.mockUserToken)){let d,I;if(typeof r.mockUserToken=="string")d=r.mockUserToken,I=ut.MOCK_USER;else{d=Bc(r.mockUserToken,n._app?.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ut(w)}n._authCredentials=new fu(new Ko(d,I))}}/**
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
 */class Cs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Cs(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(rn(e,ft._jsonSchema))return new ft(t,r||null,new x(J.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:Z("string",ft._jsonSchemaVersion),referencePath:Z("string")};class nn extends Cs{constructor(t,e,r){super(t,e,Qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new x(t))}withConverter(t){return new nn(this.firestore,t,this._path)}}function Ff(n,t,...e){if(n=Fn(n),arguments.length===1&&(t=cs.newId()),vu("doc","path",t),n instanceof Ss){const r=J.fromString(t,...e);return Ki(r),new ft(n,null,new x(r))}{if(!(n instanceof ft||n instanceof nn))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Ki(r),new ft(n.firestore,n instanceof nn?n.converter:null,new x(r))}}/**
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
 */const Co="AsyncQueue";class bo{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ba(this,"async_queue_retry"),this._c=()=>{const r=Lr();r&&N(Co,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Lr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Lr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ee;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!sn(t))throw t;N(Co,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,se("INTERNAL UNHANDLED ERROR: ",Po(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Rs.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:Po(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Po(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Fa extends Ss{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new bo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bo(t),this._firestoreClient=void 0,await t}}}function Bf(n,t){const e=typeof n=="object"?n:Yl(),r=typeof n=="string"?n:qn,i=Kl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=xc("firestore");o&&Lf(i,...o)}return i}function Uf(n){if(n._terminated)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jf(n),n._firestoreClient}function jf(n){const t=n._freezeSettings(),e=(function(i,o,c,u){return new ku(i,o,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,xa(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Of(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class At{constructor(t){this._byteString=t}static fromBase64String(t){try{return new At(Pt.fromBase64String(t))}catch(e){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new At(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(rn(t,At._jsonSchema))return At.fromBase64String(t.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Z("string",At._jsonSchemaVersion),bytes:Z("string")};/**
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
 */class bs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ba{constructor(t){this._methodName=t}}/**
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
 */class Nt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(t){if(rn(t,Nt._jsonSchema))return new Nt(t.latitude,t.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:Z("string",Nt._jsonSchemaVersion),latitude:Z("number"),longitude:Z("number")};/**
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
 */class Ot{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(rn(t,Ot._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ot(t.vectorValues);throw new k(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ot._jsonSchemaVersion="firestore/vectorValue/1.0",Ot._jsonSchema={type:Z("string",Ot._jsonSchemaVersion),vectorValues:Z("object")};/**
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
 */const $f=/^__.*__$/;class qf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new on(t,this.data,e,this.fieldTransforms)}}function Ua(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Ps{constructor(t,e,r,i,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ps({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Yn(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Ua(this.Ac)&&$f.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class zf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rr(t)}Cc(t,e,r,i=!1){return new Ps({Ac:t,methodName:e,Dc:r,path:ot.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hf(n){const t=n._freezeSettings(),e=rr(n._databaseId);return new zf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Gf(n,t,e,r,i,o={}){const c=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);za("Data must be an object, but it was:",c,r);const u=$a(r,c);let f,d;if(o.merge)f=new Rt(c.fieldMask),d=c.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const R=Kf(t,w,e);if(!c.contains(R))throw new k(b.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Qf(I,R)||I.push(R)}f=new Rt(I),d=c.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,d=c.fieldTransforms;return new qf(new wt(u),f,d)}function ja(n,t){if(qa(n=Fn(n)))return za("Unsupported field value:",t,n),$a(n,t);if(n instanceof Ba)return(function(r,i){if(!Ua(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let c=0;for(const u of r){let f=ja(u,i.wc(c));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),c++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=Fn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ih(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=W.fromDate(r);return{timestampValue:Yr(i.serializer,o)}}if(r instanceof W){const o=new W(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yr(i.serializer,o)}}if(r instanceof Nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:yh(i.serializer,r._byteString)};if(r instanceof ft){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ot)return(function(c,u){return{mapValue:{fields:{[ea]:{stringValue:na},[Kr]:{arrayValue:{values:c.toArray().map((d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return Ts(u.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${ls(r)}`)})(n,t)}function $a(n,t){const e={};return Xo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(n,((r,i)=>{const o=ja(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function qa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof W||n instanceof Nt||n instanceof At||n instanceof ft||n instanceof Ba||n instanceof Ot)}function za(n,t,e){if(!qa(e)||!Wo(e)){const r=ls(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Kf(n,t,e){if((t=Fn(t))instanceof bs)return t._internalPath;if(typeof t=="string")return Ha(n,t);throw Yn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Wf=new RegExp("[~\\*/\\[\\]]");function Ha(n,t,e){if(t.search(Wf)>=0)throw Yn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new bs(...t.split("."))._internalPath}catch{throw Yn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Yn(n,t,e,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let f="";return(o||c)&&(f+=" (found",o&&(f+=` in field ${r}`),c&&(f+=` in document ${i}`),f+=")"),new k(b.INVALID_ARGUMENT,u+n+f)}function Qf(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class Ga{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ka("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Xf extends Ga{data(){return super.data()}}function Ka(n,t){return typeof t=="string"?Ha(n,t):t instanceof bs?t._internalPath:t._delegate._internalPath}/**
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
 */function Jf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ge extends Ga{constructor(t,e,r,i,o,c){super(t,e,r,i,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ka("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ge._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ge._jsonSchemaVersion="firestore/documentSnapshot/1.0",ge._jsonSchema={type:Z("string",ge._jsonSchemaVersion),bundleSource:Z("string","DocumentSnapshot"),bundleName:Z("string"),bundle:Z("string")};class Mn extends ge{data(t={}){return super.data(t)}}class We{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Mn(this._firestore,this._userDataWriter,r.key,r,new Vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((u=>{const f=new Mn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Vn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const f=new Mn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Vn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,I=-1;return u.type!==0&&(d=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),I=c.indexOf(u.doc.key)),{type:Yf(u.type),doc:f,oldIndex:d,newIndex:I}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=We._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=cs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Yf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}We._jsonSchemaVersion="firestore/querySnapshot/1.0",We._jsonSchema={type:Z("string",We._jsonSchemaVersion),bundleSource:Z("string","QuerySnapshot"),bundleName:Z("string"),bundle:Z("string")};function Zf(n,t,e){n=Gr(n,ft);const r=Gr(n.firestore,Fa),i=Jf(n.converter,t);return td(r,[Gf(Hf(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Dt.none())])}function td(n,t){return(function(r,i){const o=new ee;return r.asyncQueue.enqueueAndForget((async()=>Cf(await xf(r),i,o))),o.promise})(Uf(n),t)}(function(t,e=!0){(function(i){we=i})(Jl),Un(new Xe("firestore",((r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new Fa(new du(r.getProvider("auth-internal")),new gu(c,r.getProvider("app-check-internal")),(function(d,I){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(d.options.projectId,I)})(c,i),c);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),pe(qi,zi,t),pe(qi,zi,"esm2020")})();const ed={apiKey:"AIzaSyC_JekFZUQ5xpp33viYesstWMWW1IWrjPs",authDomain:"wedding-d16cc.firebaseapp.com",projectId:"wedding-d16cc",storageBucket:"wedding-d16cc.firebasestorage.app",messagingSenderId:"398999128995",appId:"1:398999128995:web:8f76adc5172ba04dbe6816",measurementId:"G-7BZV4Q5649"};class nd{db;constructor(){const t=Fo(ed);this.db=Bf(t)}async addRsvp(t){const e=t.firstName.toLowerCase(),r=t.lastName.toLowerCase(),i=`${e}_${r}`.trim().replace(" ","_");await Zf(Ff(this.db,"responses",i),t)}}class rd{onRoute;constructor(t){this.onRoute=t.onRoute,window.addEventListener("popstate",()=>this.handlePop())}navigate(t){const e=this.getPath();history.pushState({previous:e},"",t),this.onRoute(this.getPath())}handlePop(){this.onRoute(this.getPath())}getPath(){return window.location.pathname}start(){this.onRoute(this.getPath())}}const Vo={"/":"/index.html","/404":"/pages/404.html"},Qe=n=>document.getElementById(n),sd=new nd,id=()=>{ad(),ld(),od()};window.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#app"),t=new rd({onRoute:async e=>{if(Vo[e]){const r=await fetch(Vo[e]);n.innerHTML=await r.text(),id()}else t.navigate("404")}});t.start()});function od(){const n=document.getElementById("rsvp-form"),t=document.getElementById("rsvp-status"),e=n?.querySelector('button[type="submit"]'),r=n?.querySelector('input[name="coming"]'),i=n?.querySelector("#overnight"),o=n?.querySelector(".overnight-label"),c=f=>{i?.classList.toggle("invisible",!f),o?.classList.toggle("invisible",!f),!f&&i&&(i.checked=!1)};if(c(!!r?.checked),r?.addEventListener("change",()=>c(!!r.checked)),!n)return;const u=(f,d=!1)=>{t&&(t.textContent=f,t.classList.remove("ok","err"),t.classList.add(d?"ok":"err"))};n.addEventListener("submit",async f=>{if(f.preventDefault(),!!e){e.disabled=!0;try{const d=new FormData(n),I=String(d.get("first-name")??"").trim(),w=String(d.get("last-name")??"").trim(),R=String(d.get("comment")??"").trim(),C=Qe("coming"),V=Qe("overnight"),O=C?.checked??!1,D=V?.checked??!1,U={firstName:I,lastName:w,comment:R,coming:O,overnight:D};await sd.addRsvp(U),U.coming?u("🎉 See you there!",!0):u("Response recorded",!0),n.reset(),c(!1)}catch(d){console.error(d),u("Oops—couldn’t save your RSVP. Try again?",!1)}finally{e.disabled=!1}}},{once:!0})}function ad(){const n=document.querySelectorAll(".section"),t=document.querySelectorAll(".menu-bar-item");if(console.log(t),n.length===0||t.length===0)return;function e(){const r=window.scrollY+window.innerHeight/2;let i=-1;n.forEach((o,c)=>{const u=o.getBoundingClientRect(),f=u.top+window.scrollY,d=f+u.height;r>=f&&r<=d&&(i=c)}),t.forEach((o,c)=>{console.log(o,c,i),c===i?o.classList.add("active"):o.classList.remove("active")})}t.forEach(r=>{r.addEventListener("click",i=>{console.log(i),i.preventDefault();const o=r.getAttribute("data-section");if(!o)return;const c=document.getElementById(o);if(!c)return;const u=document.querySelector(".menu-bar")?.getBoundingClientRect().height||0,f=c.offsetTop-u;cd(f)})}),e(),window.addEventListener("scroll",e)}function cd(n,t={}){const e=window.scrollY,r=Math.abs(n-e),i=t.baseDuration??700,o=t.minDuration??300,c=t.maxDuration??1400,u=Math.min(c,Math.max(o,r/1e3*i)),f=t.easing??(D=>D<.5?4*D*D*D:1-Math.pow(-2*D+2,3)/2);if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){window.scrollTo(0,n);return}const I=performance.now(),w=n-e;let R=!1;const C=()=>{R=!0,V()},V=()=>{window.removeEventListener("wheel",C,{passive:!0}),window.removeEventListener("touchstart",C,{passive:!0}),window.removeEventListener("keydown",C)};window.addEventListener("wheel",C,{passive:!0}),window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("keydown",C);function O(D){if(R)return;const U=Math.min(1,(D-I)/u),$=e+w*f(U);window.scrollTo(0,$),U<1?requestAnimationFrame(O):V()}requestAnimationFrame(O)}function ld(){const n=document.querySelectorAll(".tab-button"),t=document.querySelectorAll(".tab-panel"),e=Qe("prev-tab"),r=Qe("next-tab");if(n.length===0||t.length===0)return;const o=Array.from(n).map(C=>C.getAttribute("data-tab")).filter(Boolean);function c(C){n.forEach(D=>D.classList.remove("active")),t.forEach(D=>D.classList.remove("active"));const V=document.querySelector(`[data-tab="${C}"]`),O=document.getElementById(C);V&&V.classList.add("active"),O&&O.classList.add("active"),u(C)}function u(C){const V=o.indexOf(C);e&&(e.disabled=V===0),r&&(r.disabled=V===o.length-1)}function f(){return document.querySelector(".tab-button.active")?.getAttribute("data-tab")||null}function d(){const C=f();if(!C)return;const V=o.indexOf(C);console.log(V),V>0&&c(o[V-1])}function I(){const C=f();if(!C)return;const V=o.indexOf(C);V<o.length-1&&c(o[V+1])}n.forEach(C=>{C.addEventListener("click",V=>{V.preventDefault();const O=C.getAttribute("data-tab");O&&c(O)})}),e&&e.addEventListener("click",C=>{C.preventDefault(),d()}),r&&r.addEventListener("click",C=>{C.preventDefault(),I()});function w(C){console.log(C.key);const V=Qe("schedule");if(!V)return;const O=V.getBoundingClientRect();O.top>window.innerHeight||O.bottom<0||(C.key==="ArrowLeft"?(C.preventDefault(),d()):C.key==="ArrowRight"&&(C.preventDefault(),I()))}document.addEventListener("keydown",w);const R=f();R&&u(R)}
