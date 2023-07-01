import { Router } from "express";
import ModelValidator from "../middlewares/modelValidator";
import BookService from "../services/bookService";

const bookRoutes = Router();
const bookValidator = new ModelValidator();
const bookService = new BookService();

bookRoutes.get('/getAll', bookService.getBooks);
bookRoutes.post('/create', bookValidator.book, bookService.createBook);
bookRoutes.put('/update', bookService.updateBook );
bookRoutes.delete('/:bookId', bookService.deleteBook );
bookRoutes.get('/:bookId', bookService.getBook );

export default bookRoutes;