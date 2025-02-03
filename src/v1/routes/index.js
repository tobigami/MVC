const express = require('express');
const router = express.Router();

// get data
router.use('/test', require('./getData/getData.router'));

module.exports = router;
