import { conx } from "../../config/db.js";

export const getRelationsForSpecieAndSubSpecie = async (req, res) => {
    try {
        let db = await conx(); 
        let specie = await db.collection("especie");
        let relations = await specie.aggregate([
            {
                $lookup: {
                  from: "subespecie",
                  localField: "id_especie",
                  foreignField: "id_especie",
                  as: "subespecies_relacionadas",
                },
              },
              {
                $project: {
                  _id: 0,
                  nombre_especie: 1,
                  descripcion_especie: 1,
                  clasificacion: 1,
                  subespecies_relacionadas: 1,
                },
              },
        ]).toArray();
        return res.status(200).send(relations)
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}