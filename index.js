var express = require('express'),   //this will intergarte express into nodejs
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000,
	app = express();
var cors = require('cors')
const mongoose = require('mongoose');
var {insert, search} = require('./routes/insertData');

mongoose.connect('mongodb://localhost/nodeapp', function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});
app.use(cors())
app.use(bodyParser.urlencoded({ //middleware to encode url params
	extended: true
}));

app.use(bodyParser.json()); //middleware to encode json for post, put request

app.get("/", function(req, res) {
    res.json({message: req.query.name})
});

app.get("/:firstname/:lastname", function(req, res) {
    res.json({name: req.params.firstname + " " + req.params.lastname})
});

app.post("/:firstname/:lastname", function(req, res) {
    res.json({name: req.params.firstname + " " + req.params.lastname})
});

app.post("/search", search);

app.post("/test", insert);

app.listen(port);
console.log("Server loaded. The magic happens on port", port);