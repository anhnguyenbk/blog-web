import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [PostsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}