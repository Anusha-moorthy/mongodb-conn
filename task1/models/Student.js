import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    name: String,
    email: String,
    age: Number,
    course: String
},{ timestamps: true })

export default mongoose.model('Student', studentSchema)