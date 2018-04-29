const express = require("express");
let jsondata;

const fs = require("fs");

const app = express();

app.use("/:log", (req, res) => {
    let content = fs.readFileSync("auth_sample.json");
    let log = req.params.log.split('*')[0];
    let pass = req.params.log.split('*')[1];
    if((JSON.parse(content)[log])) {
        res.end(JSON.parse(content)[log]["pass"]);
    }
    else {
        res.end('No user')
    }    
    console.log("Server on");
})



app.listen(1000, ()=>{})