const express = require('express');
const path = require('path');
const router = express.Router();
const routeDir = require('../util/path');

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'contact.html'));
});

router.post('/success', (req, res, next) => {
    res.send("<h1>Form successfully Filled</h1>");
});

module.exports = router;
