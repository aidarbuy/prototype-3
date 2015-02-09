var mongoose = require("mongoose"); 

// Derive doctor schema from mongoose Schema: 
var doctorSchema = mongoose.Schema({ 
    name: String, 
    description: String 
});

// Define doctor model using doctor schema: 
mongoose.model('Doctor', doctorSchema);
