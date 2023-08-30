import { conx } from "../../config/db.js";
import { generateToken } from "../../libs/generateToken.js";

const verifyid = async (user) => {
    try {
        let db = await conx(); 
        let usersCollection = await db.collection("usuario"); 
        let userIsMatch = await usersCollection.findOne({id_usuario: user.id})
        if(!userIsMatch) return false
        
        let rols = await usersCollection.aggregate([
               {
                $lookup: {
                    from: "rol",
                    localField: "id_rol",
                    foreignField: "id_rol",
                    as: "permisos"
                }
            },
            {
                $unwind: "$permisos"
            },
            {
                $match: {
                    id_usuario: userIsMatch.id_usuario
                }
            },
            {
                $project: {
                    _id: 0,
                    id_usuario: 1,
                    permisos: {nombre_rol: 1, permisos: 1}
                }
            }
        ]).toArray();
        
        let token = await generateToken(rols[0]); 
        return {status: 200, token}; 
    }catch(err) {
        console.log(err)
    }
}

const login = async (req, res) => {
    try {
        let user = req.body; 
        let validate = await verifyid(user);

        if(typeof validate == "boolean") return res.status(404).send({status: 404, message: "El usuario que proporciono no existe!"}); 

        return res.send(validate)

    }catch(err) {
        console.log(err)
    }
}

export {
    login
}