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
const BookController_1 = __importDefault(require("../controllers/BookController"));
class AdventureService extends BaseService_1.default {
    constructor() {
        super();
        this.getAdventures = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { page } = req.query;
                const response = yield this.adventureController.getAdventures(page || 0);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.createAdventure = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.createAdventure(req.body);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getAdventuresFiltered = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response;
                const { adventureSource, adventureDestination, } = req.body;
                const { page, params } = req.query;
                if (req.query.filter == "and") {
                    response = yield this.adventureController.getAdventuresByFilterAnd(adventureSource, adventureDestination, page || 0);
                    res.status(200).json({
                        status: this.success.success,
                        message: this.success.message,
                        response
                    });
                }
                else if (req.query.filter == "or") {
                    response = yield this.adventureController.getAdventuresSearch(params, page || 0);
                    res.status(200).json({
                        status: this.success.success,
                        message: this.success.message,
                        response
                    });
                }
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.getAdventure = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.getAdventure(req.params.idadventure || 0);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
        this.adventureController = new BookController_1.default;
    }
    getAdventureWithInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.getAdventureWithInfo(req.params.idadventure || 0);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
    }
    updateAdventure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.updateAdventure(Object.assign({}, req.body));
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
    }
    deleteAdventure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.deleteAdventure(req.params.idadventure);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
        });
    }
    setTags(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.setTags(req.params.idadventure, req.body.tags);
                res.status(200).json({
                    status: this.success.success,
                    message: this.success.message,
                    response
                });
            }
            catch (err) {
                this.logger.error("setTags@AdventureService " + JSON.stringify(err) + err);
                res.status(500).json({
                    status: this.errors.error,
                    message: this.errors.internal_server_error,
                    response: err
                });
            }
            ;
        });
    }
}
exports.default = AdventureService;
