var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Slamon Creek", image:"https://farm1.staticflickr.com/3/3646688_973fa5fd89.jpg"},
  {name: "Granite Hite", image:"https://farm4.staticflickr.com/3377/3516326856_2e0819f6e5.jpg"},
  {name: "Cookie Mountain", image:"https://farm3.staticflickr.com/2789/4444810930_f025fc3a83.jpg"},
  {name: "Slamon Creek", image:"https://farm1.staticflickr.com/3/3646688_973fa5fd89.jpg"},
  {name: "Granite Hite", image:"https://farm4.staticflickr.com/3377/3516326856_2e0819f6e5.jpg"},
  {name: "Cookie Mountain", image:"https://farm3.staticflickr.com/2789/4444810930_f025fc3a83.jpg"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //redirect to campgrounds page
  res.redirect("/campgrounds");

});
app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

app.listen(3000, function(){
  console.log("The server is now online!");
});
