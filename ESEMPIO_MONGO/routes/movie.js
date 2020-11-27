var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;


router.get('/', function (req, res, next) {
    const uri = 'mongodb+srv://Humasso:H1humass@mongodb.ax2db.mongodb.net/MongoDB?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies");
        collection.find().limit(15).toArray((err, result) => {
            if (err) console.log(err.message);
            else res.send(result)
            client.close();
        });
    });

});

module.exports = router;

router.get('/movie_from_title/:title', function (req, res, next) {
    console.log(req.params);
    title = req.params.title;
    const uri = 'mongodb+srv://Humasso:H1humass@mongodb.ax2db.mongodb.net/MongoDB?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies");
        collection.find({ 'title': `${title}` }).toArray((err, result) => {
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        });
    });
});

router.get('/list/:num', function (req, res, next) {
    console.log(req.params);
    let num = parseInt(req.params.num);
    const uri = 'mongodb+srv://Humasso:H1humass@mongodb.ax2db.mongodb.net/MongoDB?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies");
        collection.find().limit(num).toArray((err, result) => {
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        });
    });
});

router.get('/year/:year', function (req, res, next) {
    console.log(req.params);
    let year = parseInt(req.params.year);
    const uri = 'mongodb+srv://Humasso:H1humass@mongodb.ax2db.mongodb.net/MongoDB?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies");
        collection.find({'year': year}).toArray((err, result) => {
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        });
    });
});

router.get('/metacritic/:num', function (req, res, next) {
    console.log(req.params);
    let num = parseInt(req.params.num);
    const uri = 'mongodb+srv://Humasso:H1humass@mongodb.ax2db.mongodb.net/MongoDB?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies");
        collection.find({'metacritic': num}).toArray((err, result) => {
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        });
    });
});

