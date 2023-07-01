import { Request, Response } from "express";
import { Validator } from "node-input-validator";
import modelErrors from "../config/modelValidatorErrors";

class ModelValidator {

    author = async ( req : Request, res : Response, next: any ) => {
        const { body } = req;
        const validator = new Validator(body, {
            name : 'required'
            }, modelErrors
        );
        return await validator;
    }

    book = async ( req : Request, res : Response, next: any ) => {
        const { body } = req;
        const validator = new Validator(body, {
            title   : 'string|required',
            chapters: 'numeric|required',
            pages   : 'numeric|required'
            }, modelErrors
        );
        return await validator;
    }
}

export default ModelValidator;