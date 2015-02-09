var express = require("express");
var doctorModel = require("./models/Doctor");
var doctorsData = require("./doctors-data");

var app = express();

app.set('views', __dirname); 
app.set('view engine', 'jade'); 

app.use(express.static(__dirname + '/public')); 

app.get('/api/doctors', function(req, res) { 
    doctorsData.findDoctors().then(function(collection) { 
        res.send(collection);
    });
});

app.get('*', function(req, res) {
    res.render('index');
});

// mongoose.connect('mongodb://localhost/prototype-3');
doctorsData.connectDB('mongodb://me:me@ds041651.mongolab.com:41651/prototype-3')
.then(function () {
    console.log("connected to MongoDB!");
    doctorModel.seedDoctors();
});

app.listen(process.env.PORT, process.env.IP);