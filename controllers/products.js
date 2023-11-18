const path = require("path");
const routeDir = require('../util/path');

exports.getAddProducts = (req,res,next) =>{
    res.sendFile(path.join(routeDir, 'views' , 'add-product.html'));
};

exports.postAddProducts = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
};

exports.sendHtmlFile = (req,res,next) =>{
    res.sendFile(path.join(__dirname,"..","views","shop.html")) // ../ or .. moves folder one up then inside views we find shop.html
};