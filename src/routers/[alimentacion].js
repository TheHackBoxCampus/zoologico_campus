// ? importamos la librerias necesarias
import { Router } from "express";
import limit from "../limits/setting.limit.js";
import routesVersioning from "express-routes-versioning";
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

router_alimento.get('/alimentacion', limit,version(getAlimentacionVersions));
router_alimento.get('/alimentacion/:id_alimentacion', limit,version(getAlimentacionSpecificVercions));
router_alimento.get('/alimentacion/animal/:nombre_animal', limit,version(getAlimentacionAnimalVercion   ));
router_alimento.post('/alimentacion/insertar', limit, version(PostAlimantacionVercion));



export default router_alimento;


