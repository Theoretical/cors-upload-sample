var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var TokenCache = require('google-oauth-jwt').TokenCache,
    tokens = new TokenCache();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/token', function(req, res) {
    tokens.get({
         email: '1075579242710-compute@developer.gserviceaccount.com', 
         keyFile: 'g.pem', 
         scopes: ['https://www.googleapis.com/auth/drive.file'
        ]
    }, 
    function(err, token) { 
        res.jsonp({token: token});
    });
});
var server = app.listen(8085, function () {
    console.log("app running on port.", server.address().port);
});