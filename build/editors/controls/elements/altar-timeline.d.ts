import { LitElement } from "lit";
import { MdSlider } from "@material/web/slider/slider";
import '@material/web/slider/slider';
export declare class AltarTimeLine extends LitElement {
    comments: number[];
    progress: number;
    progressBar: MdSlider;
    private changeTime;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-timeline': AltarTimeLine;
    }
}
//# sourceMappingURL=altar-timeline.d.ts.map