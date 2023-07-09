
import { ReactiveController } from 'lit';
import { CanvasObjectManager } from '../layouts/shared/canvas-manager';

export class CanvasController implements ReactiveController {

    private host: CanvasObjectManager;

    private canvas!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private isDragging = false;
    private rotateEnabled = false;
    private panPos = { x: 0, y: 0 };
    public zoom = 1;
    private rotationAngle = 0;


    constructor(host: CanvasObjectManager) {
        (this.host = host).addController(this);

        this.host.updateComplete.then(() => {
            this.init();
        })
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
    };

    handleMouseUp = () => {
        this.isDragging = false;
        this.rotateEnabled = false;
    };

    handleMouseMove = (event: MouseEvent) => {
        if (this.isDragging) {
            this.panPos.x += event.movementX;
            this.panPos.y += event.movementY;
        } 
        else if (this.rotateEnabled) {
            const dx = event.movementX;
            const dy = event.movementY;
            const angleDelta = (dx + dy) * 0.005;
            this.rotationAngle += angleDelta;
        }
        
        this.host.requestUpdate();
    };

    handleMouseWheel = (event: WheelEvent) => {
        event.preventDefault();
        const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
        this.zoom = Math.min(Math.max(this.zoom * scaleFactor, 0.1),10);
      
        this.host.requestUpdate();
      }

}




