const {addUser, getUsers} = require('./repository');
const express = require('express');
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tractors', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


//created app
const app = express()

const port = 7542

// configured app
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', users)

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