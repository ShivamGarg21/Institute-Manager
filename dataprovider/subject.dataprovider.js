const subject = require('../models/subject_details');

const subjectDataprovider = {
    findByType: async (subjectType) => {
        try {
            const subject = await subject.find({ type: subjectType });
            if (!subject) {
                throw new Error('subject not found');
            }
            return subject;
        } catch (error) {
            throw new Error(`Error finding subject: ${error.message}`);
        }
    },
};

module.exports = subjectDataprovider;