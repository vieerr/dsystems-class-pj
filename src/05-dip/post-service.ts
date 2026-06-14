
export interface IDatabaseProvider {
    getFakePosts(): Promise<{ id: number; title: string; body: string }[]>;
}

export class PostService {
    constructor(private readonly db: IDatabaseProvider) {}

    async getPosts() {
        return this.db.getFakePosts();
    }
}
