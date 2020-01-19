import { HttpService } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare class PostsService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(): Observable<AxiosResponse<Post[]>>;
}
