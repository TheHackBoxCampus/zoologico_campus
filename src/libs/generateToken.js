import jwt from "jsonwebtoken";
import enviroments from "../env/env.js";
import { conx } from "../config/db.js";

const generateToken = async (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, enviroments.KEY, {algorithm: "HS256"}, (err, token) => {
            err ? reject(err) : resolve(token)
        })
    })
}

export {
    generateToken
}
