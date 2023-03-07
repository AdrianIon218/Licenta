const path = require('path');
const express = require('express');
const router = express.Router();
const rootdir = require('../util/rootdir');

router.get("/",
  (req,res,next) => {
    console.log(rootdir);
    res.send("<h1>da</h1>")
  }
);

router.post("/",(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;