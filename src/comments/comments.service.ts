import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";
import {Comment} from "./data/comment";
import {CommentDto} from "./data/commentDto";
import {WebConfigService} from "../config/webconfig.service";

@Injectable()
export class CommentsService {
    constructor(private readonly httpService: HttpService, readonly configService: WebConfigService) {
    }

    save(commentDto: CommentDto): Observable<AxiosResponse> {
        const comment = new Comment();
        comment.content = commentDto.content;
        comment.user = commentDto.user;
        return this.httpService.post(this.configService.apiServiceUrl() + `/posts/${commentDto.postId}/comments`, comment);
    }
}
