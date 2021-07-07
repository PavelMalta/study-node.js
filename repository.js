const fs = require("fs");

let users = [
    {"id": 1, "name": "Sasha"},
    {"id": 2, "name": "Pasha"},
    {"id": 3, "name": "Kakasha"}
];

const getUsers = (callback) => {
        fs.readFile("users.json", function (err, buf) {
        callback(buf.toString())
    })
}

const addUser = (name) => {
    users.push({ name: name })
}

exports.getUsers = getUsers;
exports.addUser = addUser;