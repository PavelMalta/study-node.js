const {addUser, getUsers} = require('./repository');
const express = require('express');

//created app
const app = express()

const port = 7542

// configured app
app.get('/users', async (req, res) => {
    let users = await getUsers()
    res.send(JSON.stringify(users))
})
app.post('/users', async (req, res) => {
    let result = await addUser("Andrey")
    res.send(JSON.stringify({success: true}))
})

app.get('/tasks', (req, res) => {
    res.send('Tasks')
})

// added middleware
app.use((req, res) => {
    res.send("404")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//nodemon ./index.js localhost 7542