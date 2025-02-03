'use strict';

const express = require('express');
const testController = require('../../controllers/test.controller');
const asyncHandler = require('../../core/async.handler');
const router = express.Router();

router.get('/get-data', asyncHandler(testController.getData));

module.exports = router;
