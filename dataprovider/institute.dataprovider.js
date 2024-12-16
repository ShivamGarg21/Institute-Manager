const institutes = require('../models/institute_details');

const instituteDataprovider = {
    findAll: async () => {
        try {
            const instituteDetails = await institutes.find({});
            if (!instituteDetails) {
                throw new Error('institutes not found');
            }
            return instituteDetails;
        } catch (error) {
            throw new Error(`Error finding institutes: ${error.message}`);
        }
    },
};

module.exports = instituteDataprovider;