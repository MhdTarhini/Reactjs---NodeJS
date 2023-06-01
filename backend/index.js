const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler')

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routesHandler)

const port = 4000 ;
app.listen(port,()=>{
    console.log("server is running")
})
