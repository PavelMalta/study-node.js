let {addUser, getUsers} = require('./repository');

exports.usersController = async (req, res) => {
    if (req.method === "POST") {
        addUser("Andrey")
        res.write(JSON.stringify({success: true}));
        res.end();
    } else {
        let users = await getUsers()
            res.write(users);
            res.end();
    }
}