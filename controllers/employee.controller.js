// get the employee model
const Employee = require('../models/employee.model');

exports.list = function(req, res){ 
    let collections = Employee.find(function(err, employees){
        if(err) {
            res.status(500).send({status:'failed', error:err});
        }
        res.send(employees);
    });
}

/**
 * create a new employee
 */
exports.create = function(req, res){
    let employee = new Employee(
        {
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            sex: req.body.sex
        }
    );

    employee.save(function(err){
        if(err){
            res.status(500).send({status:'failed', error:err});
            // return next(err);
        }
        res.status(200).send({status:'ok', msg:'employee created successfully'});
    });
}

// get an employee details
exports.employeeDetails = function(req, res){
    Employee.findById(req.params.id, function(err, employee){
        if(err) {
            res.status(500).send({status:'failed', error:err});
        }
        res.send(employee);
    });
}

exports.updateEmployee = function(req, res){
    Employee.findOneAndUpdate({"_id":req.params.id}, {$set: req.body}, function(err, employee){
        if(err) {
            res.status(500).send({status:'failed', error:err});
        }
        res.send({status:'ok'});
    });
};

exports.deleteEmployee = function(req, res){
    Employee.findOneAndDelete({"_id":req.params.id}, function(err){
        if(err) {
            res.status(500).send({status:'failed', error:err});
        }
        res.send({status:'ok'});
    });
};



// module.exports = test;