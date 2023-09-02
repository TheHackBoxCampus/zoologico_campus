import { validationResult } from "express-validator";

const ValidaBody = (req,res, next)=>{
    let error = validationResult(req);
    if (error.isEmpty()) {
        console.log("pasa la validacion de datos");
        next();
    }else{
        res.status(500).send({status:500,message:error})
    }
}


export default ValidaBody;