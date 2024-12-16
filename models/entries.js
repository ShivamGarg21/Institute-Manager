const mongoose = require('mongoose');

const boardDetailsSchema = new mongoose.Schema({
    institute: {
        type: String,
        required: true,
    },
    entity: {
        type: String,
        required: true,
    },
    standard: {
        type: String,
        required: true
    },
    subjects: {
        type: [String],
        required: true
    },
});

const boardDetails = mongoose.model("entries", boardDetailsSchema);

module.exports = boardDetails;