
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        username: {type: String, unique: true},
        password: { type: String},
        createDate:{ type: Date, default:new Date()}
    }
);


module.exports = mongoose.model('users', userSchema);