
import { ReactiveController } from 'lit';
import { CanvasObjectManager } from '../layouts/shared/canvas-manager';
import { CanvasMode } from './canvas-modes/canvas-mode';
import { ViewMode } from './canvas-modes/view-mode';

export class CanvasController implements ReactiveController {

    host: CanvasObjectManager;

    canvas!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;

    isDragging = false;
    rotateEnabled = false;
    panPos = { x: 0, y: 0 };
    zoom = 1;
    rotationAngle = 0;

    private mode: CanvasMode;

    setMode(newMode: CanvasMode) {
        this.mode = newMode;
    }

    constructor(host: CanvasObjectManager, mode?: CanvasMode) {
        (this.host = host).addController(this);
        this.mode = mode ?? new ViewMode(this);

        this.host.updateComplete.then(() => {
            this.init();
        });
    }

    init(){
        if(this.ctx) return;
        this.canvas = this.host.canvas!;
        this.ctx = this.canvas.getContext("2d")!;

        this.canvas.addEventListener('mousedown', this.handleMouseDown);
        this.canvas.addEventListener('mouseup', this.handleMouseUp);
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        this.canvas.addEventListener('wheel', this.handleMouseWheel);
    }
    
    resetView() {
        this.panPos = {x:0, y:0}
        this.zoom = 1;
        this.rotationAngle = 0;
        this.host.requestUpdate();
    }

    hostUpdated() {
        if(this.ctx) this.ctx.restore();
    }

    hostUpdate() {
        if(!this.ctx) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();

        this.ctx.translate(this.panPos.x, this.panPos.y);
        
        this.ctx.scale(this.zoom, this.zoom);

        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.rotate(this.rotationAngle);
        this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
    }

    hostDisconnected(){
        this.canvas.removeEventListener('mousedown', this.handleMouseDown);
        this.canvas.removeEventListener('mouseup', this.handleMouseUp);
        this.canvas.removeEventListener('mousemove', this.handleMouseMove);
        this.canvas.removeEventListener('wheel', this.handleMouseWheel);
    }

    handleMouseDown = (event: MouseEvent) => {
        this.isDragging = event.button === 0;
        this.rotateEnabled = event.button === 2;
        this.mode?.handleMouseDown(event);
    };

    handleMouseUp = (event: MouseEvent) => {
        this.isDragging = false;
        this.rotateEnabled = false;
        this.mode?.handleMouseUp(event);
    };

    handleMouseMove = (event: MouseEvent) => {
        this.mode?.handleMouseMove(event)
        this.host.requestUpdate();
    };

    handleMouseWheel = (event: WheelEvent) => {
        this.mode?.handleMouseWheel(event);
        this.host.requestUpdate();
    }

}




