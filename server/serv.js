const express = require('express');
const path = require("path");

let app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", 'ejs');

app.use(express.static(__dirname+'/public'));

app.use("/", (req, res) => {
    res.render("index", {
        message  : "xXX"
    })
});

app.listen(1000, ()=>{});