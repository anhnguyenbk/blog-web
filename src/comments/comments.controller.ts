import {Body, Controller, Post} from '@nestjs/common';
import {CommentsService} from "./comments.service";
import {CommentDto} from "./data/commentDto";

@Controller('comments')
export class CommentsController {

    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    async addComment(@Body() commentDto: CommentDto) {
        this.commentsService.save(commentDto).toPromise();
    }
}
