// Create web server 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Use body parser to parse JSON data
app.use(bodyParser.json());

// Listen on port 3000
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

// Get all comments
app.get('/comments', function(req, res){
    var comments = fs.readFileSync('comments.json');
    res.setHeader('Content-Type', 'application/json');
    res.send(comments);
});

// Create a new comment
app.post('/comments', function(req, res){
    var comments = JSON.parse(fs.readFileSync('comments.json'));
    var newComment = {
        id: req.body.id
    };
});