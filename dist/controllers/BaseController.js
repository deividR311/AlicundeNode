"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_js_1 = __importDefault(require("../config/database.js"));
class BaseController {
    constructor() {
        this.sequelize = database_js_1.default;
    }
}
exports.default = BaseController;
