import { CanvasController } from "../canvas-controller";


export abstract class CanvasMode {

    canvasController: CanvasController

    constructor(canvasController: CanvasController) {
        this.canvasController = canvasController
    }

    abstract handleMouseDown(event: MouseEvent): void;
    abstract handleMouseUp(event: MouseEvent): void;
    abstract handleMouseMove(event: MouseEvent): void;
    abstract handleMouseWheel(event: WheelEvent): void;

}