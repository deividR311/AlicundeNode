import errors from '../config/errors';
import getLogger from '../config/Logger';
import success from '../config/success';

class BaseService{
    logger: any;
    success: typeof success;
    errors: typeof errors;

    constructor(){
        this.logger = getLogger();
        this.success = success;
        this.errors = errors;
    }
}

export default BaseService;
