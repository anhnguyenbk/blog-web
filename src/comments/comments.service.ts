import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";
import {Comment} from "./data/comment";
import {CommentDto} from "./data/commentDto";
import {WebConfigService} from "../config/webconfig.service";
import {RestService} from "../common/rest.service";

@Injectable()
export class CommentsService {
    constructor(private readonly restService: RestService, readonly configService: WebConfigService) {
    }

    save(commentDto: CommentDto): Observable<AxiosResponse> {
        const comment = new Comment();
        comment.content = commentDto.content;
        comment.user = commentDto.user;
        return this.restService.post(`/posts/${commentDto.postId}/comments`, comment);
    }
}
