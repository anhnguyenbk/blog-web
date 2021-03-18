import {HttpModule, Module} from '@nestjs/common';
import {PostsController} from './posts.controller';
import {PostsService} from './posts.service';
import {ConfigModule} from "@nestjs/config";
import {WebConfigService} from "../config/webconfig.service";
import {BlogService} from "../common/rest.service";
import { WebService } from 'src/common/web.service';

@Module({
    imports: [HttpModule, ConfigModule.forRoot()],
    controllers: [PostsController],
    providers: [PostsService, WebConfigService, BlogService, WebService],
    exports: [PostsService],
})
export class PostsModule {
}
