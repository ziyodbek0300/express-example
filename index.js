
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose')
const userSchema = require('./schema')
const User = mongoose.model('user', userSchema, 'user')

// async function createUser(name, age, gender, date) {
//     try {
//         await mongoose.connect(process.env.connectionString);
//         return new User({
//             name,
//             age,
//             gender,
//             date,
//             created: Date.now()
//         }).save()
//     } catch (e) {

//     }
// }

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
})

// app.get('/about', async (req, res) => {
//     console.log("asdfsd");
//     try {
//         await User.find({}).then(u => {
//             console.log(u);
//         })
//     } catch (e) {
//         console.log(e);
//     }
//     res.send({ message: "Hello" });
// })

app.listen(5000, () => console.log("Server is running..."))