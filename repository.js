const fs = require("fs");

let users = [
    {"id": 1, "name": "Sasha"},
    {"id": 2, "name": "Pasha"},
    {"id": 3, "name": "Kakasha"}
];

const getUsers = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("users.json", function (err, buf) {
            resolve(buf.toString())
        })
    })
}

const addUser = (name) => {
    users.push({ name: name })
}

exports.getUsers = getUsers;
exports.addUser = addUser;