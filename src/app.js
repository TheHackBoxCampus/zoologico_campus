import express from "express"; 

const app = express(); 

/**
 * !Basic middlewares
 */

app.use(express.json()); 
app.use(express.text());


export default app