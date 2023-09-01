import { body } from "express-validator";

const validateIdFromUser = [
    body("id")
        .notEmpty().withMessage("Parametro id necesario!")
        .isInt().withMessage("tipo de dato incorrecto!")
]

export {
    validateIdFromUser
}   