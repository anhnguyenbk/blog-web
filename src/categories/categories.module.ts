import { HttpModule, Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import {PostsModule} from "../posts/posts.module";
import {WebConfigService} from "../config/webconfig.service";
import {ConfigModule} from "@nestjs/config";
import { CategoriesService } from './categories.service';
import { BlogService } from 'src/common/rest.service';
import { WebService } from 'src/common/web.service';

@Module({
  imports: [PostsModule, HttpModule, ConfigModule.forRoot()],
  controllers: [CategoriesController],
  providers: [CategoriesService, WebConfigService, BlogService, WebService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
