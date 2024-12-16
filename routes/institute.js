const express = require('express');

const router = express.Router();

const instituteController = require('../controllers/institute.controller');

router.get('/type', instituteController.getInstituteDetails);
router.get('/entity/:entityType', instituteController.getEntityDetails);
router.get('/standard/:standardType', instituteController.getStandardDetails);
router.post('/entries', instituteController.createEntry);

module.exports = router;