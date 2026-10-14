import express from 'express';
import { addCourse, deleteCourse, getCourse, getCourseByParams } from '../controller/courseController.js';

const route = express.Router()

route.post('/addcourse', addCourse)
route.get('/getcourse', getCourse)
route.get('/getcoursebyid/:courseid', getCourseByParams)
route.delete('/deletecourse/:id', deleteCourse)

export default route