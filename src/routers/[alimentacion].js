// ? importamos la librerias necesarias
import { Router } from "express";
import limit from "../limits/setting.limit.js";
import routesVersioning from "express-routes-versioning";
import { validateToken } from "../middlewares/validateToken.js";
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

router_alimento.get('/alimentacion', limit,validateToken, version(getAlimentacionVersions));
router_alimento.get('/alimentacion/:id_alimentacion', limit, validateToken, version(getAlimentacionSpecificVercions));
router_alimento.get('/alimentacion/animal/:nombre_animal', limit, validateToken, version(getAlimentacionAnimalVercion   ));
router_alimento.post('/alimentacion/insertar', limit, validateToken, version(PostAlimantacionVercion));

export default router_alimento;


