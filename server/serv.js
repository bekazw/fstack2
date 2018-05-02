const express = require('express');
const path = require("path");

let app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", 'ejs');

let handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});

//app.engine('handlebars', handlebars.engine);
//app.set('view engine','handlebars')

app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !=='production'&&
        req.query.test === '1';
    next();
});

app.use("/", (req, res) => {
    res.render("index", {
        message  : "xXX"
    })
});

app.listen(1000, ()=>{});