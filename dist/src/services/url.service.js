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
exports.deleteUrlService = exports.urlAnalyticsService = exports.urlsHistoryService = exports.getUrlByIdService = exports.returnLongUrlService = exports.shortenUrlService = void 0;
const urls_model_1 = require("../models/urls.model");
const urlAnalytics_model_1 = require("../models/urlAnalytics.model");
const shortid_1 = __importDefault(require("shortid"));
const QRCode = __importStar(require("qrcode"));
const configs_1 = require("../configs");
const one_sdk_1 = require("@superfaceai/one-sdk");
const sdk = new one_sdk_1.SuperfaceClient();
const shortenUrlService = (body, userId, baseUrl) => __awaiter(void 0, void 0, void 0, function* () {
    let url = yield urls_model_1.Url.findOne({ longUrl: body.longUrl, userId });
    if (url) {
        return url;
    }
    else {
        let qrCode;
        const urlCode = shortid_1.default.generate();
        const shortUrl = `${baseUrl}/${urlCode}`;
        try {
            qrCode = yield QRCode.toDataURL(shortUrl);
        }
        catch (error) {
            console.log(error);
        }
        const data = {
            userId,
            longUrl: body.longUrl,
            description: body.description,
            shortUrl,
            urlCode,
            qrCode
        };
        url = yield urls_model_1.Url.create(data);
        return url;
    }
});
exports.shortenUrlService = shortenUrlService;
const returnLongUrlService = (urlCode, ip) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield urls_model_1.Url.findOne({ urlCode });
    //Update url analytics
    let analytics = yield urlAnalytics_model_1.UrlAnalytics.findOne({ urlCode, ip });
    if (analytics) {
        analytics.clickCount = analytics.clickCount + 1;
        yield analytics.save();
    }
    else {
        const profile = yield sdk.getProfile("address/ip-geolocation@1.0.1");
        const result = yield profile.getUseCase("IpGeolocation").perform({
            ipAddress: ip
        }, {
            provider: "ipdata",
            security: {
                apikey: {
                    apikey: configs_1.config.IP_DATA_API_KEY
                }
            }
        });
        const data = result.unwrap();
        let analytics = new urlAnalytics_model_1.UrlAnalytics({
            urlCode,
            ip,
            clickCount: 1,
            locationInfo: data
        });
        yield analytics.save();
    }
    return url;
});
exports.returnLongUrlService = returnLongUrlService;
const getUrlByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield urls_model_1.Url.findById(id);
    return url;
});
exports.getUrlByIdService = getUrlByIdService;
const urlsHistoryService = (userId, page) => __awaiter(void 0, void 0, void 0, function* () {
    const pageValue = parseInt(page);
    let previousPage = pageValue;
    let nextPage = pageValue + 1;
    const count = yield urls_model_1.Url.count({ userId });
    const totalPages = Math.ceil(count / 5);
    if (totalPages === pageValue) {
        nextPage = pageValue;
        previousPage = nextPage - 1;
    }
    const urls = yield urls_model_1.Url.find({ userId })
        .sort({ createdAt: -1 })
        .limit(5)
        .skip((pageValue - 1) * 5)
        .exec();
    return {
        urls,
        previousPage,
        nextPage,
    };
});
exports.urlsHistoryService = urlsHistoryService;
const urlAnalyticsService = (urlCode, page) => __awaiter(void 0, void 0, void 0, function* () {
    const pageValue = parseInt(page);
    let previousPage = pageValue;
    let nextPage = pageValue + 1;
    const count = yield urlAnalytics_model_1.UrlAnalytics.count({ urlCode });
    const totalPages = Math.ceil(count / 5);
    if (totalPages === pageValue) {
        nextPage = pageValue;
        previousPage = nextPage - 1;
    }
    const analytics = yield urlAnalytics_model_1.UrlAnalytics.find({ urlCode })
        .sort({ clicCount: -1 })
        .limit(5)
        .skip((pageValue - 1) * 5)
        .exec();
    //Get short UrL
    const url = yield urls_model_1.Url.findOne({ urlCode });
    let shortUrl;
    if (!url) {
        shortUrl = '';
    }
    else {
        shortUrl = url.shortUrl;
    }
    return {
        analytics,
        shortUrl,
        previousPage,
        nextPage,
    };
});
exports.urlAnalyticsService = urlAnalyticsService;
const deleteUrlService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield urls_model_1.Url.findByIdAndDelete(id);
    return url;
});
exports.deleteUrlService = deleteUrlService;
