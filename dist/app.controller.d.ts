import { PostsService } from './posts/posts.service';
import { AppService } from './app.service';
export declare class AppController {
    private readonly postsService;
    private readonly appService;
    constructor(postsService: PostsService, appService: AppService);
    root(): Promise<{
        posts: import("./posts/interfaces/post.interface").Post[];
        socialItems: {
            name: string;
            icon: string;
            link: string;
        }[];
    }>;
}
