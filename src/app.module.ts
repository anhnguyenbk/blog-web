import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import {AppController} from './app.controller';
import { CategoriesModule } from './categories/categories.module';
import {CommentsModule} from "./comments/comments.module";
import {WebConfigService} from "./config/webconfig.service";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), PostsModule, CommentsModule, CategoriesModule],
  providers: [WebConfigService],
  controllers: [AppController],
})
export class AppModule {}
