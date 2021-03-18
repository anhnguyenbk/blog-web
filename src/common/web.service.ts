import {Injectable} from '@nestjs/common';
import {BlogService} from "./rest.service";

@Injectable()
export class WebService {
    constructor(private restService: BlogService) {
    }

    async doRender(data : Object) {
        return { ...data, categories: await this.getCategories(), config: this.configData()};
    }

    async getCategories() {
        const categoriesRes = await this.restService.get(`/categories`).toPromise();
        return categoriesRes.data
    }

    configData() {
        return {
            socialItems: [
                {
                    name: 'Facebook',
                    icon: 'social-03-white.svg',
                    link: 'https://fb.com/beodn',
                },
                {
                    name: 'Twitter',
                    icon: 'social-18-white.svg',
                    link: 'https://twitter.com/ngbeobk',
                },
                {
                    name: 'Github',
                    icon: 'social-33-white.svg',
                    link: 'https://github.com/anhnguyenbk',
                },
                {
                    name: 'Linkedin',
                    icon: 'social-09-white.svg',
                    link: 'https://www.linkedin.com/in/anhnguyenbk12',
                },
            ]
        };
    }
}