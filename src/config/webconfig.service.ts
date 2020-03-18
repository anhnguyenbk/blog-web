import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class WebConfigService {
    constructor(private configService: ConfigService) {}

    apiServiceUrl() {
        return this.configService.get("API_SERVICE_URL");
    }

    decorateWebConfig(data : Object) {
        return { ...data, config: this.webUIConfig()};
    }

    webUIConfig() {
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
                    link: 'https://twitter.com/ngbeobk',
                },
                {
                    name: 'Github',
                    icon: 'social-33-white.svg',
                    link: 'https://github.com/anhnguyenbk',
                },
                {
                    name: 'Linkedin',
                    icon: 'social-09-white.svg',
                    link: 'https://www.linkedin.com/in/anhnguyenbk12',
                },
            ],
        };
    }
}
