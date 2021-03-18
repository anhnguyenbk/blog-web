import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";
import {Category} from "./category";
import {BlogService} from "../common/rest.service";

@Injectable()
export class CategoriesService {
    constructor(private readonly restService: BlogService) {
    }

    findAll(): Observable<AxiosResponse<Category[]>> {
        return this.restService.get(`/posts/categories`);
    }

    findBySlug(slug: string): Observable<AxiosResponse<Category>> {
        return this.restService.get(`/categories/slug/${slug}`);
    }
}
