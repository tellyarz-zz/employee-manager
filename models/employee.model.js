// employee model containing employee schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define properties and their attributes
let employeeSchema = new Schema({
    id: {type: Number, required:true},
    firstname: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max: 100},
    sex: {type: String, required: true, max: 6}
});

// export model for external use
module.exports = mongoose.model('Employee', employeeSchema);