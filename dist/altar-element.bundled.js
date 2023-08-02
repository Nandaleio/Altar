/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;class s{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new s(r,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",h=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v},m="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const r=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{e?i.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((e=>{const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var r;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,s=r._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=r.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;f[m]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(n=l.reactiveElementVersions)&&void 0!==n?n:l.reactiveElementVersions=[]).push("1.6.2");const y=window,g=y.trustedTypes,_=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,k="?"+x,$=`<${k}>`,z=document,C=()=>z.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O="[ \t\n\f\r]",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,T=/>/g,A=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,P=/"/g,L=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),B=new WeakMap,D=z.createTreeWalker(z,129,null,!1),F=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":"",a=E;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===E?"!--"===l[1]?a=j:void 0!==l[1]?a=T:void 0!==l[2]?(L.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=A):void 0!==l[3]&&(a=A):a===A?">"===l[0]?(a=null!=s?s:E,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?A:'"'===l[3]?P:R):a===P||a===R?a=A:a===j||a===T?a=E:(a=A,s=void 0);const h=a===A&&t[e+1].startsWith("/>")?" ":"";o+=a===E?i+$:c>=0?(r.push(n),i.slice(0,c)+w+i.slice(c)+x+h):i+x+(-2===c?(r.push(void 0),e):h)}const n=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(n):n,r]};class V{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const a=t.length-1,n=this.parts,[l,c]=F(t,e);if(this.el=V.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=D.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(w)||e.startsWith(x)){const i=c[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+w).split(x),e=/([.?@])?(.*)/.exec(i);n.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?q:"@"===e[1]?Z:K})}else n.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(L.test(r.tagName)){const t=r.textContent.split(x),e=t.length-1;if(e>0){r.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],C()),D.nextNode(),n.push({type:2,index:++s});r.append(t[e],C())}}}else if(8===r.nodeType)if(r.data===k)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(x,t+1));)n.push({type:7,index:s}),t+=x.length-1}s++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function H(t,e,i=t,r){var s,o,a,n;if(e===U)return e;let l=void 0!==r?null===(s=i._$Co)||void 0===s?void 0:s[r]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(a=(n=i)._$Co)&&void 0!==a?a:n._$Co=[])[r]=l:i._$Cl=l),void 0!==l&&(e=H(t,l._$AS(t,e.values),l,r)),e}class W{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:z).importNode(i,!0);D.currentNode=s;let o=D.nextNode(),a=0,n=0,l=r[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new G(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new J(o,this,t)),this._$AV.push(e),l=r[++n]}a!==(null==l?void 0:l.index)&&(o=D.nextNode(),a++)}return D.currentNode=z,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,r){var s;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),S(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=V.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new W(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new V(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new G(this.k(C()),this.k(C()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,r,s){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=H(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==U,o&&(this._$AH=t);else{const r=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=H(this,r[i+a],e,a),n===U&&(n=this._$AH[a]),o||(o=!S(n)||n!==this._$AH[a]),n===I?t=I:t!==I&&(t+=(null!=n?n:"")+s[a+1]),this._$AH[a]=n}o&&!r&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const Y=g?g.emptyScript:"";class q extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class Z extends K{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=H(this,t,e,0))&&void 0!==i?i:I)===U)return;const r=this._$AH,s=t===I&&r!==I||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==I&&(r===I||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const Q=y.litHtmlPolyfillSupport;null==Q||Q(V,G),(null!==(b=y.litHtmlVersions)&&void 0!==b?b:y.litHtmlVersions=[]).push("2.7.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var r,s;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let a=o._$litPart$;if(void 0===a){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=a=new G(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},at=(t,e,i)=>{e.constructor.createProperty(i,t)};function nt(t){return(e,i)=>void 0!==i?at(t,e,i):ot(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function lt(t){return nt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=({finisher:t,descriptor:e})=>(i,r)=>{var s;if(void 0===r){const r=null!==(s=i.originalKey)&&void 0!==s?s:i.key,o=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(o.finisher=function(e){t(e,r)}),o}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(s,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function dt(t,e){return ct({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(t){return ct({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut;const vt=null!=(null===(ut=window.HTMLSlotElement)||void 0===ut?void 0:ut.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function pt(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */}const mt=Symbol("attachableController");let ft;ft=new MutationObserver((t=>{for(const e of t)e.target[mt]?.hostConnected()}));class bt{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[mt]=this,ft?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const yt=["focusin","focusout","pointerdown"];class gt extends it{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new bt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}handleEvent(t){if(!t[_t]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[_t]=!0}}onControlChange(t,e){for(const i of yt)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}pt([nt({type:Boolean,reflect:!0})],gt.prototype,"visible",void 0),pt([nt({type:Boolean,reflect:!0})],gt.prototype,"inward",void 0);const _t=Symbol("handledByFocusRing"),wt=o`:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */let xt=class extends gt{};xt.styles=[wt],xt=pt([st("md-focus-ring")],xt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt=1,$t=t=>(...e)=>({_$litDirective$:t,values:e});class zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=$t(class extends zt{constructor(t){var e;if(super(t),t.type!==kt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const s=t.element.classList;this.it.forEach((t=>{t in e||(s.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(r=this.nt)||void 0===r?void 0:r.has(t))||(i?(s.add(t),this.it.add(t)):(s.remove(t),this.it.delete(t)))}return U}}),St="cubic-bezier(0.2, 0, 0, 1)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Mt;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Mt||(Mt={}));const Ot=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"];class Et extends it{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Mt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new bt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}render(){const t={hovered:this.hovered,pressed:this.pressed};return N`<div class="surface ${Ct(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==Mt.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==Mt.HOLDING)return this.state===Mt.TOUCH_DELAY?(this.state=Mt.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Mt.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=Mt.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=Mt.TOUCH_DELAY,await new Promise((t=>{setTimeout(t,150)})),this.state===Mt.TOUCH_DELAY&&(this.state=Mt.HOLDING,this.startPressAnimation(t)))}}handleClick(){this.disabled||(this.state!==Mt.WAITING_FOR_CLICK?this.state===Mt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),r=Math.max(.35*i,75),s=Math.floor(.2*i),o=Math.sqrt(e**2+t**2)+10;this.initialSize=s,this.rippleScale=""+(o+r)/s,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:r,top:s}=this.getBoundingClientRect(),o=e+r,a=i+s,{pageX:n,pageY:l}=t;return{x:n-o,y:l-a}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),r={x:(i-this.initialSize)/2,y:(e-this.initialSize)/2};let s;return s=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/2,y:e/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:r}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),r=`${e.x}px, ${e.y}px`,s=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${s}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:St,fill:"forwards"})}async endPressAnimation(){this.state=Mt.INACTIVE;const t=this.growAnimation,e=t?.currentTime??1/0;e>=225?this.pressed=!1:(await new Promise((t=>{setTimeout(t,225-e)})),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:i,left:r,bottom:s,right:o}=this.getBoundingClientRect();return t>=r&&t<=o&&e>=i&&e<=s}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of Ot)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}pt([nt({type:Boolean,reflect:!0})],Et.prototype,"disabled",void 0),pt([lt()],Et.prototype,"hovered",void 0),pt([lt()],Et.prototype,"pressed",void 0),pt([dt(".surface")],Et.prototype,"mdRoot",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const jt=o`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Tt=class extends Et{};Tt.styles=[jt],Tt=pt([st("md-ripple")],Tt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At=Symbol.for(""),Rt=t=>{if((null==t?void 0:t.r)===At)return null==t?void 0:t._$litStatic$},Pt=(t,...e)=>({_$litStatic$:e.reduce(((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:At}),Lt=new Map,Nt=(t=>(e,...i)=>{const r=i.length;let s,o;const a=[],n=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(o=i[c],s=Rt(o));)l+=s+e[++c],d=!0;c!==r&&n.push(o),a.push(l),c++}if(c===r&&a.push(e[r]),d){const t=a.join("$$lit$$");void 0===(e=Lt.get(t))&&(a.raw=a,Lt.set(t,e=a)),i=n}return t(e,...i)})(N),Ut=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function It(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Bt(t){for(const e of Ut)t.createProperty(e,{attribute:It(e),reflect:!0});t.addInitializer((t=>{const e={hostConnected(){t.setAttribute("role","presentation")}};t.addController(e)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Dt(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(i);return r||e.preventDefault(),r}function Ft(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function Vt(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=Ht;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){Ht=!0,await null,Ht=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),e}(t)))}Ut.map(It);let Ht=!1;class Wt extends it{static get formAssociated(){return!0}constructor(){super(),this.disabled=!1,this.trailingIcon=!1,this.hasIcon=!1,this.preventClickDefault=!1,this.type="",this.internals=this.attachInternals(),this.isRedispatchingEvent=!1,this.handleActivationClick=t=>{Vt(t)&&this.buttonElement&&(this.focus(),Ft(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=this.disabled&&!this.href,e=this.href?Pt`a`:Pt`button`,{ariaLabel:i,ariaHasPopup:r,ariaExpanded:s}=this;return Nt`
      <${e}
        class="md3-button ${Ct(this.getRenderClasses())}"
        ?disabled=${t}
        aria-label="${i||I}"
        aria-haspopup="${r||I}"
        aria-expanded="${s||I}"
        href=${this.href||I}
        target=${this.target||I}
        @click="${this.handleClick}"
      >
        ${this.renderFocusRing()}
        ${this.renderElevation()}
        ${this.renderRipple()}
        ${this.renderOutline()}
        ${this.renderTouchTarget()}
        ${this.renderLeadingIcon()}
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </${e}>`}getRenderClasses(){return{"md3-button--icon-leading":!this.trailingIcon&&this.hasIcon,"md3-button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderElevation(){return I}renderOutline(){return I}renderTouchTarget(){return N`
      <span class="md3-button__touch"></span>
    `}renderRipple(){return N`<md-ripple class="md3-button__ripple" ?disabled="${this.disabled}"></md-ripple>`}renderFocusRing(){return N`<md-focus-ring></md-focus-ring>`}renderLabel(){return N`<span class="md3-button__label"><slot></slot></span>`}renderLeadingIcon(){return this.trailingIcon?I:this.renderIcon()}renderTrailingIcon(){return this.trailingIcon?this.renderIcon():I}renderIcon(){return N`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`}handleClick(t){if(this.isRedispatchingEvent)return;this.preventClickDefault&&t.preventDefault();const{type:e,internals:{form:i}}=this;if(!i)return;const r="submit"===e,s="reset"===e;if(!r&&!s)return;t.stopPropagation(),this.isRedispatchingEvent=!0;const o=!Dt(this,t);this.isRedispatchingEvent=!1,o||(r?i.requestSubmit():s&&i.reset())}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Bt(Wt),Wt.shadowRootOptions={mode:"open",delegatesFocus:!0},pt([nt({type:Boolean,reflect:!0})],Wt.prototype,"disabled",void 0),pt([nt()],Wt.prototype,"href",void 0),pt([nt()],Wt.prototype,"target",void 0),pt([nt({type:Boolean,attribute:"trailingicon"})],Wt.prototype,"trailingIcon",void 0),pt([nt({type:Boolean})],Wt.prototype,"hasIcon",void 0),pt([nt({type:Boolean})],Wt.prototype,"preventClickDefault",void 0),pt([nt()],Wt.prototype,"type",void 0),pt([dt(".md3-button")],Wt.prototype,"buttonElement",void 0),pt([function(t){const{slot:e,selector:i}=null!=t?t:{};return ct({descriptor:r=>({get(){var r;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(s),a=null!=o?vt(o,t):[];return i?a.filter((t=>t.matches(i))):a},enumerable:!0,configurable:!0})})}({slot:"icon",flatten:!0})],Wt.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Gt extends Wt{getRenderClasses(){return{...super.getRenderClasses(),"md3-button--outlined":!0}}renderOutline(){return N`<span class="md3-button__outline"></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Kt=o`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-color: var(--md-outlined-button-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-outline-color: var(--md-outlined-button-hover-outline-color, var(--md-sys-color-outline, #79747e));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-outlined-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-outlined-button-with-icon-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_with-icon-disabled-icon-opacity: var(--md-outlined-button-with-icon-disabled-icon-opacity, 0.38);--_with-icon-focus-icon-color: var(--md-outlined-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color: var(--md-outlined-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color: var(--md-outlined-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size: var(--md-outlined-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-outlined-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading: var(--md-outlined-button-spacing-leading, 24px);--_spacing-trailing: var(--md-outlined-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-outlined-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-outlined-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-outlined-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-outlined-button-with-trailing-icon-spacing-trailing, 16px);--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.md3-button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-button:active .md3-button__outline{border-color:var(--_pressed-outline-color)}.md3-button:disabled .md3-button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.md3-button__outline,.md3-button__ripple{border-width:var(--_outline-width)}.md3-button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */,Xt=o`:root{--md-filled-button-container-shape-start-start: 12px;--md-filled-button-container-shape: 8px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.md3-button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;block-size:var(--_container-height);font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_spacing-leading);padding-inline-end:var(--_spacing-trailing);gap:8px}.md3-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.md3-button::-moz-focus-inner{padding:0;border:0}.md3-button:hover{color:var(--_hover-label-text-color);cursor:pointer}.md3-button:focus{color:var(--_focus-label-text-color)}.md3-button:active{color:var(--_pressed-label-text-color);outline:none}.md3-button:disabled .md3-button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.md3-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.md3-button::before{content:"";box-sizing:border-box;border:1px solid rgba(0,0,0,0);border-radius:inherit;inset:0;pointer-events:none;position:absolute}}.md3-button,.md3-button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-button::after,.md3-button::before,md-elevation,.md3-button__ripple{z-index:-1}.md3-button--icon-leading{padding-inline-start:var(--_with-icon-spacing-leading);padding-inline-end:var(--_with-icon-spacing-trailing)}.md3-button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-spacing-leading);padding-inline-end:var(--_with-trailing-icon-spacing-trailing)}.md3-link-button-wrapper{inline-size:100%}.md3-button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_with-icon-icon-color);font-size:var(--_with-icon-icon-size);inline-size:var(--_with-icon-icon-size);block-size:var(--_with-icon-icon-size)}.md3-button:hover ::slotted([slot=icon]){color:var(--_with-icon-hover-icon-color)}.md3-button:focus ::slotted([slot=icon]){color:var(--_with-icon-focus-icon-color)}.md3-button:active ::slotted([slot=icon]){color:var(--_with-icon-pressed-icon-color)}.md3-button:disabled ::slotted([slot=icon]){color:var(--_with-icon-disabled-icon-color);opacity:var(--_with-icon-disabled-icon-opacity)}.md3-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}/*# sourceMappingURL=shared-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Yt=class extends Gt{};Yt.styles=[Xt,Kt],Yt=pt([st("md-outlined-button")],Yt);class qt extends CustomEvent{constructor(t,e){super(t,{bubbles:!0,composed:!0,detail:e})}}var Zt=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Jt=class extends it{constructor(){super(),this.addEventListener("click",(()=>this.fileInput.click()))}fileChange(t){const e=t.target.files[0];this.dispatchEvent(new qt("file-selected",e))}render(){return N`
        <md-outlined-button @click="${this.click}">Select a file</md-outlined-button>
        <input id="altar-file-input" type="file" @change="${this.fileChange}">
    `}};function Qt(t){return t.split("-")[1]}function te(t){return"y"===t?"height":"width"}function ee(t){return t.split("-")[0]}function ie(t){return["top","bottom"].includes(ee(t))?"x":"y"}function re(t,e,i){let{reference:r,floating:s}=t;const o=r.x+r.width/2-s.width/2,a=r.y+r.height/2-s.height/2,n=ie(e),l=te(n),c=r[l]/2-s[l]/2,d="x"===n;let h;switch(ee(e)){case"top":h={x:o,y:r.y-s.height};break;case"bottom":h={x:o,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:a};break;case"left":h={x:r.x-s.width,y:a};break;default:h={x:r.x,y:r.y}}switch(Qt(e)){case"start":h[n]-=c*(i&&d?-1:1);break;case"end":h[n]+=c*(i&&d?-1:1)}return h}Jt.styles=o`
    #altar-file-input {
        display: none;
    }
  `,Zt([dt("#altar-file-input")],Jt.prototype,"fileInput",void 0),Jt=Zt([st("altar-file-selector")],Jt);function se(t,e){return"function"==typeof t?t(e):t}function oe(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}const ae=["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),ne={left:"right",right:"left",bottom:"top",top:"bottom"};function le(t){return t.replace(/left|right|bottom|top/g,(t=>ne[t]))}const ce={start:"end",end:"start"};function de(t,e,i){return(t?[...i.filter((e=>Qt(e)===t)),...i.filter((e=>Qt(e)!==t))]:i.filter((t=>ee(t)===t))).filter((i=>!t||(Qt(i)===t||!!e&&function(t){return t.replace(/start|end/g,(t=>ce[t]))}(i)!==i)))}const he=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var i,r,s;const{rects:o,middlewareData:a,placement:n,platform:l,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:u=ae,autoAlignment:v=!0,...p}=se(t,e),m=void 0!==h||u===ae?de(h||null,v,u):u,f=await async function(t,e){var i;void 0===e&&(e={});const{x:r,y:s,platform:o,rects:a,elements:n,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:v=0}=se(e,t),p=function(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}(v),m=n[u?"floating"===h?"reference":"floating":h],f=oe(await o.getClippingRect({element:null==(i=await(null==o.isElement?void 0:o.isElement(m)))||i?m:m.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(n.floating)),boundary:c,rootBoundary:d,strategy:l})),b="floating"===h?{...a.floating,x:r,y:s}:a.reference,y=await(null==o.getOffsetParent?void 0:o.getOffsetParent(n.floating)),g=await(null==o.isElement?void 0:o.isElement(y))&&await(null==o.getScale?void 0:o.getScale(y))||{x:1,y:1},_=oe(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:y,strategy:l}):b);return{top:(f.top-_.top+p.top)/g.y,bottom:(_.bottom-f.bottom+p.bottom)/g.y,left:(f.left-_.left+p.left)/g.x,right:(_.right-f.right+p.right)/g.x}}(e,p),b=(null==(i=a.autoPlacement)?void 0:i.index)||0,y=m[b];if(null==y)return{};const{main:g,cross:_}=function(t,e,i){void 0===i&&(i=!1);const r=Qt(t),s=ie(t),o=te(s);let a="x"===s?r===(i?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=le(a)),{main:a,cross:le(a)}}(y,o,await(null==l.isRTL?void 0:l.isRTL(c.floating)));if(n!==y)return{reset:{placement:m[0]}};const w=[f[ee(y)],f[g],f[_]],x=[...(null==(r=a.autoPlacement)?void 0:r.overflows)||[],{placement:y,overflows:w}],k=m[b+1];if(k)return{data:{index:b+1,overflows:x},reset:{placement:k}};const $=x.map((t=>{const e=Qt(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),z=$.filter((t=>t[2].slice(0,Qt(t[0])?2:3).every((t=>t<=0)))),C=(null==(s=z[0])?void 0:s[0])||$[0][0];return C!==n?{data:{index:b+1,overflows:x},reset:{placement:C}}:{}}}};function ue(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function ve(t){return ue(t).getComputedStyle(t)}function pe(t){return t instanceof ue(t).Node}function me(t){return pe(t)?(t.nodeName||"").toLowerCase():"#document"}function fe(t){return t instanceof ue(t).HTMLElement}function be(t){return t instanceof ue(t).Element}function ye(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ue(t).ShadowRoot||t instanceof ShadowRoot)}function ge(t){const{overflow:e,overflowX:i,overflowY:r,display:s}=ve(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(s)}function _e(t){return["table","td","th"].includes(me(t))}function we(t){const e=xe(),i=ve(t);return"none"!==i.transform||"none"!==i.perspective||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((t=>(i.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(i.contain||"").includes(t)))}function xe(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ke(t){return["html","body","#document"].includes(me(t))}const $e=Math.min,ze=Math.max,Ce=Math.round,Se=t=>({x:t,y:t});function Me(t){const e=ve(t);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=fe(t),o=s?t.offsetWidth:i,a=s?t.offsetHeight:r,n=Ce(i)!==o||Ce(r)!==a;return n&&(i=o,r=a),{width:i,height:r,$:n}}function Oe(t){return be(t)?t:t.contextElement}function Ee(t){const e=Oe(t);if(!fe(e))return Se(1);const i=e.getBoundingClientRect(),{width:r,height:s,$:o}=Me(e);let a=(o?Ce(i.width):i.width)/r,n=(o?Ce(i.height):i.height)/s;return a&&Number.isFinite(a)||(a=1),n&&Number.isFinite(n)||(n=1),{x:a,y:n}}const je=Se(0);function Te(t,e,i){var r,s;if(void 0===e&&(e=!0),!xe())return je;const o=t?ue(t):window;return!i||e&&i!==o?je:{x:(null==(r=o.visualViewport)?void 0:r.offsetLeft)||0,y:(null==(s=o.visualViewport)?void 0:s.offsetTop)||0}}function Ae(t,e,i,r){void 0===e&&(e=!1),void 0===i&&(i=!1);const s=t.getBoundingClientRect(),o=Oe(t);let a=Se(1);e&&(r?be(r)&&(a=Ee(r)):a=Ee(t));const n=Te(o,i,r);let l=(s.left+n.x)/a.x,c=(s.top+n.y)/a.y,d=s.width/a.x,h=s.height/a.y;if(o){const t=ue(o),e=r&&be(r)?ue(r):r;let i=t.frameElement;for(;i&&r&&e!==t;){const t=Ee(i),e=i.getBoundingClientRect(),r=getComputedStyle(i),s=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,o=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;l*=t.x,c*=t.y,d*=t.x,h*=t.y,l+=s,c+=o,i=ue(i).frameElement}}return oe({width:d,height:h,x:l,y:c})}function Re(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Pe(t){return be(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Le(t){return Ae(Re(t)).left+Pe(t).scrollLeft}function Ne(t){if("html"===me(t))return t;const e=t.assignedSlot||t.parentNode||ye(t)&&t.host||Re(t);return ye(e)?e.host:e}function Ue(t){const e=Ne(t);return ke(e)?t.ownerDocument?t.ownerDocument.body:t.body:fe(e)&&ge(e)?e:Ue(e)}function Ie(t,e){var i;void 0===e&&(e=[]);const r=Ue(t),s=r===(null==(i=t.ownerDocument)?void 0:i.body),o=ue(r);return s?e.concat(o,o.visualViewport||[],ge(r)?r:[]):e.concat(r,Ie(r))}function Be(t,e,i){let r;if("viewport"===e)r=function(t,e){const i=ue(t),r=Re(t),s=i.visualViewport;let o=r.clientWidth,a=r.clientHeight,n=0,l=0;if(s){o=s.width,a=s.height;const t=xe();(!t||t&&"fixed"===e)&&(n=s.offsetLeft,l=s.offsetTop)}return{width:o,height:a,x:n,y:l}}(t,i);else if("document"===e)r=function(t){const e=Re(t),i=Pe(t),r=t.ownerDocument.body,s=ze(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=ze(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-i.scrollLeft+Le(t);const n=-i.scrollTop;return"rtl"===ve(r).direction&&(a+=ze(e.clientWidth,r.clientWidth)-s),{width:s,height:o,x:a,y:n}}(Re(t));else if(be(e))r=function(t,e){const i=Ae(t,!0,"fixed"===e),r=i.top+t.clientTop,s=i.left+t.clientLeft,o=fe(t)?Ee(t):Se(1);return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:s*o.x,y:r*o.y}}(e,i);else{const i=Te(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return oe(r)}function De(t,e){const i=Ne(t);return!(i===e||!be(i)||ke(i))&&("fixed"===ve(i).position||De(i,e))}function Fe(t,e){return fe(t)&&"fixed"!==ve(t).position?e?e(t):t.offsetParent:null}function Ve(t,e){const i=ue(t);if(!fe(t))return i;let r=Fe(t,e);for(;r&&_e(r)&&"static"===ve(r).position;)r=Fe(r,e);return r&&("html"===me(r)||"body"===me(r)&&"static"===ve(r).position&&!we(r))?i:r||function(t){let e=Ne(t);for(;fe(e)&&!ke(e);){if(we(e))return e;e=Ne(e)}return null}(t)||i}function He(t,e,i){const r=fe(e),s=Re(e),o="fixed"===i,a=Ae(t,!0,o,e);let n={scrollLeft:0,scrollTop:0};const l=Se(0);if(r||!r&&!o)if(("body"!==me(e)||ge(s))&&(n=Pe(e)),fe(e)){const t=Ae(e,!0,o,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else s&&(l.x=Le(s));return{x:a.left+n.scrollLeft-l.x,y:a.top+n.scrollTop-l.y,width:a.width,height:a.height}}const We={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:r,strategy:s}=t;const o=[..."clippingAncestors"===i?function(t,e){const i=e.get(t);if(i)return i;let r=Ie(t).filter((t=>be(t)&&"body"!==me(t))),s=null;const o="fixed"===ve(t).position;let a=o?Ne(t):t;for(;be(a)&&!ke(a);){const e=ve(a),i=we(a);i||"fixed"!==e.position||(s=null),(o?!i&&!s:!i&&"static"===e.position&&s&&["absolute","fixed"].includes(s.position)||ge(a)&&!i&&De(t,a))?r=r.filter((t=>t!==a)):s=e,a=Ne(a)}return e.set(t,r),r}(e,this._c):[].concat(i),r],a=o[0],n=o.reduce(((t,i)=>{const r=Be(e,i,s);return t.top=ze(r.top,t.top),t.right=$e(r.right,t.right),t.bottom=$e(r.bottom,t.bottom),t.left=ze(r.left,t.left),t}),Be(e,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:r}=t;const s=fe(i),o=Re(i);if(i===o)return e;let a={scrollLeft:0,scrollTop:0},n=Se(1);const l=Se(0);if((s||!s&&"fixed"!==r)&&(("body"!==me(i)||ge(o))&&(a=Pe(i)),fe(i))){const t=Ae(i);n=Ee(i),l.x=t.x+i.clientLeft,l.y=t.y+i.clientTop}return{width:e.width*n.x,height:e.height*n.y,x:e.x*n.x-a.scrollLeft*n.x+l.x,y:e.y*n.y-a.scrollTop*n.y+l.y}},isElement:be,getDimensions:function(t){return Me(t)},getOffsetParent:Ve,getDocumentElement:Re,getScale:Ee,async getElementRects(t){let{reference:e,floating:i,strategy:r}=t;const s=this.getOffsetParent||Ve,o=this.getDimensions;return{reference:He(e,await s(i),r),floating:{x:0,y:0,...await o(i)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===ve(t).direction},Ge=(t,e,i)=>{const r=new Map,s={platform:We,...i},o={...s.platform,_c:r};return(async(t,e,i)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=i,n=o.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:h}=re(c,r,l),u=r,v={},p=0;for(let i=0;i<n.length;i++){const{name:o,fn:m}=n[i],{x:f,y:b,data:y,reset:g}=await m({x:d,y:h,initialPlacement:r,placement:u,strategy:s,middlewareData:v,rects:c,platform:a,elements:{reference:t,floating:e}});d=null!=f?f:d,h=null!=b?b:h,v={...v,[o]:{...v[o],...y}},g&&p<=50&&(p++,"object"==typeof g&&(g.placement&&(u=g.placement),g.rects&&(c=!0===g.rects?await a.getElementRects({reference:t,floating:e,strategy:s}):g.rects),({x:d,y:h}=re(c,u,l))),i=-1)}return{x:d,y:h,placement:u,strategy:s,middlewareData:v}})(t,e,{...s,platform:o})};var Ke=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Xe=class extends it{constructor(){super(...arguments),this.show=!1}showCommentAtElement(t){this.show=!0,Ge(t,this,{middleware:[he()]}).then((({x:t,y:e})=>{Object.assign(this.style,{left:`${t}px`,top:`${e}px`})}))}saveComment(){this.editorBaseElement.value&&(this.dispatchEvent(new qt("save-comment",this.editorBaseElement.value)),this.editorBaseElement.value="")}cancelComment(){this.editorBaseElement.value=""}render(){return N`
    <div class="main-content" style="display: ${this.show?"flex":"none"}">
      <textarea id="altar-text-editor"></textarea>
      <div class="actions">
        <md-outlined-button @click="${this.saveComment}">Save</md-outlined-button>
        <md-outlined-button @click="${this.cancelComment}">Cancel</md-outlined-button>
      </div>
    </div>
      `}};var Ye;Xe.styles=o`
    :host {
      position: absolute;
      z-index: 1;
    }
    .main-content {
      flex-direction: column;
    }
    .actions {
      background-color: white;
      border-radius: 25px;
    }
  `,Ke([dt("#altar-text-editor")],Xe.prototype,"editorBaseElement",void 0),Ke([nt({type:Boolean})],Xe.prototype,"show",void 0),Xe=Ke([st("altar-comment-editor")],Xe),function(t){t.VIEW="VIEW",t.COMMENT="COMMENT",t.DRAW="DRAW",t.POINT="POINT"}(Ye||(Ye={}));var qe=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};class Ze extends it{}qe([nt({type:Object})],Ze.prototype,"file",void 0),qe([nt({type:Array})],Ze.prototype,"comments",void 0),qe([nt({type:Object})],Ze.prototype,"selectedComment",void 0),qe([nt({type:Object})],Ze.prototype,"mode",void 0),qe([function(t){return ct({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}(".altar-control-element")],Ze.prototype,"controls",void 0),qe([ht("#altar-player-element")],Ze.prototype,"element",void 0);const Je=o`
  md-icon {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -moz-font-feature-settings: 'liga';
    -moz-osx-font-smoothing: grayscale;
  }
`;var Qe=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};class ti extends it{async update(t){t.has("element")&&this.element&&this.setEventListeners(this.element),super.update(t)}}ti.styles=[Je],Qe([nt({type:Object})],ti.prototype,"element",void 0);var ei=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let ii=class extends it{constructor(){super(...arguments),this.comments=[],this.progress=0}selectComment(t){console.log("comment selected",t.comment),this.dispatchEvent(new qt("comment-selected",t))}changeTime(t){const e=(t.clientX-this.offsetLeft)/this.clientWidth;console.log("time changed",e),this.dispatchEvent(new qt("change-time",e))}render(){var t;return N`
        <div class="bar" @click="${this.changeTime}">
            ${null===(t=this.comments)||void 0===t?void 0:t.map((t=>N`
                <div class="timeline-comment" @click="${this.selectComment(t)}" style="left: ${100*t.time}%;"></div>
            `))}
            <div class="progress" style="width:${100*this.progress}%"></div>
        </div> 
        `}};ii.styles=[o`
        :host {
            height: 2rem;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bar{
            height: 60%;
            background-color: lightgrey;
            border-radius: 25px;
        }
        .progress{
            background-color: var(--md-sys-color-primary, green);
            height: 100%;
            border-radius: 25px;
        }
        .timeline-comment {
            z-index: 1;
            width: 3px;
            height: 60%;
            
            background-color: var(--altar-timeline-comment-color, red);
            position: absolute;
            cursor: pointer;
        }
        `],ei([nt({type:Array})],ii.prototype,"comments",void 0),ei([nt({type:Number})],ii.prototype,"progress",void 0),ii=ei([st("altar-timeline")],ii);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const ri=o`@media(forced-colors: active){:host{--md-slider-active-track-color:CanvasText;--md-slider-disabled-active-track-color:GrayText;--md-slider-disabled-active-track-opacity:1;--md-slider-disabled-handle-color:GrayText;--md-slider-disabled-inactive-track-color:GrayText;--md-slider-disabled-inactive-track-opacity:1;--md-slider-focus-handle-color:CanvasText;--md-slider-handle-color:CanvasText;--md-slider-handle-shadow-color:Canvas;--md-slider-hover-handle-color:CanvasText;--md-slider-hover-state-layer-color:Canvas;--md-slider-hover-state-layer-opacity:1;--md-slider-inactive-track-color:Canvas;--md-slider-label-container-color:Canvas;--md-slider-label-label-text-color:CanvasText;--md-slider-pressed-handle-color:CanvasText;--md-slider-pressed-state-layer-color:Canvas;--md-slider-pressed-state-layer-opacity:1;--md-slider-with-overlap-handle-outline-color:CanvasText;--md-slider-with-tick-marks-active-container-color:Canvas;--md-slider-with-tick-marks-disabled-container-color:GrayText;--md-slider-with-tick-marks-inactive-container-color:CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}}/*# sourceMappingURL=forced-colors-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class si extends it{render(){return N`<span class="shadow"></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const oi=o`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ai=class extends si{};ai.styles=[oi],ai=pt([st("md-elevation")],ai);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ni="important",li=" !"+ni,ci=$t(class extends zt{constructor(t){var e;if(super(t),t.type!==kt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];if(null!=r){this.ut.add(t);const e="string"==typeof r&&r.endsWith(li);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?ni:""):i[t]=r}}return U}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function di(t,e,i){return t?e():null==i?void 0:i()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class hi extends it{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get nameStart(){return this.getAttribute("name-start")??this.name}set nameStart(t){this.setAttribute("name-start",t)}get nameEnd(){return this.getAttribute("name-end")??this.nameStart}set nameEnd(t){this.setAttribute("name-end",t)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.min=0,this.max=100,this.value=50,this.valueStart=25,this.valueEnd=75,this.step=1,this.tickmarks=!1,this.labeled=!1,this.range=!1,this.handleStartHover=!1,this.handleEndHover=!1,this.startOnTop=!1,this.handlesOverlapping=!1,this.renderValueStart=0,this.renderValueEnd=0,this.ripplePointerId=1,this.isRedisptchingEvent=!1,this.internals=this.attachInternals(),this.addEventListener("click",(t=>{Vt(t)&&this.inputEnd&&(this.focus(),Ft(this.inputEnd))}))}focus(){this.inputEnd?.focus()}willUpdate(t){this.renderValueStart=t.has("valueStart")?this.valueStart:this.inputStart?.valueAsNumber??0;const e=t.has("valueEnd")&&this.range||t.has("value");this.renderValueEnd=e?this.range?this.valueEnd:this.value:this.inputEnd?.valueAsNumber??0,void 0!==t.get("handleStartHover")?this.toggleRippleHover(this.rippleStart,this.handleStartHover):void 0!==t.get("handleEndHover")&&this.toggleRippleHover(this.rippleEnd,this.handleEndHover)}update(t){if(t.has("value")||t.has("range")||t.has("valueStart")||t.has("valueEnd"))if(this.range){const t=new FormData;t.append(this.nameStart,String(this.valueStart)),t.append(this.nameEnd,String(this.valueEnd)),this.internals.setFormValue(t)}else this.internals.setFormValue(String(this.value));super.update(t)}updated(t){this.range&&(this.renderValueStart=this.inputStart.valueAsNumber),this.renderValueEnd=this.inputEnd.valueAsNumber,(t.has("range")||t.has("renderValueStart")||t.has("renderValueEnd")||this.isUpdatePending)&&(this.handlesOverlapping=function(t,e){if(!t||!e)return!1;const i=t.getBoundingClientRect(),r=e.getBoundingClientRect();return!(i.top>r.bottom||i.right<r.left||i.bottom<r.top||i.left>r.right)}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */(this.handleStart,this.handleEnd)),this.performUpdate()}render(){const t=0===this.step?1:this.step,e=Math.max(this.max-this.min,t),i=this.range?(this.renderValueStart-this.min)/e:0,r=(this.renderValueEnd-this.min)/e,s={"--slider-start-fraction":String(i),"--slider-end-fraction":String(r),"--slider-tick-count":String(e/t)},o={ranged:this.range},a=this.valueStartLabel??String(this.renderValueStart),n=(this.range?this.valueEndLabel:this.valueLabel)??String(this.renderValueEnd),l={start:!0,value:this.renderValueStart,label:a},c={start:!1,value:this.renderValueEnd,label:n},d={start:!0,hover:this.handleStartHover,label:a},h={start:!1,hover:this.handleEndHover,label:n},u={hover:this.handleStartHover||this.handleEndHover};return N`
      <div
        class="container ${Ct(o)}"
        style=${ci(s)}
      >
        ${di(this.range,(()=>this.renderInput(l)))}
        ${this.renderInput(c)}
        ${this.renderTrack()}
        <div class="handleContainerPadded">
          <div class="handleContainerBlock">
            <div class="handleContainer ${Ct(u)}">
              ${di(this.range,(()=>this.renderHandle(d)))}
              ${this.renderHandle(h)}
            </div>
          </div>
        </div>
      </div>`}renderTrack(){const t={tickmarks:this.tickmarks};return N`<div class="track ${Ct(t)}"></div>`}renderLabel(t){return N`<div class="label">
        <span class="labelContent" part="label">${t}</span>
      </div>`}renderHandle({start:t,hover:e,label:i}){const r=!this.disabled&&t===this.startOnTop,s=!this.disabled&&this.handlesOverlapping,o=t?"start":"end";return N`<div class="handle ${Ct({[o]:!0,hover:e,onTop:r,isOverlapping:s})}">
      <div class="handleNub"><md-elevation></md-elevation></div>
      ${di(this.labeled,(()=>this.renderLabel(i)))}
      <md-focus-ring for=${o}></md-focus-ring>
      <md-ripple for=${o} class=${o} ?disabled=${this.disabled}></md-ripple>
    </div>`}renderInput({start:t,value:e,label:i}){const r=t?"start":"end";let{ariaLabel:s}=this;const{range:o,ariaLabelStart:a,ariaLabelEnd:n}=this;return o&&(s=(t?a:n)??null),N`<input type="range"
      class="${Ct({start:t,end:!t})}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerup=${this.handleUp}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @keydown=${this.handleKeydown}
      @keyup=${this.handleKeyup}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${r}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      .max=${String(this.max)}
      .step=${String(this.step)}
      .value=${String(e)}
      .tabIndex=${t?1:0}
      aria-label=${s||I}
      aria-valuetext=${i}>`}async toggleRippleHover(t,e){const i=await t;i&&(e?i.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):i.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}handleFocus(t){this.updateOnTop(t.target)}startAction(t){const e=t.target,i=e===this.inputStart?this.inputEnd:this.inputStart;this.action={canFlip:"pointerdown"===t.type,flipped:!1,target:e,fixed:i,values:new Map([[e,e.valueAsNumber],[i,i?.valueAsNumber]])}}finishAction(t){this.action=void 0}handleKeydown(t){this.startAction(t)}handleKeyup(t){this.finishAction(t)}handleDown(t){this.startAction(t),this.ripplePointerId=t.pointerId;const e=t.target===this.inputStart;this.handleStartHover=!this.disabled&&e&&Boolean(this.handleStart),this.handleEndHover=!this.disabled&&!e&&Boolean(this.handleEnd)}async handleUp(t){const{target:e,values:i,flipped:r}=this.action??{};await new Promise(requestAnimationFrame),void 0!==e&&(e.focus(),r&&e.valueAsNumber!==i.get(e)&&e.dispatchEvent(new Event("change",{bubbles:!0}))),this.finishAction(t)}handleMove(t){this.handleStartHover=!this.disabled&&ui(t,this.handleStart),this.handleEndHover=!this.disabled&&ui(t,this.handleEnd)}handleEnter(t){this.handleMove(t)}handleLeave(){this.handleStartHover=!1,this.handleEndHover=!1}updateOnTop(t){this.startOnTop=t.classList.contains("start")}needsClamping(){const{target:t,fixed:e}=this.action;return t===this.inputStart?t.valueAsNumber>e.valueAsNumber:t.valueAsNumber<e.valueAsNumber}isActionFlipped(){const t=this.action,{target:e,fixed:i,values:r}=t;if(t.canFlip){r.get(e)===r.get(i)&&this.needsClamping()&&(t.canFlip=!1,t.flipped=!0,t.target=i,t.fixed=e)}return t.flipped}flipAction(){const{target:t,fixed:e,values:i}=this.action,r=t.valueAsNumber!==e.valueAsNumber;return t.valueAsNumber=e.valueAsNumber,e.valueAsNumber=i.get(e),r}clampAction(){if(!this.needsClamping())return!1;const{target:t,fixed:e}=this.action;return t.valueAsNumber=e.valueAsNumber,!0}handleInput(t){if(this.isRedisptchingEvent)return;let e=!1,i=!1;this.range&&(this.isActionFlipped()&&(e=!0,i=this.flipAction()),this.clampAction()&&(e=!0,i=!1));const{target:r}=this.action;this.updateOnTop(r),this.range?(this.valueStart=this.inputStart.valueAsNumber,this.valueEnd=this.inputEnd.valueAsNumber):this.value=this.inputEnd.valueAsNumber,e&&t.stopPropagation(),i&&(this.isRedisptchingEvent=!0,Dt(r,t),this.isRedisptchingEvent=!1)}handleChange(t){const e=t.target,{target:i,values:r}=this.action??{};i&&i.valueAsNumber===r.get(e)||Dt(this,t),this.finishAction(t)}formResetCallback(){if(this.range)return this.valueStart=Number(this.getAttribute("value-start")??25),void(this.valueEnd=Number(this.getAttribute("value-end")??75));this.value=Number(this.getAttribute("value")??50)}formStateRestoreCallback(t){if(Array.isArray(t)){const[[,e],[,i]]=t;return this.valueStart=Number(e??25),this.valueEnd=Number(i??25),void(this.range=!0)}this.value=Number(t??50),this.range=!1}}function ui({x:t,y:e},i){if(!i)return!1;const{top:r,left:s,bottom:o,right:a}=i.getBoundingClientRect();return t>=s&&t<=a&&e>=r&&e<=o}Bt(hi),hi.shadowRootOptions={...it.shadowRootOptions,delegatesFocus:!0},hi.formAssociated=!0,pt([nt({type:Boolean,reflect:!0})],hi.prototype,"disabled",void 0),pt([nt({type:Number})],hi.prototype,"min",void 0),pt([nt({type:Number})],hi.prototype,"max",void 0),pt([nt({type:Number})],hi.prototype,"value",void 0),pt([nt({type:Number,attribute:"value-start"})],hi.prototype,"valueStart",void 0),pt([nt({type:Number,attribute:"value-end"})],hi.prototype,"valueEnd",void 0),pt([nt()],hi.prototype,"valueLabel",void 0),pt([nt()],hi.prototype,"valueStartLabel",void 0),pt([nt()],hi.prototype,"valueEndLabel",void 0),pt([nt({attribute:"aria-label-start"})],hi.prototype,"ariaLabelStart",void 0),pt([nt({attribute:"aria-label-end"})],hi.prototype,"ariaLabelEnd",void 0),pt([nt({type:Number})],hi.prototype,"step",void 0),pt([nt({type:Boolean})],hi.prototype,"tickmarks",void 0),pt([nt({type:Boolean})],hi.prototype,"labeled",void 0),pt([nt({type:Boolean})],hi.prototype,"range",void 0),pt([dt("input.start")],hi.prototype,"inputStart",void 0),pt([dt(".handle.start")],hi.prototype,"handleStart",void 0),pt([ht("md-ripple.start")],hi.prototype,"rippleStart",void 0),pt([dt("input.end")],hi.prototype,"inputEnd",void 0),pt([dt(".handle.end")],hi.prototype,"handleEnd",void 0),pt([ht("md-ripple.end")],hi.prototype,"rippleEnd",void 0),pt([lt()],hi.prototype,"handleStartHover",void 0),pt([lt()],hi.prototype,"handleEndHover",void 0),pt([lt()],hi.prototype,"startOnTop",void 0),pt([lt()],hi.prototype,"handlesOverlapping",void 0),pt([lt()],hi.prototype,"renderValueStart",void 0),pt([lt()],hi.prototype,"renderValueEnd",void 0);const vi=o`:host{display:inline-flex;vertical-align:middle;--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, 9999px);--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, 9999px);--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, 9999px);--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_label-label-text-color: var(--md-slider-label-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-label-text-type: var(--md-slider-label-label-text-type, var(--md-sys-typescale-label-medium, 500 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));min-inline-size:200px;--md-elevation-level:var(--_handle-elevation);--md-elevation-shadow-color:var(--_handle-shadow-color)}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level:var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track{position:absolute;inset:0;display:flex;align-items:center}.track::before,.track::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--slider-tick-count)) 100%}.track::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape);background-color:var(--_inactive-track-color)}.track.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background-color:var(--_disabled-inactive-track-color)}.track::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)));background-color:var(--_active-track-color)}:host-context([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}:host([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}.track.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::after{background-color:var(--_disabled-active-track-color)}:host([disabled]) .track.tickmarks::before,:host([disabled]) .track.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--slider-start-fraction));inline-size:calc(100%*(var(--slider-end-fraction) - var(--slider-start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:grid;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .handleNub,.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:grid;padding:4px;place-items:center;border-radius:9999px;color:var(--_label-label-text-color);font:var(--_label-label-text-type);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))) 0 0)}:host-context([dir=rtl]) .ranged input.start{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}:host([dir=rtl]) .ranged input.start{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)))}:host-context([dir=rtl]) .ranged input.end{clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}:host([dir=rtl]) .ranged input.end{clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}.onTop{z-index:1}md-focus-ring{--md-focus-ring-outward-offset: -2px}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}/*# sourceMappingURL=slider-styles.css.map */
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let pi=class extends hi{};
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function mi(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */pi.styles=[vi,ri],pi=pt([st("md-slider")],pi);class fi extends it{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.flipIcon=mi(this,this.flipIconInRtl)}willUpdate(){this.href&&(this.disabled=!1)}render(){const t=this.href?Pt`div`:Pt`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:r}=this,s=e&&this.selectedAriaLabel,o=s?I:this.selected;let a=I;return this.href||(a=s&&this.selected?this.selectedAriaLabel:e),Nt`<${t}
        class="icon-button ${Ct(this.getRenderClasses())}"
        id="button"
        aria-label="${a||I}"
        aria-haspopup="${!this.href&&i||I}"
        aria-expanded="${!this.href&&r||I}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?I:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():I}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return N`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||I}"
        aria-label="${t||I}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return N`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return N`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return N`<span class="touch"></span>`}renderFocusRing(){return N`<md-focus-ring for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return N`<md-ripple
      for=${this.href?"link":I}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=mi(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){this.toggle&&!this.disabled&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Bt(fi),pt([nt({type:Boolean,reflect:!0})],fi.prototype,"disabled",void 0),pt([nt({type:Boolean})],fi.prototype,"flipIconInRtl",void 0),pt([nt()],fi.prototype,"href",void 0),pt([nt()],fi.prototype,"target",void 0),pt([nt({attribute:"selected-aria-label",reflect:!0})],fi.prototype,"selectedAriaLabel",void 0),pt([nt({type:Boolean})],fi.prototype,"toggle",void 0),pt([nt({type:Boolean,reflect:!0})],fi.prototype,"selected",void 0),pt([lt()],fi.prototype,"flipIcon",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const bi=o`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */,yi=o`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let gi=class extends fi{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};gi.styles=[bi,yi],gi=pt([st("md-standard-icon-button")],gi);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _i extends it{render(){return N`<span><slot></slot></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const wi=o`:host{--_color: var(--md-icon-color, inherit);--_font: var(--md-icon-font, "Material Symbols Outlined");--_font-variation-settings: var(--md-icon-font-variation-settings, inherit);--_size: var(--md-icon-size, 24px);--_weight: var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-variation-settings);line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}/*# sourceMappingURL=icon-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let xi=class extends _i{};xi.styles=[wi],xi=pt([st("md-icon")],xi);var ki=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let $i=class extends ti{constructor(){super(...arguments),this.muted=!1,this.showSlider=!1,this.onmouseenter=()=>this.showSlider=!0,this.onmouseleave=()=>this.showSlider=!1}setEventListeners(t){t.addEventListener("volumechange",(()=>this.slider.value=100*t.volume))}changeVolume(){this.element.volume=this.slider.value/100}mute(){this.muted=!this.muted,this.element.muted=this.muted}render(){return N`
        
        <md-slider ?hidden=${!this.showSlider} @change=${this.changeVolume}>
        </md-slider>
        
        <md-standard-icon-button @click="${this.mute}">
            <md-icon>${this.muted?"volume_off":"volume_up"}</md-icon>
        </md-standard-icon-button>
        
        `}getControlInfo(){}};$i.styles=[...ti.styles,o`
            :host {
                display: flex;
                align-items: center;

                border-radius: 25px;
                background-color: white;
            }

            md-slider[hidden] {
                display: none;
            }
      `],ki([dt("md-slider")],$i.prototype,"slider",void 0),ki([lt()],$i.prototype,"muted",void 0),ki([lt()],$i.prototype,"showSlider",void 0),$i=ki([st("altar-audio-control")],$i);const zi=t=>{try{return t<3600?new Date(1e3*t).toISOString().substring(14,19):new Date(1e3*t).toISOString().slice(11,19)}catch(t){}return""};var Ci=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Si=class extends ti{constructor(){super(...arguments),this.isPlaying=!1,this.currentProgess=0,this.comments=[]}getControlInfo(){return{id:"",comment:"",time:this.element.currentTime/this.element.duration}}setEventListeners(t){t.addEventListener("timeupdate",(()=>{this.requestUpdate();const t=this.findClosestNumber(this.comments,this.element.currentTime/this.element.duration);this.lastCommentEmitted!==t&&this.dispatchEvent(new qt("comment-selected"))})),t.addEventListener("durationchange",(()=>this.requestUpdate())),t.addEventListener("ended",(()=>this.isPlaying=!1)),t.addEventListener("play",(()=>this.isPlaying=!0)),t.addEventListener("pause",(()=>this.isPlaying=!1))}togglePlay(){console.log(this.element),this.isPlaying?this.element.pause():this.element.play()}changeCurrentTime(t){this.element.currentTime=t.detail*this.element.duration,this.requestUpdate()}findClosestNumber(t,e){if(!t||0===t.length)return null;let i=t[0],r=Math.abs(e-i.time);for(let s=1;s<t.length;s++){const o=t[s],a=Math.abs(e-o.time);a<r&&(i=o,r=a)}return i}render(){var t,e,i,r;return N`
        <md-standard-icon-button @click="${this.togglePlay}">
            <md-icon>${this.isPlaying?"pause":"play_arrow"}</md-icon>
        </md-standard-icon-button>

        ${zi(null===(t=this.element)||void 0===t?void 0:t.currentTime)} / ${zi(null===(e=this.element)||void 0===e?void 0:e.duration)}

        <altar-timeline 
        .comments=${this.comments} 
        .progress=${(null===(i=this.element)||void 0===i?void 0:i.currentTime)/(null===(r=this.element)||void 0===r?void 0:r.duration)}
        @change-time=${this.changeCurrentTime}></altar-timeline>

        <altar-audio-control .element=${this.element}></altar-audio-control>
        `}};Si.styles=[...ti.styles,o`
        :host {
            display: flex;
            align-items: center;
            margin: 0.5rem;
            gap: 0.2rem;
            border-radius: 25px;
            background-color: white;
            flex-grow: 1;
        }

        altar-timeline {
            flex-grow: 1;
            padding-left: 0.5rem;
        }
        `],Ci([lt()],Si.prototype,"isPlaying",void 0),Ci([lt()],Si.prototype,"currentProgess",void 0),Ci([nt({type:Array})],Si.prototype,"comments",void 0),Si=Ci([st("altar-time-control")],Si);var Mi=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Oi=class extends it{toggleCommentMode(){this.dispatchEvent(new qt("toggle-mode",this.isCommentMode?null:Ye.COMMENT))}render(){return N`
        <md-standard-icon-button toggle @click="${this.toggleCommentMode}" ?selected=${this.isCommentMode}>
            <md-icon>comment</md-icon>
        </md-standard-icon-button>
    `}};Oi.styles=o`
    :host {
        border-radius: 25px;
        background-color: white;
    }
    `,Mi([nt({type:Boolean})],Oi.prototype,"isCommentMode",void 0),Oi=Mi([st("altar-comment-trigger")],Oi);class Ei{constructor(t){(this.host=t).addController(this)}async hostUpdated(){const t=await this.host.element;t.src=URL.createObjectURL(this.host.file),Array.from(this.host.controls).map((e=>e.element=t))}}class ji extends Ei{constructor(t){super(t)}async hostUpdated(){super.hostUpdated(),Array.from(this.host.controls).map((t=>{var e;t.commentsPosition=null===(e=this.host.comments)||void 0===e?void 0:e.map((t=>100*t.time))}))}}var Ti=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Ai=class extends Ze{constructor(){super(...arguments),this.timeController=new ji(this)}render(){return N`
        <audio id="altar-player-element"></audio>
        <div class="controls">
            <altar-comment-trigger .isCommentMode="${this.mode===Ye.COMMENT}"></altar-comment-trigger>
            <altar-time-control class="altar-control-element"></altar-time-control>
        </div>
        `}};Ai.styles=[o`
        :host {
            width: 100%;
            height: 100%;
        }
        .controls {
            display: flex;
            align-items: center;
        }
        `],Ai=Ti([st("altar-audio-layout")],Ai);class Ri extends Ei{constructor(t){super(t)}async hostUpdated(){super.hostUpdated(),Array.from(this.host.controls).map((async t=>{var e,i;t.centralObject=await this.host.element,t.objects=null!==(i=null===(e=this.host.comments)||void 0===e?void 0:e.map((t=>t)))&&void 0!==i?i:[]}))}}class Pi{constructor(t){this.canvasController=t}}class Li extends Pi{handleMouseDown(){}handleMouseUp(){}handleMouseMove(t){if(this.canvasController.isDragging)this.canvasController.panPos.x+=t.movementX,this.canvasController.panPos.y+=t.movementY;else if(this.canvasController.rotateEnabled){const e=.005*(t.movementX+t.movementY);this.canvasController.rotationAngle+=e}}handleMouseWheel(t){t.preventDefault();const e=t.deltaY>0?.9:1.1;this.canvasController.zoom=Math.min(Math.max(this.canvasController.zoom*e,.1),10)}}class Ni{constructor(t,e){this.isDragging=!1,this.rotateEnabled=!1,this.panPos={x:0,y:0},this.zoom=1,this.rotationAngle=0,this.handleMouseDown=t=>{var e;this.isDragging=0===t.button,this.rotateEnabled=2===t.button,null===(e=this.mode)||void 0===e||e.handleMouseDown(t)},this.handleMouseUp=t=>{var e;this.isDragging=!1,this.rotateEnabled=!1,null===(e=this.mode)||void 0===e||e.handleMouseUp(t)},this.handleMouseMove=t=>{var e;null===(e=this.mode)||void 0===e||e.handleMouseMove(t),this.host.requestUpdate()},this.handleMouseWheel=t=>{var e;null===(e=this.mode)||void 0===e||e.handleMouseWheel(t),this.host.requestUpdate()},(this.host=t).addController(this),this.mode=null!=e?e:new Li(this),this.host.updateComplete.then((()=>{this.init()}))}setMode(t){this.mode=t}init(){this.ctx||(this.canvas=this.host.canvas,this.ctx=this.canvas.getContext("2d"),this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mouseup",this.handleMouseUp),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("wheel",this.handleMouseWheel))}resetView(){this.panPos={x:0,y:0},this.zoom=1,this.rotationAngle=0,this.host.requestUpdate()}hostUpdated(){this.ctx&&this.ctx.restore()}hostUpdate(){this.ctx&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.save(),this.ctx.translate(this.panPos.x,this.panPos.y),this.ctx.scale(this.zoom,this.zoom),this.ctx.translate(this.canvas.width/2,this.canvas.height/2),this.ctx.rotate(this.rotationAngle),this.ctx.translate(-this.canvas.width/2,-this.canvas.height/2))}hostDisconnected(){this.canvas.removeEventListener("mousedown",this.handleMouseDown),this.canvas.removeEventListener("mouseup",this.handleMouseUp),this.canvas.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("wheel",this.handleMouseWheel)}}class Ui extends Pi{handleMouseDown(){}handleMouseUp(t){this.canvasController.host.dispatchEvent(new qt("comment-added",{x:t.clientX,y:t.clientY}))}handleMouseMove(){}handleMouseWheel(){}}class Ii extends Pi{constructor(){super(...arguments),this.points=[]}handleMouseDown(t){2===t.button&&this.canvasController.host.dispatchEvent(new qt("comment-added",this.points))}handleMouseUp(t){0===t.button&&this.points.push({x:t.clientX,y:t.clientY})}handleMouseMove(){}handleMouseWheel(){}}var Bi=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Di=class extends it{constructor(){super(...arguments),this.objects=[],this.canvasController=new Ni(this),this.modeMap={VIEW:new Li(this.canvasController),POINT:new Ui(this.canvasController),COMMENT:new Li(this.canvasController),DRAW:new Ii(this.canvasController)}}setMode(t){this.canvasController.setMode(this.modeMap[t])}firstUpdated(t){super.firstUpdated(t),this.updateCanvasSize()}connectedCallback(){super.connectedCallback(),this.addEventListener("resize",this.updateCanvasSize),window.addEventListener("resize",this.updateCanvasSize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.updateCanvasSize.bind(this))}updateCanvasSize(){const{width:t,height:e}=this.getBoundingClientRect();this.canvas.width=t,this.canvas.height=e,this.requestUpdate()}update(t){super.update(t),this.canvas.getContext("2d").translate(this.canvas.width/2,this.canvas.height/2),this.renderObjects()}renderObjects(){var t;if(!this.centralObject)return;const e=this.canvas.getContext("2d"),i=Math.min(this.canvas.width/this.centralObject.width,this.canvas.height/this.centralObject.height),r=-this.centralObject.width*i/2,s=-this.centralObject.height*i/2;e.drawImage(this.centralObject,r,s,this.centralObject.width*i,this.centralObject.height*i),e.fillStyle="#64f6",null===(t=this.objects)||void 0===t||t.forEach((t=>{e.beginPath(),e.ellipse(t.x*i,t.y*i,20/this.canvasController.zoom,20/this.canvasController.zoom,0,0,2*Math.PI),e.fill()}))}render(){return N`<canvas oncontextmenu="return false;"></canvas>`}};Di.styles=o`
        :host {
            width: 100%;
            height: 100%;
            justify-content: center;
            display: flex;
        }
        canvas {
            flex-grow: 1;
            border: 1px solid black;
        }
  `,Bi([nt({type:Array})],Di.prototype,"objects",void 0),Bi([nt({type:Object})],Di.prototype,"centralObject",void 0),Bi([dt("canvas")],Di.prototype,"canvas",void 0),Di=Bi([st("altar-canvas-manager")],Di);var Fi=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Vi=class extends it{toggleCommentMode(){this.dispatchEvent(new qt("toggle-mode",this.isCurrentMode?Ye.COMMENT:this.currentMode))}render(){return N`
        <md-standard-icon-button toggle @click="${this.toggleCommentMode}" ?selected=${this.isCurrentMode}>
            <md-icon>${this.icon}</md-icon>
        </md-standard-icon-button>
    `}};Vi.styles=o`
    :host {
        border-radius: 25px;
        background-color: white;
    }
    `,Fi([nt({type:Object})],Vi.prototype,"currentMode",void 0),Fi([nt({type:Boolean})],Vi.prototype,"isCurrentMode",void 0),Fi([nt({type:String})],Vi.prototype,"icon",void 0),Vi=Fi([st("altar-mode-button")],Vi);var Hi=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Wi=class extends Ze{constructor(){super(...arguments),this.imageController=new Ri(this)}resetView(){this.controls[0].canvasController.resetView()}update(t){if(super.update(t),t.has("mode")&&this.mode){this.controls[0].setMode(this.mode)}}isCommentMode(){return[Ye.DRAW,Ye.COMMENT,Ye.POINT].includes(this.mode)}render(){return N`
        <div class="main-content">
            <img hidden id="altar-player-element" />
            <altar-canvas-manager style="cursor: ${this.getModeCursor()}"  class="altar-control-element"></altar-canvas-manager>
            
            <div class="view-controls">
                <md-standard-icon-button @click="${this.resetView}">
                    <md-icon>fullscreen</md-icon>
                </md-standard-icon-button>
            </div>
        </div>
        <div class="comments">
            <altar-comment-trigger .isCommentMode="${this.isCommentMode()}"></altar-comment-trigger>
            ${this.isCommentMode()?N`
                    <altar-mode-button ?isCurrentMode="${this.mode===Ye.POINT}" .currentMode="${Ye.POINT}" icon="add_location"></altar-mode-button>
                    <altar-mode-button ?isCurrentMode="${this.mode===Ye.DRAW}" .currentMode="${Ye.DRAW}" icon="draw"></altar-mode-button>
                `:I}
        </div>
        `}getModeCursor(){switch(this.mode){case Ye.DRAW:case Ye.POINT:return"crosshair"}return"auto"}};Wi.styles=[o`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
        }
        .main-content {
            display: flex;
            flex-grow: 1;
            position: relative;
        }
        .comments {
            display:flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .view-controls {
            position: absolute;
            top: 0;
            right: 1rem;
            display: flex;
        }
        
        .view-controls md-icon {
                color: white;
        }
    `],Wi=Hi([st("altar-image-layout")],Wi);const Gi=[{types:["image/jpeg","image/png","image/gif","image/bmp","image/x-ms-bmp"],element:()=>new Wi},{types:["audio/mpeg","audio/x-wav"],element:()=>new Ai},{types:["video/mp4","video/webm","video/x-m4v","video/quicktime","video/ogg"],element:()=>new Ai}];class Ki{static overrideLayoutSettings(t){Ki.settingsMap=t}static getLayout(t){var e;for(const i of null!==(e=Ki.settingsMap)&&void 0!==e?e:Gi)if(i.types.includes(t))return i.element();throw new Error("No layout found for type: "+t)}}Ki.settingsMap=Gi;var Xi=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Yi=class extends it{constructor(){super(...arguments),this.mode=Ye.VIEW}connectedCallback(){super.connectedCallback(),this.addEventListener("toggle-mode",(t=>{var e;this.mode=null!==(e=t.detail)&&void 0!==e?e:Ye.VIEW}))}updated(t){super.updated(t);t.has("file")&&!!this.file&&(this.layout=Ki.getLayout(this.file.type),this.layout.file=this.file,this.layout.comments=this.comments,this.layout.selectedComment=this.selectedComment);t.has("mode")&&!!this.mode&&this.layout&&(this.layout.mode=this.mode)}render(){return N`${this.layout}`}};Yi.styles=o`
    :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .inline {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
    .main-content {
        flex-grow: 1;
        display: flex;
    }
    `,Xi([nt({type:Object})],Yi.prototype,"file",void 0),Xi([nt({type:Array})],Yi.prototype,"comments",void 0),Xi([nt({type:Object})],Yi.prototype,"selectedComment",void 0),Xi([lt()],Yi.prototype,"mode",void 0),Xi([lt()],Yi.prototype,"layout",void 0),Yi=Xi([st("altar-layout")],Yi);var qi=function(t,e,i,r){for(var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r,n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Zi=class extends it{constructor(){super(...arguments),this.showComments=!0}firstUpdated(t){super.firstUpdated(t),this.filePath&&fetch(this.filePath).then((async t=>({contentType:t.headers.get("Content-Type"),blob:await t.blob()}))).then((t=>{var e,i;const r=(null===(e=this.filePath.split("/").pop())||void 0===e?void 0:e.split("?")[0])||"";this.file=new File([t.blob],r,{type:null!==(i=t.contentType)&&void 0!==i?i:r.split(".").pop()}),console.log(`File ${this.file.name} ${this.file.type} override the file property`)})).catch((t=>console.error(t)))}render(){return N` ${this.file?N`<altar-layout .file="${this.file}" .comments="${this.comments}"></altar-layout>`:I}
        <altar-comment-editor></altar-comment-editor>`}};Zi.styles=o`
    :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    `,qi([nt({type:String})],Zi.prototype,"filePath",void 0),qi([nt({type:Object})],Zi.prototype,"file",void 0),qi([nt({type:Array})],Zi.prototype,"comments",void 0),qi([nt({type:Object})],Zi.prototype,"selectedComment",void 0),qi([nt({type:Boolean})],Zi.prototype,"showComments",void 0),qi([dt("altar-comment-editor")],Zi.prototype,"commentEditor",void 0),Zi=qi([st("altar-element")],Zi);export{Zi as AltarElement};
