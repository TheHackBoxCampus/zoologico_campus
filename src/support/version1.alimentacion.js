import {
    getAlimentacionAll,
    getAlimentoSpacific,
    getAlimentacionAnimal,
    PostAlimentacion
} from "../controllers/v1/alimentacion.controller.js";

let getAlimentacionVersions = {
    "1.0.0": getAlimentacionAll, 
}
let getAlimentacionSpecificVercions = {
    "1.0.0":getAlimentoSpacific,
}
let getAlimentacionAnimalVercion = {
    "1.0.0.":getAlimentacionAnimal
}

let PostAlimantacionVercion = {
    "1.0.0":PostAlimentacion
}


export{ 
    getAlimentacionVersions,
    getAlimentacionSpecificVercions,
    getAlimentacionAnimalVercion,
    PostAlimantacionVercion
}
