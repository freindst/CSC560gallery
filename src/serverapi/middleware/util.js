const fs = require('fs');

const path = require('path');
const directoryPath = path.resolve('../../uploads');
function checkExistFile(fileName){
    return (checkExistPath(fileName));
}

function checkExistPath(absPath){
    try {
        if (fs.existsSync(absPath)) {
            return true;
        }
    } catch(err) {
        return false;
    }
}

function uploadFilePath(fileName){
    return `${directoryPath}/${fileName}`;
}

module.exports = {
    checkExistFile: checkExistFile,
    checkExistPath: checkExistPath,
    uploadFilePath: uploadFilePath,
}