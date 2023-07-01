"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = __importDefault(require("./BaseController"));
const Book_1 = __importDefault(require("../models/Book"));
class BookController extends BaseController_1.default {
    constructor() {
        super();
        this.getBook = (bookId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let book = yield Book_1.default.findByPk(bookId);
                return book;
            }
            catch (err) {
                throw err;
            }
        });
        this.getBooks = (page) => __awaiter(this, void 0, void 0, function* () {
            try {
                let books = yield Book_1.default.findAll({ offset: (10 * page), limit: 10 });
                return books;
            }
            catch (err) {
                throw err;
            }
        });
        this.createBook = (book) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield Book_1.default.create(Object.assign({}, book));
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteBook = (bookId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Book_1.default.destroy({ where: { bookId } });
                return response;
            }
            catch (err) {
                throw err;
            }
        });
        this.updateBook = (book) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Book_1.default.update(Object.assign({}, Book_1.default), { where: { bookId: book.bookId } });
                let response = yield this.getBook(book.bookId);
                return response;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = BookController;
