"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../config/database.js"));
// Model User
let User = database_js_1.default.define('Users', {
    iduser: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iddocument: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    lastname: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    telephone: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    image: {
        type: sequelize_1.default.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    email: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    token: {
        type: sequelize_1.default.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    nickname: {
        type: sequelize_1.default.STRING(255),
        unique: true,
        allowNull: false
    },
    gender: {
        type: sequelize_1.default.STRING(50),
        allowNull: false
    }
});
// export User model for use in other files.
exports.default = User;
