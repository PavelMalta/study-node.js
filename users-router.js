let {addUser, getUsers} = require('./repository');

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();                              // что бы не оборвать обработку
});

// define the home page route
router.get('/', async (req, res) => {
    let users = await getUsers()

    if (!!req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search) > -1)
    }
    res.send(users)
})
router.get('/:id', async (req, res) => {
    let userId = req.params.id
    let users = await getUsers()
    let user = users.find(item => item.id == userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})


router.post('/', async (req, res) => {
    let name = req.body.name
    let result = await addUser(name)
    res.send({success: true})
})

module.exports = router;