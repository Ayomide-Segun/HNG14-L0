const express = require('express');
const router = express.Router();
const { classifyData } = require('../controllers/dataController')

router.get('/classify', classifyData);

module.exports = router;