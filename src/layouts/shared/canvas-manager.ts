import { html, css, LitElement, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Comment2D } from '../../models/comments-models';
import { CanvasController } from '../../controllers/canvas-controller';

@customElement("altar-canvas-manager")
export class CanvasObjectManager extends LitElement {

    @property({type: Array })
    objects: Comment2D[] = [];

    @property({type: Object})
    centralObject!: HTMLImageElement;

    @query('canvas')
    public canvas!: HTMLCanvasElement;

    canvasController = new CanvasController(this);

    override firstUpdated(_: PropertyValueMap<this>) {
        super.firstUpdated(_);

        this.updateCanvasSize();
    }

    override connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('resize', this.updateCanvasSize.bind(this));
        this.addEventListener('resize', this.updateCanvasSize);
    }

    override disconnectedCallback(): void {
        window.removeEventListener('resize', this.updateCanvasSize.bind(this));
    }

    updateCanvasSize() {
        console.log(this.getBoundingClientRect())
        const { width, height } = this.getBoundingClientRect();
        this.canvas.width = width;
        this.canvas.height = height;
    }

    protected override update(changedProperties: PropertyValueMap<this>): void {
        super.update(changedProperties);

        this.renderObjects();
    }

    renderObjects() {
        if(!this.centralObject) return;

        const ctx = this.canvas.getContext('2d')!;

        ctx.drawImage(this.centralObject, this.centralObject.width/2, this.centralObject.height/2);

        ctx.fillStyle = "red";
        this.objects?.forEach((obj) => {
            ctx.ellipse(obj.x, obj.y, 20, 20, 0, 0, 2 * Math.PI);
        });
    }

    override render() {
        return html`<canvas></canvas>`;
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
