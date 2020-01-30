import {Controller, Get, Param, Render} from '@nestjs/common';
import {PostsService} from "../posts/posts.service";
import {AppService} from "../app.service";

@Controller('categories')
export class CategoriesController {
    constructor(private readonly postsService: PostsService, private readonly appService: AppService) {}

    @Get(':slug')
    @Render('category')
    async findByCategory(@Param('slug') slug) {
        const response = await this.postsService.findByCategory(slug).toPromise();
        let category = response.data[0].categories.find(v => v.value == slug);
        return { ...this.appService.getCommonValues(), posts: response.data, category: category };
    }
}
