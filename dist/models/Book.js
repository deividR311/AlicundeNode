"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("../config/database"));
// Model Book
let Book = database_1.default.define('Book', {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.default.STRING(2),
        allowNull: false,
    },
    chapters: {
        type: sequelize_1.default.INTEGER
    },
    pages: {
        type: sequelize_1.default.INTEGER
    }
});
// export User model for use in other files.
exports.default = Book;
