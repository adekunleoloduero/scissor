"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./auth.route"));
const urls_route_1 = __importDefault(require("./urls.route"));
// import usersRoute from './users.route';
const pages_route_1 = __importDefault(require("./pages.route"));
const router = express_1.default.Router();
exports.default = () => {
    (0, auth_route_1.default)(router);
    (0, urls_route_1.default)(router);
    // usersRoute(router);
    (0, pages_route_1.default)(router);
    return router;
};
