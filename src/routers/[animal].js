import { Router } from "express";
import limit from "../limits/setting.limit.js";
import routesVersioning from "express-routes-versioning";
import { validateToken } from "../middlewares/validateToken.js";
/**
 * ! Versions controllers
 */
import {
  getAnimalsVersions,
  getAnimalSpecficVersions,
  getAnimalForSpecieVersions,
  getCountForSpecieVersions,
} from "../support/version1.animal.js";

/**
 * ! Definitions of Router
 */

const Router_animal = Router();
const version = routesVersioning();

/**
 * ! Routers
 */

Router_animal.get("/animales", limit, validateToken, version(getAnimalsVersions));
Router_animal.get("/animales/:id", limit, validateToken, version(getAnimalSpecficVersions));
Router_animal.get("/animal", limit, validateToken, version(getAnimalForSpecieVersions));
Router_animal.get("/cantidad/especie",limit, validateToken, version(getCountForSpecieVersions));

export default Router_animal;
