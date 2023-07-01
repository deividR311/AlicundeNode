"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importStar(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model Caution
let Caution = database_js_1.default.define('Caution', {
    idcaution: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idstop: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    level: {
        type: sequelize_1.STRING(255),
        allowNull: false,
    }
});
// export User model for use in other files.
exports.default = Caution;
