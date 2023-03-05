const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>")
});

app.get("/contact", function(req, res){
    res.send("Contact me at : gabhaneanant90@gmail.com")
});

app.get("/about", function(req, res){
    res.send("Anant Gabhane : Final year EXTC")
});

app.get("/hobbies", function(req, res){
    res.send("<h1>Anant Gabhane : Final year EXTC</h1>")
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

