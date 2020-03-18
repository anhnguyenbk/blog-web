import {Controller, Get, Param, Post, Render} from '@nestjs/common';
import { PostsService } from './posts.service';
import {WebConfigService} from "../config/webconfig.service";

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService, private readonly configService : WebConfigService) {}

    @Get()
    @Render('posts')
    async findAll() {
        const response = await this.postsService.findAll().toPromise();
        return this.configService.decorateWebConfig({posts: response.data});
    }

    @Get(':slug')
    @Render('single')
    async findOne(@Param('slug') slug) {
        const postResponse = await this.postsService.findBySlug(slug).toPromise();
        return this.configService.decorateWebConfig({post: postResponse.data});
    }
}
