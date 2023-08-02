import { AltarEvent } from "../../utils/events";
import { CanvasMode } from "./canvas-mode";



export class PointMode extends CanvasMode {


    override handleMouseDown(): void {
    }

    override handleMouseUp(event: MouseEvent): void {
       this.canvasController.host.dispatchEvent(new AltarEvent("comment-added", {x:event.clientX, y: event.clientY}));
    }

    override handleMouseMove(): void {}
    override handleMouseWheel(): void {}
    
}