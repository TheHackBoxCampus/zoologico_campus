import { rateLimit } from "express-rate-limit";

const limit = rateLimit({
    windowMs: 30 * 1000,
    max: 5,
    legacyHeaders: true,
    standardHeaders: true,
    message: (req, res) => {
        res.status(429).send({status: 429, message: "Limite de peticiones alcanzada"})
    }
})

export default limit