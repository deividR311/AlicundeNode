import { Request, Response } from "express";
import errors from "../config/errors";
import bookRoutes from "./BookRoutes";
import authorRoutes from "./AuthorRoutes";

const appRouter = ( app : any ) => {
    app.use( '/api/books', bookRoutes );
    app.use( '/api/authors', authorRoutes );

    // ROUTES FAILED
    app.use( ( req : Request, res : Response ) => { res.status(404).json({ 'error': errors.service_not_found }) });
}

export default appRouter;