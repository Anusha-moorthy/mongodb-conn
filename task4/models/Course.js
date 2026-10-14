import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName:String,
    trainerName:String,
    duration:String,
    fees:Number
},{timestamps:true})

export default mongoose.model('Course', courseSchema)