import{y as t,x as a,h as e,i as r,f as o}from"./altar-element-00d36f31.js";import{A as l}from"./altar-comment-trigger-a0e71bf8.js";var n=function(t,a,e,r){for(var o,l=arguments.length,n=l<3?a:null===r?r=Object.getOwnPropertyDescriptor(a,e):r,i=t.length-1;i>=0;i--)(o=t[i])&&(n=(l<3?o(n):l>3?o(a,e,n):o(a,e))||n);return l>3&&n&&Object.defineProperty(a,e,n),n};let i=class extends l{constructor(){super(...arguments),this.perventCommentMode=async a=>{a.stopPropagation(),a.preventDefault();(await this.element).pause(),this.dispatchEvent(new t("toggle-comment-box"))}}render(){var t;return a`
      <audio id="altar-player-element"></audio>
      <div class="controls">
        <altar-comment-trigger @toggle-comment-mode="${this.perventCommentMode}" ?isCommentMode="${this.isCommentMode}"></altar-comment-trigger>
        <altar-time-control .commentsPosition="${this.isCommentMode?null===(t=this.comments)||void 0===t?void 0:t.map((t=>100*t.time)):[]}" class="altar-control-element"></altar-time-control>
        <altar-audio-control class="altar-control-element"></altar-audio-control>
      </div>
    `}};i.styles=[...e.styles,r`
    .controls {
        display: flex;
        align-items: center;
    }
    `],i=n([o("altar-audio-player")],i);export{i as AltarAudioPlayer};
