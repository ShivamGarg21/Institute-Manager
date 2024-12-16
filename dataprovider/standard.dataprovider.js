const standards = require('../models/standard_details');

const boardDataprovider = {
    findByType: async (standardType) => {
        try {
            const standardDetails = await standards.find({ type: standardType});
            if (!standardDetails) {
                throw new Error('standards not found');
            }
            return standardDetails;
        } catch (error) {
            throw new Error(`Error finding standards: ${error.message}`);
        }
    },
};

module.exports = boardDataprovider;