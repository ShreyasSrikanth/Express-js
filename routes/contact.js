const express = require('express');
const path = require('path');
const router = express.Router();  //similar to const app = express();
const routeDir = require('../util/path')

router.get('/contactus',(req,res,next) =>{
    res.sendFile(path.join(routeDir, 'views' , 'contact.html'));
    res.redirect('/success')
});

router.get('/success',(req,res,next)=>{
    res.send("<h1>Form succesfullly Filled</h1>")
})
module.exports = router //used for exporting