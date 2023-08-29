import {
  getAnimalAll,
  getAnimalSpecific,
  getAnimalForSpecie,
  getCountForSpecie,
} from "../controllers/v1/animal.controller.js";

let getAnimalsVersions = {
  "1.0.0": getAnimalAll,
};

let getAnimalSpecficVersions = {
  "1.0.0": getAnimalSpecific,
};

let getAnimalForSpecieVersions = {
  "1.0.0": getAnimalForSpecie,
};

let getCountForSpecieVersions = {
  "1.0.0": getCountForSpecie,
};

export {
  getAnimalsVersions,
  getAnimalSpecficVersions,
  getAnimalForSpecieVersions,
  getCountForSpecieVersions
};
