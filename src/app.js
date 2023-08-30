import express from "express"; 
import passport from "passport";

import Router_animal from "./routers/[animal].js";
import Router_specie from "./routers/[specie].js";
import Router_alimento from "./routers/[alimentacion].js";
import Router_login from "./routers/[login].js";

const app = express(); 

/**
 * !Basic middlewares
 */

app.use(express.json()); 
app.use(express.text());
app.use(passport.initialize());

/**
 * ! Routers
 */

app.use(Router_animal); 
app.use(Router_specie); 
app.use(Router_alimento);
app.use(Router_login);

export default app;