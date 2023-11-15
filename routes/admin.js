const express = require('express');
const router = express.Router();  //similar to const app = express();


router.get('/add-product',(req,res,next) =>{
    res.send('<form action="/admin/product" method="POST"><input type="number" name="title"><br><input type="text" name="title"><button type ="submit">Add a product</button></form>')
});

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop/')
});


module.exports = router //used for exporting