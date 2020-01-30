import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import {AppService} from "../app.service";
import {PostsService} from "../posts/posts.service";
import {PostsModule} from "../posts/posts.module";

@Module({
  imports: [PostsModule],
  controllers: [CategoriesController],
  providers: [AppService]
})
export class CategoriesModule {}
