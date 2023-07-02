"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pages_controller_1 = require("../controllers/pages.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.default = (router) => {
    //Pages relating to Urls
    router.get('/pages/signup', pages_controller_1.showSignUpPage);
    router.get('/pages/signin', pages_controller_1.showSignInPage);
    router.get('/pages/dashboard', auth_middleware_1.authenticateUser, pages_controller_1.showUserDashboard);
    router.get('/pages/shorten-url', auth_middleware_1.authenticateUser, pages_controller_1.showShortenUrlPage);
};
