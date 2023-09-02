import { body } from "express-validator";

const dtoAnimales  = [
    body("id_animal")
        .notEmpty().withMessage('El id_animal debe estar presente')
        .isNumeric().withMessage("El campos id Animal debe ser entero"),

    body("tipo_alimento")
        .notEmpty().withMessage("El campo tipo_alimento debe estar definido")
        .isString().withMessage("El campo debe ser string")
        .escape(),

    body("hora_alimentacion").notEmpty().withMessage("el campo de la hora de la alimentacion debe estar definido")
        .isString().withMessage("El campo hora alimentacion debe ser string")
        .escape(),

    body("cantidad")
        .notEmpty().withMessage("El campo de la cantidad debe estar definido")
        .isNumeric().withMessage("El campo cantidad debe ser numerico")



]



export default dtoAnimales;
