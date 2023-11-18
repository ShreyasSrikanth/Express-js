const express = require('express');
const path = require('path');
const router = express.Router();
const routeDir = require('../util/path');
const contactController = require("../controllers/about");

router.get('/contactus', contactController.getContactUs);

router.post('/success', contactController.postSuccess);

module.exports = router;
