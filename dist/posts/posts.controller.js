"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const app_service_1 = require("../app.service");
let PostsController = class PostsController {
    constructor(postsService, appService) {
        this.postsService = postsService;
        this.appService = appService;
    }
    async findAll() {
        const response = await this.postsService.findAll().toPromise();
        return Object.assign(Object.assign({}, this.appService.getCommonValues()), { posts: response.data });
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
PostsController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService, app_service_1.AppService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map