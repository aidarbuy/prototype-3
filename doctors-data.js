var mongoose = require("mongoose");
var Bluebird = require("bluebird");
var Doctor = mongoose.model('Doctor');

var findDoctors = function(query) {
    return Bluebird.cast(Doctor.find(query).exec());
};

exports.findDoctors = findDoctors;
exports.connectDB = Bluebird.promisify(mongoose.connect, mongoose);

var createDoctor = Bluebird.promisify(Doctor.create, Doctor);

// Export seed doctors function: 
exports.seedDoctors = function() {
    return findDoctors({}).then(function(collection) {
        if (collection.length === 0) {
            return Bluebird.map(doctors, function(doctor) {
                return createDoctor(doctor);
            });
        }
    });
};

var doctors = [{name: 'Doctor 1', description: 'Description 1'},
               {name: 'Doctor 2', description: 'Description 2'},
               {name: 'Doctor 3', description: 'Description 3'},
               {name: 'Doctor 4', description: 'Description 4'}];