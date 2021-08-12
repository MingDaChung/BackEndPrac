var express = require("express");
var cors = require("cors"); //跨網域需要使用
var app = express();

var square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
app.use(
  cors({
    origin: "http://localhost:8080",
  })
); //跨網域需要使用

app.get("/", function (req, res) {
  //   res.send(JSON.square.area({2}));
  let obj = { area: square.area(req.query.width) };
  res.send(JSON.stringify(obj));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
