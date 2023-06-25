import { LitElement, css } from "lit";
import { property, query, queryAll, queryAsync } from "lit/decorators.js";
import { AltarCommentTrigger } from "../comments/altar-comment-trigger";

export abstract class AltarPlayer<HTML_ELEMENT, CONTROLS, COMMENT_TYPE> extends LitElement {

    @query("altar-comment-triger")
    commentTrigger!: AltarCommentTrigger
    
    @queryAsync("#altar-player-element")
    element!: Promise<HTML_ELEMENT>

    @queryAll(".altar-control-element")
    controls!: CONTROLS[]

    @property({type: Object})
    file!: File;
    
    @property({type: Array})
    comments!: COMMENT_TYPE[];
    
    @property({type: Object})
    selectedComment!: COMMENT_TYPE;

    @property({type: Boolean})
    isCommentMode!: boolean;

    public abstract getPlayerInfo(): COMMENT_TYPE;

    static override styles = 
        [css`
        :host {
            width:100%;
            height:100%;
        }
    `];
}