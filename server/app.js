const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const login = require('./routes/login'); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"..","..","dist")));

app.use('/login', login);

app.listen(5000, ()=>{console.log("Server running on port 5000")});