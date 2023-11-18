const express = require('express');
const router = express.Router();
const path = require("path"); //always use his for path
const productController = require("../controllers/products");

router.get('/',productController.sendHtmlFile);

module.exports = router