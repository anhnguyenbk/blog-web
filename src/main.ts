import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppModule} from './app.module';
import * as hbs from 'hbs';
import moment = require("moment");

declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
    );

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    hbs.registerPartials(join(__dirname, '..', 'views/partials'));

    const blocks = {};

    hbs.registerHelper('extend', function(name, context) {
        let block = blocks[name];
        if (!block) {
            block = blocks[name] = [];
        }

        block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
    });

    // tslint:disable-next-line:only-arrow-functions
    hbs.registerHelper('block', function(name) {
        const val = (blocks[name] || []).join('\n');

        // clear the block
        blocks[name] = [];
        return val;
    });

    hbs.registerHelper('formatDate', function(dateTime) {
        return moment(dateTime).format('MMMM D, YYYY');
    });

    hbs.registerHelper('categoryLink', function(category) {
        return `/categories/${category}`;
    });

    var port = process.env.PORT || 3000;
    await app.listen(port);
    console.log('Server running at http://127.0.0.1:' + port + '/');

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
