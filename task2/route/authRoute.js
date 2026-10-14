import express from 'express';
import { addEmployee, deleteEmployee, getEmployee, getEmployeeByParams } from '../controller/employeeController.js';

const route = express.Router()

route.post('/addemployee', addEmployee)
route.get('/getemployee', getEmployee)
route.get('/getemployeebyparams/:employeeid', getEmployeeByParams)
route.delete('/deleteemployee/:id', deleteEmployee)

export default route