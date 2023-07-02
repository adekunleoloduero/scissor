"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const mongoose_1 = require("mongoose");
const UrlSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'users' },
    longUrl: { type: String, required: true },
    description: { type: String, required: true },
    shortUrl: { type: String },
    urlCode: { type: String },
    customDomain: { type: String },
    qrCode: { type: String },
    createdAt: { type: Date, default: Date.now() }
});
exports.Url = (0, mongoose_1.model)('urls', UrlSchema);
