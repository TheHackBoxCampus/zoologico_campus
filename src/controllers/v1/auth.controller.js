import { conx } from "../../config/db.js";
import { generateToken } from "../../libs/generateToken.js";

const verifyid = async (user) => {
    try {
        let db = await conx(); 
        let employeesCollection = await db.collection("visitante"); 
        let visitorsCollection = await db.collection("")
        let employee = await employeesCollection.findOne({email: user.email})

        if(!employee) {
            
        } 

    }catch(err) {
        console.log(err)
    }
}

const login = async (req, res) => {
    try {
        let user = req.body; 
 

        

    }catch(err) {
        console.log(err)
    }
}