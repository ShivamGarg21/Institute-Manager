const entityDp = require('../dataprovider/entity.dataprovider');
const entriesDp = require('../dataprovider/entries.dataprovider');
const instituteDp = require('../dataprovider/institute.dataprovider');
const standardDp = require('../dataprovider/standard.dataprovider');
const subjectDp = require('../dataprovider/subject.dataprovider');

const instituteService = {
    createEntry: async(data) => entriesDp.create(data),
    createOrUpdateEntry: async(data) => entriesDp.createOrUpdateUserEntry(data),
    findAllInstitutes: async () => instituteDp.findAll(),
    findEntityByType: async (type) => entityDp.findByType(type),
    findStandardByType: async (type) => standardDp.findByType(type),
    findSubjectByType: async (type) => subjectDp.findByType(type),
}

module.exports = instituteService;