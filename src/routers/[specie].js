import {Router} from "express";
import limit from "../limits/setting.limit.js"
import routesVersioning from "express-routes-versioning";
import { validateToken } from "../middlewares/validateToken.js";
/**
 * ! Versions controllers
 */

import { getRelationsForSpecieAndSubSpecieVersions } from "../support/version1.specie.js";

/**
 * ! Definitions of Router
 */

const Router_specie = Router();
const version = routesVersioning();

/**
 * ! Routers
 */

Router_specie.get("/especies", limit, validateToken, version(getRelationsForSpecieAndSubSpecieVersions))

export default Router_specie; 