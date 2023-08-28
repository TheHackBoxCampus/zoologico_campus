import app from "./app.js";
import enviroments from "./env/env.js";

const server = () => {
    try {
        let $server = JSON.parse(enviroments.SERVER); 
        app.listen($server, () => console.log(`http://${$server.hostname}:${$server.port}`))
    }catch(err) {
        console.log(err)
    }
}

server(); 