// use testdb
// db.createCollection('coll')
// db.coll.insert({meal: "lunch", price: 11.99})

var startTime = process.hrtime();

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/yelpdata';

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection('yelpObjectsNYC');

    collection.find({ rating : 5 }).toArray(function(err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            // console.log(docs)
        }
        db.close();
        
        var runTime = process.hrtime(startTime);
        console.log(runTime[1] / 1000000);

    });

}); //MongoClient.connect