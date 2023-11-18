const express = require('express');
const path = require('path');
const router = express.Router();  //similar to const app = express();
const routeDir = require('../util/path')
const productController = require("../controllers/products");

router.get('/add-product',productController.getAddProducts);

router.post('/product',productController.postAddProducts);


module.exports = router //used for exporting