import passport from "../passport/setting.passport.js";

const validateToken = async (req, res, next) => {
    passport.authenticate("bearer", {session: false}, (err, decoded) => {
        if(!decoded) return res.status(403).send({status: 401, message: "Autenticacion invalida"})
        else {
            let permissions = decoded; 
            let method = (req.method).toLowerCase(); 
            let validate = permissions.permisos.permisos.filter(prop => prop == method)
            if(validate.length < 1) return res.status(403).send({status: 403, message: "Ops!, hubo un problema con la autenticacion"})
            return next(); 
        }
    })(req, res, next)
}

export {
    validateToken
}