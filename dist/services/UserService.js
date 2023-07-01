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
const UserController_1 = __importDefault(require("../controllers/UserController"));
const CardController_1 = __importDefault(require("../controllers/CardController"));
const BankAccountController_1 = __importDefault(require("../controllers/BankAccountController"));
const AdventureController_1 = __importDefault(require("../controllers/AdventureController"));
const path = require('path');
// const sharp = require('sharp');
const RESIZE_IMG_W = 320;
const RESIZE_IMG_H = 240;
/**
 * Services for app web
 */
class UserService extends BaseService_1.default {
    constructor() {
        super();
        // uploadPhoto = async ( req : Request, res : Response ) => {
        //     try{
        //         let user = req.payload.data;
        //         var file = req.files.photo;
        //         //Validate if extension photo is allowed
        //         await this.validatorFiles.validatePhoto(file);
        //         //Name of file photo
        //         var nameFile = this.generalHelper.getStringDate()+"_photoProfile."+this.fileHelper.getExtensionOfMimeType(file.mimetype);
        //         //Resize Image User
        //         var nameFileResize = this.generalHelper.getStringDate()+"_photoProfile_"+RESIZE_IMG_W+"x"+RESIZE_IMG_H+"."+this.fileHelper.getExtensionOfMimeType(file.mimetype);
        //         this.sharp(file.data)
        //         .resize(RESIZE_IMG_W, RESIZE_IMG_H)
        //         .toFile(this.pathPhotoProfile+nameFileResize, (err, info)=>{});
        //         //Move file to storage
        //         file.mv(this.pathPhotoProfile+nameFile);
        //         //Get user (Update last image)
        //         user = await this.userController.getUser(user.iduser);
        //         var oldPhotoPath = user.image;
        //         //Update photo of user
        //         this.userController.updatePhoto(user.iduser, nameFile);
        //         //Delete old photo
        //         if(this.pathPhotoProfile+oldPhotoPath != null){
        //             var filePath = this.pathPhotoProfile+oldPhotoPath;
        //             this.fileHelper.removeFile(filePath);
        //             this.fileHelper.removeFile(filePath.split(".")[1]+"_"+RESIZE_IMG_W+"x"+RESIZE_IMG_H+"."+filePath.split(".")[2]);
        //         }
        //         return res.status(200).json({"ok":JSON.parse(process.env.success).profile_photo_uploaded, "photo": nameFile, "photoResized": nameFileResize});
        //     }
        //     catch(err){
        //         this.logger.error("setTags@AdventureService "+ JSON.stringify(err)+err);
        //         res.status(500).json({
        //             status: this.errors.error,
        //             message : this.errors.internal_server_error,
        //             response : err
        //         });
        //     }
        // }
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.userController.getUsers();
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
        this.getProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.userController.getUserSerialized(req.params.iduser);
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
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.userController.getUser(req.params.iduser);
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
        this.getCards = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cardController.getCardByUser(req.params.iduser);
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
        this.getBankAccounts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.bankAccountontroller.getBankAccountByUser(Number(req.params.iduser));
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
        this.getAdventures = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.getAdventureByUser(req.params.iduser, Number(req.query.page) || 0);
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
        this.getAdventureByUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.adventureController.getAdventureByUser(req.params.iduser, Number(req.query.page) || 0);
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
        this.getUsersBySearch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.userController.getUserBySearch(req.body.word, Number(req.query.page) || 0);
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
        // this.sharp = sharp;
        this.pathPhotoProfile = "./public/uploads/imagesprofiles/";
        this.userController = new UserController_1.default;
        this.cardController = new CardController_1.default;
        this.bankAccountontroller = new BankAccountController_1.default;
        this.adventureController = new AdventureController_1.default;
    }
}
exports.default = UserService;
