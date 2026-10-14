import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
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

//http://localhost:5000/api/addemployee
//http://localhost:5000/api/getemployee
//http://localhost:5000/api/getemployeebyparams/6acdd88247a6c307e0ae97f5
//http://localhost:5000/api/deleteemployee/6acdd88247a6c307e0ae97f5