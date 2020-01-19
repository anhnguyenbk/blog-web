"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const hbs = require("hbs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials(path_1.join(__dirname, '..', 'views/partials'));
    const blocks = {};
    hbs.registerHelper('extend', function (name, context) {
        let block = blocks[name];
        if (!block) {
            block = blocks[name] = [];
        }
        block.push(context.fn(this));
    });
    hbs.registerHelper('block', function (name) {
        const val = (blocks[name] || []).join('\n');
        blocks[name] = [];
        return val;
    });
    await app.listen(3000);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map