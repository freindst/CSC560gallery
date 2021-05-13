const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const db = require('./routes/dbconnection');
db.establishConnection();

let photos = require('./routes/photos');
let files = require('./routes/files');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/photos', photos);
app.use('/api/v1/files', files);

module.exports = app;
