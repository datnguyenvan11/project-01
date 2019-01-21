const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {type: String},
    description: {type: String},
    thumbnail: {type: String}
});

module.exports = mongoose.model("Category", CategorySchema);


