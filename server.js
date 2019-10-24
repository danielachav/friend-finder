// Dependencies
var express = require('express');
var path = require('path');
 
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


// Data

var data = {
    surveyQuestions:[]
}

var surveyQuestions = [
    {
      questionOne: "What is your favorite color?",
      answer: true,
      score: 4
    }, {
      questionTwo: "How many siblings do you have?",
      answer: true,
      score: 10
    }, 
  ];
  

for (var i = 0; i < surveyQuestions.length; i++) {
    var data = surveyQuestions[index];
    
}


//Routes

app.get("/surveyQuestions", function(req, res) {
    res.render("index", surveyQuestions.filter(item =>
        item.surveyQuestions === true));
  });
  







  