const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () =>{
    console.log(`Serveur lancé sur le port http://localhost:${port}`);
})

app.get('/', (req, res)=>{
    
    console.log("Hey, le projet tourne !");
    res.send("Holaaa les gens !");
})

app.get('/health', (req, res) =>{
    console.log("API OK");
    res.json({status: "OK"});
})