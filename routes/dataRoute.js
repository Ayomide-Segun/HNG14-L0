const express = require('express');
const router = express.Router();
const { classifyData } = require('../HNG14-L0/controllers/dataController')

router.get('/classify', classifyData);

module.exports = router;