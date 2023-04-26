const express = require('express');
const path = require('path')

const web = express.Router();

//Home
web.get("/home", (req, resp) => {
    console.log('hello');
    return resp.sendFile(path.join(__dirname,"..", "public", "index.html"));
  });

// web.post('order',(req,respon)=>{

// })

module.exports = web

