const entries = require('../models/entries');

const entriesDataprovider = {
    create: async (data) => {
        try {
            const entry = await entries.create(
                data,
            );
            return entry;
        } catch (err) {
            throw new Error(`Error finding entities: ${err.message}`);
        }
    },
    createOrUpdateUserEntry: async (data) => {
        try {
            const entry = await entries.findByIdAndUpdate(
                data._id,
                data,
                { new: true, upsert: true }
            );
            return entry;
        } catch (err) {
            throw new Error(`Error finding entities: ${err.message}`);
        }
    },
};

module.exports = entriesDataprovider;