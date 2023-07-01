import { Router } from "express";
import ModelValidator from "../middlewares/modelValidator";
import AuthorService from "../services/authorService";

const authorRoutes = Router();
const authorValidator = new ModelValidator();
const authorService = new AuthorService();

authorRoutes.get('/getAll', authorService.getAuthors);
authorRoutes.post('/create', authorService.createAuthor);
authorRoutes.put('/update', authorService.updateAuthor );
authorRoutes.delete('/:authorId', authorService.deleteAuthor );
authorRoutes.get('/:authorId', authorService.getAuthor );

export default authorRoutes;