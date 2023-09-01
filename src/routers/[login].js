import { Router } from "express";

/* !DTO */
import { validateIdFromUser } from "../storage/[DTO].auth.js";
import { validateID } from "../middlewares/auth.md.js";

/* VERSIONS */
import { loginVersions } from "../support/version1.auth.js";
import routesVersioning from "express-routes-versioning";
import limit from "../limits/setting.limit.js";

const Router_login = Router(); 
const version = routesVersioning(); 

Router_login.get("/login", limit, validateIdFromUser, validateID, version(loginVersions))

export default Router_login; 


