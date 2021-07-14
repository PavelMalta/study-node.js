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
    res.send(users)
})
router.post('/', async (req, res) => {
    let result = await addUser("Andrey")
    res.send({success: true})
})

module.exports = router;