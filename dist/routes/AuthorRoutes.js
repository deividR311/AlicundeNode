"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modelValidator_1 = __importDefault(require("../middlewares/modelValidator"));
const authorService_1 = __importDefault(require("../services/authorService"));
const authorRoutes = express_1.Router();
const authorValidator = new modelValidator_1.default();
const authorService = new authorService_1.default();
authorRoutes.get('/getAll', authorService.getAuthors);
authorRoutes.post('/create', authorService.createAuthor);
authorRoutes.put('/update', authorService.updateAuthor);
authorRoutes.delete('/:authorId', authorService.deleteAuthor);
authorRoutes.get('/:authorId', authorService.getAuthor);
exports.default = authorRoutes;
