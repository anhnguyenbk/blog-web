import {HttpModule, Module} from '@nestjs/common';
import {PostsController} from './posts.controller';
import {PostsService} from './posts.service';
import {AppService} from '../app.service';

@Module({
    imports: [HttpModule],
    controllers: [PostsController],
    providers: [PostsService, AppService],
    exports: [PostsService],
})
export class PostsModule {
}
