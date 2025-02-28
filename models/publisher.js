const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
   publisherName: {type: String, required: true, unique: true },
   address: {type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('publisher', publisherSchema);

