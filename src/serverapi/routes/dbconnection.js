const express = require('express');
let app = express();

const mongodb = require("mongodb");
let ObjectID = mongodb.ObjectID;
// The database variable
var database;

const LOCAL_DATABASE = "mongodb://localhost:27017/app";
// Local port.
const LOCAL_PORT = 8080;

function establishConnection(){
    // Init the server
    mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, function (error, client) {

            // Check if there are any problems with the connection to MongoDB database.
            if (error) {
                console.log(error);
                process.exit(1);
            }

            // Save database object from the callback for reuse.
            database = client.db("app");
            console.log("Database connection done.");

            // Initialize the app.
            var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
                var port = server.address().port;
                console.log("App now running on port", port);
            });
        });
}

function getDatabase(){
    return database;
}

module.exports = {
    establishConnection: establishConnection,
    getDatabase: getDatabase,
}