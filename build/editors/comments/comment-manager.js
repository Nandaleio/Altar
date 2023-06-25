export class CommentManager {
    constructor() {
        this.newCommentIdUrl = '';
    }
    async fetchNewCommentId() {
        if (this.newCommentIdUrl)
            return (await fetch(this.newCommentIdUrl)).text();
        return crypto.randomUUID();
    }
    async buildComment(playerInfo, commentContent) {
        const newId = await this.fetchNewCommentId();
        return { ...playerInfo, id: newId, comment: commentContent };
    }
}
//# sourceMappingURL=comment-manager.js.map