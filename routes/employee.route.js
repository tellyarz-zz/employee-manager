// employee router
const express = require('express');
const router = express.Router();

// get employee controller
const employeeController = require('../controllers/employee.controller');
router.get('/list', employeeController.list);
// create a new employee
router.post('/create', employeeController.create);
// get an employee details
router.get('/:id', employeeController.employeeDetails);
// update an employee
router.put('/:id/update', employeeController.updateEmployee);
// delete an employee
router.delete('/:id/delete', employeeController.deleteEmployee);

module.exports = router;