const mongoose = require('mongoose');

const boardDetailsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    entity_name: {
        type: String,
        required: true,
    },
    standard_type: {
        type: String,
        required: true
    }
});

const boardDetails = mongoose.model("entity_details", boardDetailsSchema);

module.exports = boardDetails;