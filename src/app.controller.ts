import {Controller, Get, Render} from '@nestjs/common';
import {PostsService} from './posts/posts.service';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly postsService: PostsService, private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {
    const response = await this.postsService.findAll().toPromise();
    return { ...this.appService.getCommonValues(), posts: response.data };
  }
}
