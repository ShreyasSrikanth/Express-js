const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use((req,res,next) =>{
//    console.log("In the middlewear");
//    next();
// })
// app.use('/',(req,res,next) =>{
//     console.log("This always runs");
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}));

app.use("/admin",adminRoutes);
app.use("/shop",shopRoutes);

app.use((req,res,next) =>{
    res.status(404).send("<h1>Page not found</h1>");
});


app.listen(4000) //creates a server and runs it on port 4000