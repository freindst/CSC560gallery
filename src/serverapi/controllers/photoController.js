const fs = require('fs');
const multer = require("multer");
const Photo = require('../models/photo');
const uploadFile = require("../middleware/upload");
const db = require('../routes/dbconnection');
const { ObjectID } = require('bson');

exports.photo_detail = function(req, res){
    const id = req.params.id;
    if (id){
        db.getDatabase().collection('photos').findOne({"_id": new ObjectID(id)}, function(err, data){
            if (err) {
                handleError(err, res);
            } else {
                res.status(200).send({
                    photo: data
                });
            }
        });
    } else {
        handleError("Missing id.", res);
    }
}

exports.photo_list = function(req, res){
    db.getDatabase().collection('photos').find({}).toArray(function(err, data){
        if (err) {
            handleError(err, res);
        } else {
            res.status(200).send({
                photos: data
            });
        }
    });
}

exports.photo_create = function(req, res){
    uploadFile(req, res, function(err){
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            handleError('multer error. ' + err, res);
          } else if (err) {
            // An unknown error occurred when uploading.
            handleError(err, res);
          }
          if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
          }
          let model = parsePhoto(req.body);
          model.path = req.file.path;
          db.getDatabase().collection('photos').insertOne(model, function(error, data){
              if (error){
                  handleError(error, res);
              } else {
                  res.send({
                      _id: data.insertedId
                  });
              }
          })
    });
}

exports.photo_update = function(req, res){
    uploadFile(req, res, function(err){
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            handleError('multer error. ' + err, res);
          } else if (err) {
            // An unknown error occurred when uploading.
            handleError(err, res);
          }
          const id = req.body['_id'];
          let model = parsePhoto(req.body);
          if (req.file == undefined) {
            delete model.path;
          } else {
            model.path = req.file.path;
          }
          db.getDatabase().collection('photos').updateOne({'_id': new ObjectID(id)}, {$set: model}, function(error, data){
            if (error){
                handleError(error, res);
            } else {
                res.status(200).send({
                    photo: data
                });
            }
          })
    })
}

exports.photo_delete = function(req, res){
    const id = req.params.id;
    db.getDatabase().collection('photos').findOne({"_id": new ObjectID(id)}, function(err, data){
        if (err){
            handleError(err, res);
        }
        let path = data.path;
        db.getDatabase().collection('photos').deleteOne({"_id": new ObjectID(id)}, function(error){
            if (error){
                handleError(error, res);
            } else {
                fs.unlink(path, function(error1){
                    if (error1) {
                        console.log('Failed to delete the physical file.')
                    }
                })
                res.send({
                    message: "OK"
                });
            }
        })
    })
}

function handleError(err, res, msg, status){
    if (err){
        res.status(status || 500).send({
            message: msg || err
        });
    } else {
        res.status(status || 500).send({
            message: "Unknown server error."
        });
    }
}

function parsePhoto(params){
    var model = {
        filename: '',
        type: '',
        title: '',
        description: '',
        location: '',
        people: '',
        datetime: '',
        comment: '',
        path: ''
      }
    for(let key in params){
        if (model.hasOwnProperty(key)){
            model[key] = params[key];
        }
    }
    return model;
}