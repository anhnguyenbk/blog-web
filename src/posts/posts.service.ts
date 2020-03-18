import {HttpService, Injectable} from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { AxiosResponse } from 'axios';
import {Observable} from 'rxjs';
import {WebConfigService} from "../config/webconfig.service";

@Injectable()
export class PostsService {

    constructor(private readonly httpService: HttpService, readonly configService: WebConfigService) {}

    findAll(): Observable<AxiosResponse<Post[]>> {
        return this.httpService.get(this.configService.apiServiceUrl() + "/posts");
    }

    findBySlug(slug : string): Observable<AxiosResponse<Post>> {
        return this.httpService.get(this.configService.apiServiceUrl() + `/posts/slug/${slug}`);
    }

    findByCategory(slug : string): Observable<AxiosResponse<Post[]>> {
        return this.httpService.get(this.configService.apiServiceUrl() + `/categories/${slug}`);
    }
}
