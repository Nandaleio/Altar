import { LitElement } from "lit";
import { property, query, queryAll, queryAsync } from "lit/decorators.js";
import { AltarCommentTrigger } from "../comments/altar-comment-trigger";

export abstract class AltarPlayer<T, TT> extends LitElement {

    @query("altar-comment-triger")
    commentTrigger!: AltarCommentTrigger
    

    @property({type: Object})
    file!: File;

    @queryAsync("#altar-player-element")
    element!: Promise<T>

    @queryAll(".altar-control-element")
    controls!: TT[]

}