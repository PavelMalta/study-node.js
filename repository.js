const fs = require("fs");
const {readJsonFromFile, writeJsonToFile} = require("./fs-utils");
const mongoose = require('mongoose');

const tractorSchema = new mongoose.Schema({
    name: String
});

const Tractor = mongoose.model('Tractor', tractorSchema);

const getTractors = () => {
    return Tractor.find()
}

const addTractor = async (name) => {
    const tractor = new Tractor({name})
    return tractor.save()

    /* let users = await getUsers()
     users.push({name: name})
     return writeJsonToFile("users.json", users)*/
}

const deleteTractor = (id) => {
    return Tractor.deleteOne({_id: id})
}


exports.getTractors = getTractors;
exports.addTractor = addTractor;
exports.deleteTractor = deleteTractor;