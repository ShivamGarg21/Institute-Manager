const entityDetails = require('../models/entity_details');

const entityDataprovider = {
    findByType: async (entityType) => {
        try {
            const entities = await entityDetails.find({ type: entityType });
            if (!entities) {
                throw new Error('entities not found');
            }
            return entities;
        } catch (error) {
            throw new Error(`Error finding entities: ${error.message}`);
        }
    },
};

module.exports = entityDataprovider;