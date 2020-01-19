import {HttpService, Injectable} from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { AxiosResponse } from 'axios';
import {Observable} from 'rxjs';

@Injectable()
export class PostsService {

    constructor(private readonly httpService: HttpService) {}

    findAll(): Observable<AxiosResponse<Post[]>> {
        return this.httpService.get('https://rildq3ohi7.execute-api.ap-southeast-1.amazonaws.com/prod/');
    }
}
