
var express = require('express');
var bodyParser = require('body-parser'); 
var path = require('path');

 var app = express(); 
 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false})); 
 
 //set static path
 
app.use(express.static(path.join(__dirname,'public')));
 
app.get('/',function(req,res){
res.send("Hello"); }); 

app.listen(3000,function(){
console.log('Server Started on Port 3000...');}) 

//google api stuff???
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCf_j_NFwk9FGih5fFD8Js3U1ihGCdtUvc'
});

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});
