import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected');
        
    } catch (error) {
        console.log('Something wrong',error);
        process.exit(1)
        
    }
}

export default connectDB