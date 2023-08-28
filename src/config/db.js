import { MongoClient } from "mongodb";
import  enviroments from './../env/env.js'; 

export const conx = async ()=>{
    try {
        let credentials = JSON.parse(enviroments.USER_DB);
        let url = `mongodb+srv://${credentials.username}:${credentials.password}@zoologico.46l4jxu.mongodb.net/${credentials.database}`;

        let option = {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
        let conxi = await MongoClient.connect(url, option);
        console.log("se a conectado");
        return conxi.db();
    } catch (error) {
        console.log("error", error);
    }
}