let {addUser, getUsers} = require('./repository');

exports.usersController = (req, res) => {
    if (req.method === "POST") {
        addUser("Andrey")
        res.write(JSON.stringify({success: true}));
    } else {
        res.write(JSON.stringify(getUsers()));
    }
}