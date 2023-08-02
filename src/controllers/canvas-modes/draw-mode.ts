import { AltarEvent } from "../../utils/events";
import { CanvasMode } from "./canvas-mode";



export class DrawMode extends CanvasMode {

    private points: {x:number, y:number}[] = [];

    override handleMouseDown(event: MouseEvent): void {
        if(event.button === 2){
            this.canvasController.host.dispatchEvent(new AltarEvent("comment-added",this.points))
        }
    }

    override handleMouseUp(event: MouseEvent): void {
        if(event.button === 0){
            this.points.push({x:event.clientX, y:event.clientY});
        }
    }

    override handleMouseMove(): void {

    }

    override handleMouseWheel(): void {}
    
}