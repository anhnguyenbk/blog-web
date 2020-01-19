import {Controller, Get, Render} from '@nestjs/common';
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
}
