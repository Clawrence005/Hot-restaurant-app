var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




// Tells node that we are creating an "express" server
var app = express();
var PORT = 3000;

// Sets an initial port. We"ll use this later in our listener
//var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(tableData);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitListData);
});


app.post("/api/tables", function(req, res) {
  // It will do this by sending out the value "true" have a table


  
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  }
  else {
    waitListData.push(req.body);
    res.json(false);
  }
});



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
