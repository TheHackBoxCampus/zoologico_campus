import passport from "passport";
import { Strategy as bearer} from "passport-http-bearer";
import jwt from "jsonwebtoken"
import enviroments from "../env/env.js";

passport.use(new bearer(
    function(token, done) { 
        jwt.verify(token, enviroments.KEY, (err, decoded) => {
            err ? done(err) : done(false, decoded, {scope: "*"})
        })
    }
))

export default passport;
