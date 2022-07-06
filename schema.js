const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    date: Date,
})

module.exports = userSchema;