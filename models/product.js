const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    thumbnail: {type: String}
});

module.exports = mongoose.model("Product", ProductSchema);


