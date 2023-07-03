"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.urlAnalyticsController = exports.urlsHistoryController = exports.getUrlByIdController = exports.returnLongUrlController = exports.shortenUrlController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url_service_1 = require("../services/url.service");
const validUrl = __importStar(require("valid-url"));
const configs_1 = require("../configs");
const shortenUrlController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { longUrl } = req.body;
        let baseUrl;
        if (req.body.customDomain) {
            baseUrl = req.body.customDomain;
        }
        else {
            baseUrl = configs_1.config.BASE_URL;
        }
        const userId = req.user.id;
        //Validate the base url
        if (!validUrl.isUri(baseUrl)) {
            if (req.url.startsWith('/api')) {
                return res.status(400).json('Invalid domain');
            }
            else {
                return res.render('shortenUrl', {
                    pageTitle: 'Shorten Url',
                    messagge: 'Invalid domain'
                });
            }
        }
        try {
            //Validate the original url before proceeding
            if (validUrl.isUri(longUrl)) {
                const url = yield (0, url_service_1.shortenUrlService)(req.body, userId, baseUrl);
                if (req.url.startsWith('/api')) {
                    return res.status(201).json(url);
                }
                else {
                    return res.render('viewUrl', {
                        pageTitle: 'View Url',
                        url
                    });
                }
            }
            else {
                if (req.url.startsWith('/api')) {
                    return res.status(400).json('Invalid or broken url');
                }
                else {
                    return res.render('shortenUrl', {
                        pageTitle: 'Shorten Url',
                        messagge: 'Invalid or broken url'
                    });
                }
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.shortenUrlController = shortenUrlController;
//Return long url in place  of short url
const returnLongUrlController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { urlCode } = req.params;
        let ip = '';
        if (process.env.NODE_ENV == 'production') {
            ip = req.ip;
        }
        else if (process.env.NODE_ENV == 'development') {
            //Ip for testing
            ip = '105.123.0.0';
        }
        try {
            const url = yield (0, url_service_1.returnLongUrlService)(urlCode, ip);
            const longUrl = (url === null || url === void 0 ? void 0 : url.longUrl) || '/';
            const hostname = req.hostname;
            const origin = req.get('origin');
            console.log(hostname, origin);
            if (hostname == origin) {
                return res.redirect(longUrl);
            }
            else {
                return res.status(200).json({ longUrl });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.returnLongUrlController = returnLongUrlController;
//Get url by urlCode
const getUrlByIdController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const url = yield (0, url_service_1.getUrlByIdService)(id);
            if (req.url.startsWith('/api')) {
                return res.status(200).json(url);
            }
            else {
                return res.status(200).render('viewUrl', {
                    pageTitle: 'View Url',
                    url
                });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.getUrlByIdController = getUrlByIdController;
const urlsHistoryController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user.id;
        const page = req.params.page;
        try {
            const urlsHistory = yield (0, url_service_1.urlsHistoryService)(userId, page);
            if (req.url.startsWith('/api')) {
                return res.status(200).json(urlsHistory);
            }
            else {
                return res.status(200).render('urlsHistory', {
                    pageTitle: 'Urls History',
                    urlsHistory
                });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.urlsHistoryController = urlsHistoryController;
const urlAnalyticsController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlCode = req.params.urlCode;
        const page = req.params.page;
        try {
            const urlAnalytics = yield (0, url_service_1.urlAnalyticsService)(urlCode, page);
            if (req.url.startsWith('/api')) {
                return res.status(200).json(urlAnalytics);
            }
            else {
                return res.render('urlAnalytics', {
                    pageTitle: 'Url Analytics',
                    urlAnalytics
                });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.urlAnalyticsController = urlAnalyticsController;
//Delete a url
// export const deleteUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
//     const id = req.params.id;
//     try {
//         const url= await deleteUrlService(id);
//         if (req.url.startsWith('/api')) {
//             return res.status(200).json(url);
//         } else {
//             return res.status(200).redirect('/urls/history/1/5');
//         }
//     } catch(error) {
//         console.log(error);
//         next(error);
//     }
//  }
