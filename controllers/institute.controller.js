const instituteService = require('../services/institute.service');

const boardController = {
    getInstituteDetails: async (req, res) => {
        try {
            const institutes = await instituteService.findAllInstitutes();
            return res.status(200).json(institutes);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: error.message });
        }
    },
    getEntityDetails: async (req, res) => {
        try {
            const { entityType } = req.params;
            const entities = await instituteService.findEntityByType(entityType);
            return res.status(200).json(entities);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: error.message });
        }
    },
    getStandardDetails: async (req, res) => {
        try {
            const { standardType } = req.params;
            const standards = await instituteService.findStandardByType(standardType);
            return res.status(200).json(standards);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: error.message });
        }
    },
    getSubjectDetails: async (req, res) => {
        try {
            const { subjectType } = req.params;
            const subjects = await instituteService.findSubjectByType(subjectType);
            return res.status(200).json(subjects);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: error.message });
        }
    },
    createEntry: async (req, res) => {
        try {
            const entryData = req.body;
            const subjects = await instituteService.createEntry(entryData);
            return res.status(201).json(subjects);
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: error.message });
        }
    },
};

module.exports = boardController;