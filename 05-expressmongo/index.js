const express = require('express');

let app = express();

// add routes here

app.get('/', function(req,res){
    res.send("<h1>Hello from Express</h1>");
})

app.get('/hello/:name', (req,res)=>{
    let name = req.params.name;
    res.send("Hi, " + name);
  })

app.listen(3000, ()=>{
    console.log("Server started")
})

const express = require('express'); 
const hbs = require('hbs'); // <-- NOTE 1
