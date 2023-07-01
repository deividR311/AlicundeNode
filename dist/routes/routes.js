"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../config/errors"));
const BookRoutes_1 = __importDefault(require("./BookRoutes"));
const AuthorRoutes_1 = __importDefault(require("./AuthorRoutes"));
const appRouter = (app) => {
    app.use('/api/books', BookRoutes_1.default);
    app.use('/api/authors', AuthorRoutes_1.default);
    // ROUTES FAILED
    app.use((req, res) => { res.status(404).json({ 'error': errors_1.default.service_not_found }); });
};
exports.default = appRouter;
