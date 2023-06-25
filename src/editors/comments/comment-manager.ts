export class CommentManager {

    public newCommentIdUrl: string = '';

    async fetchNewCommentId(): Promise<string> {
        if(this.newCommentIdUrl) 
            return (await fetch(this.newCommentIdUrl)).text();
        
        return crypto.randomUUID();
    }

    async buildComment(playerInfo: any, commentContent: string): Promise<any> {
        const newId = await this.fetchNewCommentId();
        return {...playerInfo, id: newId, comment: commentContent};
    }

}