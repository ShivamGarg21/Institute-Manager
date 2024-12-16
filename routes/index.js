// routes/index.js
const express = require('express');
const router = express.Router();
const instituteRoutes = require('./institute');  // Import user.js

// Use the board routes
router.use('/institute', instituteRoutes);  

// Export the router
module.exports = router;