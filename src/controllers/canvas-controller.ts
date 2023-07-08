
import { ReactiveController } from 'lit';
import { CanvasObjectManager } from '../layouts/shared/canvas-manager';

export class CanvasController implements ReactiveController {

    private host: CanvasObjectManager;

    private canvas!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private isDragging = false;
    private rotateEnabled = false;
    private panPos = { x: 0, y: 0 };
    private zoomScale = 1;
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
        this.ctx.rotate(this.rotationAngle);
        this.ctx.scale(this.zoomScale, this.zoomScale);
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
            const newPanX = this.panPos.x + event.movementX;
            const newPanY = this.panPos.y + event.movementY;

            const rect = this.canvas.getBoundingClientRect();
            const canvasWidth = rect.width / this.zoomScale;
            const canvasHeight = rect.height / this.zoomScale;

            const maxX = canvasWidth - rect.width;
            const maxY = canvasHeight - rect.height;

            this.panPos.x = Math.max(Math.min(newPanX, maxX), 0);
            this.panPos.y = Math.max(Math.min(newPanY, maxY), 0);
        } 
        else if (this.rotateEnabled) {
            const dx = event.movementX;
            const dy = event.movementY;
            const angleDelta = (dx + dy) * 0.01;
            this.rotationAngle += angleDelta;
        }
        
        this.host.requestUpdate();
    };

    handleMouseWheel = (event: WheelEvent) => {
        event.preventDefault();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
      
        const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
        const newZoom = this.zoomScale * scaleFactor;
      
        const zoomDelta = newZoom - this.zoomScale;
        const offsetX = mouseX * zoomDelta;
        const offsetY = mouseY * zoomDelta;
      
        this.zoomScale = newZoom;
        this.panPos.x -= offsetX;
        this.panPos.y -= offsetY;
      
        this.host.requestUpdate();
      
      }

}




