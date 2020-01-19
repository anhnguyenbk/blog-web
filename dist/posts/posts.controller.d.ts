import { PostsService } from './posts.service';
import { AppService } from '../app.service';
export declare class PostsController {
    private readonly postsService;
    private readonly appService;
    constructor(postsService: PostsService, appService: AppService);
    findAll(): Promise<{
        posts: import("./interfaces/post.interface").Post[];
        socialItems: {
            name: string;
            icon: string;
            link: string;
        }[];
    }>;
}
