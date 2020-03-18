import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import {PostsModule} from "../posts/posts.module";
import {WebConfigService} from "../config/webconfig.service";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [PostsModule, ConfigModule.forRoot()],
  controllers: [CategoriesController],
  providers: [WebConfigService],
})
export class CategoriesModule {}
