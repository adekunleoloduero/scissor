"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const configs_1 = require("./configs");
const mongo_config_1 = __importDefault(require("./configs/mongo.config"));
//Connect to MongoDB
new mongo_config_1.default();
server_1.default.listen(configs_1.config.PORT, () => {
    console.log(`Server is running on port ${configs_1.config.PORT}...`);
});
