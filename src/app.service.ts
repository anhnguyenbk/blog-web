import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
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
}
