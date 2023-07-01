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
const BaseService_1 = __importDefault(require("./BaseService"));
const AuthorController_1 = __importDefault(require("../controllers/AuthorController"));
class AuthorService extends BaseService_1.default {
    constructor() {
        super();
        this.getAuthors = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { page } = req.query;
                const response = yield this.AuthorController.getAuthors(page || 0);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@Authorservice " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.createAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('entro');
                const response = yield this.AuthorController.createAuthor(req.body);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@Authorservice " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.AuthorController.getAuthor(req.params.authorId || 0);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@Authorservice " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.AuthorController = new AuthorController_1.default;
    }
    updateAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.AuthorController.updateAuthor(Object.assign({}, req.body));
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
    }
    deleteAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.AuthorController.deleteAuthor(req.params.idAuthor);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@Authorservice " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
    }
}
exports.default = AuthorService;
