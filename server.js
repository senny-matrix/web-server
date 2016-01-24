var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//app.get('/', function(req, res){
//    res.send('Hello Express');
//});

var middleware = require('./middleware.js');

// Global middleware application
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);
// Route Level middleware application
// About Page route
app.get('/about', middleware.requireAuthentication,function(req, res){
   res.send('About Us!'); 
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(PORT, function(){
    console.log('Express Server Started! on port ' + PORT + '!');
});