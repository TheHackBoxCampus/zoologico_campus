import { validationResult } from "express-validator";

const validateID = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).send({status: 400, message: errors.array()})
    return next(); 
}   

export {
    validateID
}