"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const index_1 = require("../docs/index");
const app = (0, express_1.default)();
//Configure cors
app.use((0, cors_1.default)());
//Configure swagger-ui
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(index_1.apiDocumentation));
app.set('trust proxy', true);
//Parse request body
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
//Configure view
app.set('view engine', 'ejs');
app.set('views', 'views');
//Configure static files
app.use(express_1.default.static('public'));
//Routes
app.use('/', (0, routes_1.default)());
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200)
        .render('home', {
        page: 'home'
    });
}));
//Error handler
const errorHandler = (error, req, res, next) => {
    if (error.status == 404) {
        next();
    }
    console.log(error);
    if (req.header('Content-type') == 'application/json') {
        return res.status(500).json("Internal Server Error");
    }
    else {
        return res.status(500).render('serverError', {
            pageTitle: 'Server Error'
        });
    }
};
app.use(errorHandler);
app.get('*', (req, res) => {
    if (req.header('Content-type') == 'application/json') {
        return res.status(404).json("Not Found");
    }
    else {
        return res.status(404).render('notFound', {
            pageTitle: 'Not Found'
        });
    }
});
exports.default = app;
