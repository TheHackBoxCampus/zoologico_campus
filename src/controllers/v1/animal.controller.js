import { conx } from "../../config/db.js";

/**
 * @getAnimalAll => get all the animals registered in the database with their species
 * @getAnimalSpecific => Obtain specific animals
 */

export const getAnimalAll = async (req, res) => {
  try {
    let db = await conx();
    let collection = await db.collection("animal");
    let animals = await collection.find().toArray();
    return res.status(200).send(animals);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

export const getAnimalSpecific = async (req, res) => {
  try {
    let db = await conx();
    let collection = await db.collection("animal");
    let id = req.params.id;
    let animal = await collection.find({ id_animal: parseInt(id) }).toArray();

    if (!animal)
      return res
        .status(404)
        .send({ status: 404, message: "Animal no encontrado!" });

    return res.status(200).send(animal);
  } catch (error) {
    res.sendStatus(500);
    console.log(err);
  }
};

export const getAnimalForSpecie = async (req, res) => {
  try {
    let db = await conx();
    let collection = await db.collection("animal");
    let specie = req.query.specie;

    if (!specie) {
        return res.status(400).json({ status: 400, message: 'Especie no proporcionada'});
      }

    console.log(specie);

    let animalsForSpecie = await collection
      .aggregate([
        {
          $lookup: {
            from: "subespecie",
            localField: "id_subespecie",
            foreignField: "id_subespecie",
            as: "subespecie",
          },
        },
        {
          $unwind: "$subespecie",
        },
        {
          $lookup: {
            from: "especie",
            localField: "subespecie.id_especie",
            foreignField: "id_especie",
            as: "especie",
          },
        },
        {
          $unwind: "$especie",
        },
        {
          $match: {
            "especie.nombre_especie": specie,
          },
        },
        {
          $project: {
            _id: 0,
            nombre: 1,
            especie: { nombre_especie: 1},
          },
        },
      ])
      .toArray();
    res.status(200).send(animalsForSpecie);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};


export const getCountForSpecie = async (req, res) => {
    try {
        let db = await conx(); 
        let animal = await db.collection("animal");
        let amount = await animal
        .aggregate([
          {
            $lookup: {
              from: "subespecie",
              localField: "id_subespecie",
              foreignField: "id_subespecie",
              as: "subespecie",
            },
          },
          {
            $unwind: "$subespecie",
          },
          {
            $lookup: {
              from: "especie",
              localField: "subespecie.id_especie",
              foreignField: "id_especie",
              as: "especie",
            },
          },
          {
            $unwind: "$especie",
          },
          {
            $group: {
              _id: "especie.nombre_especie",
              nombre_especie: { $first: "$especie.nombre_especie" },
              cantidad: {$sum: 1}
            },
          },
          {
            $project: {
              _id: 0,
              especie: "$nombre_especie",
              cantidad: 1
            },
          },
        ])
        .toArray();

        return res.status(200).send(amount); 
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
