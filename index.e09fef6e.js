var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var n,i,r,s=n={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function h(t){if(i===setTimeout)return setTimeout(t,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(t){i=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var l,c=[],u=!1,f=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):f=-1,c.length&&d())}function d(){if(!u){var t=h(p);u=!0;for(var e=c.length;e;){for(l=c,c=[];++f<e;)l&&l[f].run();f=-1,e=c.length}l=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function m(){}s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new g(t,e)),1!==c.length||u||h(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(t){return[]},s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};
/**
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
 */
const y=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,l=r>>2,c=(3&r)<<4|o>>4;let u=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(u=64)),i.push(n[l],n[c],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new b;const h=r<<2|s>>4;if(i.push(h),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E=function(t){return function(t){const e=y(t);return v.encodeByteArray(e,!0)}(t).replace(/\./g,"")},w=function(t){try{return v.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function T(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=T(t[n],e[n]));return t}
/**
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
 */
const A=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,I=()=>{try{return A()||(()=>{if(void 0===n||void 0===n.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&w(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},_=t=>{const e=(t=>{var e,n;return null===(n=null===(e=I())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},S=()=>{var t;return null===(t=I())||void 0===t?void 0:t.config};
/**
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
 */
class C{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */function D(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[E(JSON.stringify({alg:"none",type:"JWT"})),E(JSON.stringify(s)),""].join(".")}
/**
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
 */function L(){try{return"object"==typeof indexedDB}catch(t){return!1}}class N extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(R,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new N(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const R=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function P(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(M(n)&&M(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function M(t){return null!==t&&"object"==typeof t}
/**
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
 */function x(t,e){const n=new j(t,e);return n.subscribe.bind(n)}class j{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=F),void 0===i.error&&(i.error=F),void 0===i.complete&&(i.complete=F);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function F(){}
/**
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
 */class U{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */
/**
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
 */
class B{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new C;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class H{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new B(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}var V={};e(V,"_DEFAULT_ENTRY_NAME",(function(){return yt})),e(V,"_apps",(function(){return bt})),e(V,"_components",(function(){return Et})),e(V,"_addComponent",(function(){return wt})),e(V,"_addOrOverwriteComponent",(function(){return Tt})),e(V,"_registerComponent",(function(){return At})),e(V,"_getProvider",(function(){return It})),e(V,"_removeServiceInstance",(function(){return _t})),e(V,"_clearComponents",(function(){return St})),e(V,"SDK_VERSION",(function(){return Lt})),e(V,"initializeApp",(function(){return Nt})),e(V,"getApp",(function(){return Ot})),e(V,"getApps",(function(){return Rt})),e(V,"deleteApp",(function(){return kt})),e(V,"registerVersion",(function(){return Pt})),e(V,"onLog",(function(){return Mt})),e(V,"setLogLevel",(function(){return xt})),e(V,"FirebaseError",(function(){return N}));
/**
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
 */
const z=[];var $,G;(G=$||($={}))[G.DEBUG=0]="DEBUG",G[G.VERBOSE=1]="VERBOSE",G[G.INFO=2]="INFO",G[G.WARN=3]="WARN",G[G.ERROR=4]="ERROR",G[G.SILENT=5]="SILENT";const K={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},X=$.INFO,W={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},q=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=W[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Y{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?K[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}constructor(t){this.name=t,this._logLevel=X,this._logHandler=q,this._userLogHandler=null,z.push(this)}}function J(t,e){for(const n of z){let i=null;e&&e.level&&(i=K[e.level]),n.userLogHandler=null===t?null:(e,n,...r)=>{const s=r.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=i?i:e.logLevel)&&t({level:$[n].toLowerCase(),message:s,args:r,type:e.name})}}}let Q,Z;const tt=new WeakMap,et=new WeakMap,nt=new WeakMap,it=new WeakMap,rt=new WeakMap;let st={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return et.get(t);if("objectStoreNames"===e)return t.objectStoreNames||nt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ot(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Z||(Z=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(lt(this),e),ht(tt.get(this))}:function(...e){return ht(t.apply(lt(this),e))}:function(e,...n){const i=t.call(lt(this),e,...n);return nt.set(i,e.sort?e.sort():[e]),ht(i)}}function at(t){return"function"==typeof t?ot(t):(t instanceof IDBTransaction&&function(t){if(et.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));et.set(t,e)}(t),e=t,(Q||(Q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,st):t);var e}function ht(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(ht(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&tt.set(e,t)})).catch((()=>{})),rt.set(e,t),e}(t);if(it.has(t))return it.get(t);const e=at(t);return e!==t&&(it.set(t,e),rt.set(e,t)),e}const lt=t=>rt.get(t);function ct(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ht(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(ht(o.result),t.oldVersion,t.newVersion,ht(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const ut=["get","getKey","getAll","getAllKeys","count"],ft=["put","add","delete","clear"],pt=new Map;function dt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(pt.get(e))return pt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=ft.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!ut.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return pt.set(e,s),s}st=(t=>({...t,get:(e,n,i)=>dt(e,n)||t.get(e,n,i),has:(e,n)=>!!dt(e,n)||t.has(e,n)}))(st);
/**
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
 */
class gt{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const mt=new Y("@firebase/app"),yt="[DEFAULT]",vt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},bt=new Map,Et=new Map;function wt(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tt(t,e){t.container.addOrOverwriteComponent(e)}function At(t){const e=t.name;if(Et.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Et.set(e,t);for(const e of bt.values())wt(e,t);return!0}function It(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t,e,n=yt){It(t,e).clearInstance(n)}function St(){Et.clear()}
/**
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
 */const Ct=new O("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Dt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new U("app",(()=>this),"PUBLIC"))}}
/**
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
 */const Lt="9.23.0";function Nt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:yt,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=S()),!n)throw Ct.create("no-options");const s=bt.get(r);if(s){if(P(n,s.options)&&P(i,s.config))return s;throw Ct.create("duplicate-app",{appName:r})}const o=new H(r);for(const t of Et.values())o.addComponent(t);const a=new Dt(n,i,o);return bt.set(r,a),a}function Ot(t=yt){const e=bt.get(t);if(!e&&t===yt&&S())return Nt();if(!e)throw Ct.create("no-app",{appName:t});return e}function Rt(){return Array.from(bt.values())}async function kt(t){const e=t.name;bt.has(e)&&(bt.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function Pt(t,e,n){var i;let r=null!==(i=vt[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void mt.warn(t.join(" "))}At(new U(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}function Mt(t,e){if(null!==t&&"function"!=typeof t)throw Ct.create("invalid-log-argument");J(t,e)}function xt(t){var e;e=t,z.forEach((t=>{t.setLogLevel(e)}))}
/**
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
 */let jt=null;function Ft(){return jt||(jt=ct("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})}))),jt}async function Ut(t,e){try{const n=(await Ft()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(e,Bt(t)),await n.done}catch(t){if(t instanceof N)mt.warn(t.message);else{const e=Ct.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});mt.warn(e.message)}}}function Bt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class Ht{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Vt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Vt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),$t(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),$t(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=E(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Vt(){return(new Date).toISOString().substring(0,10)}class zt{async runIndexedDBEnvironmentCheck(){return!!L()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await Ft();return await e.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Bt(t))}catch(t){if(t instanceof N)mt.warn(t.message);else{const e=Ct.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});mt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function $t(t){return E(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var Gt;Gt="",At(new U("platform-logger",(t=>new gt(t)),"PRIVATE")),At(new U("heartbeat",(t=>new Ht(t)),"PRIVATE")),Pt("@firebase/app","0.9.13",Gt),Pt("@firebase/app","0.9.13","esm2017"),Pt("fire-js","");
/**
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
 */
class Kt{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),kt(this._delegate))))}_getService(t,e=yt){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=yt){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){wt(this._delegate,t)}_addOrOverwriteComponent(t){Tt(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(t,e){this._delegate=t,this.firebase=e,wt(t,new U("app-compat",(()=>this),"PUBLIC")),this.container=t.container}}
/**
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
 */const Xt=new O("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const Wt=
/**
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
 */
function t(){const e=
/**
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
 */
function(t){const e={},n={__esModule:!0,initializeApp:function(i,r={}){const s=Nt(i,r);if(k(e,s.name))return e[s.name];const o=new t(s,n);return e[s.name]=o,o},app:i,registerVersion:Pt,setLogLevel:xt,onLog:Mt,apps:null,SDK_VERSION:Lt,INTERNAL:{registerComponent:function(e){const r=e.name,s=r.replace("-compat","");if(At(e)&&"PUBLIC"===e.type){const o=(t=i())=>{if("function"!=typeof t[s])throw Xt.create("invalid-app-argument",{appName:r});return t[s]()};void 0!==e.serviceProps&&T(o,e.serviceProps),n[s]=o,t.prototype[s]=function(...t){return this._getService.bind(this,r).apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[s]:null},removeApp:function(t){delete e[t]},useAsService:function(t,e){return"serverAuth"===e?null:e},modularAPIs:V}};function i(t){if(!k(e,t=t||yt))throw Xt.create("no-app",{appName:t});return e[t]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(e).map((t=>e[t]))}}),i.App=t,n}(Kt);return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:t,extendNamespace:function(t){T(e,t)},createSubscribe:x,ErrorFactory:O,deepExtend:T}),e}(),qt=new Y("@firebase/app-compat");
/**
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
 */
/**
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
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){qt.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&qt.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Yt=Wt;!
/**
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
 */
function(t){Pt("@firebase/app-compat","0.2.13",t)}();
/**
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
 */
Yt.registerVersion("firebase","9.23.0","app-compat");var Jt,Qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Zt={},te=te||{},ee=Qt||self;function ne(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ie(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var re="closure_uid_"+(1e9*Math.random()>>>0),se=0;function oe(t,e,n){return t.call.apply(t.bind,arguments)}function ae(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function he(t,e,n){return(he=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oe:ae).apply(null,arguments)}function le(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ce(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function ue(){this.s=this.s,this.o=this.o}ue.prototype.s=!1,ue.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,re)&&t[re]||(t[re]=++se))},ue.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fe=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pe(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function de(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(ne(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",(()=>{}),e),ee.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function ye(t){return/^[\s\xa0]*$/.test(t)}function ve(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function be(t){return-1!=ve().indexOf(t)}function Ee(t){return Ee[" "](t),t}Ee[" "]=function(){};var we,Te,Ae,Ie=be("Opera"),_e=be("Trident")||be("MSIE"),Se=be("Edge"),Ce=Se||_e,De=be("Gecko")&&!(-1!=ve().toLowerCase().indexOf("webkit")&&!be("Edge"))&&!(be("Trident")||be("MSIE"))&&!be("Edge"),Le=-1!=ve().toLowerCase().indexOf("webkit")&&!be("Edge");function Ne(){var t=ee.document;return t?t.documentMode:void 0}t:{var Oe="",Re=(Te=ve(),De?/rv:([^\);]+)(\)|;)/.exec(Te):Se?/Edge\/([\d\.]+)/.exec(Te):_e?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Te):Le?/WebKit\/(\S+)/.exec(Te):Ie?/(?:Version)[ \/]?(\S+)/.exec(Te):void 0);if(Re&&(Oe=Re?Re[1]:""),_e){var ke=Ne();if(null!=ke&&ke>parseFloat(Oe)){we=String(ke);break t}}we=Oe}if(ee.document&&_e){var Pe=Ne();Ae=Pe||(parseInt(we,10)||void 0)}else Ae=void 0;var Me=Ae;function xe(t,e){if(ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(De){t:{try{Ee(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:je[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xe.$.h.call(this)}}ce(xe,ge);var je={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function Be(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Ue,this.fa=this.ia=!1}function He(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ve(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ze(t){const e={};for(const n in t)e[n]=t[n];return e}const $e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ge(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<$e.length;e++)n=$e[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ke(t){this.src=t,this.g={},this.h=0}function Xe(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=fe(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(He(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function We(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}Ke.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=We(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Be(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var qe="closure_lm_"+(1e6*Math.random()|0),Ye={};function Je(t,e,n,i,r){if(i&&i.once)return Ze(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Je(t,e[s],n,i,r);return null}return n=an(n),t&&t[Fe]?t.O(e,n,ie(i)?!!i.capture:!!i,r):Qe(t,e,n,!1,i,r)}function Qe(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=ie(r)?!!r.capture:!!r,a=sn(t);if(a||(t[qe]=a=new Ke(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=rn;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)me||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(nn(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Ze(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ze(t,e[s],n,i,r);return null}return n=an(n),t&&t[Fe]?t.P(e,n,ie(i)?!!i.capture:!!i,r):Qe(t,e,n,!0,i,r)}function tn(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)tn(t,e[s],n,i,r);else i=ie(i)?!!i.capture:!!i,n=an(n),t&&t[Fe]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=We(s=t.g[e],n,i,r))&&(He(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=sn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=We(e,n,i,r)),(n=-1<t?e[t]:null)&&en(n))}function en(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Fe])Xe(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(nn(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=sn(e))?(Xe(n,t),0==n.h&&(n.src=null,e[qe]=null)):He(t)}}}function nn(t){return t in Ye?Ye[t]:Ye[t]="on"+t}function rn(t,e){if(t.fa)t=!0;else{e=new xe(e,this);var n=t.listener,i=t.la||t.src;t.ia&&en(t),t=n.call(i,e)}return t}function sn(t){return(t=t[qe])instanceof Ke?t:null}var on="__closure_events_fn_"+(1e9*Math.random()>>>0);function an(t){return"function"==typeof t?t:(t[on]||(t[on]=function(e){return t.handleEvent(e)}),t[on])}function hn(){ue.call(this),this.i=new Ke(this),this.S=this,this.J=null}function ln(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new ge(e,t);else if(e instanceof ge)e.target=e.target||t;else{var r=e;Ge(e=new ge(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=cn(o,i,!0,e)&&r}if(r=cn(o=e.g=t,i,!0,e)&&r,r=cn(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=cn(o=e.g=n[s],i,!1,e)&&r}function cn(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&Xe(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}ce(hn,ue),hn.prototype[Fe]=!0,hn.prototype.removeEventListener=function(t,e,n,i){tn(this,t,e,n,i)},hn.prototype.N=function(){if(hn.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)He(n[i]);delete e.g[t],e.h--}}this.J=null},hn.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},hn.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var un=ee.JSON.stringify;function fn(){var t=bn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var pn=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new dn),(t=>t.reset()));class dn{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function gn(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function mn(t){ee.setTimeout((()=>{throw t}),0)}let yn,vn=!1,bn=new class{add(t,e){const n=pn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}},En=()=>{const t=ee.Promise.resolve(void 0);yn=()=>{t.then(wn)}};var wn=()=>{for(var t;t=fn();){try{t.h.call(t.g)}catch(t){mn(t)}var e=pn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vn=!1};function Tn(t,e){hn.call(this),this.h=t||1,this.g=e||ee,this.j=he(this.qb,this),this.l=Date.now()}function An(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function In(t,e,n){if("function"==typeof t)n&&(t=he(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=he(t.handleEvent,t)}return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function _n(t){t.g=In((()=>{t.g=null,t.i&&(t.i=!1,_n(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ce(Tn,hn),(Jt=Tn.prototype).ga=!1,Jt.T=null,Jt.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ln(this,"tick"),this.ga&&(An(this),this.start()))}},Jt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Jt.N=function(){Tn.$.N.call(this),An(this),delete this.g};class Sn extends ue{l(t){this.h=arguments,this.g?this.i=!0:_n(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Cn(t){ue.call(this),this.h=t,this.g={}}ce(Cn,ue);var Dn=[];function Ln(t,e,n,i){Array.isArray(n)||(n&&(Dn[0]=n.toString()),n=Dn);for(var r=0;r<n.length;r++){var s=Je(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Nn(t){Ve(t.g,(function(t,e){this.g.hasOwnProperty(e)&&en(t)}),t),t.g={}}function On(){this.g=!0}function Rn(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return un(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Cn.prototype.N=function(){Cn.$.N.call(this),Nn(this)},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},On.prototype.Ea=function(){this.g=!1},On.prototype.info=function(){};var kn={},Pn=null;function Mn(){return Pn=Pn||new hn}function xn(t){ge.call(this,kn.Ta,t)}function jn(t){const e=Mn();ln(e,new xn(e))}function Fn(t,e){ge.call(this,kn.STAT_EVENT,t),this.stat=e}function Un(t){const e=Mn();ln(e,new Fn(e,t))}function Bn(t,e){ge.call(this,kn.Ua,t),this.size=e}function Hn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ee.setTimeout((function(){t()}),e)}kn.Ta="serverreachability",ce(xn,ge),kn.STAT_EVENT="statevent",ce(Fn,ge),kn.Ua="timingevent",ce(Bn,ge);var Vn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $n(){}function Gn(t){return t.h||(t.h=t.i())}function Kn(){}$n.prototype.h=null;var Xn,Wn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qn(){ge.call(this,"d")}function Yn(){ge.call(this,"c")}function Jn(){}function Qn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Cn(this),this.P=ti,t=Ce?125:void 0,this.V=new Tn(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zn}function Zn(){this.i=null,this.g="",this.h=!1}ce(qn,ge),ce(Yn,ge),ce(Jn,$n),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},Xn=new Jn;var ti=45e3,ei={},ni={};function ii(t,e,n){t.L=1,t.v=Ti(yi(e)),t.s=n,t.S=!0,ri(t,null)}function ri(t,e){t.G=Date.now(),hi(t),t.A=yi(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Mi(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Zn,t.g=kr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Sn(he(t.Pa,t,t.g),t.O)),Ln(t.U,t.g,"readystatechange",t.nb),e=t.I?ze(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),jn(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var c=l[0];l=l[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function si(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function oi(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=ai(t,n),i==ni){4==e&&(t.o=4,Un(14),r=!1),Rn(t.j,t.m,null,"[Incomplete Response]");break}if(i==ei){t.o=4,Un(15),Rn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Rn(t.j,t.m,i,null),pi(t,i)}si(t)&&i!=ni&&i!=ei&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Un(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),_r(e),e.M=!0,Un(11))):(Rn(t.j,t.m,n,"[Invalid Chunked Response]"),fi(t),ui(t))}function ai(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ni:(n=Number(e.substring(n,i)),isNaN(n)?ei:(i+=1)+n>e.length?ni:(e=e.slice(i,i+n),t.C=i+n,e))}function hi(t){t.Y=Date.now()+t.P,li(t,t.P)}function li(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Hn(he(t.lb,t),e)}function ci(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}function ui(t){0==t.l.H||t.J||Dr(t.l,t)}function fi(t){ci(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,An(t.V),Nn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function pi(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Hi(n.i,t)))if(!t.K&&Hi(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Cr(n),yr(n)}Ir(n),Un(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Hn(he(n.ib,n),6e3));if(1>=Bi(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Nr(n,11)}else if((t.K||n.g==t)&&Cr(n),!ye(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const e=l[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const c=l[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Vi(s,s.h),s.h=null))}if(i.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,wi(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Rr(i,i.J?i.pa:null,i.Y),o.K){zi(i.i,o);var a=o,h=i.L;h&&a.setTimeout(h),a.B&&(ci(a),hi(a)),i.g=o}else Ar(i);0<n.j.length&&br(n)}else"stop"!=l[0]&&"close"!=l[0]||Nr(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Nr(n,7):mr(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}jn()}catch(t){}}function di(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ne(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ne(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ne(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(Jt=Qn.prototype).setTimeout=function(t){this.P=t},Jt.nb=function(t){t=t.target;const e=this.M;e&&3==cr(t)?e.l():this.Pa(t)},Jt.Pa=function(t){try{if(t==this.g)t:{const c=cr(this.g);var e=this.g.Ia();this.g.da();if(!(3>c)&&(3!=c||Ce||this.g&&(this.h.h||this.g.ja()||ur(this.g)))){this.J||4!=c||7==e||jn(),ci(this);var n=this.g.da();this.ca=n;e:if(si(this)){var i=ur(this.g);t="";var r=i.length,s=4==cr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){fi(this),ui(this);var o="";break e}this.h.i=new ee.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Un(12),fi(this),ui(this);break t}Rn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pi(this,n)}this.S?(oi(this,c,o),Ce&&this.i&&3==c&&(Ln(this.U,this.V,"tick",this.mb),this.V.start())):(Rn(this.j,this.m,o,null),pi(this,o)),4==c&&fi(this),this.i&&!this.J&&(4==c?Dr(this.l,this):(this.i=!1,hi(this)))}else(function(t){const e={};t=(t.g&&2<=cr(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(ye(t[i]))continue;var n=gn(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Un(12)):(this.o=0,Un(13)),fi(this),ui(this)}}}catch(t){}},Jt.mb=function(){if(this.g){var t=cr(this.g),e=this.g.ja();this.C<e.length&&(ci(this),oi(this,t,e),this.i&&4!=t&&hi(this))}},Jt.cancel=function(){this.J=!0,fi(this)},Jt.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(jn(),Un(17)),fi(this),this.o=2,ui(this)):li(this,this.Y-t)};var gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mi){this.h=t.h,vi(this,t.j),this.s=t.s,this.g=t.g,bi(this,t.m),this.l=t.l;var e=t.i,n=new Oi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ei(this,n),this.o=t.o}else t&&(e=String(t).match(gi))?(this.h=!1,vi(this,e[1]||"",!0),this.s=Ai(e[2]||""),this.g=Ai(e[3]||"",!0),bi(this,e[4]),this.l=Ai(e[5]||"",!0),Ei(this,e[6]||"",!0),this.o=Ai(e[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}function yi(t){return new mi(t)}function vi(t,e,n){t.j=n?Ai(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ei(t,e,n){e instanceof Oi?(t.i=e,function(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ki(this,e),Mi(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ii(e,Li)),t.i=new Oi(e,t.h))}function wi(t,e,n){t.i.set(e,n)}function Ti(t){return wi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ai(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ii(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,_i),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _i(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}mi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ii(e,Si,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ii(e,Si,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ii(n,"/"==n.charAt(0)?Di:Ci,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ii(n,Ni)),t.join("")};var Si=/[#\/\?@]/g,Ci=/[#\?:]/g,Di=/[#\?]/g,Li=/[#\?@]/g,Ni=/#/g;function Oi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ki(t,e){Ri(t),e=xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Pi(t,e){return Ri(t),e=xi(t,e),t.g.has(e)}function Mi(t,e,n){ki(t,e),0<n.length&&(t.i=null,t.g.set(xi(t,e),pe(n)),t.h+=n.length)}function xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Jt=Oi.prototype).add=function(t,e){Ri(this),this.i=null,t=xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Jt.forEach=function(t,e){Ri(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Jt.ta=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Jt.Z=function(t){Ri(this);let e=[];if("string"==typeof t)Pi(this,t)&&(e=e.concat(this.g.get(xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Jt.set=function(t,e){return Ri(this),this.i=null,Pi(this,t=xi(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Jt.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Jt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function ji(t){this.l=t||Fi,ee.PerformanceNavigationTiming?t=0<(t=ee.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fi=10;function Ui(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Bi(t){return t.h?1:t.g?t.g.size:0}function Hi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Vi(t,e){t.g?t.g.add(e):t.h=e}function zi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function $i(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return pe(t.i)}ji.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gi(){this.g=new class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}}}function Ki(t,e,n){const i=n||"";try{di(t,(function(t,n){let r=t;ie(t)&&(r=un(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Xi(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Wi(t){this.l=t.fc||null,this.j=t.ob||!1}function qi(t,e){hn.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Yi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(Wi,$n),Wi.prototype.g=function(){return new qi(this.l,this.j)},Wi.prototype.i=function(t){return function(){return t}}({}),ce(qi,hn);var Yi=0;function Ji(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Qi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zi(t)}function Zi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Jt=qi.prototype).open=function(t,e){if(this.readyState!=Yi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zi(this)},Jt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Jt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qi(this)),this.readyState=Yi},Jt.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==ee.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ji(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Jt.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qi(this):Zi(this),3==this.readyState&&Ji(this)}},Jt.Za=function(t){this.g&&(this.response=this.responseText=t,Qi(this))},Jt.Ya=function(t){this.g&&(this.response=t,Qi(this))},Jt.ka=function(){this.g&&Qi(this)},Jt.setRequestHeader=function(t,e){this.v.append(t,e)},Jt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Jt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var tr=ee.JSON.parse;function er(t){hn.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nr,this.L=this.M=!1}ce(er,hn);var nr="",ir=/^https?$/i,rr=["POST","PUT"];function sr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,or(t),hr(t)}function or(t){t.F||(t.F=!0,ln(t,"complete"),ln(t,"error"))}function ar(t){if(t.h&&void 0!==te&&(!t.C[1]||4!=cr(t)||2!=t.da()))if(t.v&&4==cr(t))In(t.La,0,t);else if(ln(t,"readystatechange"),4==cr(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(gi)[1]||null;!r&&ee.self&&ee.self.location&&(r=ee.self.location.protocol.slice(0,-1)),i=!ir.test(r?r.toLowerCase():"")}n=i}if(n)ln(t,"complete"),ln(t,"success");else{t.m=6;try{var s=2<cr(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",or(t)}}finally{hr(t)}}}function hr(t,e){if(t.g){lr(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ln(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function lr(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}function cr(t){return t.g?t.g.readyState:0}function ur(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case nr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function fr(t){let e="";return Ve(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function pr(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=fr(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):wi(t,e,n))}function dr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gr(t){this.Ga=0,this.j=[],this.l=new On,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=dr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=dr("baseRetryDelayMs",5e3,t),this.hb=dr("retryDelaySeedMs",1e4,t),this.eb=dr("forwardChannelMaxRetries",2,t),this.xa=dr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ji(t&&t.concurrentRequestLimit),this.Ja=new Gi,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function mr(t){if(vr(t),3==t.H){var e=t.W++,n=yi(t.I);if(wi(n,"SID",t.K),wi(n,"RID",e),wi(n,"TYPE","terminate"),wr(t,n),(e=new Qn(t,t.l,e)).L=2,e.v=Ti(yi(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&ee.Image&&((new Image).src=e.v,n=!0),n||(e.g=kr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),hi(e)}Or(t)}function yr(t){t.g&&(_r(t),t.g.cancel(),t.g=null)}function vr(t){yr(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Cr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&ee.clearTimeout(t.m),t.m=null)}function br(t){if(!Ui(t.i)&&!t.m){t.m=!0;var e=t.Na;yn||En(),vn||(yn(),vn=!0),bn.add(e,t),t.C=0}}function Er(t,e){var n;n=e?e.m:t.W++;const i=yi(t.I);wi(i,"SID",t.K),wi(i,"RID",n),wi(i,"AID",t.V),wr(t,i),t.o&&t.s&&pr(i,t.o,t.s),n=new Qn(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Tr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vi(t.i,n),ii(n,i,e)}function wr(t,e){t.na&&Ve(t.na,(function(t,n){wi(e,n,t)})),t.h&&di({},(function(t,n){wi(e,n,t)}))}function Tr(t,e,n){n=Math.min(t.j.length,n);var i=t.h?he(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{Ki(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Ar(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yn||En(),vn||(yn(),vn=!0),bn.add(e,t),t.A=0}}function Ir(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Hn(he(t.Ma,t),Lr(t,t.A)),t.A++,!0)}function _r(t){null!=t.B&&(ee.clearTimeout(t.B),t.B=null)}function Sr(t){t.g=new Qn(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=yi(t.wa);wi(e,"RID","rpc"),wi(e,"SID",t.K),wi(e,"AID",t.V),wi(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&wi(e,"TO",t.qa),wi(e,"TYPE","xmlhttp"),wr(t,e),t.o&&t.s&&pr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ti(yi(e)),n.s=null,n.S=!0,ri(n,t)}function Cr(t){null!=t.v&&(ee.clearTimeout(t.v),t.v=null)}function Dr(t,e){var n=null;if(t.g==e){Cr(t),_r(t),t.g=null;var i=2}else{if(!Hi(t.i,e))return;n=e.F,zi(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;ln(i=Mn(),new Bn(i,n)),br(t)}else Ar(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(Bi(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Hn(he(t.Na,t,e),Lr(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ir(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Nr(t,5);break;case 4:Nr(t,10);break;case 3:Nr(t,6);break;default:Nr(t,2)}}function Lr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Nr(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=he(t.pb,t);n||(n=new mi("//www.google.com/images/cleardot.gif"),ee.location&&"http"==ee.location.protocol||vi(n,"https"),Ti(n)),function(t,e){const n=new On;if(ee.Image){const i=new Image;i.onload=le(Xi,n,i,"TestLoadImage: loaded",!0,e),i.onerror=le(Xi,n,i,"TestLoadImage: error",!1,e),i.onabort=le(Xi,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=le(Xi,n,i,"TestLoadImage: timeout",!1,e),ee.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Un(2);t.H=0,t.h&&t.h.za(e),Or(t),vr(t)}function Or(t){if(t.H=0,t.ma=[],t.h){const e=$i(t.i);0==e.length&&0==t.j.length||(de(t.ma,e),de(t.ma,t.j),t.i.i.length=0,pe(t.j),t.j.length=0),t.h.ya()}}function Rr(t,e,n){var i=n instanceof mi?yi(n):new mi(n);if(""!=i.g)e&&(i.g=e+"."+i.g),bi(i,i.m);else{var r=ee.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new mi(null);i&&vi(s,i),e&&(s.g=e),r&&bi(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&wi(i,n,e),wi(i,"VER",t.ra),wr(t,i),i}function kr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new er(new Wi({ob:!0})):new er(t.va)).Oa(t.J),e}function Pr(){}function Mr(){if(_e&&!(10<=Number(Me)))throw Error("Environmental error: no available transport.")}function xr(t,e){hn.call(this),this.g=new gr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ye(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ye(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ur(this)}function jr(t){qn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Fr(){Yn.call(this),this.status=1}function Ur(t){this.g=t}function Br(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Hr(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function Vr(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(Jt=er.prototype).Oa=function(t){this.M=t},Jt.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xn.g(),this.C=this.u?Gn(this.u):Gn(Xn),this.g.onreadystatechange=he(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void sr(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=ee.FormData&&t instanceof ee.FormData,!(0<=fe(rr,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lr(this),0<this.B&&((this.L=function(t){return _e&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=he(this.ua,this)):this.A=In(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){sr(this,t)}},Jt.ua=function(){void 0!==te&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ln(this,"timeout"),this.abort(8))},Jt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ln(this,"complete"),ln(this,"abort"),hr(this))},Jt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hr(this,!0)),er.$.N.call(this)},Jt.La=function(){this.s||(this.G||this.v||this.l?ar(this):this.kb())},Jt.kb=function(){ar(this)},Jt.isActive=function(){return!!this.g},Jt.da=function(){try{return 2<cr(this)?this.g.status:-1}catch(t){return-1}},Jt.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Jt.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),tr(e)}},Jt.Ia=function(){return this.m},Jt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Jt=gr.prototype).ra=8,Jt.H=1,Jt.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Qn(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ze(s),Ge(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Tr(this,r,e),wi(n=yi(this.I),"RID",t),wi(n,"CVER",22),this.F&&wi(n,"X-HTTP-Session-Id",this.F),wr(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(fr(s)))+"&"+e:this.o&&pr(n,this.o,s)),Vi(this.i,r),this.bb&&wi(n,"TYPE","init"),this.P?(wi(n,"$req",e),wi(n,"SID","null"),r.aa=!0,ii(r,n,null)):ii(r,n,e),this.H=2}}else 3==this.H&&(t?Er(this,t):0==this.j.length||Ui(this.i)||Er(this))},Jt.Ma=function(){if(this.u=null,Sr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Hn(he(this.jb,this),t)}},Jt.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Un(10),yr(this),Sr(this))},Jt.ib=function(){null!=this.v&&(this.v=null,yr(this),Ir(this),Un(19))},Jt.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Un(2)):(this.l.info("Failed to ping google.com"),Un(1))},Jt.isActive=function(){return!!this.h&&this.h.isActive(this)},(Jt=Pr.prototype).Ba=function(){},Jt.Aa=function(){},Jt.za=function(){},Jt.ya=function(){},Jt.isActive=function(){return!0},Jt.Va=function(){},Mr.prototype.g=function(t,e){return new xr(t,e)},ce(xr,hn),xr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Un(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Rr(t,null,t.Y),br(t)},xr.prototype.close=function(){mr(this.g)},xr.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=un(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&br(e)},xr.prototype.N=function(){this.g.h=null,delete this.j,mr(this.g),delete this.g,xr.$.N.call(this)},ce(jr,qn),ce(Fr,Yn),ce(Ur,Pr),Ur.prototype.Ba=function(){ln(this.g,"a")},Ur.prototype.Aa=function(t){ln(this.g,new jr(t))},Ur.prototype.za=function(t){ln(this.g,new Fr)},Ur.prototype.ya=function(){ln(this.g,"b")},ce(Br,(function(){this.blockSize=-1})),Br.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Br.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)Hr(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Hr(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Hr(this,i),r=0;break}}this.h=r,this.i+=e},Br.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var zr={};function $r(t){return-128<=t&&128>t?function(t,e){var n=zr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Vr([0|t],0>t?-1:0)})):new Vr([0|t],0>t?-1:0)}function Gr(t){if(isNaN(t)||!isFinite(t))return Xr;if(0>t)return Qr(Gr(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Kr;return new Vr(e,0)}var Kr=4294967296,Xr=$r(0),Wr=$r(1),qr=$r(16777216);function Yr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Jr(t){return-1==t.h}function Qr(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Vr(n,~t.h).add(Wr)}function Zr(t,e){return t.add(Qr(e))}function ts(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function es(t,e){this.g=t,this.h=e}function ns(t,e){if(Yr(e))throw Error("division by zero");if(Yr(t))return new es(Xr,Xr);if(Jr(t))return e=ns(Qr(t),e),new es(Qr(e.g),Qr(e.h));if(Jr(e))return e=ns(t,Qr(e)),new es(Qr(e.g),e.h);if(30<t.g.length){if(Jr(t)||Jr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wr,i=e;0>=i.X(t);)n=is(n),i=is(i);var r=rs(n,1),s=rs(i,1);for(i=rs(i,2),n=rs(n,2);!Yr(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=rs(i,1),n=rs(n,1)}return e=Zr(t,r.R(e)),new es(r,e)}for(r=Xr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=Gr(n)).R(e);Jr(o)||0<o.X(t);)o=(s=Gr(n-=i)).R(e);Yr(s)&&(s=Wr),r=r.add(s),t=Zr(t,o)}return new es(r,t)}function is(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Vr(n,t.h)}function rs(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Vr(r,t.h)}(Jt=Vr.prototype).ea=function(){if(Jr(this))return-Qr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Kr+i)*e,e*=Kr}return t},Jt.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Yr(this))return"0";if(Jr(this))return"-"+Qr(this).toString(t);for(var e=Gr(Math.pow(t,6)),n=this,i="";;){var r=ns(n,e).g,s=((0<(n=Zr(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Yr(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},Jt.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Jt.X=function(t){return Jr(t=Zr(this,t))?-1:Yr(t)?0:1},Jt.abs=function(){return Jr(this)?Qr(this):this},Jt.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Vr(n,-2147483648&n[n.length-1]?-1:0)},Jt.R=function(t){if(Yr(this)||Yr(t))return Xr;if(Jr(this))return Jr(t)?Qr(this).R(Qr(t)):Qr(Qr(this).R(t));if(Jr(t))return Qr(this.R(Qr(t)));if(0>this.X(qr)&&0>t.X(qr))return Gr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,h=65535&t.D(r);n[2*i+2*r]+=o*h,ts(n,2*i+2*r),n[2*i+2*r+1]+=s*h,ts(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,ts(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,ts(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Vr(n,0)},Jt.gb=function(t){return ns(this,t).h},Jt.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Vr(n,this.h&t.h)},Jt.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Vr(n,this.h|t.h)},Jt.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Vr(n,this.h^t.h)},Mr.prototype.createWebChannel=Mr.prototype.g,xr.prototype.send=xr.prototype.u,xr.prototype.open=xr.prototype.m,xr.prototype.close=xr.prototype.close,Vn.NO_ERROR=0,Vn.TIMEOUT=8,Vn.HTTP_ERROR=6,zn.COMPLETE="complete",Kn.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",hn.prototype.listen=hn.prototype.O,er.prototype.listenOnce=er.prototype.P,er.prototype.getLastError=er.prototype.Sa,er.prototype.getLastErrorCode=er.prototype.Ia,er.prototype.getStatus=er.prototype.da,er.prototype.getResponseJson=er.prototype.Wa,er.prototype.getResponseText=er.prototype.ja,er.prototype.send=er.prototype.ha,er.prototype.setWithCredentials=er.prototype.Oa,Br.prototype.digest=Br.prototype.l,Br.prototype.reset=Br.prototype.reset,Br.prototype.update=Br.prototype.j,Vr.prototype.add=Vr.prototype.add,Vr.prototype.multiply=Vr.prototype.R,Vr.prototype.modulo=Vr.prototype.gb,Vr.prototype.compare=Vr.prototype.X,Vr.prototype.toNumber=Vr.prototype.ea,Vr.prototype.toString=Vr.prototype.toString,Vr.prototype.getBits=Vr.prototype.D,Vr.fromNumber=Gr,Vr.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Qr(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Gr(Math.pow(n,8)),r=Xr,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Gr(Math.pow(n,o)),r=r.R(o).add(Gr(a))):r=(r=r.R(i)).add(Gr(a))}return r};Zt.createWebChannelTransport=function(){return new Mr},Zt.getStatEventTarget=function(){return Mn()},Zt.ErrorCode=Vn,Zt.EventType=zn,Zt.Event=kn,Zt.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Zt.FetchXmlHttpFactory=Wi,Zt.WebChannel=Kn,Zt.XhrIo=er,Zt.Md5=Br;var ss=Zt.Integer=Vr;
/**
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
 */
class os{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}os.UNAUTHENTICATED=new os(null),os.GOOGLE_CREDENTIALS=new os("google-credentials-uid"),os.FIRST_PARTY=new os("first-party-uid"),os.MOCK_USER=new os("mock-user");
/**
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
 */
let as="9.23.0";
/**
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
 */const hs=new Y("@firebase/firestore");function ls(t,...e){if(hs.logLevel<=$.DEBUG){const n=e.map(fs);hs.debug(`Firestore (${as}): ${t}`,...n)}}function cs(t,...e){if(hs.logLevel<=$.ERROR){const n=e.map(fs);hs.error(`Firestore (${as}): ${t}`,...n)}}function us(t,...e){if(hs.logLevel<=$.WARN){const n=e.map(fs);hs.warn(`Firestore (${as}): ${t}`,...n)}}function fs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function ps(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw cs(e),new Error(e)}function ds(t,e){t||ps()}
/**
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
 */
const gs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ms extends N{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class ys{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class vs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(os.UNAUTHENTICATED)))}shutdown(){}}class Es{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class ws{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ys,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{ls("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ls("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ys)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ls("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ds("string"==typeof e.accessToken),new vs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ds(null===t||"string"==typeof t),new os(t)}constructor(t){this.t=t,this.currentUser=os.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Ts{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=os.FIRST_PARTY,this.g=new Map}}class As{getToken(){return Promise.resolve(new Ts(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(os.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class Is{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _s{start(t,e){const n=t=>{null!=t.error&&ls("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,ls("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{ls("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?i(t):ls("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ds("string"==typeof t.token),this.T=t.token,new Is(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
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
 */
function Ss(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
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
 */class Cs{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Ss(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Ds(t,e){return t<e?-1:t>e?1:0}
/**
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
 */
class Ls{get length(){return this.len}isEqual(t){return 0===Ls.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ls?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&ps(),void 0===n?n=t.length-e:n>t.length-e&&ps(),this.segments=t,this.offset=e,this.len=n}}class Ns extends Ls{construct(t,e,n){return new Ns(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ms(gs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ns(e)}static emptyPath(){return new Ns([])}}
/**
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
 */
class Os{static fromPath(t){return new Os(Ns.fromString(t))}static fromName(t){return new Os(Ns.fromString(t).popFirst(5))}static empty(){return new Os(Ns.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ns.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ns.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Os(new Ns(t.slice()))}constructor(t){this.path=t}}
/**
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
 */class Rs{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Rs.UNKNOWN_ID=-1;function ks(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class Ps{ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}}function Ms(t){return 0===t&&1/t==-1/0}Ps.ct=-1;const xs=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],js=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fs=js;
/**
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
 */
/**
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
 */
class Us{insert(t,e){return new Us(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Hs.BLACK,null,null))}remove(t){return new Us(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Hs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bs(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Hs.EMPTY}}class Bs{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Hs{copy(t,e,n,i,r){return new Hs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Hs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Hs.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Hs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Hs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ps();if(this.right.isRed())throw ps();const t=this.left.check();if(t!==this.right.check())throw ps();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Hs.RED,this.left=null!=i?i:Hs.EMPTY,this.right=null!=r?r:Hs.EMPTY,this.size=this.left.size+1+this.right.size}}Hs.EMPTY=null,Hs.RED=!0,Hs.BLACK=!1,Hs.EMPTY=new class{get key(){throw ps()}get value(){throw ps()}get color(){throw ps()}get left(){throw ps()}get right(){throw ps()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Hs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
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
 */
class Vs{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zs(this.data.getIterator())}getIteratorFrom(t){return new zs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Vs))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Vs(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Us(this.comparator)}}class zs{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
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
 */
class $s extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */let Gs=Symbol.iterator;
/**
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
 */class Ks{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new $s("Invalid base64 string: "+t):t}}(t);return new Ks(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ks(e)}[Gs](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ds(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Ks.EMPTY_BYTE_STRING=new Ks("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ws(t){return"string"==typeof t?Ks.fromBase64String(t):Ks.fromUint8Array(t)}
/**
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
 */
/**
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
 */
class qs{constructor(t,e,n,i,r,s,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class Ys{static empty(){return new Ys("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ys&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
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
 */function Js(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
new Us(Os.comparator);new Us(Os.comparator);new Us(Os.comparator),new Vs(Os.comparator);new Vs(Ds);
/**
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
 */
var Qs,Zs;(Zs=Qs||(Qs={}))[Zs.OK=0]="OK",Zs[Zs.CANCELLED=1]="CANCELLED",Zs[Zs.UNKNOWN=2]="UNKNOWN",Zs[Zs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Zs[Zs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Zs[Zs.NOT_FOUND=5]="NOT_FOUND",Zs[Zs.ALREADY_EXISTS=6]="ALREADY_EXISTS",Zs[Zs.PERMISSION_DENIED=7]="PERMISSION_DENIED",Zs[Zs.UNAUTHENTICATED=16]="UNAUTHENTICATED",Zs[Zs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Zs[Zs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Zs[Zs.ABORTED=10]="ABORTED",Zs[Zs.OUT_OF_RANGE=11]="OUT_OF_RANGE",Zs[Zs.UNIMPLEMENTED=12]="UNIMPLEMENTED",Zs[Zs.INTERNAL=13]="INTERNAL",Zs[Zs.UNAVAILABLE=14]="UNAVAILABLE",Zs[Zs.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new ss([4294967295,4294967295],0);Error;
/**
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
 */
/**
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
 */class to{_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(Xs(t.integerValue));else if("doubleValue"in t){const n=Xs(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),Ms(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(Ws(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Js(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):ps()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const t of Object.keys(n))this.Te(t,e),this.me(n[t],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const t of n)this.me(t,e)}ve(t,e){this.ye(e,37),Os.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}constructor(){}}to.Ve=new to;
/**
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
 */
new Uint8Array(0);class eo{static withCacheSize(t){return new eo(t,eo.DEFAULT_COLLECTION_PERCENTILE,eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */
/**
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
 */eo.DEFAULT_COLLECTION_PERCENTILE=10,eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,eo.DEFAULT=new eo(41943040,eo.DEFAULT_COLLECTION_PERCENTILE,eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),eo.DISABLED=new eo(-1,0,0);function no(){return"undefined"!=typeof document?document:null}
/**
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
 */
/**
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
 */
class io{reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-n);i>0&&ls("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(t,e,n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
/**
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
 */
/**
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
 */
class ro{static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new ro(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ms(gs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function so(t,e){if(cs("AsyncQueue",`${e}: ${t}`),ks(t))return new ms(gs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */
/**
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
 */
class oo{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ms(gs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=so(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=os.UNAUTHENTICATED,this.clientId=Cs.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ls("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ls("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}
/**
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
 */
function ao(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const ho=new Map;
/**
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
 */function lo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":ps()}function co(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ms(gs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lo(t);throw new ms(gs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class uo{isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ms(gs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ms(gs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new ms(gs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ao(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ms(gs.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ms(gs.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ms(gs.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}}class fo{get app(){if(!this._app)throw new ms(gs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ms(gs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new bs;switch(t.type){case"firstParty":return new As(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ms(gs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ho.get(t);e&&(ls("ComponentProvider","Removing Datastore"),ho.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uo({}),this._settingsFrozen=!1}}function po(t,e,n,i={}){var r;const s=(t=co(t,fo))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=os.MOCK_USER;else{e=D(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ms(gs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new os(s)}t._authCredentials=new Es(new vs(e,n))}}
/**
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
 */
/**
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
 */
class go{get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=no();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new ys;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!ks(t))throw t;ls("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;throw cs("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const i=ro.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(i),i}Zc(){this.Wc&&ps()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new io(this,"async_queue_retry"),this.Xc=()=>{const t=no();t&&ls("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=no();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}}class mo extends fo{_terminate(){return this._firestoreClient||yo(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new go,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function yo(t){var e,n,i;const r=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",h=t._persistenceKey,new qs(o,a,h,(l=r).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ao(l.experimentalLongPollingOptions),l.useFetchStreams));var o,a,h,l;t._firestoreClient=new oo(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){as=Lt,At(new U("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new mo(new ws(t.getProvider("auth-internal")),new _s(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ms(gs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ys(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Pt("@firebase/firestore","3.13.0",t),Pt("@firebase/firestore","3.13.0","esm2017")}();
/**
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
 */
Pt("firebase","9.23.0","app");(function(t,e){const n="string"==typeof t?t:e||"(default)",i=It("object"==typeof t?t:Ot(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=_("firestore");t&&po(i,...t)}return i})(Nt({apiKey:"AIzaSyAWL009d3fIg7FDNeFa1MpQ8vcCju1UWEQ",authDomain:"project-js-fson82.firebaseapp.com",databaseURL:"https://project-js-fson82-default-rtdb.firebaseio.com",projectId:"project-js-fson82",storageBucket:"project-js-fson82.appspot.com",messagingSenderId:"729076020797",appId:"1:729076020797:web:e3a2da2c14a169a281dc54"})).collection("users").add({first:"Ada",last:"Lovelace",born:1815}).then((t=>{console.log("Document written with ID: ",t.id)})).catch((t=>{console.error("Error adding document: ",t)})),newMessageRef={name:"Igor",email:"chigorv@ukr.net",subject:"subject test",message:"1234567890"};
//# sourceMappingURL=index.e09fef6e.js.map
