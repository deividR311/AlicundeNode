import { Request, Response } from "express";
import BaseService from "./BaseService";
import AuthorController from "../controllers/AuthorController";



class AuthorService extends BaseService {
    AuthorController: any;

    constructor() {
        super();
        this.AuthorController = new AuthorController;
    }

    getAuthors = async ( req : Request, res : Response ) => {
        try {
            const { page } = req.query;
            const response = await this.AuthorController.getAuthors( page || 0 );
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        } catch (err : any) {
            this.logger.error("setTags@Authorservice "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    createAuthor = async ( req : Request, res : Response ) => {
        try{
            console.log('entro');
                   
            const response = await this.AuthorController.createAuthor( req.body );
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            this.logger.error("setTags@Authorservice "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    getAuthor = async ( req : Request, res : Response ) => {
        try{
            const response = await this.AuthorController.getAuthor(req.params.authorId || 0);
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            this.logger.error("setTags@Authorservice "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    async updateAuthor( req : Request, res : Response ){
        try{
            const response = await this.AuthorController.updateAuthor({ ...req.body });
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    async deleteAuthor( req : Request, res : Response ){
        try{
            const response = await this.AuthorController.deleteAuthor(req.params.idAuthor);
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            this.logger.error("setTags@Authorservice "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }
}

export default AuthorService;