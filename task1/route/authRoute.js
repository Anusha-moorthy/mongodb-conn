import express from 'express';
import { addData, deleteStudent, getStudent, getStudentByParams } from '../controller/studentController.js';

const route = express.Router()

route.post('/addstudent', addData)
route.get('/getstudent', getStudent)
route.get('/getstudentbyparam/:studentid', getStudentByParams)
route.delete('/deletestudent/:id', deleteStudent)

export default route