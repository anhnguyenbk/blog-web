import {Controller, Get, Param, Post, Render} from '@nestjs/common';
import { PostsService } from './posts.service';
import { WebService } from 'src/common/web.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService, 
        private readonly webService : WebService) {}

    @Get()
    @Render('posts')
    async findAll() {
        const response = await this.postsService.findAll().toPromise();
        return await this.webService.doRender({posts: response.data});
    }

    @Get(':slug')
    @Render('single')
    async findOne(@Param('slug') slug) {
        const postResponse = await this.postsService.findBySlug(slug).toPromise();
        return await this.webService.doRender({post: postResponse.data});
    }
}
