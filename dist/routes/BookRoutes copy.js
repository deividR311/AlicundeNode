"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const bookService_1 = __importDefault(require("../services/bookService"));
const bookRoutes = express_1.Router();
const bookValidator = new modelValidator_1.default();
const bookService = new bookService_1.default();
bookRoutes.get('/getAll', bookService.getBooks);
bookRoutes.post('/create', bookValidator.book, bookService.createBook);
bookRoutes.put('/update', bookService.updateBook);
bookRoutes.delete('/:bookId', bookService.deleteBook);
bookRoutes.get('/:bookId', bookService.getBook);
exports.default = bookRoutes;
