const mongoose = require('mongoose');

const subjectDetailsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});

const subjectDetails = mongoose.model("subject_details", subjectDetailsSchema);

module.exports = subjectDetails;