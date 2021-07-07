let {addUser, getUsers} = require('./repository');

exports.usersController = (req, res) => {
    if (req.method === "POST") {
        addUser("Andrey")
        res.write(JSON.stringify({success: true}));
        res.end();
    } else {
        getUsers( (users) => {
            res.write(users);
            res.end();
        })
    }
}