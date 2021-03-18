import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";
import {Comment} from "./data/comment";
import {CommentDto} from "./data/commentDto";
import {WebConfigService} from "../config/webconfig.service";
import {BlogService} from "../common/rest.service";

@Injectable()
export class CommentsService {
    constructor(private readonly restService: BlogService, readonly configService: WebConfigService) {
    }

    save(commentDto: CommentDto): Observable<AxiosResponse> {
        console.log ("Add comment: " + JSON.stringify(commentDto))
        
        const comment = new Comment();
        comment.content = commentDto.content;
        comment.user = commentDto.user;
        return this.restService.post(`/posts/${commentDto.postId}/comments`, comment);
    }
}
