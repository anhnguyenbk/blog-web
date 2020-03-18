import {Controller, Get, Render} from '@nestjs/common';
import {PostsService} from './posts/posts.service';
import {WebConfigService} from "./config/webconfig.service";

@Controller()
export class AppController {
  constructor(private readonly postsService: PostsService, private readonly configService: WebConfigService) {}

  @Get()
  @Render('index')
  async root() {
    const response = await this.postsService.findAll().toPromise();
    return this.configService.decorateWebConfig({posts: response.data});
  }
}
