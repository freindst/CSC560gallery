const util = require('../middleware/util');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var PhotoSchema = new Schema(
    {
        filename: {type: String},
        type: {type: String},
        title: {type: String},
        description: {type: String},
        location: {type: String},
        people: {type: String},
        datetime: {type: String},
        comment: {type: String},
    }
);

PhotoSchema
.virtual('path')
.get(function(){
    return util.uploadFilePath(this.fileName);
});

PhotoSchema
.virtual('isExist')
.get(function(){
    return util.checkExistFile(this.fileName);
})

module.exports = mongoose.model('Photo', PhotoSchema);