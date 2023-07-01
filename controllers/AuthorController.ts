import BaseController from './BaseController';
import AuthorType from '../types/AuthorType';
import Author from '../models/Autor';

class AuthorController extends BaseController {
    
    constructor(){
        super();
    }

    getAuthor = async ( authorId : number ) => {
        try{
            let author = await Author.findByPk(authorId);
            return author;
        }
        catch(err){
            throw err;
        }
    }

    getAuthors = async ( page : number ) => {
        try{
            let authors = await Author.findAll({ offset: (10*page), limit: 10 });
            return authors;
        }
        catch(err){
            throw err;
        }
    }

    createAuthor = async ( author : AuthorType ) => {
        try{
            let response = await Author.create({ ...author });
            return response;
        }
        catch(err) {
            throw err;
        }
    }

    deleteAuthor = async ( authorId : number ) => {
        try{
            const response = await Author.destroy({ where: { authorId } });
            return response;
        }
        catch(err){
            throw err;
        }
    }

    updateAuthor = async ( author : AuthorType ) => {
        try{
            await Author.update({ ...author },{where : { id : author.id }})
            let response = await this.getAuthor(author.id);

            return response;
        }
        catch(err){
            throw err;
        }
    }
}

export default AuthorController;