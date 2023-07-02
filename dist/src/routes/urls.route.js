"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_controller_1 = require("../controllers/url.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.default = (router) => {
    //1.Strictly for request that renders ejs template
    //Redirect to original URL
    router.get('/:urlCode', url_controller_1.returnLongUrlController);
    //Get URL by
    router.get('/urls/:id', auth_middleware_1.authenticateUser, url_controller_1.getUrlByIdController);
    //Url Analytics
    router.get('/urls/analytics/:urlCode/:page', auth_middleware_1.authenticateUser, url_controller_1.urlAnalyticsController);
    //URLs history
    router.get('/urls/history/:page', auth_middleware_1.authenticateUser, url_controller_1.urlsHistoryController);
    //Shorten URL
    router.post('/urls/shorten', auth_middleware_1.authenticateUser, url_controller_1.shortenUrlController);
    //Delete URL
    router.delete('/urls/delete/:id', auth_middleware_1.authenticateUser, url_controller_1.deleteUrlController);
    //2. Strictly requests with content types of application/json
    //Shorten URL
    router.get('/:uCode', url_controller_1.returnLongUrlController);
    router.post('/api/urls/shorten', auth_middleware_1.authenticateUser, url_controller_1.shortenUrlController);
    //Get URL by
    router.get('/api/urls/:id', auth_middleware_1.authenticateUser, url_controller_1.getUrlByIdController);
    //URLs history
    router.get('/api/urls/history/:page', auth_middleware_1.authenticateUser, url_controller_1.urlsHistoryController);
    //Url Analytics
    router.get('/api/urls/analytics/:urlCode/:page', auth_middleware_1.authenticateUser, url_controller_1.urlAnalyticsController);
    //Delete URL
    router.delete('/api/urls/delete/:id', auth_middleware_1.authenticateUser, url_controller_1.deleteUrlController);
};
