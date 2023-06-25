import{i as e,n as t,s as a,x as r,_ as i,f as s,j as o,k as n,t as l,l as d,r as c,m as h,o as v,p,q as m,u,v as b,g as y,w as f,y as _,z as k,B as g,h as w}from"./altar-element-00d36f31.js";const x=e`
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
`;var z=function(e,t,a,r){for(var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};class $ extends a{update(e){e.has("element")&&this.element&&this.setEventListeners(this.element),super.update(e)}}$.styles=[x],z([t({type:Object})],$.prototype,"element",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const C=e`@media(forced-colors: active){:host{--md-slider-active-track-color:CanvasText;--md-slider-disabled-active-track-color:GrayText;--md-slider-disabled-active-track-opacity:1;--md-slider-disabled-handle-color:GrayText;--md-slider-disabled-inactive-track-color:GrayText;--md-slider-disabled-inactive-track-opacity:1;--md-slider-focus-handle-color:CanvasText;--md-slider-handle-color:CanvasText;--md-slider-handle-shadow-color:Canvas;--md-slider-hover-handle-color:CanvasText;--md-slider-hover-state-layer-color:Canvas;--md-slider-hover-state-layer-opacity:1;--md-slider-inactive-track-color:Canvas;--md-slider-label-container-color:Canvas;--md-slider-label-label-text-color:CanvasText;--md-slider-pressed-handle-color:CanvasText;--md-slider-pressed-state-layer-color:Canvas;--md-slider-pressed-state-layer-opacity:1;--md-slider-with-overlap-handle-outline-color:CanvasText;--md-slider-with-tick-marks-active-container-color:Canvas;--md-slider-with-tick-marks-disabled-container-color:GrayText;--md-slider-with-tick-marks-inactive-container-color:CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}}/*# sourceMappingURL=forced-colors-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class S extends a{render(){return r`<span class="shadow"></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const E=e`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let T=class extends S{};T.styles=[E],T=i([s("md-elevation")],T);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L="important",N=" !"+L,O=o(class extends n{constructor(e){var t;if(super(e),e.type!==l.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,a)=>{const r=e[a];return null==r?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:a}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?a.removeProperty(e):a[e]="")}));for(const e in t){const r=t[e];if(null!=r){this.ut.add(e);const t="string"==typeof r&&r.endsWith(N);e.includes("-")||t?a.setProperty(e,t?r.slice(0,-11):r,t?L:""):a[e]=r}}return d}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(e,t,a){return e?t():null==a?void 0:a()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class j extends a{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get nameStart(){return this.getAttribute("name-start")??this.name}set nameStart(e){this.setAttribute("name-start",e)}get nameEnd(){return this.getAttribute("name-end")??this.nameStart}set nameEnd(e){this.setAttribute("name-end",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.min=0,this.max=100,this.value=50,this.valueStart=25,this.valueEnd=75,this.step=1,this.tickmarks=!1,this.labeled=!1,this.range=!1,this.handleStartHover=!1,this.handleEndHover=!1,this.startOnTop=!1,this.handlesOverlapping=!1,this.renderValueStart=0,this.renderValueEnd=0,this.ripplePointerId=1,this.isRedisptchingEvent=!1,this.internals=this.attachInternals(),this.addEventListener("click",(e=>{m(e)&&this.inputEnd&&(this.focus(),u(this.inputEnd))}))}focus(){this.inputEnd?.focus()}willUpdate(e){this.renderValueStart=e.has("valueStart")?this.valueStart:this.inputStart?.valueAsNumber??0;const t=e.has("valueEnd")&&this.range||e.has("value");this.renderValueEnd=t?this.range?this.valueEnd:this.value:this.inputEnd?.valueAsNumber??0,void 0!==e.get("handleStartHover")?this.toggleRippleHover(this.rippleStart,this.handleStartHover):void 0!==e.get("handleEndHover")&&this.toggleRippleHover(this.rippleEnd,this.handleEndHover)}update(e){if(e.has("value")||e.has("range")||e.has("valueStart")||e.has("valueEnd"))if(this.range){const e=new FormData;e.append(this.nameStart,String(this.valueStart)),e.append(this.nameEnd,String(this.valueEnd)),this.internals.setFormValue(e)}else this.internals.setFormValue(String(this.value));super.update(e)}updated(e){this.range&&(this.renderValueStart=this.inputStart.valueAsNumber),this.renderValueEnd=this.inputEnd.valueAsNumber,(e.has("range")||e.has("renderValueStart")||e.has("renderValueEnd")||this.isUpdatePending)&&(this.handlesOverlapping=function(e,t){if(!e||!t)return!1;const a=e.getBoundingClientRect(),r=t.getBoundingClientRect();return!(a.top>r.bottom||a.right<r.left||a.bottom<r.top||a.left>r.right)}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */(this.handleStart,this.handleEnd)),this.performUpdate()}render(){const e=0===this.step?1:this.step,t=Math.max(this.max-this.min,e),a=this.range?(this.renderValueStart-this.min)/t:0,i=(this.renderValueEnd-this.min)/t,s={"--slider-start-fraction":String(a),"--slider-end-fraction":String(i),"--slider-tick-count":String(t/e)},o={ranged:this.range},n=this.valueStartLabel??String(this.renderValueStart),l=(this.range?this.valueEndLabel:this.valueLabel)??String(this.renderValueEnd),d={start:!0,value:this.renderValueStart,label:n},c={start:!1,value:this.renderValueEnd,label:l},h={start:!0,hover:this.handleStartHover,label:n},v={start:!1,hover:this.handleEndHover,label:l},p={hover:this.handleStartHover||this.handleEndHover};return r`
      <div
        class="container ${b(o)}"
        style=${O(s)}
      >
        ${P(this.range,(()=>this.renderInput(d)))}
        ${this.renderInput(c)}
        ${this.renderTrack()}
        <div class="handleContainerPadded">
          <div class="handleContainerBlock">
            <div class="handleContainer ${b(p)}">
              ${P(this.range,(()=>this.renderHandle(h)))}
              ${this.renderHandle(v)}
            </div>
          </div>
        </div>
      </div>`}renderTrack(){const e={tickmarks:this.tickmarks};return r`<div class="track ${b(e)}"></div>`}renderLabel(e){return r`<div class="label">
        <span class="labelContent" part="label">${e}</span>
      </div>`}renderHandle({start:e,hover:t,label:a}){const i=!this.disabled&&e===this.startOnTop,s=!this.disabled&&this.handlesOverlapping,o=e?"start":"end";return r`<div class="handle ${b({[o]:!0,hover:t,onTop:i,isOverlapping:s})}">
      <div class="handleNub"><md-elevation></md-elevation></div>
      ${P(this.labeled,(()=>this.renderLabel(a)))}
      <md-focus-ring for=${o}></md-focus-ring>
      <md-ripple for=${o} class=${o} ?disabled=${this.disabled}></md-ripple>
    </div>`}renderInput({start:e,value:t,label:a}){const i=e?"start":"end";let{ariaLabel:s}=this;const{range:o,ariaLabelStart:n,ariaLabelEnd:l}=this;return o&&(s=(e?n:l)??null),r`<input type="range"
      class="${b({start:e,end:!e})}"
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
      id=${i}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      .max=${String(this.max)}
      .step=${String(this.step)}
      .value=${String(t)}
      .tabIndex=${e?1:0}
      aria-label=${s||y}
      aria-valuetext=${a}>`}async toggleRippleHover(e,t){const a=await e;a&&(t?a.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):a.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}handleFocus(e){this.updateOnTop(e.target)}startAction(e){const t=e.target,a=t===this.inputStart?this.inputEnd:this.inputStart;this.action={canFlip:"pointerdown"===e.type,flipped:!1,target:t,fixed:a,values:new Map([[t,t.valueAsNumber],[a,a?.valueAsNumber]])}}finishAction(e){this.action=void 0}handleKeydown(e){this.startAction(e)}handleKeyup(e){this.finishAction(e)}handleDown(e){this.startAction(e),this.ripplePointerId=e.pointerId;const t=e.target===this.inputStart;this.handleStartHover=!this.disabled&&t&&Boolean(this.handleStart),this.handleEndHover=!this.disabled&&!t&&Boolean(this.handleEnd)}async handleUp(e){const{target:t,values:a,flipped:r}=this.action??{};await new Promise(requestAnimationFrame),void 0!==t&&(t.focus(),r&&t.valueAsNumber!==a.get(t)&&t.dispatchEvent(new Event("change",{bubbles:!0}))),this.finishAction(e)}handleMove(e){this.handleStartHover=!this.disabled&&M(e,this.handleStart),this.handleEndHover=!this.disabled&&M(e,this.handleEnd)}handleEnter(e){this.handleMove(e)}handleLeave(){this.handleStartHover=!1,this.handleEndHover=!1}updateOnTop(e){this.startOnTop=e.classList.contains("start")}needsClamping(){const{target:e,fixed:t}=this.action;return e===this.inputStart?e.valueAsNumber>t.valueAsNumber:e.valueAsNumber<t.valueAsNumber}isActionFlipped(){const e=this.action,{target:t,fixed:a,values:r}=e;if(e.canFlip){r.get(t)===r.get(a)&&this.needsClamping()&&(e.canFlip=!1,e.flipped=!0,e.target=a,e.fixed=t)}return e.flipped}flipAction(){const{target:e,fixed:t,values:a}=this.action,r=e.valueAsNumber!==t.valueAsNumber;return e.valueAsNumber=t.valueAsNumber,t.valueAsNumber=a.get(t),r}clampAction(){if(!this.needsClamping())return!1;const{target:e,fixed:t}=this.action;return e.valueAsNumber=t.valueAsNumber,!0}handleInput(e){if(this.isRedisptchingEvent)return;let t=!1,a=!1;this.range&&(this.isActionFlipped()&&(t=!0,a=this.flipAction()),this.clampAction()&&(t=!0,a=!1));const{target:r}=this.action;this.updateOnTop(r),this.range?(this.valueStart=this.inputStart.valueAsNumber,this.valueEnd=this.inputEnd.valueAsNumber):this.value=this.inputEnd.valueAsNumber,t&&e.stopPropagation(),a&&(this.isRedisptchingEvent=!0,f(r,e),this.isRedisptchingEvent=!1)}handleChange(e){const t=e.target,{target:a,values:r}=this.action??{};a&&a.valueAsNumber===r.get(t)||f(this,e),this.finishAction(e)}formResetCallback(){if(this.range)return this.valueStart=Number(this.getAttribute("value-start")??25),void(this.valueEnd=Number(this.getAttribute("value-end")??75));this.value=Number(this.getAttribute("value")??50)}formStateRestoreCallback(e){if(Array.isArray(e)){const[[,t],[,a]]=e;return this.valueStart=Number(t??25),this.valueEnd=Number(a??25),void(this.range=!0)}this.value=Number(e??50),this.range=!1}}function M({x:e,y:t},a){if(!a)return!1;const{top:r,left:i,bottom:s,right:o}=a.getBoundingClientRect();return e>=i&&e<=o&&t>=r&&t<=s}c(j),j.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0},j.formAssociated=!0,i([t({type:Boolean,reflect:!0})],j.prototype,"disabled",void 0),i([t({type:Number})],j.prototype,"min",void 0),i([t({type:Number})],j.prototype,"max",void 0),i([t({type:Number})],j.prototype,"value",void 0),i([t({type:Number,attribute:"value-start"})],j.prototype,"valueStart",void 0),i([t({type:Number,attribute:"value-end"})],j.prototype,"valueEnd",void 0),i([t()],j.prototype,"valueLabel",void 0),i([t()],j.prototype,"valueStartLabel",void 0),i([t()],j.prototype,"valueEndLabel",void 0),i([t({attribute:"aria-label-start"})],j.prototype,"ariaLabelStart",void 0),i([t({attribute:"aria-label-end"})],j.prototype,"ariaLabelEnd",void 0),i([t({type:Number})],j.prototype,"step",void 0),i([t({type:Boolean})],j.prototype,"tickmarks",void 0),i([t({type:Boolean})],j.prototype,"labeled",void 0),i([t({type:Boolean})],j.prototype,"range",void 0),i([h("input.start")],j.prototype,"inputStart",void 0),i([h(".handle.start")],j.prototype,"handleStart",void 0),i([v("md-ripple.start")],j.prototype,"rippleStart",void 0),i([h("input.end")],j.prototype,"inputEnd",void 0),i([h(".handle.end")],j.prototype,"handleEnd",void 0),i([v("md-ripple.end")],j.prototype,"rippleEnd",void 0),i([p()],j.prototype,"handleStartHover",void 0),i([p()],j.prototype,"handleEndHover",void 0),i([p()],j.prototype,"startOnTop",void 0),i([p()],j.prototype,"handlesOverlapping",void 0),i([p()],j.prototype,"renderValueStart",void 0),i([p()],j.prototype,"renderValueEnd",void 0);const R=e`:host{display:inline-flex;vertical-align:middle;--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, 9999px);--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, 9999px);--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, 9999px);--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_label-label-text-color: var(--md-slider-label-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-label-text-type: var(--md-slider-label-label-text-type, var(--md-sys-typescale-label-medium, 500 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));min-inline-size:200px;--md-elevation-level:var(--_handle-elevation);--md-elevation-shadow-color:var(--_handle-shadow-color)}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level:var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track{position:absolute;inset:0;display:flex;align-items:center}.track::before,.track::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--slider-tick-count)) 100%}.track::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape);background-color:var(--_inactive-track-color)}.track.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background-color:var(--_disabled-inactive-track-color)}.track::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)));background-color:var(--_active-track-color)}:host-context([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}:host([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}.track.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::after{background-color:var(--_disabled-active-track-color)}:host([disabled]) .track.tickmarks::before,:host([disabled]) .track.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--slider-start-fraction));inline-size:calc(100%*(var(--slider-end-fraction) - var(--slider-start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:grid;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .handleNub,.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:grid;padding:4px;place-items:center;border-radius:9999px;color:var(--_label-label-text-color);font:var(--_label-label-text-type);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))) 0 0)}:host-context([dir=rtl]) .ranged input.start{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}:host([dir=rtl]) .ranged input.start{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)))}:host-context([dir=rtl]) .ranged input.end{clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}:host([dir=rtl]) .ranged input.end{clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}.onTop{z-index:1}md-focus-ring{--md-focus-ring-outward-offset: -2px}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}/*# sourceMappingURL=slider-styles.css.map */
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let B=class extends j{};B.styles=[R,C],B=i([s("md-slider")],B);var I=function(e,t,a,r){for(var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};let A=class extends a{constructor(){super(...arguments),this.comments=[],this.progress=0}changeTime(){const e=this.progressBar.value/100;this.dispatchEvent(new _("change-time",e))}render(){var e;return r`
        ${null===(e=this.comments)||void 0===e?void 0:e.map((e=>r`
            <div class="timeline-comment" style="left: ${e}%;"></div>
        `))}
        <md-slider .value=${100*this.progress} @change=${this.changeTime}></md-slider>
        `}};
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function U(e,t=!0){return t&&"rtl"===getComputedStyle(e).getPropertyValue("direction").trim()}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */A.styles=[e`
        :host {
            height: 2rem;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .timeline-comment {
            z-index: 1;
            width: 3px;
            height: 4px;
            
            background-color: var(--altar-timeline-comment-color, red);
            position: absolute;
        }
        `],I([t({type:Array})],A.prototype,"comments",void 0),I([t({type:Number})],A.prototype,"progress",void 0),I([h("md-slider")],A.prototype,"progressBar",void 0),A=I([s("altar-timeline")],A);class F extends a{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.flipIcon=U(this,this.flipIconInRtl)}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?k`div`:k`button`,{ariaLabel:t,ariaHasPopup:a,ariaExpanded:r}=this,i=t&&this.selectedAriaLabel,s=i?y:this.selected;let o=y;return this.href||(o=i&&this.selected?this.selectedAriaLabel:t),g`<${e}
        class="icon-button ${b(this.getRenderClasses())}"
        id="button"
        aria-label="${o||y}"
        aria-haspopup="${!this.href&&a||y}"
        aria-expanded="${!this.href&&r||y}"
        aria-pressed="${s}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?y:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():y}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return r`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||y}"
        aria-label="${e||y}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return r`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return r`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return r`<span class="touch"></span>`}renderFocusRing(){return r`<md-focus-ring for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return r`<md-ripple
      for=${this.href?"link":y}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=U(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){this.toggle&&!this.disabled&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}c(F),i([t({type:Boolean,reflect:!0})],F.prototype,"disabled",void 0),i([t({type:Boolean})],F.prototype,"flipIconInRtl",void 0),i([t()],F.prototype,"href",void 0),i([t()],F.prototype,"target",void 0),i([t({attribute:"selected-aria-label",reflect:!0})],F.prototype,"selectedAriaLabel",void 0),i([t({type:Boolean})],F.prototype,"toggle",void 0),i([t({type:Boolean,reflect:!0})],F.prototype,"selected",void 0),i([p()],F.prototype,"flipIcon",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const H=e`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */,V=e`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let D=class extends F{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};D.styles=[H,V],D=i([s("md-standard-icon-button")],D);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class G extends a{render(){return r`<span><slot></slot></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const X=e`:host{--_color: var(--md-icon-color, inherit);--_font: var(--md-icon-font, "Material Symbols Outlined");--_font-variation-settings: var(--md-icon-font-variation-settings, inherit);--_size: var(--md-icon-size, 24px);--_weight: var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-variation-settings);line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}/*# sourceMappingURL=icon-styles.css.map */
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let q=class extends G{};q.styles=[X],q=i([s("md-icon")],q);const K=e=>{try{return e<3600?new Date(1e3*e).toISOString().substring(14,19):new Date(1e3*e).toISOString().slice(11,19)}catch(e){}return""};var Z=function(e,t,a,r){for(var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};let J=class extends ${constructor(){super(...arguments),this.isPlaying=!1,this.currentProgess=0,this.commentsPosition=[]}getControlInfo(){return{time:this.element.currentTime/this.element.duration}}setEventListeners(e){e.addEventListener("timeupdate",(()=>{this.requestUpdate();const e=this.findClosestNumber(this.commentsPosition,this.element.currentTime/this.element.duration);this.lastCommentEmitted!==e&&this.dispatchEvent(new _("comment-selected"))})),e.addEventListener("durationchange",(()=>this.requestUpdate())),e.addEventListener("ended",(()=>this.isPlaying=!1)),e.addEventListener("play",(()=>this.isPlaying=!0)),e.addEventListener("pause",(()=>this.isPlaying=!1))}togglePlay(){this.isPlaying?this.element.pause():this.element.play()}changeCurrentTime(e){this.element.currentTime=e.detail*this.element.duration,this.requestUpdate()}findClosestNumber(e,t){if(!e||0===e.length)return null;let a=e[0],r=Math.abs(t-a);for(let i=1;i<e.length;i++){const s=e[i],o=Math.abs(t-s);o<r&&(a=s,r=o)}return a}render(){var e,t,a,i;return r`
        <md-standard-icon-button @click="${this.togglePlay}">
            <md-icon>${this.isPlaying?"pause":"play_arrow"}</md-icon>
        </md-standard-icon-button>

        ${K(null===(e=this.element)||void 0===e?void 0:e.currentTime)} / ${K(null===(t=this.element)||void 0===t?void 0:t.duration)}

        <altar-timeline 
        .comments=${this.commentsPosition} 
        .progress=${(null===(a=this.element)||void 0===a?void 0:a.currentTime)/(null===(i=this.element)||void 0===i?void 0:i.duration)}
        @change-time=${this.changeCurrentTime}></altar-timeline>
        `}};J.styles=[...$.styles,e`
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
        }
        `],Z([p()],J.prototype,"isPlaying",void 0),Z([p()],J.prototype,"currentProgess",void 0),Z([t({type:Array})],J.prototype,"commentsPosition",void 0),J=Z([s("altar-time-control")],J);class Q extends w{async connectedCallback(){super.connectedCallback();const e=await this.element;e.addEventListener("click",(()=>{e.paused?e.play():e.pause()}))}async firstUpdated(e){super.firstUpdated(e);const t=await this.element;t.src=URL.createObjectURL(this.file),Array.from(this.controls).map((e=>e.element=t))}getPlayerInfo(){var e,t;return null===(t=null===(e=Array.from(this.controls))||void 0===e?void 0:e.filter((e=>e instanceof J)).at(0))||void 0===t?void 0:t.getControlInfo()}}var W=function(e,t,a,r){for(var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};let Y=class extends ${constructor(){super(...arguments),this.muted=!1,this.showSlider=!1,this.onmouseover=()=>this.showSlider=!0,this.onmouseleave=()=>this.showSlider=!1}setEventListeners(e){e.addEventListener("volumechange",(()=>this.slider.value=100*e.volume))}changeVolume(){this.element.volume=this.slider.value/100}mute(){this.muted=!this.muted,this.element.muted=this.muted}render(){return r`
        
        <md-slider ?hidden=${!this.showSlider} @change=${this.changeVolume}>
        </md-slider>
        
        <md-standard-icon-button @click="${this.mute}">
            <md-icon>${this.muted?"volume_off":"volume_up"}</md-icon>
        </md-standard-icon-button>
        
        `}getControlInfo(){}};Y.styles=[...$.styles,e`
            :host {
                display: flex;
                align-items: center;

                border-radius: 25px;
                background-color: white;
            }

            md-slider[hidden] {
                display: none;
            }
      `],W([h("md-slider")],Y.prototype,"slider",void 0),W([p()],Y.prototype,"muted",void 0),W([p()],Y.prototype,"showSlider",void 0),Y=W([s("altar-audio-control")],Y);var ee=function(e,t,a,r){for(var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};let te=class extends a{toggleCommentMode(){this.dispatchEvent(new _("toggle-comment-mode"))}render(){return r`
        <md-standard-icon-button toggle @click="${this.toggleCommentMode}" ?selected=${this.isCommentMode}>
            <md-icon>comment</md-icon>
        </md-standard-icon-button>
    `}};te.styles=e`
    :host {
        border-radius: 25px;
        background-color: white;
    }
    `,ee([t({type:Boolean})],te.prototype,"isCommentMode",void 0),te=ee([s("altar-comment-trigger")],te);export{Q as A};
