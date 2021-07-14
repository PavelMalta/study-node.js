const {addUser, getUsers} = require('./repository');
const express = require('express');
const users = require('./users-router')

//created app
const app = express()

const port = 7542

// configured app

app.use('/users', users);


app.get('/tasks', (req, res) => {
    res.send('Tasks')
})

// added middleware
app.use((req, res) => {
    res.send(404)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//nodemon ./index.js localhost 7542