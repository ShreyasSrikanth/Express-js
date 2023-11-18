const express = require('express');
const router = express.Router();
const path = require("path"); //always use his for path

router.get('/',(req,res,next) =>{
    res.sendFile(path.join(__dirname,"..","views","shop.html")) // ../ or .. moves folder one up then inside views we find shop.html
});

module.exports = router