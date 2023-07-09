"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_controller_1 = require("../controllers/url.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.default = (router) => {
    //Shorten URL
    router.post('/api/urls/shorten', auth_middleware_1.authenticateUser, url_controller_1.shortenUrlController);
    //Redirect to original URL
    router.get('/:urlCode', url_controller_1.returnLongUrlController);
    //Get URL by
    router.get('/api/urls/view/:id', auth_middleware_1.authenticateUser, url_controller_1.getUrlByIdController);
    //Url Analytics
    router.get('/api/urls/analytics/:urlCode/:page/:pageStatus', auth_middleware_1.authenticateUser, url_controller_1.urlAnalyticsController);
    //URLs history
    router.get('/api/urls/history/:page/:pageStatus', auth_middleware_1.authenticateUser, url_controller_1.urlsHistoryController);
};
