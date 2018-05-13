let client = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:12345/base', (err, db)=> {
    if (err) throw err;
    db.collection('baseRow').find().toArray((err, res)=> {
        if (err) throw err;
        console.log(res);
    });
});