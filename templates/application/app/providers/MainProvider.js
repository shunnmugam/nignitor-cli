const Helper = require('nignitor/Helper');

class MainProvider {
    constructor(app) {
        this.app = app;
    }

    register() {

    }

    boot() {
        const indexRouter = require(Helper.getRootPath() + 'app/routes/index');
        this.app.use('/', indexRouter);
    }
}

module.exports = MainProvider;