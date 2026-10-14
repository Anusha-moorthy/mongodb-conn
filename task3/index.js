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

//http://localhost:5000/api/addproduct
//http://localhost:5000/api/getproduct
//http://localhost:5000/api/getproductbyparams/6ace6e32527afab4e224a7d9
//http://localhost:5000/api/deleteproduct/6ace6d05527afab4e224a7d7