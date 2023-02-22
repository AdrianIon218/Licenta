const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const { dirname } = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"..","..","dist")));

app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,"..","..","dist","index.html"));
});

app.listen(3000);