import { Request, Response } from "express";
import BaseService from "./BaseService";
import BookController from "../controllers/BookController";



class BookService extends BaseService {
    BookController: any;

    constructor() {
        super();
        this.BookController = new BookController;
    }

    getBooks = async ( req : Request, res : Response ) => {
        try {
            const { page } = req.query;
            const response = await this.BookController.getBooks( page || 0 );
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        } catch (err : any) {
            this.logger.error("setTags@BookService "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    createBook = async ( req : Request, res : Response ) => {
        try{            
            const response = await this.BookController.createBook( req.body );
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            this.logger.error("setTags@BookService "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    getBook = async ( req : Request, res : Response ) => {
        try{
            const response = await this.BookController.getBook(req.params.bookId || 0);
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            this.logger.error("setTags@BookService "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    async updateBook( req : Request, res : Response ){
        try{
            const response = await this.BookController.updateBook({ ...req.body });
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            this.logger.error("setTags@BookService "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }

    async deleteBook( req : Request, res : Response ){
        try{
            const response = await this.BookController.deleteBook(req.params.idBook);
            res.status(200).json({
                status: this.success.success,
                message : this.success.message,
                response
            })
        }
        catch(err){
            this.logger.error("setTags@BookService "+ JSON.stringify(err)+err);
            res.status(500).json({
                status: this.errors.error,
                message : this.errors.internal_server_error,
                response : err
            });
        }
    }
}

export default BookService;