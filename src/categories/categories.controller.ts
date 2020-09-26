import {Controller, Get, Param, Render} from '@nestjs/common';
import {PostsService} from "../posts/posts.service";
import {CategoriesService} from "./categories.service";
import { WebService } from 'src/common/web.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly postsService: PostsService, 
            private readonly categoriesService: CategoriesService,
            private readonly webService: WebService) {}

    @Get(':slug')
    @Render('category')
    async findByCategory(@Param('slug') slug) {
        console.log (`Find category by slug: ${slug}`)
        const categoryRes = await this.categoriesService.findBySlug(slug).toPromise();
        const category = categoryRes.data;
        console.log (category)

        console.log (`Find posts by category: ${category._id}`)
        const postsRes = await this.postsService.findByCategory(category._id).toPromise();
        console.log (postsRes.data)
        return await this.webService.doRender({posts: postsRes.data, category: categoryRes.data});
    }
}
