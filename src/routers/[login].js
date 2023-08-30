import { Router } from "express";
import { loginVersions } from "../support/version1.auth.js";
import routesVersioning from "express-routes-versioning";
import limit from "../limits/setting.limit.js";

const Router_login = Router(); 
const version = routesVersioning(); 

Router_login.get("/login", limit, version(loginVersions))

export default Router_login; 


