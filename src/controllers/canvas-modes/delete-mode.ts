

import { AltarEvent } from "../../utils/events";
import { CanvasMode } from "./canvas-mode";



export class DeleteMode extends CanvasMode {


    override handleMouseDown(): void {
    }

    override handleMouseUp(event: MouseEvent): void {
       this.canvasController.host.dispatchEvent(new AltarEvent("comment-deleted", {x:event.clientX, y: event.clientY}));
    }

    override handleMouseMove(): void {}
    override handleMouseWheel(): void {}
    
}