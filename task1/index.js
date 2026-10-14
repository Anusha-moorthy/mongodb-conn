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

    console.log(`Successfully Running http://localhost:${PORT}`);
    
})

//http://localhost:5000/api/addstudent
//http://localhost:5000/api/getstudent
//http://localhost:5000/api/getstudentbyparam/6acc860d1c2049e42e300046
//http://localhost:5000/api/deletestudent/6acc8474d22e43a4df795962