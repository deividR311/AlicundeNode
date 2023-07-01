"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes/routes"));
const database_1 = __importDefault(require("../config/database"));
class Server {
    constructor() {
        this.app = express_1.default();
        //DATABASE CONNECTION
        this.dataBaseConnection();
        // MIDDLEWARES
        this.middlewares();
        // ROUTES
        this.routes();
    }
    dataBaseConnection() {
        require('../models/Associations');
        database_1.default.sync();
    }
    middlewares() {
        // CORS
        this.app.use(cors_1.default());
        // READ AND CONVERT THE BODY
        this.app.use(express_1.default.json());
    }
    routes() {
        routes_1.default(this.app);
    }
    start(callback) {
        this.app.listen(3000, callback);
    }
}
exports.default = Server;
