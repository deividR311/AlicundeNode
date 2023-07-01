import dataBase from '../config/database.js';

class BaseController {
    sequelize: any;

    constructor(){
        this.sequelize = dataBase;
    }
}

export default BaseController;
