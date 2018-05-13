let mysql = require('mysql');
let connection = mysql.createConnection({
    host : 'localhost',
    user : '',
    password : ''
});

connection.connect();

connection.query('SELECT * AS sol', (err, rows, fields) => {
    if (err) throw err;
    console.log(row[0].sol)
});

connection.end();