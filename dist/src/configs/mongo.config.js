"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const _1 = require("./");
const dbURL = _1.config.MONGO_URL;
class MongoDBConnection {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose_1.default.connect(dbURL)
            .then(() => {
            console.log('Connected to mongoDB...');
        })
            .catch((error) => {
            console.log('mongoDB connection failed!');
            console.error(error);
        });
    }
}
exports.default = MongoDBConnection;
