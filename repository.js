const fs = require("fs");

const getUsers = () => {
    let promise = new Promise( (resolve, reject) => {
        fs.readFile("users.json", function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        })
    })
    return promise
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({ name: name })

    return new Promise( (res, rej) => {
        fs.writeFile("users.json", JSON.stringify(users), (err) => {
            if (err) rej();
            res();
        })
    })
}

exports.getUsers = getUsers;
exports.addUser = addUser;