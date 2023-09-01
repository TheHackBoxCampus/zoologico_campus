import Express from "express";
import { body } from "express-validator";

const dtoAnimales  = [
    body('id_alimentacion').isNumeric().notEmpty().escape().withMessage('El id_alimentacion debe estar presente y ser numerico'),
]

export default dtoAnimales;
