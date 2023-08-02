import { CanvasMode } from "./canvas-mode";


export class ViewMode extends CanvasMode {


    override handleMouseDown(): void {}
    override handleMouseUp(): void {}

    override handleMouseMove(event: MouseEvent): void {
        if (this.canvasController.isDragging) {
            this.canvasController.panPos.x += event.movementX;
            this.canvasController.panPos.y += event.movementY;
        } 
        else if (this.canvasController.rotateEnabled) {
            const dx = event.movementX;
            const dy = event.movementY;
            const angleDelta = (dx + dy) * 0.005;
            this.canvasController.rotationAngle += angleDelta;
        }
        
    }
    override handleMouseWheel(event: WheelEvent): void {
        event.preventDefault();
        const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
        this.canvasController.zoom = Math.min(Math.max(this.canvasController.zoom * scaleFactor, 0.1),10);
    }
    
}