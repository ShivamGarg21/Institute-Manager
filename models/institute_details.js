const mongoose = require('mongoose');

const boardDetailsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    entity_type: {
        type: String,
        required: true
    }
});

const boardDetails = mongoose.model("institute_details", boardDetailsSchema);

module.exports = boardDetails;