"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlAnalytics = void 0;
const mongoose_1 = require("mongoose");
const UrlAnalyticsSchema = new mongoose_1.Schema({
    urlCode: { type: String, required: true },
    ip: { type: String, required: true },
    clickCount: { type: Number, default: 0 },
    locationInfo: { type: Object }
});
exports.UrlAnalytics = (0, mongoose_1.model)('urlAnalytics', UrlAnalyticsSchema);
