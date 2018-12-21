const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    banner_image_url: String,
    details: String,
    post_type: String,
    tags: [String],
    create_at: String,
    read_length: Number,
    userId: String
});

module.exports = mongoose.model('Post', postSchema);