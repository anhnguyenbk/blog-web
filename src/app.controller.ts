import {Controller, Get, Render} from '@nestjs/common';
import {PostsService} from './posts/posts.service';
import { WebService } from './common/web.service';

@Controller()
export class AppController {
  constructor(private readonly postsService: PostsService, 
    private readonly webService: WebService) {}

  @Get()
  @Render('index')
  async root() {
    const response = await this.postsService.findAll().toPromise();
    return await this.webService.doRender({posts: response.data});
  }
}
