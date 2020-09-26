import { HttpModule, HttpService, Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import {AppController} from './app.controller';
import { CategoriesModule } from './categories/categories.module';
import {CommentsModule} from "./comments/comments.module";
import {WebConfigService} from "./config/webconfig.service";
import {ConfigModule} from "@nestjs/config";
import { WebService } from './common/web.service';
import { RestService } from './common/rest.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, PostsModule, CategoriesModule, CommentsModule],
  providers: [WebConfigService, RestService, WebService],
  controllers: [AppController],
})
export class AppModule {}
