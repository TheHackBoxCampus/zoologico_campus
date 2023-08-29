import express from "express"; 
import Router_animal from "./routers/[animal].js";
import Router_specie from "./routers/[specie].js";

const app = express(); 

/**
 * !Basic middlewares
 */

app.use(express.json()); 
app.use(express.text());


/**
 * ! Routers
 */

app.use(Router_animal); 
app.use(Router_specie); 

export default app