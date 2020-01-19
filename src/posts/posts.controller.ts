import {Controller, Get, Param, Render} from '@nestjs/common';
import { PostsService } from './posts.service';
import {AppService} from '../app.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService, private readonly appService: AppService) {}

    @Get()
    @Render('posts')
    async findAll() {
        const response = await this.postsService.findAll().toPromise();
        return { ...this.appService.getCommonValues(), posts: response.data };
    }

    @Get(':slug')
    @Render('single')
    async findOne(@Param('slug') slug) {
        const response = await this.postsService.findBySlug(slug).toPromise();
        return { ...this.appService.getCommonValues(), post: response.data };
    }
}
