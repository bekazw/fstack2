const express = require("express");
const path = require("path");
const fs = require('fs');

let app = express();
let allowedBase = JSON.parse(fs.readFileSync('./public/base/aut.json', 'utf8'));
let heroes = JSON.parse(fs.readFileSync('./public/base/gameDat.json' , "utf8"));

app.use(express.static(__dirname+'/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/auth/:login/:pass", (req, res) => {    
    if((allowedBase[""+req.params.login] !== undefined) &&
         (allowedBase[""+req.params.login]["pass"] ===  req.params.pass)) {        
                res.send(heroes[""+allowedBase[""+req.params.pass]["id"]]);
    }
    else {
        res.send("404");
    }    
});

app.listen(1000, ()=>{})