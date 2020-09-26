import {Injectable} from '@nestjs/common';
import {Post} from './post';
import {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';
import {WebConfigService} from "../config/webconfig.service";
import {RestService} from "../common/rest.service";

@Injectable()
export class PostsService {

    constructor(private readonly restService: RestService, readonly configService: WebConfigService) {
    }

    findAll(): Observable<AxiosResponse<Post[]>> {
        return this.restService.get("/posts/published");
    }

    findBySlug(slug: string): Observable<AxiosResponse<Post>> {
        return this.restService.get(`/posts/slug/${slug}`);
    }

    findByCategory(id: string): Observable<AxiosResponse<Post[]>> {
        return this.restService.get(`/posts/category/${id}`);
    }
}
