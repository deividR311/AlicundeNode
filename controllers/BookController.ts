import BaseController from './BaseController';
import Book from '../models/Book';
import BookType from '../types/BookType';

class BookController extends BaseController {
    
    constructor(){
        super();
    }

    getBook = async ( bookId : number ) => {
        try{
            let book = await Book.findByPk(bookId);
            return book;
        }
        catch(err){
            throw err;
        }
    }

    getBooks = async ( page : number ) => {
        try{
            let books = await Book.findAll({ offset: (10*page), limit: 10 });
            return books;
        }
        catch(err){
            throw err;
        }
    }

    createBook = async ( book : BookType ) => {
        try{
            let response = await Book.create({ ...book });
            return response;
        }
        catch(err) {
            throw err;
        }
    }

    deleteBook = async ( bookId : number ) => {
        try{
            const response = await Book.destroy({ where: { bookId } });
            return response;
        }
        catch(err){
            throw err;
        }
    }

    updateBook = async ( book : BookType ) => {
        try{
            await Book.update({ ...Book },{where : { bookId : book.bookId }})
            let response = await this.getBook(book.bookId);

            return response;
        }
        catch(err){
            throw err;
        }
    }
}

export default BookController;