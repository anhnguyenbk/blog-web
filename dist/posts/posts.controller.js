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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    async findOne(slug) {
        const response = await this.postsService.findBySlug(slug).toPromise();
        return Object.assign(Object.assign({}, this.appService.getCommonValues()), { post: response.data });
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':slug'),
    common_1.Render('single'),
    __param(0, common_1.Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findOne", null);
PostsController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService, app_service_1.AppService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map