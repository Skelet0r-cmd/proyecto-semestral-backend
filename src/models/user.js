const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    session:[{
        date: {
            type: String
        },
        score: {
            type: Number
        },
       duration: {
            type: Number
        }
    }]
});

module.exports = mongoose.model('User', userSchema);