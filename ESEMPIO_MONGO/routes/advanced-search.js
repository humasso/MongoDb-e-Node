var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Humasso:H1humass@mongodb.ax2db.mongodb.net/MongoDB?retryWrites=true&w=majority'

router.get('/actors/:attori', function (req, res, next) {
    attori = req.params.attori;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(getAttori);
    function getAttori(err) {

        if (err) console.log(err.message);
        else {
            const collection = client.db("sample_mflix").collection("movies");
            collection.find({ 'cast': `${attori}` }).toArray(sendResults)
        }
    }
    function sendResults (err, result) {
        if (err) console.log(err.message);
            else res.send(result)
            client.close();
    }
});



router.get('/length_year/:length/:year', function (req, res, next) {
    let length = parseInt(req.params.length);
    let year = parseInt(req.params.year);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies");
        collection.find({ 'runtime': length }, {'year' : year}).toArray((err, result) => {
            if (err) console.log(err.message);
            else res.send(result)
            client.close();
        });
    });
});

module.exports = router;
