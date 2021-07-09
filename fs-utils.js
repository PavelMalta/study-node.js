const fs = require("fs");

readJsonFromFile = (filePath) => {
    let promise = new Promise( (resolve, reject) => {
        fs.readFile(filePath, function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        })
    })
    return promise
}

writeJsonToFile = (filePath, data) => {
    let promise = new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) reject(err);
            resolve();
        })
    })
    return promise
}

exports.readJsonFromFile = readJsonFromFile;
exports.writeJsonToFile = writeJsonToFile;