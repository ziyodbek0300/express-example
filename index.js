
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose')
const userSchema = require('./schema')
const User = mongoose.model('user', userSchema, 'user')
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

mongoose
    .connect(process.env.connectionString)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })


app.get('/users', async (req, res) => {
    const all = await User.find();
    res.send(all)
});

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }).then((user) => {
        if (user) {
            return res.status(400).json({ username: "Username is already registered!" })
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
            });
            newUser.save();
            return res.status(200).json({ data: newUser });
        }
    });
});

app.post("/login", (req, res) => {
    User.findOne({ username: req.body.username }).then((user) => {
        if (!user) {
            return res.status(400).json({ username: "Username is not registered!" })
        } else {
            if (user.password === req.body.password) {
                return res.status(200).json({ data: user });
            } else {
                return res.status(400).json({ password: "Password is incorrect!" })
            }
        }
    });
});


app.listen(5000, () => console.log("Server is running..."))