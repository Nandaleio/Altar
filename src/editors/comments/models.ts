
export interface Comment2D {
    x: number;
    y: number;
}
export interface Comment3D extends Comment2D {
    z: number;
}


export interface TimeComment {
    time: number;
}

export interface VideoComment extends Comment2D, TimeComment {
    
}

export interface Video3DComment extends Comment3D, TimeComment {
    
}

