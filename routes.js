//Routes

var path = require("path");


module.exports = function(app) {

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
  
//POST METHODS

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

}