var pg = require('pg');

var startTime = process.hrtime();

// create database testdb;
// \connect testdb
// CREATE USER mackenzie SUPERUSER PASSWORD 'pw123';
// CREATE TABLE meals (mealName char(25), cost double precision);
// INSERT INTO meals VALUES ('breakfast', 3.99);

var conString = "postgres://aaron:pw123@localhost/testdb";

var client = new pg.Client(conString);

var client = new pg.Client(conString);
client.connect(function(err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
    client.query("INSERT INTO meals VALUES ('snack', 1000.25);", function(err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        client.end();
    
    var runTime = process.hrtime(startTime);    
    var RT = runTime[1]  / 1000000;
    console.log(RT);

    });
});