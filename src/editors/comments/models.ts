export interface Comment {
    id: string;
    comment: string;
}
 
export interface ImageComment extends Comment{
    x: number;
    y: number;
}

export interface TimelineComment extends Comment {
    time: number;
}

export interface VideoComment extends ImageComment, TimelineComment {

}

