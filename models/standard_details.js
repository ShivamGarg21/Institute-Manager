const mongoose = require('mongoose');

const standardDetailsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    classes: {
        type: [String],
        required: true,
    },
    subjects: {
        type: [String],
        required: true,
    }
});

const standardDetails = mongoose.model("standard_details", standardDetailsSchema);

module.exports = standardDetails;