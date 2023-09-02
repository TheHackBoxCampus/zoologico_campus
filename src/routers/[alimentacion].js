// ? importamos la librerias necesarias
import { Router } from "express";
import limit from "../limits/setting.limit.js";
import routesVersioning from "express-routes-versioning";
import { validateToken } from "../middlewares/validateToken.js";
import { body } from "express-validator";
import dtoAnimales from "../storage/[DTO].alimento.js";
import ValidaBody from "../middlewares/auth.alimentacion.js";
import {
    getAlimentacionVersions,
    getAlimentacionSpecificVercions,
    getAlimentacionAnimalVercion,
    PostAlimantacionVercion
} 
from "../support/version1.alimentacion.js";

const router_alimento = Router();
const version = routesVersioning();

/* 
    ^ Endpoinds de alimentacion
*/

router_alimento.get('/alimentacion',limit, version(getAlimentacionVersions));
router_alimento.get('/alimentacion/:id_alimentacion', limit, validateToken, version(getAlimentacionSpecificVercions));
router_alimento.get('/alimentacion/animal/:nombre_animal', limit, validateToken, version(getAlimentacionAnimalVercion   ));
router_alimento.post('/alimentacion/insertar', limit, dtoAnimales, ValidaBody ,validateToken, version(PostAlimantacionVercion));

export default router_alimento;


