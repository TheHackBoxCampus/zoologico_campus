import { conx } from "../config/db.js";


const aumentaId = async(coleccionPara, id)=>{
        const db = await conx();
        const coleccion = db.collection(coleccionPara) ;
        let categoria = await coleccion.find().sort({ [id]: -1 }).toArray();
        if (categoria.length < 1) return 1;
        let lastNumber = categoria[0][id];
        return lastNumber + 1;
}

export default aumentaId;


