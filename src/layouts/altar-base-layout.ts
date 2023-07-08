import { LitElement } from "lit";
import { property, queryAll, queryAsync } from "lit/decorators.js";
import { AltarMode } from "../models/atlar-mode";

export abstract class AltarBaseLayout<E,T> extends LitElement {

    @property({type: Object})
    file!: File;
    
    @property({type: Array})
    comments!: T[];
    
    @property({type: Object})
    selectedComment!: T;

    @property({type: Object})
    mode!: AltarMode;

    @queryAll(".altar-control-element")
    controls!: any[]
    
    @queryAsync('#altar-player-element')
    element!: E;

}