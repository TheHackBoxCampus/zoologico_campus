// ? importamos la librerias necesarias
import { Router } from "express";
import limit from "../limits/setting.limit.js";
import routesVersioning from "express-routes-versioning";
import {
    getAlimentacionVersions 

} 
from "../support/version1.alimentacion.js";

const router_alimento = Router();
const version = routesVersioning();

/* 
    ^ Endpoinds de alimentacion
*/

router_alimento.get('/alimentacion', limit,version(getAlimentacionVersions));


export default router_alimento;


