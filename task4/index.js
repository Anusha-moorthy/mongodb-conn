import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './route/authRoute.js'


dotenv.config();

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api', authRoute)

const PORT = process.env.PORT

app.listen(PORT, ()=>{

    console.log(`Successfully Connected http://localhost:${PORT}`);
    
})

//http://localhost:5000/api/addcourse
//http://localhost:5000/api/getcourse
//http://localhost:5000/api/getcoursebyid/6acf237a9d561ff96346b727
//http://localhost:5000/api/deletecourse/6acf237a9d561ff96346b727