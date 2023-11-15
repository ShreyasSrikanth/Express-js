const http = require('http');
const express = require('express');

const app = express();

app.use((req,res,next) =>{
   console.log("In the middlewear");
   next();
})

app.use((req,res,next) =>{
    console.log("In the next middlewear");
    res.send('<h1>Express JS</h1>')
})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(4000) //creates a server and runs it on port 4000