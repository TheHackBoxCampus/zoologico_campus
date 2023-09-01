import aumentaId from "../../services/aumentaId.js";
import { conx } from "../../config/db.js";

// * Me retorna todas las alimentaciones del los animales
//*  http://localhost:5000/Alimentacion
const getAlimentacionAll = async (req, res) => {
    try {
        const db = await conx();
        const alimentacion = db.collection('alimentacion');
        let result = await alimentacion.find().sort({ id_alimentacion: -1 }).toArray();
        res.send(result);
    } catch (error) {
        res.sendStatus(500);
        console.log(err);
    }
}


// * Me retorna una alimentacion espesifica pasando 
// * el id_alimentacion por los parametros
// *   http://localhost:5701/Alimentacion/1
const getAlimentoSpacific = async (req, res) => {
    try {
        const db = await conx();
        const alimentacion = db.collection('alimentacion');
        let id = parseInt(req.params.id_alimentacion);
        let result = await alimentacion.find({ id_alimentacion: id }).toArray();
        res.send(result);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

// * Me retorna la alimentacion de la un animal espesifico
// * http://localhost:5701/Alimentacion/animal/leon
const getAlimentacionAnimal = async (req, res) => {
    try {
        const db = await conx();
        const alimentacion = db.collection('alimentacion');
        let NomAnimal = req.params.nombre_animal;
        console.log(NomAnimal);
        let result = await alimentacion.aggregate([
            {
                $lookup: {
                    from: "animal",
                    localField: "id_animal",
                    foreignField: "id_animal",
                    as: "FK_animal"
                }
            },
            {
                $unwind: "$FK_animal"
            },
            {
                $match: { "FK_animal.nombre": NomAnimal }
            },
            {
                $project: {
                    _id: 0,
                    "FK_animal._id": 0
                }
            }
        ]).toArray();
        res.send(result);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

// * Me agrega la alimentaciond e un animal
// * http://localhost:5701/Alimentacion/insertar
/* 
* Ejemplo de data a enviar
{
    "id_animal": 2,
    "tipo_alimento": "carne Fria",
    "hora_alimentacion": "08:31 am",
    "cantidad": 3
}
*/
const PostAlimentacion = async (req, res) => {
    try {
        const db = await conx();
        const alimentacion = db.collection('alimentacion');
        let datos = req.body;
        let dataInsert = {
            id_alimentacion: await aumentaId("alimentacion", "id_alimentacion"),
            id_animal: datos.id_animal,
            tipo_alimento: datos.tipo_alimento,
            hora_alimentacion: datos.hora_alimentacion,
            cantidad: datos.cantidad
        }
        let result = await alimentacion.insertOne(dataInsert)
        if (!result.insertedId) throw { status: 500, message: "Error en el ingreso de data" };
        res.status(200).send({ status: 200, message: "Se inserto correctamente" });
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}


export {
    getAlimentoSpacific,
    getAlimentacionAll,
    getAlimentacionAnimal,
    PostAlimentacion
}

