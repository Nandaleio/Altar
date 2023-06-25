import{x as t,g as e,h as o,i as a,f as l}from"./altar-element-00d36f31.js";import{A as r}from"./altar-comment-trigger-a0e71bf8.js";var i=function(t,e,o,a){for(var l,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a,n=t.length-1;n>=0;n--)(l=t[n])&&(i=(r<3?l(i):r>3?l(e,o,i):l(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let n=class extends r{render(){var o;return t`
      <div class="main-section">
        <video id="altar-player-element"></video>
        <div class="comment-section">
          <altar-comment-trigger ?isCommentMode="${this.isCommentMode}"></altar-comment-trigger>
          ${this.isCommentMode?t`Tools`:e}
        </div>
      </div>
      <div class="controls-section">
        <altar-time-control .commentsPosition="${this.isCommentMode?null===(o=this.comments)||void 0===o?void 0:o.map((t=>100*t.time)):[]}" class="altar-control-element"></altar-time-control>
        <altar-audio-control class="altar-control-element"></altar-audio-control>
      </div>
    `}};n.styles=[...o.styles,a`
    .main-section {
      display: flex;
    }
    .comment-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .controls-section {
      display: flex;
      align-items: center;
    }
    `],n=i([l("altar-video-player")],n);export{n as AltarVideoPlayer};
