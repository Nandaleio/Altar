import { LitElement } from "lit";
import { AltarCommentTrigger } from "../comments/altar-comment-trigger";
export declare abstract class AltarPlayer<T, TT> extends LitElement {
    commentTrigger: AltarCommentTrigger;
    file: File;
    element: Promise<T>;
    controls: TT[];
}
//# sourceMappingURL=altar-player.d.ts.map