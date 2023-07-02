"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
exports.default = (router) => {
    router.post('/auth/signup', auth_controller_1.signUp);
    router.post('/auth/signin', auth_controller_1.signIn);
    router.get('/auth/logout', auth_controller_1.logOut);
};
