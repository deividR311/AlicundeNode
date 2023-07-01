import express from "express";
import cors from "cors";

import appRouter from "../routes/routes";
import dataBase from "../config/database";

class Server {
    public app  : express.Application;

    constructor() {
        this.app = express();

        //DATABASE CONNECTION
        this.dataBaseConnection();
        // MIDDLEWARES
        this.middlewares();
        // ROUTES
        this.routes();
    }

    dataBaseConnection() {
        require('../models/Associations');
        dataBase.sync();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        // READ AND CONVERT THE BODY
        this.app.use( express.json() );
    }

    routes() {
        appRouter(this.app);
    }

    start( callback : () => void ) {
        this.app.listen( 3000, callback );
    }
}

export default Server;