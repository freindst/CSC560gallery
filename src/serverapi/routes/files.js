const express = require('express');
const uploadFile = require("../middleware/upload");
const fs = require('fs');
const path = require('path');
const directoryPath = path.resolve('../../uploads')

let router = express.Router();

router.post('/upload', async function(req, res){
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
});

router.get('/list', async function(req, res) {

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: `${directoryPath}/${file}`,
      });
    });

    res.status(200).send(fileInfos);
  });
});

router.get('/download/:name', async function(req, res) {
  const fileName = req.params.name;
  res.download(`${directoryPath}/${fileName}`, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
});

module.exports = router;