const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/public',express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.render('page/index');
})

app.get('/s0522001',function(req,res){
    res.render('page/s0522001');
})

app.get('/ashu',function(req,res){
    res.render('page/ashu');
})

app.get('/eliane',function(req,res){
    res.render('page/eliane');
})

app.get('/chungfushih',function(req,res){
    res.render('page/chungfushih');
})

app.listen(3000,function(){
    console.log("I'm listening the 3000 port");
})