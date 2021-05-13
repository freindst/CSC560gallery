const multer = require("multer");
const maxSize = 15 * 1024 * 1024;
const path = require('path');
const directoryPath = path.resolve('../../uploads')

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, directoryPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

module.exports = uploadFile;