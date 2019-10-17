var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(cors());

var MongoClient = require('mongodb').MongoClient;

app.get('/test', function (req, res, next) {
    MongoClient.connect(process.env.DB, function (err, db) {

        if(err) throw err;
        
        try {
            var data = []
            db.db(process.env.DB_name).collection('test').find().toArray(function(err, docs) {
                docs.forEach(function(doc) {
                    data.push(doc.test);
                })
                res.json(data);
            })
        } catch(e) {
            console.log(e);
            res.status(500).send('Something broke!');
        }
        
    });
})

app.post('/test', function(req, res, next) {
    // Connect to the db
    MongoClient.connect(process.env.DB, function (err, db) {

        if(err) throw err;

        try {
            db.db(process.env.DB_name).collection("test").insertOne({ test: "hola" },
                res.json('data added succesfully'));
        } catch(e) {
            console.log("INSERT ERROR");
            res.status(500).send('Something broke!');
        }
    });
})

app.delete('/test', function(req, res, next) {
    MongoClient.connect(process.env.DB, function (err, db) {
        
        if(err) throw err;

        try {
            db.db(process.env.DB_name).collection("test").findOneAndDelete({ test: "hola" },
                res.json('data deleted succesfully'));
        } catch(e) {
            console.log("DELETE ERROR");
            res.status(500).send('Something broke!');
        }
    });
})
   

app.listen(port);

console.log('RESTful API server started on: ' + port);