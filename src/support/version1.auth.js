import { login } from "../controllers/v1/auth.controller.js";

const loginVersions = {
    "1.0.0": login
}

export {
    loginVersions
}

