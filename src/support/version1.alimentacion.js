import {
    getAlimentacionAll
} from "../controllers/v1/alimentacion.controller.js";

let getAlimentacionVersions = {
    "1.0.0": getAlimentacionAll, 
}


export{ 
    getAlimentacionVersions,
}
