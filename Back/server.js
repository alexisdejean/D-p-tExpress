require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./db/config");
const app = express();

const port = process.env.PORT || 3000;



app.get('/', (req, res)=>{
    
    console.log("Hey, le projet tourne !");
    res.send("Holaaa les gens !");
})

app.get('/health', (req, res) =>{
    console.log("API OK");
    res.json({status: "OK"});
})

app.listen(port, "0.0.0.0", () =>{
    console.log(`Serveur lancé sur le port http://localhost:${port}`);
})