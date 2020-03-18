import {HttpModule, Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CommentsController} from "./comments.controller";
import {CommentsService} from "./comments.service";
import {WebConfigService} from "../config/webconfig.service";

@Module({
    imports: [HttpModule, ConfigModule.forRoot()],
    controllers: [CommentsController],
    providers: [CommentsService, WebConfigService],
    exports: [CommentsService],
})

export class CommentsModule {
}
