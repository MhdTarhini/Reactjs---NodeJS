const express = require('express');
const router = express.Router();

router.get('/tweets',(req,res)=>{
    const str=[{
        "name":"moe",
        "msg":"hello world"
    }];
    res.end(JSON.stringify(str))
})

router.post('/addTweets',(req,res)=>{
    res.end('NA')
})

module.exports= router