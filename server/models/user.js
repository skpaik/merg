const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    pro_pic_url: String
});

module.exports = mongoose.model('User', userSchema);