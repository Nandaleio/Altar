import { html, css, LitElement, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Comment2D } from '../../models/comments-models';
import { CanvasController } from '../../controllers/canvas-controller';
import { AltarMode } from '../../models/atlar-mode';
import { ViewMode } from '../../controllers/canvas-modes/view-mode';
import { PointMode } from '../../controllers/canvas-modes/point-mode';
import { DrawMode } from '../../controllers/canvas-modes/draw-mode';

@customElement("altar-canvas-manager")
export class CanvasObjectManager extends LitElement {

    @property({type: Array })
    objects: Comment2D[] = [];

    @property({type: Object})
    centralObject!: HTMLImageElement;

    @query('canvas')
    public canvas!: HTMLCanvasElement;

    canvasController = new CanvasController(this);
    
    private modeMap = {
        VIEW: new ViewMode(this.canvasController),
        POINT: new PointMode(this.canvasController),
        COMMENT: new ViewMode(this.canvasController),
        DRAW: new DrawMode(this.canvasController),
    }
    
    public setMode(mode: AltarMode) {
        this.canvasController.setMode(this.modeMap[mode])
    }

    override firstUpdated(_: PropertyValueMap<this>) {
        super.firstUpdated(_);

        this.updateCanvasSize();
    }

    override connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('resize', this.updateCanvasSize);
        window.addEventListener('resize', this.updateCanvasSize.bind(this));
    }

    override disconnectedCallback(): void {
        window.removeEventListener('resize', this.updateCanvasSize.bind(this));
    }

    updateCanvasSize() {
        const { width, height } = this.getBoundingClientRect();
        this.canvas.width = width;
        this.canvas.height = height;

        this.requestUpdate();
    }

    protected override update(changedProperties: PropertyValueMap<this>): void {
        super.update(changedProperties);
        
        this.canvas.getContext('2d')!.translate(this.canvas.width/2, this.canvas.height/2);
        this.renderObjects();
    }

    renderObjects() {
        if(!this.centralObject) return;

        const ctx = this.canvas.getContext('2d')!;

        const scaleFactor = Math.min(this.canvas.width / this.centralObject.width, this.canvas.height / this.centralObject.height);
        
        const centerX = (-this.centralObject.width * scaleFactor) / 2;
        const centerY = (-this.centralObject.height * scaleFactor) / 2;

        ctx.drawImage(this.centralObject, centerX, centerY, this.centralObject.width * scaleFactor, this.centralObject.height * scaleFactor);

        ctx.fillStyle = "#64f6";
        this.objects?.forEach((obj) => {
            ctx.beginPath();
            ctx.ellipse(obj.x*scaleFactor, obj.y*scaleFactor, 20/this.canvasController.zoom, 20/this.canvasController.zoom, 0, 0, 2 * Math.PI);
            ctx.fill();
        });
    }

    override render() {
        return html`<canvas oncontextmenu="return false;"></canvas>`;
    }

    static override styles = css`
        :host {
            width: 100%;
            height: 100%;
            justify-content: center;
            display: flex;
        }
        canvas {
            flex-grow: 1;
            border: 1px solid black;
        }
  `;
}
