"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getCommonValues() {
        return {
            socialItems: [
                {
                    name: 'Facebook',
                    icon: 'social-03-white.svg',
                    link: 'https://fb.com/beodn',
                },
                {
                    name: 'Twitter',
                    icon: 'social-18-white.svg',
                    link: '#',
                },
                {
                    name: 'Github',
                    icon: 'social-33-white.svg',
                    link: 'https://github.com/anhnguyenbk',
                },
                {
                    name: 'Github',
                    icon: 'social-09-white.svg',
                    link: '#',
                },
            ],
        };
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map