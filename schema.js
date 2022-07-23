const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: false,
        default: ''
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
        default: null
    },
    gender: {
        type: String,
        required: false,
        default: ''
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

// const Comment = new Schema({
//     body: {
//         type: String,
//         required: true,
//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
// });

// const messageSchema = new Schema({
//     body: {
//         type: String,
//         required: true,
//     },
//     created_at: {
//         type: Date,
//         default: Date.now,
//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     comments: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Comment',
//     }],
// });

// module.exports = Comment;
module.exports = userSchema;
// module.exports = messageSchema;