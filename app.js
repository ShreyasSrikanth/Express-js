const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// app.use((req,res,next) =>{
//    console.log("In the middlewear");
//    next();
// })
// app.use('/',(req,res,next) =>{
//     console.log("This always runs");
//     next();
// });
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next) =>{
    res.send('<form action="/product" method="POST"><input type="number" name="title"><br><input type="text" name="title"><button type ="submit">Add a product</button></form>')
});

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
});

app.use('/',(req,res,next) =>{
    res.send('<h1>Hello from Express JS</h1>')
})
// const server = http.createServer(app);
// server.listen(3000);

app.listen(4000) //creates a server and runs it on port 4000